import { CON_URL } from "../utils/constant";
const RestaurantCard =(props) =>{
  const {resData}=props;
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
      </div>
  )
}

export default RestaurantCard;