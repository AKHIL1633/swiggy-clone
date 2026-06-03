// Actually like the component name

import { LOGO_URL } from "../utils/constant";
import { useState,useEffect } from "react";
import {Link} from "react-router-dom";

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


const Header =()=>{
  useEffect(()=>{
  console.log("useEffect called");
   });
  const[btnNameReact,setBtnNameReact]=useState("Login");
  console.log("Header render ");
  return (
    <div className="header">
      <div className="logo-container">
      <img className="logo" src= {LOGO_URL}/>
    </div>
    <div className="nav-items">
      <ul>
        <li>
          <Link to="/">Home</Link></li>
        <li>
          <Link to="/about">About us</Link></li>
        <li>
          <Link to="/contact">Contact us</Link> 
          </li>
        <li>Card</li>

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
  )
};

export default Header;