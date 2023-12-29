import React from "react";
import ReactDOM from "react-dom/client";
// import { Header } from "./components/Header";            Named import             {not same as destructuring}           
import Header from "./components/Header";                // Default Import
// import * as XYZ from "./components/Header";          // When everything is name imported, use XYZ.Header
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from './components/About'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'



// Optional Chaining => ?    restaurantCardDetails[0].info?.name

// const RestaurantCard = (props) => {
//   console.log(props);
//   return (
//     <>
//       <div className="restaurant-cards">
//         <img
//           className="card-image"
//           src={
//             "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
//             props.restaurant.info.cloudinaryImageId
//           }
//           alt="restaurant-image"
//         />
//         <h3>{props.restaurant.info?.name}</h3>
//         <p>{props.restaurant.info?.cuisines.join(", ")}</p>
//         <p>{props.restaurant.info?.avgRatingString} stars</p>
//       </div>
//     </>
//   );
// };

// const Body = () => (
//   <>
//     <div className="main">
//       <RestaurantCard restaurant={restaurantCardDetails[0]} />
//       <RestaurantCard restaurant={restaurantCardDetails[1]} />
//       <RestaurantCard restaurant={restaurantCardDetails[2]} />
//       <RestaurantCard restaurant={restaurantCardDetails[3]} />
//     </div>
//   </>
// );

// Destructuring Destructuring Destructuring Destructuring Destructuring Destructuring Destructuring Destructuring

// const RestaurantCard = ({ restaurant }) => {
//   const { cloudinaryImageId, name, cuisines, avgRatingString } =
//     restaurant.info;

//   return (
//     <>
//       <div className="restaurant-cards">
//         <img
//           className="card-image"
//           src={
//             "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
//             cloudinaryImageId
//           }
//           alt="restaurant-image"
//         />
//         <h3>{name}</h3>
//         <p>{cuisines.join(", ")}</p>
//         <p>{avgRatingString} stars</p>
//       </div>
//     </>
//   );
// };

// const Body = () => (
//   <>
//     <div className="main">
//       <RestaurantCard restaurant={restaurantCardDetails[0]} />
//       <RestaurantCard restaurant={restaurantCardDetails[1]} />
//       <RestaurantCard restaurant={restaurantCardDetails[2]} />
//       <RestaurantCard restaurant={restaurantCardDetails[3]} />
//       <RestaurantCard restaurant={restaurantCardDetails[4]} />
//     </div>
//   </>
// );

// Better way to destructure

// const RestaurantCard = ({
//   cloudinaryImageId,
//   name,
//   cuisines,
//   avgRatingString,
// }) => {
//   return (
//     <>
//       <div className="restaurant-cards">
//         <img
//           className="card-image"
//           src={
//             IMG_CDN_URL + cloudinaryImageId
//           }
//           alt="restaurant-image"
//         />
//         <h3>{name}</h3>
//         <p>{cuisines.join(", ")}</p>
//         <p>{avgRatingString} stars</p>
//       </div>
//     </>
//   );
// };

// const Body = () => (
//   <>
//     <div className="main">
//       <RestaurantCard {...restaurantCardDetails[0].info} />
//       <RestaurantCard {...restaurantCardDetails[1].info} />
//       <RestaurantCard {...restaurantCardDetails[2].info} />
//       <RestaurantCard {...restaurantCardDetails[3].info} />
//       <RestaurantCard {...restaurantCardDetails[4].info} />
//     </div>
//   </>
// );


// Using Map

// const Body = () => (
//   <>
//     <div className="main">
//       {restaurantCardDetails.map((restaurant) => (
//         <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
//       ))}
//     </div>
//   </>
// );

const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
  },
  {
    path: '/about',
    element: <About />
  }
])

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);