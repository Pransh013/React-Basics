import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import Shimmer from './Shimmer';
import { IMG_CDN_URL } from '../config';

const RestaurantDetails = () => {

  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, [])

  async function getRestaurantInfo() {
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5060007&lng=73.7988504&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);

    const json = await data.json();
    setRestaurant(json?.data);
  }
  
  return (!restaurant) ? <Shimmer/> : (
    <>
      <div>
        <h1>Restaurant Id : {resId}</h1>
        <h1>{restaurant?.cards[0]?.card?.card?.info?.name}</h1>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.city}</h3>
        <img src={IMG_CDN_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId} alt="Food" />
      </div>
      <div>
        <h2>Menu</h2>
        <ul>
        {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map((data) => <li key={data?.card?.info?.id}>{data?.card?.info?.name}</li>)}
        </ul>
      </div>
    </>
  )
}

export default RestaurantDetails;