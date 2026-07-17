import RestaurantCard from "./RestaurantCard";    
import resObj from "../utils/mockData";

const Body =() =>{
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button className="filter-btn"
         onClick={() =>{console.log("Button clicked")}}
        //  onMouseover={() =>{console.log("Button clicked")}}
        >
          Top Rated Restaurants
           </button>
      </div>
      <div className="res-container">
       {
       resObj.map((restaurant) => (
      <RestaurantCard 
        key={restaurant.info.id}
        resData={restaurant} 
      />
    ))
     }
    </div>
      </div>
  )
};

export default Body;


