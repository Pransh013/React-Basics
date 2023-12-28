import { RestaurantCardDetails } from "../config";
import RestaurantCard from "./Cards";
import { useState } from "react";

function filterData(searchText, restaurants) {
  return restaurants.filter((data) => 
    data.info.name.includes(searchText)
  );
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(RestaurantCardDetails);
  // searchText is a local state variable
  const [searchText, setSearchText] = useState(""); //useState fn used to create state variables and it returns an array

  // {Destructuring}
  // const searchVar = useState("");
  // const [searchText, setSearchText] = searchVar;   //  [variable name, function to update the variable]
  return (
    <>
      <div className="main">
        <div className="input">
          <input //There is one way data binding in react
            type="text" //Every component in React maintains a state
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <i
            className="fa-solid fa-magnifying-glass"
            onClick={() => {
              const data = filterData(searchText, restaurants);
              setRestaurants(data);
            }}
          ></i>
        </div>
        <div className="card-container">
          {restaurants.map((data) => (
            <RestaurantCard {...data.info} key={data.info.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
