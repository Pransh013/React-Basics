const Cards = () => {
  return (
    <>
      <div className="restaurant-cards empty">
        <div className="card-image shimmer-image"></div>
        <div className="shimmer-heading"></div>
        <div className="shimmer-heading"></div>
      </div>
    </>
  );
};

const Shimmer = () => {
  return (
    <>
      <div className="card-container shimmer">
        {Array(10).fill("").map((e, index) => (<Cards key={index}/>))}
        
      </div>
    </>
  );
};

export default Shimmer;
