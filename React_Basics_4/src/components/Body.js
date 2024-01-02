import { RestaurantCardDetails } from "../config";
import RestaurantCard from "./Cards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
  return restaurants.filter((data) =>
    data?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // searchText is a local state variable
  const [searchText, setSearchText] = useState(""); //useState fn used to create state variables and it returns an array

  // {Destructuring}
  // const searchVar = useState("");
  // const [searchText, setSearchText] = searchVar;   //  [variable name, function to update the variable]


  // empty dependency array => just once after initial render
  // dependency array[searchText] => once after initial render + everytime after searchText changes

  useEffect(() => {
    getRestaurantData();
  }, [])

  async function getRestaurantData() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5060007&lng=73.7988504&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setAllRestaurants((json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants))
    setFilteredRestaurants((json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants))
  }

  // Render first then useEffect
  // console.log("render");
  return allRestaurants?.length === 0 ? <Shimmer /> : (
    <>
      <div className="main">
        <div className="input">
          <input //There is one way data binding in react
            type="text" //Every component in React maintains a state
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
