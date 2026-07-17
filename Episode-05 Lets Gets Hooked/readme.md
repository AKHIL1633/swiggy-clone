it is not good practice to put all files in the single code 
We will break th  code to restructure it 

To understand the react folder structure 
you can search in google 
react folder structure

a) all the common folder 

  common/
  feed/ 
  profile/

b)Grouping by file type 

   api /
   components /

Avoid too much nesting 


We are  using actual live data for our app 

it is possible to do with normal html also 

we will see the things  with the live  Swiggy api 


Why react ?

it makes you write less code 
large scalable production app building is very easy 

Here we see React Hooks 

before moving into it , we need to clean our app,we wrote everything into a single file 
it is not recommended  to maintain large files 
the best practice is to make sepearte file for seperate components 

All the main code of the react is put under the src folder 

keep the App.js under the src folder 

All the main code is put under the src folder ( a kind of source code )

I will put  the app.js folder in the src folder now i have to change the path of it index.html

It is better to make sepearte file to each component ,
Parcel will take all the code and minimalise it under one file

in real world ,there could be 1000 of components
Someone can keep on the basis of the feature basis as well 
like Search feature 


root folder structure 

in the documentation it is does not say what does it matter 

the file name of components should be matched with the component name only


to learn about the foleder structure 
## go to the react folder structure 

.jsx it means react  (it will give cool logo)

you can use .js extension 


.tsx means angular  (tsx is for typescript)


what is the good way ?

i personally like .js extension 


Two types of Export /Import 
- Default EXPORT/Import

export default Component
import Component from "path"

Named Export /Import 
export const Component 
import {Component} from "path"



Grouping by features or routes 

<!-- 1)Common
2)Feed
3)Profile  -->


Or on the basis of the type as well

Sometimes they save js file as jsx


There are two types of export named export and default export see the code in src 

Two types of Export/Import 

-Default Export/Import

export default componentname;
import Component from "path";

-Named Export/Import 

export  const Component;
import {Component} from "path";


in uber Each component must be as small and clean 

around 100 lines of code 

Dont put more than 100 ,it is advisable

now we will make our interactive ,we will keep learning basic concepts 

when i click on the button it will show top rated restaturant ,it is a kind of filter

i want restautrant which have rating >4

here we have to write the filter logic here 


Body.js

import RestaurantCard from "./RestaurantCard";

const Body =() =>{

  const ListOfRestaurants=[
   {
    info: {
      id: "10894",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      costForTwo:40000,
      cuisines: ["Pizzas","Burger","Biryani","American","Snacks","FastFood"],
      avgRating: "4.1",
      deliveryTime: 31,
    },
  },
  {
    info: {
      id: "10891",
      name: "Dominos",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      costForTwo:40000,
      cuisines: ["Pizzas"],
      avgRating: "4.5",
      deliveryTime: 31,
    },
  },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn"
        
        onClick={()=>
        {
          console.log("Button Clicked")
        }
        }
        onMouseOver={()=>
        {
          console.log("Button Clicked")
        }
        }
        >Top rated Restaturant</button>
      </div>
      <div className="res-container">
      <div className="res-container">
       {
        ListOfRestaurants.map((restaurant) => (
      <RestaurantCard 
        key={restaurant.info.id}
        resData={restaurant} 
      />
    ))
     }
    </div>
      </div>
    </div>
  )
};

export default Body; 



// Wrote the logic of filtering but Ui is not getting updated 



<!-- import RestaurantCard from "./RestaurantCard";    
import resObj from "../utils/mockData";

//card is coming from resobj
// on Click we take the call back functions

