// Actually like the component name

import { LOGO_URL } from "../utils/constant";
import { useState,useEffect,useContext } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import UserContext from "../utils/UserContext";
// Link component works exactly the same as the anchor tag 
// anchor tag we have href  <a href="/about">About us </a>
// <Link to="/contact">Contact us </Link>


// the whole page will not be loaded ,when you are navigating to the different route 



//how useeffect is called using two arguments call back function and depenedies array is called
// after every rendering of the component ,dependies array will change the behaviour of the render
// if no dependency array => useEffect is called on every render
// if there is empty dependency array = [] => useEffect is called on initialise render and just once 

// if we put any dependenies then it will be called if there is any change in the dependies 
// if dependency array is [btnNameReact]= > called everytime  when btnName React 


// never create the usestate outside of the component 
// Always called inside the body ,it is used for creating local state varaible inside the component 
//Always used this in the top of the function as code run line by line 

//Never create usestate inside the if else please dont this ,it will create inconsistency in the program 
//Nver create inside the for loop ,nor inside the function 



// if() {
//   const [searchtext,setSearchText]=useState("");
// }


// When we are using react and when we want to route to the outer page ,never ever used the anocher tag 

//the whole page got refreshed ,i dont want to refresh the old page 
// you can navigate to the new page  without  reloading the page i.e link

// link is  a super power  which is given to us by  react-router-dom 
// it will just refresh the componet rather refreshing the whole  page 
//React is a single page application
//Actually you can naviagate to the new page without reload to the page
//m-2 margin
//p-2 padding  pr pl px padding on the left and right 

// px-2 on the x axis left and right



const Header =()=>{


  useEffect(()=>{
  console.log("useEffect called");
   });

  const[btnNameReact,setBtnNameReact]=useState("Login");

  const onlineStatus=useOnlineStatus();
  
  // you can get as many context do you want 


  const {loggedInUser}=useContext(UserContext);
  console.log(loggedInUser)




  console.log("Header render ");
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50  ">
      <div className="logo-container">
      <img className="w-56" src= {LOGO_URL}/>
      </div>
      // item center to center align from top and bottom using flex
      <div className="flex items-center">
      <div className="flex p-4 m-4">
      <ul>
        <li className="px-4">
          Online Status :{onlineStatus ?"✅":"🔴"}
        </li>
        <li className="px-4">
          <Link to="/">Home</Link></li>
        <li className="px-4">
          <Link to="/about">About us</Link></li>
        <li className="px-4">
          <Link to="/contact">Contact us</Link> 
          </li>
        <li className="px-4">
          <Link to="/contact">Grocery</Link>
        </li>
        <li className="px-4 font-bold">loggedInUser</li>
        <button 
        className="login" 
        onClick={()=>{
          btnNameReact === "Login" 
          ? setBtnNameReact("Logout")
          : setBtnNameReact("Login");
        }}
        >
        {btnNameReact}
        </button>

      </ul>
      </div>
    </div>
    </div>
  )
};

export default Header;

// Suppose after the login i want the information of the logged in user 
// usin

