// it will take the res id ,it some is to return restaurant informat ion

import {useEffect} from "react";
import{MENU_API} from "./utils/constants";
const useRestaurantMenu= (resId) =>{
const [resInfo]=useState(null);
useEffect(() =>{
    fetchData();
}, []);

const fetchData=async() =>{
    const data=await fetch(MENU_API + resId);
    const json=await data.json();
    setResInfo(json.data);
    
};
return resInfo;
}


// all the logic getting the data from the api 

//it will get the restaturant information 
export default useRestaurantMenu;