const Body =() =>{
  let ListOfRestaurants=[
   {
    info: {
      id: "10894",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      costForTwo:40000,
      cuisines: ["Pizzas","Burger","Biryani","American","Snacks","FastFood"],
      avgRating: "4.1",
      deliveryTime: 31,
    },
  },
  {
    info: {
      id: "10891",
      name: "Dominos",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      costForTwo:40000,
      cuisines: ["Pizzas"],
      avgRating: "3.8",
      deliveryTime: 31,
    },
  },

  {
    info: {
      id: "10897",
      name: "MCdONALD",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      costForTwo:40000,
      cuisines: ["Pizzas"],
      avgRating: "4.1",
      deliveryTime: 31,
    },
  },
  ];
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn"
        
          onClick={()=>{ 
          //Filter logic here 

          ListOfRestaurants=ListOfRestaurants.filter(
            (res)=> res.info.avgRating>4
          );
          console.log(ListOfRestaurants);
          }}
        
        >Top rated Restaturant</button>
      </div>
      <div className="res-container">
       {
        ListOfRestaurants.map((restaurant) => (
      <RestaurantCard 
        key={restaurant.info.id}
        resData={restaurant} 
      />
    ))
     }
    </div>
      </div>
    </div>
  )
};

export default Body; -->


in the earlier example ui is not updated 

ui layer and data layer are not working together 

here react comes into the picture 

here listOfRestaurants is normal variable 

React comes with a concept of State Variable -super powerful variable

For that we use React Hooks 

What is Hooks ?


A react Hook a normal javascript function ,which is given to us by react 

there are multiple such function in react 

they are normal js function ,written y javascript developer 

we have to import this utility  function

React is effificent in React dom manipulation 

Ui and data layer should work together (updating the dom manipulation)

There is a concept of virtual dom 


## React Hooks

(Normal Js function )

npm install react we have got  all the utility function 

react hook is normal javascript function

it is a utility function

it maintain the state of the component

There are two important function 

UseState()-super powerful state variable it gives ,you have import this as named import 

useEffect()

This is used to generate super powerful state variable

Example of filtering 

Whenever a state variable react render the component

import RestaurantCard from "./RestaurantCard";    
import {useState} from "react";

Function component -- normal javascript function
React Elemet -- javascript object 
React Hook is a normal function is given to us by Reacy ,prebuilt given by react ,we can used it directly

card is coming from resobj
on Click we take the call back functions

State Variables -Sper powerful variable 

For that we use hooks (useState)
USESTATE IS TO CREATE THE STATE VARIABLE IT WILL MAINTAIN THE STATE OF THE COMPONENT
LOCAL STATE VARIABLE SCOPE IS INSIDE THE COMPONENT
Keeps the layer sink with the ui 


earlier of body.js

