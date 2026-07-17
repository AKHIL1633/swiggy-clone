import React from "react" ;
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from  "./components/Body";
import RestaurantCard from "./components/RestaurantCard";

// ui layer and Data layer will make up the front end


// Restaturant card
// Way to write the inline style take the javascript object 
// First bract is telling about the javascript ,second bracket is telling about the javascript objects 
// we can many cards in the Body 
//how data comes from backend to us it will comes in the form of json to us

// Developer consol -> inspect _>Network ->Refresh the page ->> Fetch/Xhr 
//there will see the api of the restaturant list 

// install the plugin  Json viewer Pro 

// Conflict  Drivien  Ui (our website are driven by Conflict ,contolling  is driven by data as per the location 
//All the ui is driven by Ui 
//As the data can be different for Delhi ,Mumbai ,Bangalore according to the data coming from the backend Ui changes 


const AppLayout=() =>{
  return (
    <div className="app">
    <Header/>
    <Body/>
    </div>
  )
}

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);


