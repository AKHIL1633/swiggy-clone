import { useEffect } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import  { MENU_API } from "../utils/constant";
import {useRestaurantMenu} from  " ..utils/RestaurantMenu";
import RestaturantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {

const{resId}=useParams();

const resInfo=useRestaurantMenu(resId);
// if i change the showIndex it will show that menu 
//on clicking we have to integrate it 
//only that accoridan will be expanded and all other accordian will be false 
// can i modify of the satevarible of the parent from the child



const [showIndex,setShowIndex]=useState(null);

if(resInfo === null)return <Shimmer/>
// it is better to use graph ql
// swiggy backend giving us tomes of data ,load only which is required in your app
const {name,cuisines,costForTwoMessages} =
resInfo?.cards[2]?.card?.card?.info;

const{itemsCards}=
resInfo?.card[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

console.log(resInfo?.card[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
// we are filtering the card which has type item category

const categories =resInfo?.card[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  (c)=>c.card?.card?.["@type"]===
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);
// i will get all the category
// this is the accordian where you can expand and shrink it 


console.log(categories);



  return (
    <div className="text-center">
       <h1 className="font-bold my-6 text-2xl"></h1>
        //Name of the Restaurant
      {name}
      <p className="font-bold text-lg">
        {cuisines.join(",")}-{costForTwoMessages}
      </p>
      {/* categories accordians 
      we will loop on each accordion and try to build for each category */}
    // Controlled componenent 
     {categories.map((category,index)=> (
      <RestaturantCategory 
      key={category.card.card.title} 
      data={categories?.card?.card}
      // for all the restaturant i closed it 
      showItems={index===showIndex ? true : false }
      // this function will set the showIndex  to my children

      setShowIndex={()=>setShowIndex(index)}
      />))}


      {/* <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
         <li key={item.card.info.id}>{item.card.info.name} - {"Rs."}
         {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;

// the only difference  is the restaturant id only

// i want information of all the sections

// we are concerned of the section

// card types
// card[1]== recommended
//card[2]==newly added


//important thing is to fetch the data
//at a time only one accordiam show be open 