import RestaurantCard from "./RestaurantCard";    
import {useState} from "react";
const Body =() => {

  // whatever the value we will pass in the useState will become the default of const here

  // you will receive the state variable using the array  

  // const [listOfRestaurants]=useState([null]);  local state variable

  // let me know how to modify this variable,you have to modify the list of restaturants using setListOfRestaturants 

  //you can name this whatever you wish to 

  // you can put res ,then setres 


  const [listOfRestaurants,setListOfRestaurants]=useState([
    {
    info: {
      id: "10894",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      costForTwo:40000/100,
      cuisines: ["Pizzas","Burger","Biryani","American","Snacks","FastFood"],
      avgRating: 4.1,
      deliveryTime: "31 minutes",
    },
  },
  {
    info: {
      id: "10891",
      name: "Dominos",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      costForTwo:40000/100,
      cuisines: ["Pizzas"],
      avgRating: 3.8 ,
      deliveryTime: "31 minutes",
    },
  },

  {
    info: {
      id: "10897",
      name: "MCdONALD",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      costForTwo:40000/100,
      cuisines: ["Pizzas"],
      avgRating: 4.1,
      deliveryTime: "31 minutes",
    },
  }
  ]);


//Normal Js VARIABLE

//  let listOfRestaurants=null
  // let listOfRestaurantsJS=[
  //  {
  //   info: {
  //     id: "10894",
  //     name: "Pizza Hut",
  //     cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //     costForTwo:40000,
  //     cuisines: ["Pizzas","Burger","Biryani","American","Snacks","FastFood"],
  //     avgRating: "4.1",
  //     deliveryTime: 31,
  //   },
  // },
  // {
  //   info: {
  //     id: "10891",
  //     name: "Dominos",
  //     cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //     costForTwo:40000,
  //     cuisines: ["Pizzas"],
  //     avgRating: "3.8",
  //     deliveryTime: "31 minutes",
  //   },
  // },

  // {
  //   info: {
  //     id: "10897",
  //     name: "MCdONALD",
  //     cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //     costForTwo:40000,
  //     cuisines: ["Pizzas"],
  //     avgRating: "4.1",
  //     deliveryTime: 31,
  //   },
  // },
  // ];

  Example 
  // lets list =[]
  // list=["Abc"];
  // list.push
  ("Abc");


// here we have put the logic of ui to be updated automatically 

// When a state variable update ,react renders the component 
//now you can use your mock data as well
//As soon as state variable update ,the whole component will reder it 
// react will make the dom operation superfast 
// the browser has to render the component - This is very efficient function of React 
//it keeps the ui layer sinks with the di layer


## React uses Reconcilitation Algorithm

//it is also knows as React Fibre 

We have a dom(it is like a tree)

restaturant container has 7 restaturant cards ,my ui changes from filtering to 3 filtered card 

react create the virtual dom

actual dom are the <div> <div> 

Virtual Dom is a representation of actual dom .

Virtual dom are actually those react elements (are nothing but the objects)

it is nothing but the javascript object ,it is nothing but the objects

what is the diff algorithm
find out the difference between the two virtual dom ,before and the updated one
it tries out  find out the difference between the old virtual dom and the new virtal dom
it will calculate the difference and then update the actual dom in every render cycle

whole algorith is known as Reconcilation Algorithm
find out the difference between the  react object is easy 
react will find out the difference easily ,react  doesnt touch the dom 
it will find out the difference between the virtual dom,render the  
component 
that is why it is most populR

THERE IS ALSO KNOWN AS INCREMENTAL RENDERING
react is doing efficient dom manipulation 
virtual dom  bascillay the tag which you see (nothing but the javascriot objects)
react is constantly checking 
this is the core job of React 

when a state variable update ,react re render the whole component 
use State is a Local State variable -Super powerful variable 


import RestaurantCard from "./RestaturantCard";
import {useState} from "react"
import resList from "../utils/mockData
const Body =() =>{
 const [listOfRestaurants,setListOfRestraunt]=userState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button 
        className="filter-btn"
        
        onClick={()=>{ 
          //Filter logic here 

          const filteredList=listOfRestaurants.filter(
            (res)=> res.info.avgRating>4
          );
          setListOfRestaurants(filteredList);
        }}
        
        >Top rated Restaturant</button>                   
      </div>
      <div className="res-container">
       {
        listOfRestaurants.map((restaurant) => (
      <RestaurantCard 
        key={restaurant.info.id}
        resData={restaurant} 
      />
    ))
     }
    </div>
      </div>
    </div>
  )
};

export default Body; 


React Hook is a javascript function a normal utility function 
now we will use the mock date over here 

React uses Reconcilation algorithm is also known as React Fibre

Dom is like a tree 

rescontainer has 7 restaurant CARD 
MY UI CHANGES FROM 7 to 3 filtered cards 

React create the virtual Dom for it (for the original one )
it is not the actual dom 
actual dom are the tag 
virtual is the representation of the actual dom 

Virtual Dom  is basically those react Elements

console.log(<Body/>)


<!-- return (
    <div className="body">
      <div className="filter">
        <button 
        className="filter-btn"
        
        onClick={()=>{ 
          //Filter logic here 

          const filteredList=listOfRestaurants.filter(
            (res)=> res.info.avgRating>4
          );
          setListOfRestaurants(filteredList);
        }}
        
        >Top rated Restaturant</button>
      </div>
      <div className="res-container">
      <div className="res-container">
       {
        listOfRestaurants.map((restaurant) => (
      <RestaurantCard 
        key={restaurant.info.id}
        resData={restaurant} 
      />
    ))
     }
    </div>
      </div>
    </div>
  )
}; -->


