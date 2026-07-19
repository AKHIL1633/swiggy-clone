to run our app 
we will run the command npm run start 



let learn how to create custom hook 

Single responsibility function

fuction and class -it should have the single responsibility

restaturant menu should restaturant card only

heade.js should display header of the page


each component is a different function.

each function should have only one responsibility.

for each componet we create ,we should have single responsibility.

modularity means you break down the code into small small modualrity.

so that your code become more maintainable and testable.


a big app can hav a bug right 

that test case will catch it

whenever you break down your code into small

small pieces of code

we can catch the bug very easily 

distributing your code into small small pieces is the best way

you can feature of resuability

is there any component which is not following it 

there is no hard and fast rule

your code should be readable to other colleagues

important concept 

hooks are special java script given to us by react

hooks is a normal function 
hooks is a kind of utility fuction


Let see how we can more optimise it

go to the restaturant menu 

it has two important responsibility 

fetching the data and displaying the data
it should only be concern about displaying the data 

use params  is a hook which get the parameter from the url
we are not bothered about the implementing of the hook


we will create own custom hooks (make your code reliable and modular)

useRestaurantMenu()

-------------------------------------------------------------------
## Extra points

if this class is a single unit 
you can resue the code again

your code becomes maintable ,testable ,reusable 
there is no hard fast and rule 
you need to keep your component light 
very modular

important concept of customs hooks
hooks are normal javascript function

usestate,useeffect,useparams

we will learn how to create the custom hooks
hooks are like utility function 


hook is like a normal function a kind of utility
take some functionality from the component ,and give it to the custom hooks

it is not a compulsory things

fetching the data
displaying the data

ResstaurantMenu.js perform by this two 

can i abstract the fetching data as well

i will create fetching data in different hooks
/Hooks are normal helper function 
the best place to create inside the utils 
--------------------------------------------------------------------
Creating custom hook 

with a name of useRestaurantMenu 

it will now concern about displaying the restaturant menu in the ui



import { useEffect } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import  { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {

const{ resId }=useParams();

const resInfo=useRestaurantMenu(resId); // 

if(resInfo === null) return <Shimmer/>

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
-----------------------------------------------------------------------------------------------------
// the only difference  is the restaturant id only

hooks name should we start with use 

to understand it is a hook ,so that react can understanf it 

Created the useRestaurantMenu.js

it jobs is to return the restaurant info 

--------------------------------------------------------------------------------

useRestaurantMenu.js


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

setResInfo(json);
};

return resInfo;
}


// all the logic getting the data from the api 

// it will get the restaturant information 

export default useRestaurantMenu;

// resinfo is the local variable which is coming from usestate hook



----------------------------------------------------------------------------------------
RestaurantMenu.js


import { useEffect } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import  { MENU_API } from "../utils/constant";
import {useRestaurantMenu} from  " ..utils/RestaurantMenu";

const RestaurantMenu = () => {
 
const {resId}=useParams();
 
const resInfo=useRestaturantMenu(resId);

 if(resInfo === null)<Shimmer/>


//it is better to use graph ql
// swiggy backend giving us tomes of data ,load only which is required in your app

const {name,cuisines,costForTwoMessages} =resInfo?.cards[0]?.card?.card?.info;
const{itemsCards}=resInfo?.card[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

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


--------------------------------------------------------------------------------------------
the only difference  is the restaturant id only


it will work in the same way ,a lot of people cant do this things
if you write the code in modular fashion ,and single fashion

it make sensible ,if you want to test the fetching logic 

you can test it there easily

if there is issue in display you can see in the restaturantMenu itself

try to create your own custom hooks
Can we make library which will make hook

session storage 

try to make custom hooks

try to add one more feature 

which will show the feature of an online and offline of my app 

facebook chat 
whatsapp chat

can we build that kind of feature 

you will be amazard ,how easy it is 


let create that type of hooks 
if we turn of the internet user should be inactive

How to write the custom hook 
in what direction i have to think 

First of all ,Finalise the context

input and output of it 

then it would become easy for you 
to we need specific information


## I want a hook which will give the status of the internet

WE will ,make use of online event listner 

search in the google 

online event Listener 

Window:online event

Thinks 


useOnlineStatus.js


// I JUST HAVE TO RETURN THE BOOLEAN VALUE

import {useEffect} from "react";

const useOnlineStatus = () => {

constant [onlineStatus,setOnlineStatus] =useState(true);

//check if online 

    
//it will be executed only once

useEffect(()=>{
window.addEventListener("offline",() =>{
setOnlineStaus(false);
})
window.addEventListener("online",()=>{
setOnlineStatus(true);
});
},[]);


   

//     boolean value 

return onlineStatus;
}

export default useOnlineStatus;
-------------------------------------------------------------------------------------------
lets add green dot and red dot 

in the network tab ,you can set the thing in offline and online mode 

no throttling drop down  please select offline one 


The hook which we have created ,we will add up here 

added red and green dot 

Body .js

import RestaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";

import Shimmer from "./Shimmer";

import {Link} from "react-router-dom";

import {useOnlineStatus} from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("")
  useEffect(() => {
    fetchData();

  }, []);

const fetchData = async () => {
    
const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.2611169&lng=81.5993951&restaurantId=439785&catalog_qa=undefined&submitAction=ENTER");
    
const json = await data.json();
console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
setListOfRestaurants(restaurants || []);
setfilteredRestaurant(restaurants || []);
};

const onlineStatus=useOnlineStatus();
if(oneLineStatus === false)

return <h1>Looks like you are offline !! Please check your internet connection</h1>

return listOfRestaurants.length === 0 ? (<Shimmer />) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
              className="search-box"
              value={searchText}
              onChange={(e) => {
              setSearchText(e.target.value)
              if (e.target.value === "") {
             setfilteredRestaurant(listOfRestaurants);
            }

            }} />
          <button
            onClick={() => {
              console.log(searchText);
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>
       <button
  className="filter-btn"
  onClick={() => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating >= 4.3
    );
    setfilteredRestaurant(filteredList);
  }}
>
  Top Rated Restaurant
</button>
      </div>
      <div>
        <div className="res-container">
          {
            filteredRestaurant.map((restaurant) => (
              <Link key={restaurant.info.id} to={"/restaurants"+ restaurant.info.id}><RestaurantCard
                key={restaurant.info.id}
                resData={restaurant}
              /></Link>
            ))
          }
        </div>
      </div>
    </div>
  )
};
-----------------------------------------------------------------------------------------------

