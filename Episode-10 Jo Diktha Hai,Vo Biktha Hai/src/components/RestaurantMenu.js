import { useEffect } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import  { MENU_API } from "../utils/constant";
import {useRestaurantMenu} from  " ..utils/RestaurantMenu";
const RestaurantMenu = () => {

const{resId}=useParams();

const resInfo=useRestaurantMenu(resId);


if(resInfo === null)return <Shimmer/>
// it is better to use graph ql
// swiggy backend giving us tomes of data ,load only which is required in your app
const {name,cuisines,costForTwoMessages} =resInfo?.cards[0]?.card?.card?.info;
const{itemsCards}=resInfo?.card[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
        //Name of the Restaurant
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")}-{costForTwoMessages}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
         <li key={item.card.info.id}>{item.card.info.name} - {"Rs."}
         {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

// the only difference  is the restaturant id only