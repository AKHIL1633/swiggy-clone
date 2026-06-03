import { CON_URL } from "../utils/constant";
const RestaurantCard =(props) =>{
  const {resData}=props;
  const{cloudinaryImageId,name,avgRating,cuisines,deliveryTime,costForTwo}=resData?.info;
  return (
    <div className="res-card" style={
    {
    backgroundColor:"#f0f0f0",
    }}>
     <img 
        src={
          CON_URL +
          cloudinaryImageId
        }
        alt={name}
        className="res-logo"
      />
      <h2>{name}</h2>
      <h4>{cuisines.join(',')}</h4>
      <h4>{avgRating} </h4>
      <h4>{costForTwo} </h4>
      <h4>{deliveryTime}</h4>
      </div>
  )
}

export default RestaurantCard;