Header.js

import { LOGO_URL } from "../utils/constant";
import { useState,useEffect } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header =()=>{
  useEffect(()=>{
  console.log("useEffect called");
   });
  const[btnNameReact,setBtnNameReact]=useState("Login");
  const onlineStatus=useOnlineStatus();
  console.log("Header render ");
  return (
    <div className="header">
      <div className="logo-container">
      <img className="logo" src= {LOGO_URL}/>
    </div>
    <div className="nav-items">
      <ul>
        <li>
          Online Status :{onlineStatus ?"✅":"🔴"}
        </li>
        <li>
          <Link to="/">Home</Link></li>
        <li>
          <Link to="/about">About us</Link></li>
        <li>
          <Link to="/contact">Contact us</Link> 
          </li>
        <li>
          <Link to="/contact">Grocery</Link>
        </li>
        <li>Cart</li>

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

------------------------------------------------------------------------------------------------
// Whenever you develop a react application 

we talk about the parcel (is the best)
parcel  is a bundler
it can do a lot of things 
bundler is to bundle the application (it means that they all your files into one file)
dist -- there will be one js file
whole code will be bidifify

it will generate one js file

if you go to the network tab 

Js file  

i will have one js file 

everything is happening in your website  ,it will happen in the same file 

it is ggod or bad 
as we dont have thousand of file 

you can go to the make my trip ,it is used to book flights and hotels

it will have huge files 

so many components in a single app 
size of the js will increase a load 

but it is dev file mode 
in prod we will make it less 

you cant build production build application ,if your application is slow 

you have to break down your application into smaller pieces 

should we do bundling or we unbundling (lot of work browsers to do )

We try to make smaller bundle of this file 
this concept is known as Chunking


It is also known as code splitting or chunking 
it is also known as dynamic bundling 
you have to the bundling in the dynamic way (break down your app in to smaller chunks)

Frontend Design Interview

------------------------------

It is important for to build larage scale application 
how to make smaller bundles and when to make it 


makemytrip
bundles should have enough code for the major  features

I can make the bundle of components just for the flights 
similarly for Holidays packages 

similarly 

---------------------------------------------------------------------------------------------------------
// Chunking 

//Code Splitting

//Dynamic Splitting 

to break down your app to smaller chunk

Suppoe i was doing the system design of make my trip 
i want to do logical sepeartion of bundle
that mean a bundle should have enough code for the feature 

i can make bundles ofcomponents just for the flights 

hotels 
homestays 
holiday Packages 

logical break your application into smaller smaller application
request.js will be smaller 

learn how to do is ?
our app starting selling grocery (instamart)


our app also has grocery delivery 

let go to the link on the top 

// Also we are selling grocery
// grocery delivery and component also 

.we will make differnt bundle og grocery 

// think grocery has lot of components 
// i want all the components of grocery into one bundle
//i will import grocery using lazy loading 

// when the app will load it will not load the component of grocery
//only when i go to the grocery page ,then only it will come back 

// it will load when it is required 
//that is known as on demand loadin


// lazy loading with react 

//when i click on the grocery
//it will take some time
//suspense is a component ,given to us 
//we can wrap the component around the suspense
//Suspense is a componet given to us by react we can wrap our component to it 
// your grocery is not available at the moment ,you want something in the mean time 


// react try to load the grocery , it throw an Error


{
    path:"/grocery",
    element:(
    <Suspense fallback={<h1>Loading ... </h1>}>
      <Grocery/>
      </Suspense>),
}
to reduce the loading time 
we will use lazy loading all the code does not at once 

this is how we divide the application into smaller smaller pieces 



