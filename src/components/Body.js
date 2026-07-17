
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import  useOnlineStatus from "../utils/useOnlineStatus"
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("")
  useEffect(() => {
    fetchData();

  }, []);
  const fetchData = async () => {
    const data = await fetch("http://localhost:5000/api/restaurants?lat=21.2611169&lng=81.5993951");
    const json = await data.json();

    const cards = json?.data?.cards || [];
    const seenIds = new Set();
    const restaurants = [];
    cards.forEach((c) => {
      const sectionRestaurants = c?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      sectionRestaurants.forEach((r) => {
        if (!seenIds.has(r.info.id)) {
          seenIds.add(r.info.id);
          restaurants.push(r);
        }
      });
    });

    setListOfRestaurants(restaurants);
    setfilteredRestaurant(restaurants);
  };
  const onlineStatus=useOnlineStatus();
  if(onlineStatus ===false)return <h1>Looks like you are offline !! Please check your internet connection</h1>
  return listOfRestaurants.length === 0 ? (<Shimmer />) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
              if (e.target.value === "") {
             setfilteredRestaurant(listOfRestaurants);
            }

            }} />
          <button
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
       <button
  className="filter-btn"
  onClick={() => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating >= 4.3
    );
    setfilteredRestaurant(filteredList);
  }}
>
  Top Rated Restaurant
</button>
      </div>
      <div>
        <div className="res-container">
          {
            filteredRestaurant.map((restaurant) => (
              <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}><RestaurantCard
                key={restaurant.info.id}
                resData={restaurant}
              /></Link>
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default Body;


