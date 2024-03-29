import RestaurantCard from "./Cards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";
import { RES_DATA_URL } from "../config";


const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurantData();
  }, [])

  async function getRestaurantData() {
    const data = await fetch(RES_DATA_URL);
    const json = await data.json();
    setAllRestaurants((json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants))
    setFilteredRestaurants((json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants))
  }

  const isOnline = useOnline();
  if (!isOnline) return <h1>Looks like you are offline</h1>

  return allRestaurants?.length === 0 ? <Shimmer /> : (
    <>
      <div className="main">
        <div className="input">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              const data = filterData(searchText, allRestaurants);
              setFilteredRestaurants(data);
            }}
          />
          <i
            className="fa-solid fa-magnifying-glass"
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setFilteredRestaurants(data);
            }}
          ></i>
        </div>
        <div className="card-container">
          {filteredRestaurants.length === 0 ? <h1>No items matching your search</h1> : filteredRestaurants.map((data) => (
            <Link to={"/restaurant/" + data.info.id} className="linktores" key={data.info.id}><RestaurantCard {...data.info} /></Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
