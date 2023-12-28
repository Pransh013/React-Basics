import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRatingString,
}) => {
  return (
    <>
      <div className="restaurant-cards">
        <img
          className="card-image"
          src={
            IMG_CDN_URL + cloudinaryImageId
          }
          alt="restaurant-image"
        />
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRatingString} stars</p>
      </div>
    </>
  );
};

export default RestaurantCard;