How React Treat this Jsx as object
React Element is an object 
virtual Dom is nothing but javascricpt object 

What is the Diff algorithm

Find out the differnence between updated Virtual dom to original virtual dom 

It tries out to find out the difference between new and old Virtaul dom 
it willcalculate the the differnce and then it will actual update the dom it every render cycle


it is a new algorithm (React fibre) came in react 2016 

React fibre it is a new way of finding the div and updating the dom 

Virtual dom is an obj 
it is like the git diff 
when it will find the diff them it will update the dom 


Findout the difference between the two object is easy 
and virtual dom make it quick

when i click on the button new object is formed ,when it find the difference then only 
it will update it 

When there is change in state variable ,react will find out the differnece in dom and rerender the dom 


Google : React Fibre  Architecture 

This is the react core algorithm ,this is what react best at 
react fibre is an ongoining research 

Incremental rendering ---> it is effiency 
Ability to split rendering work into chunks and spread


Why rEACT IS FAST ?
iT is doing efficient dom manipulation 

Virtual Dom has become popular due to the react 

Javascript dom representation 
react took that and built their algorithm on it 



1>Virtaul Dom efficient Dom manipulation 
Reconcilation algorithm 


<!-- 
import RestaurantCard from "./RestaurantCard";    
import {useState} from "react";
import resObj from "../utils/mockData";

//Function component -- normal javascript function
//React Elemet -- javascript object 
//React Hook is a normal function is given to us by Reacy ,prebuilt given by react ,we can used it directly

//card is coming from resobj
// on Click we take the call back functions

// State Variables -Sper powerful variable 

// For that we use hooks (useState)
//USESTATE IS TO CREATE THE STATE VARIABLE IT WILL MAINTAIN THE STATE OF THE COMPONENT
//LOCAL STATE VARIABLE SCOPE IS INSIDE THE COMPONENT
// Keeps the layer sink with the ui 


const Body =() =>{

  // whatever the value we will pass in the useState will become the default of const here 
  // const [listOfRestaurants]=useState([null]);
  const [listOfRestaurants,setListOfRestaurants]=useState(resObj);
    


//Normal Js VARIABLE
//  let listOfRestaurants=null
  // let listOfRestaurantsJS=[
  //  {
  //   info: {
  //     id: "10894",
  //     name: "Pizza Hut",
  //     cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //     costForTwo:40000,
  //     cuisines: ["Pizzas","Burger","Biryani","American","Snacks","FastFood"],
  //     avgRating: "4.1",
  //     deliveryTime: 31,
  //   },
  // },
  // {
  //   info: {
  //     id: "10891",
  //     name: "Dominos",
  //     cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //     costForTwo:40000,
  //     cuisines: ["Pizzas"],
  //     avgRating: "3.8",
  //     deliveryTime: "31 minutes",
  //   },
  // },

  // {
  //   info: {
  //     id: "10897",
  //     name: "MCdONALD",
  //     cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //     costForTwo:40000,
  //     cuisines: ["Pizzas"],
  //     avgRating: "4.1",
  //     deliveryTime: 31,
  //   },
  // },
  // ];
  // const list =[]
  // lsit=["Abc"];
  // list.push("Abc");
  return (
    <div className="body">
      <div className="filter">
        <button 
        className="filter-btn"
        
        onClick={()=>{ 
          //Filter logic here 

          const filteredList=listOfRestaurants.filter(
            (res)=> res.info.avgRating>4
          );
          setListOfRestaurants(filteredList);
        }}
        
        >Top rated Restaturant</button>
      </div>
      <div className="res-container">
      <div className="res-container">
       {
        listOfRestaurants.map((restaurant) => (
      <RestaurantCard 
        key={restaurant.info.id}
        resData={restaurant} 
      />
    ))
     }
    </div>
      </div>
    </div>
  )
};

export default Body; -->

