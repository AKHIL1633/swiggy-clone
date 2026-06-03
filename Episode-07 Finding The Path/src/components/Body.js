
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("")
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
              <Link key={restaurant.info.id} to={"/restaurants"+ restaurant.info.id}><RestaurantCard
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


