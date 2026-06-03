import { useEffect } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import  { MENU_API } from "../utils/constant";
const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);
const [restInfo,setResInfo]=useState(null);

// parmas is the id with resid
// const params=useParams();
// console.log(params);

const{resId}=useParams();
console.log(params);

 
//  const fetchMenu = async () => {
//   try {
//     const data = await fetch(
//       "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7169967&lng=75.86830739999999&restaurantId=354078&catalog_qa=undefined&submitAction=ENTER",
//       {
//         headers: {
//           "origin": "https://www.swiggy.com",
//           "x-requested-with": "XMLHttpRequest",
//         },
//       }
//     );
//     const json = await data.json();
//     console.log(json);
//   } catch (err) {
//     console.log("Error:", err.message);
//   }
// };
const fetchMenu=async () =>{
    const data=await fetch (MENU_API + resId);
    const json =await data.json();

    console.log(json);
    setResInfo(json.data);
    // to store the data we need to used state variable 

};

if(resInfo === null)<Shimmer/>
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