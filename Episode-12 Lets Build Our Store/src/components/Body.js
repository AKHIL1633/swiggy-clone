
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import {useOnlineStatus} from "../utils/useOnlineStatus";
import userContext from "../../utils/UserContext";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("")
  const RestaturantCardPromoted=withPromotedLabel(RestaurantCard)
  useEffect(() => {
    fetchData();

  }, []);
  const fetchData = async () => {
    const data = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


    const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurants(restaurants || []);
    setfilteredRestaurant(restaurants || []);
  };

 const onlineStatus=useOnlineStatus();
 if(oneLineStatus ===false)
return(
 <h1>
  Looks like you are offline !! Please check your internet connection
  </h1>
);

const {loggedInUser,setUserName}=useContext(UserContext);

  
  return listOfRestaurants.length === 0 ? (<Shimmer />) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
              if (e.target.value === "") {
             setfilteredRestaurant(listOfRestaurants);
            }

            }} />
          
          <button className="px-4 py-2  bg-green-100 m-4 rounded-lg"
            onClick={() => {
              console.log(searchText);
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center ">
        <button className="px-4 py-2 bg-gray-100 rounded-lg"
         onClick={() => {
        const filteredList = listOfRestaurants.filter(
        (res) => res.info.avgRating >= 4
        );
    setfilteredRestaurant(filteredList);
  }}
>
  Top Rated Restaurant
</button>
</div>
 <div className="search m-4 p-4 flex items-center ">
   <label>UserName</label>
  <input className="border border-black p-2"
  value={loggedInUser}
  onChange={(e)=>setUserName(e.target.value)}>

  // if i write sachine tendulkarthe context should be changed

  // it is changing in whole page

  // about us is lazy loading
  
  </input>     
</div>

      </div>
      <div>
        <div className="flex flex wrap">
          {
            filteredRestaurant.map((restaurant) => (
              <Link key={restaurant.info.id} 
              to={"/restaurants"+ restaurant.info.id}
              >
              {/** if the restaurant is promoted then add a promoted label to it  */}
               restaurant.data.promoted ? <RestaturantCardPromoted resdata={restaurant}/> :
              <RestaurantCard resData={restaurant}/>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default Body;


