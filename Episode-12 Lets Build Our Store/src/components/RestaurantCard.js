import { CON_URL } from "../utils/constant";
import {UserContext} from "../utils/UserContext";
const RestaurantCard =(props) =>{

  const {resData}=props;
   const {loggedInUser}=useContext(UserContext);
  const{cloudinaryImageId,name,avgRating,cuisines,deliveryTime,costForTwo}=resData?.info;
  
  return (
  
    <div className=" m-4 p-4 w-[250px]  rounded-lg  bg-gray-50 hover:bg-gray-200">
     <img 
     className="rounded-lg"
     alt="res-logo"
     src={CON_URL + cloudinaryImageId}
      />
      <h2 className="font-bold py-4 text-xl">{name}</h2>
      <h4>{cuisines.join(',')}</h4>
      <h4>{avgRating} </h4>
      <h4>{costForTwo} </h4>
      <h4>{deliveryTime}</h4>
      <h4>USER :{loggedInUser}</h4>
      </div>
  );
};

// Higher Order Component

//input - RestaurantCard => RestaturantCardPromoted
//it will return another component inside it 


export const withPromotedLabel=(RestaurantCard)=>{
  return (props) =>{
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        {/* // {...props} it will pass all the props i have received  */}
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;


// i will not change the restaurant card behaviour any way 

// i am adding on top of it 
//now we will have promoted label on the top of the card

