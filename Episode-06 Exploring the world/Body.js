// As soon as the page load it will return the body component 
// then we will make the api call ,after the rendering this done 
//Cors policy ,browswer blocks the swiigy api calling when there is origin mismatch 
//Cors Chrome extension 

// in card[2] we will have all the restaurant detail

// import RestaurantCard from "./RestaurantCard";    
// import {useState,useEffect} from "react";
// import resList from "../utils/mockData"
// import Shimmer  from  "./Shimmer"
// const Body= () => {
//   const [listOfRestaurants,setListOfRestaurants]=useState(resList);
  
//    useEffect(()=>{
//    console.log("useEffect called");
      //  fetchData();
//   },[]);


//  console.log("Body rendered");


// const fetchData = async () => {
// const data =await fetch(
//  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//  ); 
//    const json =await data.json();
//    console.log(json);
//    setListOfRestaurant(json.data.cards[2].data.data.cards)
//  }

//   return (
//     <div className="body">
//       <div className="filter">
//         <button 
//         className="filter-btn" onClick={()=>{
//           const filteredList =listOfRestaurants.filter(
//             (res)=>res.data.avgRating >4
//           );
//           setListOfRestaurants(filteredList);
//         }}
//         > Top Rated Restaturant

//         </button>
//       </div>
//          <div className="res-container">
//           {listOfRestaurants.map((restaurant)=>(
//             <RestaurantCard keys={restaurant.data.id} resData={restaurant}/>
//           ))}
//   </div>
//   )
// export default body 
// }


// output
//body rendered
//useeffect called


//There are two ways to render the body page 

// as soon as our page load ,we can make an api call to get the data,then we render the ui 
//if  api call 500 msec,our page will be loaded after 500 milli sec


//second approach 

// we will  just render the ui whatever we have  ,now we will make the api call
// post getting the data ,we will rerender the page again 
// here we will use the second approach
// this give your better ux
//react render your ui very fast
//two render is better generally 


// useeffect hooks 
// normal react hooks 
// useEffect have two variable 
// first argument is call back functions and next parameter is depenedies array 
// when will be called ,after your component render 


// call after render 
//once it is render it will call the call back function 

// useEffect(()=>{
//   console.log("useEffect called");
// },[]);

// it will be called after the component has been rendered


// Function component -- normal javascript function
// React Elemet -- javascript object 
// React Hook is a normal function is given to us by React ,prebuilt given by react ,we can used it directly

// card is coming from resobj
//on Click we take the call back functions

// State Variables -Sper powerful variable 
// For that we use hooks (useState)
// USESTATE IS TO CREATE THE STATE VARIABLE IT WILL MAINTAIN THE STATE OF THE COMPONENT
// LOCAL STATE VARIABLE SCOPE IS INSIDE THE COMPONENT
// Keeps the layer sink with the ui 

//  First the body will be rendered then  useeffect will be called 
//  It will sve the call back function ,render the body js ,then it will call th callback function...
// useeffect is usefule ,body component will be rendered ,then  call back function is call 

// How we fetch the data is exactly the same as we do in javascript fetch()
  
//  const Body =() =>{

//  whatever the value we will pass in the useState will become the default of const here 
// const [listOfRestaurants]=useState([null]);

///// // This is array restructuring 
// // //   // const arr=useState(resList);
// // //   // const [listOfRestaurants,setListOfRestaurants]=arr;


// // //   // const arr=useState(resList);
// // //   // const listOfRestaurants=arr[0];
// // //   // const setListOfRestaurants]=arr[1];

// // // // TO Debug the code we have to go to the inspect -> Source

// // //   const [listOfRestaurants,setListOfRestaurants]=useState([]);
// // //   const [searchText,setSearchText]=useState(" ")


// // //   // useEffect hook ,Hook is nothing  but a normal javascript function it has its own specific cases Usestate is use to create the state variable
// // //   //useeffect is a function take two arguments 
// // //   //First argument is arrow function (call back function ),dependenies 

//           useEffect(() =>{
// // //     console.log("USEEFFECT CALLED");

// // //   },[]);

// // // // it will be called after our Body component render 

// // // // whent the body render as soon as it render ,it will just call the call back function 
// // // // can we use swiggy api in you app 
// // // // fetch will return the promise 
// // // // to handle this we will use async and await 
// // // //sometimes it will block the  fetching  
// // // //calling  swiggy .com  from local host has been blocked due to the Cors Poilicy
// // // //Who is blocking us ,browser blockers  to call api from one origin to different origin 

// // // //if there is origin mismatch ,the browser blocks that api call that is the cors poilcy 
// // // //how to bypass this cors chrome extension will bypass the cors error 
// // // // As soon as we got this data  ,put the data into kistof restaturant rerender the component with the ui
//

//Fetch will return the promise,handle it using async  await
// local only we are calling the swiggy api 
// by installing the chrome cors extension 

// network call and see what swiggy is using the api 


// const fetchData = async () => {
// const data =await fetch(
//  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//  ); 

// const json =await data.json();

//  console.log(json);
//  setListOfRestaurants(json.data.card[2].data.data.cards);
//  }



// i want to render the page with the new data 
// now the mock data is gone
//put

// const[listOfRestaurants,setListOfRestraunt]=useState([])

// const fetchData = async () => {
// const data = await fetch(
// "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

// const json = await data.json();
// console.log(json);

// it is not a good way to write this code 
// setListOfRestaurants(json.data.cards[2].data.data.cards);
// setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
// };


// if their is origin mistmatch then there will be error of cors 
//the above method is not good ,we have to use optinal chainning 

// as soon as we load the page we can put the spinning loader 
//in the industry we use the Shimmer 


// const fetchData = async () => {
// const data = await fetch(
// "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
// const json = await data.json();
// console.log(json);
// it is not a good way to write this code 
// setListOfRestaurants(json.data.cards[2].data.data.cards);

//  setListOfRestaurants(data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
// };
// if(listOfRestaurants.length ===0){
//  return <Shimmer/>;
//  }



// // // // how want to render this data 

// // // // we are rendering  using map only 

// // // //Normal Js VARIABLE

// // // //  let listOfRestaurants=null
// // //   // let listOfRestaurantsJS=[
// // //   //  {
// // //   //   info: {
// // //   //     id: "10894",
// // //   //     name: "Pizza Hut",
// // //   //     cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
// // //   //     costForTwo:40000,
// // //   //     cuisines: ["Pizzas","Burger","Biryani","American","Snacks","FastFood"],
// // //   //     avgRating: "4.1",
// // //   //     deliveryTime: 31,
// // //   //   },
// // //   // },
// // //   // {
// // //   //   info: {
// // //   //     id: "10891",
// // //   //     name: "Dominos",
// // //   //     cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
// // //   //     costForTwo:40000,
// // //   //     cuisines: ["Pizzas"],
// // //   //     avgRating: "3.8",
// // //   //     deliveryTime: "31 minutes",
// // //   //   },
// // //   // },

// // //   // {
// // //   //   info: {
// // //   //     id: "10897",
// // //   //     name: "MCdONALD",
// // //   //     cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
// // //   //     costForTwo:40000,
// // //   //     cuisines: ["Pizzas"],
// // //   //     avgRating: "4.1",
// // //   //     deliveryTime: 31,
// // //   //   },
// // //   // },
// // //   // ];
// // //   // const list =[]
// // //   // lsit=["Abc"];
// // //   // list.push("Abc");

// // // //   return (
// // // //     <div className="body">
// // // //       <div className="filter">
// // // //         <button 
// // // //         className="filter-btn"
        
// // // //         onClick={()=>{ 
// // // //           //Filter logic here 

// // // //           const filteredList=listOfRestaurants.filter(
// // // //             (res)=> res.info.avgRating>4
// // // //           );
// // // //           setListOfRestaurants(filteredList);
// // // //         }}
        
// // // //         >Top rated Restaturant</button>
// // // //       </div>
// // // //       <div className="res-container">
// // // //       <div className="res-container">
// // // //        {
// // // //         listOfRestaurants.map((restaurant) => (
// // // //       <RestaurantCard 
// // // //         key={restaurant.info.id}
// // // //         resData={restaurant} 
// // // //       />
// // // //     ))
// // // //      }
// // // //     </div>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // };

// // // // export default Body;
// // // //


// // // //we have bind the searchText with the value but by searchtext is unable to change 
// // // // to fix this we must used onChange Handler here 
// // // //Whenever  we made the changes it will change it automatically
// // // //First we have to bind 
// // // // as soon as input change we have to change  the value 

// // // //When we change the local state variable the whole company is rerendered and refresh 

// // // // to check render put the console.log() in it

// // // console.log(" Body Rendered ");
// // //  return  listOfRestaurants.length === 0 ? (<Shimmer/>) : (
// // //     <div className="body">
// // //       <div className="filter">
// // //         <div className="search">
// // //           <input 
// // //           type="text" 
// // //           className="search-box" 
// // //           value={searchText} 
// // //           onChange={(e)=>{
// // //             setSearchText(e.target.value)
// // //           }}/>
// // //           <button 
// // //           onClick={ ()=>{
// // //             //Filter the restraunt card and update the ui
// // //             //searchtext
// // //             console.log(searchText); 
// // //           }

// // //           } >Search</button>
// // //         </div>
// // //         <button 
// // //         className="filter-btn"
        
// // //         onClick={()=>{ 
// // //           //Filter logic here 

// // //           const filteredList=listOfRestaurants.filter(
// // //             (res)=> res.info.avgRating>4
// // //           );
// // //           setListOfRestaurants(filteredList);
// // //         }}
        
// // //         >Top rated Restaturant</button>
// // //       </div>
// // //       <div className="res-container">
// // //       <div className="res-container">
// // //        {
// // //         listOfRestaurants.map((restaurant) => (
// // //       <RestaurantCard 
// // //         key={restaurant.info.id}
// // //         resData={restaurant} 
// // //       />
// // //     ))
// // //      }
// // //     </div>
// // //       </div>
// // //     </div>
// // //   )
// // // };
 
// // // export default Body;



// // // import RestaurantCard from "./RestaurantCard";    
// // // import {useState,useEffect} from "react";
// // // import Shimmer  from  "./Shimmer"
// // // //Function component -- normal javascript function
// // // //React Elemet -- javascript object 
// // // //React Hook is a normal function is given to us by Reacy ,prebuilt given by react ,we can used it directly

// // // //card is coming from resobj
// // // // on Click we take the call back functions

// // // // State Variables -Sper powerful variable 

// // // // For that we use hooks (useState)
// // // //USESTATE IS TO CREATE THE STATE VARIABLE IT WILL MAINTAIN THE STATE OF THE COMPONENT
// // // //LOCAL STATE VARIABLE SCOPE IS INSIDE THE COMPONENT
// // // // Keeps the layer sink with the ui 

// // // // First the body will be rendered then  useeffect will be called 
// // // // It will sve the call back function ,render the body js ,then it will call th callback function...
// // // //useeffect is usefule ,body component will be rendered ,then  call back function is call 

// // // //How we fetch the data is exactly the same as we do in javascript fetch()
// // // const Body =() =>{

// // //   // whatever the value we will pass in the useState will become the default of const here 
// // //   // const [listOfRestaurants]=useState([null]);

// // //   // This is array restructuring 
// // //   // const arr=useState(resList);
// // //   // const [listOfRestaurants,setListOfRestaurants]=arr;


// // //   // const arr=useState(resList);
// // //   // const listOfRestaurants=arr[0];
// // //   // const setListOfRestaurants]=arr[1];

// // // // TO Debug the code we have to go to the inspect -> Source

// // //   const [listOfRestaurants,setListOfRestaurants]=useState([]);
// // //   const [searchText,setSearchText]=useState(" ")

// // // // Whenever  state variable variables update ,react triggers a reconcilation cycle(rerender  the component)
// // //   // useEffect hook ,Hook is nothing  but a normal javascript function it has its own specific cases Usestate is use to create the state variable
// // //   //useeffect is a function take two arguments 
// // //   //First argument is arrow function (call back function ),dependenies 
// // //   useEffect(() =>{
// // //     console.log("USEEFFECT CALLED");

// // //   },[]);

// // // // it will be called after our Body component render 

// // // // whent the body render as soon as it render ,it will just call the call back function 
// // // // can we use swiggy api in you app 
// // // // fetch will return the promise 
// // // // to handle this we will use async and await 
// // // //sometimes it will block the  fetching  
// // // //calling  swiggy .com  from local host has been blocked due to the Cors Poilicy
// // // //Who is blocking us ,browser blockers  to call api from one origin to different origin 

// // // //if there is origin mismatch ,the browser blocks that api call that is the cors poilcy 
// // // //how to bypass this cors chrome extension will bypass the cors error 
// // // // As soon as we got this data  ,put the data into kistof restaturant rerender the component with the ui

// // // // const fetchData = async () => {
// // // //   const data =await fetch(
// // // //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
// // // //   ); 
// // // //   const json =await data.json();

// // // //   console.log(json);
// // // //   setListOfRestaurants(json.data.card[2].data.data.cards);
// // // // }

// // // // const fetchData = async () => {
// // // //     const data = await fetch(
// // // //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

// // // //     const json = await data.json();
// // // //     console.log(json);
// // // //     // it is not a good way to write this code 
// // // //     // setListOfRestaurants(json.data.cards[2].data.data.cards);

// // // //     optional Chaining 
// // // //     setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
// // // // };

// // // const fetchData = async () => {
// // //     const data = await fetch(
// // //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
// // //     const json = await data.json();
// // //     console.log(json);
// // //     // it is not a good way to write this code 
// // //     // setListOfRestaurants(json.data.cards[2].data.data.cards);
// // //    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
// // // );
// // // };

// // // // // Conditional reasoning  //rememeber this what it is called 
// // // // if(listOfRestaurants.length ===0){
// // // //   return <Shimmer/>;
// // // // }




// // // // how want to render this data 

// // // // we are rendering  using map only 
// // // //Normal Js VARIABLE
// // // //  let listOfRestaurants=null
// // //   // let listOfRestaurantsJS=[
// // //   //  {
// // //   //   info: {
// // //   //     id: "10894",
// // //   //     name: "Pizza Hut",
// // //   //     cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
// // //   //     costForTwo:40000,
// // //   //     cuisines: ["Pizzas","Burger","Biryani","American","Snacks","FastFood"],
// // //   //     avgRating: "4.1",
// // //   //     deliveryTime: 31,
// // //   //   },
// // //   // },
// // //   // {
// // //   //   info: {
// // //   //     id: "10891",
// // //   //     name: "Dominos",
// // //   //     cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
// // //   //     costForTwo:40000,
// // //   //     cuisines: ["Pizzas"],
// // //   //     avgRating: "3.8",
// // //   //     deliveryTime: "31 minutes",
// // //   //   },
// // //   // },

// // //   // {
// // //   //   info: {
// // //   //     id: "10897",
// // //   //     name: "MCdONALD",
// // //   //     cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
// // //   //     costForTwo:40000,
// // //   //     cuisines: ["Pizzas"],
// // //   //     avgRating: "4.1",
// // //   //     deliveryTime: 31,
// // //   //   },
// // //   // },
// // //   // ];
// // //   // const list =[]
// // //   // lsit=["Abc"];
// // //   // list.push("Abc");


// Use ternary operator to handle this 
// why we need state variable 
// what is the superpower does it have 
// As soon a we login when we click on it ,it will move to the log out button




// // //   return  listOfRestaurants.length === 0 ? (<Shimmer/>) : (
// // //     <div className="body">
// // //       <div className="filter">
// // //         <div className="search">
// // //           <input 
// // //           type="text" 
// // //           className="search-box" 
// // //           value={searchText} 
// // //           onChange={(e)=>{
// // //             setSearchText(e.target.value)
// // //           }}/>
// // //           <button 
// // //           onClick={ ()=>{
// // //             //Filter the restraunt card and update the ui
// // //             //searchtext
// // //             console.log(searchText); 
// // //           }

// // //           } >Search</button>
// // //         </div>
// // //         <button 
// // //         className="filter-btn"
        
// // //         onClick={()=>{ 
// // //           //Filter logic here 

// // //           const filteredList=listOfRestaurants.filter(
// // //             (res)=> res.info.avgRating>4
// // //           );
// // //           setListOfRestaurants(filteredList);
// // //         }}
        
// // //         >Top rated Restaturant</button>
// // //       </div>
// // //       <div className="res-container">
// // //       <div className="res-container">
// // //        {
// // //         listOfRestaurants.map((restaurant) => (
// // //       <RestaurantCard 
// // //         key={restaurant.info.id}
// // //         resData={restaurant} 
// // //       />
// // //     ))
// // //      }
// // //     </div>
// // //       </div>
// // //     </div>
// // //   )
// // // };

// // // export default Body;


// // //There is a bug if it searches for the next time we will not getting anything 
// // //as we have modified the restaturant list we will not able to search with the complete data 

// // // To solve this we should keep another copy of the sorted list 



// // import RestaurantCard from "./RestaurantCard";    
// // import {useState,useEffect} from "react";
// // import Shimmer  from  "./Shimmer"
// // //Function component -- normal javascript function
// // //React Elemet -- javascript object 
// // //React Hook is a normal function is given to us by Reacy ,prebuilt given by react ,we can used it directly

// // //card is coming from resobj
// // // on Click we take the call back functions

// // // State Variables -Sper powerful variable 

// // // For that we use hooks (useState)
// // //USESTATE IS TO CREATE THE STATE VARIABLE IT WILL MAINTAIN THE STATE OF THE COMPONENT
// // //LOCAL STATE VARIABLE SCOPE IS INSIDE THE COMPONENT
// // // Keeps the layer sink with the ui 

// // // First the body will be rendered then  useeffect will be called 
// // // It will sve the call back function ,render the body js ,then it will call th callback function...
// // //useeffect is usefule ,body component will be rendered ,then  call back function is call 

// // //How we fetch the data is exactly the same as we do in javascript fetch()
// // const Body =() =>{

// //   // whatever the value we will pass in the useState will become the default of const here 
// //   // const [listOfRestaurants]=useState([null]);

// //   // This is array restructuring 
// //   // const arr=useState(resList);
// //   // const [listOfRestaurants,setListOfRestaurants]=arr;
  

// //   // const arr=useState(resList);
// //   // const listOfRestaurants=arr[0];
// //   // const setListOfRestaurants]=arr[1];

// // // TO Debug the code we have to go to the inspect -> Source

// //   const [listOfRestaurants,setListOfRestaurants]=useState([]);
// //   const [searchText,setSearchText]=useState(" ")

// // // Whenever  state variable variables update ,react triggers a reconcilation cycle(rerender  the component)
// // //react is finding the difference between the older virtual don and newer virtual dom then it will changes the dom part  which has made the difference
// // // dom manipulation react do effictively
// // // useEffect hook ,Hook is nothing  but a normal javascript function it has its own specific cases Usestate is use to create the state variable
// // //useeffect is a function take two arguments 
// // //First argument is arrow function (call back function ),dependenies 

// //   useEffect(() =>{
// //     console.log("USEEFFECT CALLED");

// //   },[]);

// // // it will be called after our Body component render 

// // // whent the body render as soon as it render ,it will just call the call back function 
// // // can we use swiggy api in you app 
// // // fetch will return the promise 
// // // to handle this we will use async and await 
// // //sometimes it will block the  fetching  
// // //calling  swiggy .com  from local host has been blocked due to the Cors Poilicy
// // //Who is blocking us ,browser blockers  to call api from one origin to different origin 

// // //if there is origin mismatch ,the browser blocks that api call that is the cors poilcy 
// // //how to bypass this cors chrome extension will bypass the cors error 
// // // As soon as we got this data  ,put the data into kistof restaturant rerender the component with the ui

// // // const fetchData = async () => {
// // //   const data =await fetch(
// // //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
// // //   ); 
// // //   const json =await data.json();

// // //   console.log(json);
// // //   setListOfRestaurants(json.data.card[2].data.data.cards);
// // // }

// // // const fetchData = async () => {
// // //     const data = await fetch(
// // //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

// // //     const json = await data.json();
// // //     console.log(json);
// // //     // it is not a good way to write this code 
// // //     // setListOfRestaurants(json.data.cards[2].data.data.cards);
// // //     optional Chaining 
// // //     setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
// // // };

// // const fetchData = async () => {
// //     const data = await fetch(
// //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
// //     const json = await data.json();
// //     console.log(json);
// //     // it is not a good way to write this code 
// //     // setListOfRestaurants(json.data.cards[2].data.data.cards);
// //    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
// // );
// // };

// // // // Conditional reasoning 
// // // if(listOfRestaurants.length ===0){
// // //   return <Shimmer/>;
// // // }




// // // how want to render this data 

// // // we are rendering  using map only 
// // //Normal Js VARIABLE
// // //  let listOfRestaurants=null
// //   // let listOfRestaurantsJS=[
// //   //  {
// //   //   info: {
// //   //     id: "10894",
// //   //     name: "Pizza Hut",
// //   //     cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
// //   //     costForTwo:40000,
// //   //     cuisines: ["Pizzas","Burger","Biryani","American","Snacks","FastFood"],
// //   //     avgRating: "4.1",
// //   //     deliveryTime: 31,
// //   //   },
// //   // },
// //   // {
// //   //   info: {
// //   //     id: "10891",
// //   //     name: "Dominos",
// //   //     cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
// //   //     costForTwo:40000,
// //   //     cuisines: ["Pizzas"],
// //   //     avgRating: "3.8",
// //   //     deliveryTime: "31 minutes",
// //   //   },
// //   // },

// //   // {
// //   //   info: {
// //   //     id: "10897",
// //   //     name: "MCdONALD",
// //   //     cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
// //   //     costForTwo:40000,
// //   //     cuisines: ["Pizzas"],
// //   //     avgRating: "4.1",
// //   //     deliveryTime: 31,
// //   //   },
// //   // },
// //   // ];
// //   // const list =[]
// //   // lsit=["Abc"];
// //   // list.push("Abc");

// //   //Use ternary operator to handle this 


// //   return  listOfRestaurants.length === 0 ? (<Shimmer/>) : (
// //     <div className="body">
// //       <div className="filter">
// //         <div className="search">
// //           <input 
// //           type="text" 
// //           className="search-box" 
// //           value={searchText} 
// //           onChange={(e)=>{
// //             setSearchText(e.target.value)
// //           }}/>
// //           {/* as soon as list of  restaturant is updated (whenver  state variable is updated  react will rerender the body component this time it will render with the filter data */}

// //           <button 
// //           onClick={ ()=>{
// //             //Filter the restraunt card and update the ui
// //             //searchtext
// //             console.log(searchText); 
// //             const filteredRestaurant =listOfRestaurants.filter((res)=>res.data.name.toLowerCase.includes(searchText));

// //             setListOfRestaurants(filteredRestaurant);
// //           }

// //           } >Search</button>
// //         </div>
// //         <button 
// //         className="filter-btn"
        
// //         onClick={()=>{ 
// //           //Filter logic here 

// //           const filteredList=listOfRestaurants.filter(
// //             (res)=> res.info.avgRating>4
// //           );
// //           setListOfRestaurants(filteredList);
// //         }}
        
// //         >Top rated Restaturant</button>
// //       </div>
// //       <div className="res-container">
// //       <div className="res-container">
// //        {
// //         listOfRestaurants.map((restaurant) => (
// //       <RestaurantCard 
// //         key={restaurant.info.id}
// //         resData={restaurant} 
// //       />
// //     ))
// //      }
// //     </div>
// //       </div>
// //     </div>
// //   )
// // };

// // export default Body;


// // //There is a bug if it searches for the next time we will not getting anything 
// // //as we have modified the restaturant list we will not able to search with the complete data 

// // // To solve this we should keep another copy of the sorted list 



// // import RestaurantCard from "./RestaurantCard";    
// // import {useState,useEffect} from "react";
// // import Shimmer  from  "./Shimmer"
// // //Function component -- normal javascript function
// // //React Elemet -- javascript object 
// // //React Hook is a normal function is given to us by Reacy ,prebuilt given by react ,we can used it directly

// // //card is coming from resobj
// // // on Click we take the call back functions

// // // State Variables -Sper powerful variable 

// // // For that we use hooks (useState)
// // //USESTATE IS TO CREATE THE STATE VARIABLE IT WILL MAINTAIN THE STATE OF THE COMPONENT
// // //LOCAL STATE VARIABLE SCOPE IS INSIDE THE COMPONENT
// // // Keeps the layer sink with the ui 

// // // First the body will be rendered then  useeffect will be called 
// // // It will sve the call back function ,render the body js ,then it will call th callback function...
// // //useeffect is usefule ,body component will be rendered ,then  call back function is call 

// // //How we fetch the data is exactly the same as we do in javascript fetch()
// // const Body =() =>{

// //   // whatever the value we will pass in the useState will become the default of const here 
// //   // const [listOfRestaurants]=useState([null]);

// //   // This is array restructuring 
// //   // const arr=useState(resList);
// //   // const [listOfRestaurants,setListOfRestaurants]=arr;
  

// //   // const arr=useState(resList);
// //   // const listOfRestaurants=arr[0];
// //   // const setListOfRestaurants]=arr[1];

// // // TO Debug the code we have to go to the inspect -> Source

// //   const [listOfRestaurants,setListOfRestaurants]=useState([]);
// //   const [filteredRestaurant,setfilteredRestaurant]=useState([]);
// //   const [searchText,setSearchText]=useState(" ")


// // // Whenever  state variable variables update ,react triggers a reconcilation cycle(rerender  the component)
// // //react is finding the difference between the older virtual don and newer virtual dom then it will changes the dom part  which has made the difference
// // // dom manipulation react do effictively
// // // useEffect hook ,Hook is nothing  but a normal javascript function it has its own specific cases Usestate is use to create the state variable
// // //useeffect is a function take two arguments 
// // //First argument is arrow function (call back function ),dependenies 

// //   useEffect(() =>{
// //     console.log("USEEFFECT CALLED");

// //   },[]);

// // // it will be called after our Body component render 

// // // whent the body render as soon as it render ,it will just call the call back function 
// // // can we use swiggy api in you app 
// // // fetch will return the promise 
// // // to handle this we will use async and await 
// // //sometimes it will block the  fetching  
// // //calling  swiggy .com  from local host has been blocked due to the Cors Poilicy
// // //Who is blocking us ,browser blockers  to call api from one origin to different origin 

// // //if there is origin mismatch ,the browser blocks that api call that is the cors poilcy 
// // //how to bypass this cors chrome extension will bypass the cors error 
// // // As soon as we got this data  ,put the data into kistof restaturant rerender the component with the ui

// // // const fetchData = async () => {
// // //   const data =await fetch(
// // //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
// // //   ); 
// // //   const json =await data.json();

// // //   console.log(json);
// // //   setListOfRestaurants(json.data.card[2].data.data.cards);
// // // }

// // // const fetchData = async () => {
// // //     const data = await fetch(
// // //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

// // //     const json = await data.json();
// // //     console.log(json);
// // //     // it is not a good way to write this code 
// // //     // setListOfRestaurants(json.data.cards[2].data.data.cards);
// // //     optional Chaining 
// // //     setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
// // // };

// // const fetchData = async () => {
// //      const data = await fetch(
// //         "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
// //       );
// //     const json = await data.json();
// //     console.log(json);
// //     // it is not a good way to write this code 
// //     // setListOfRestaurants(json.data.cards[2].data.data.cards);
// //    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
// //   setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
// // };

// // // // Conditional reasoning 
// // // if(listOfRestaurants.length ===0){
// // //   return <Shimmer/>;
// // // }




// // // how want to render this data 

// // // we are rendering  using map only 
// // //Normal Js VARIABLE
// // //  let listOfRestaurants=null
// //   // let listOfRestaurantsJS=[
// //   //  {
// //   //   info: {
// //   //     id: "10894",
// //   //     name: "Pizza Hut",
// //   //     cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
// //   //     costForTwo:40000,
// //   //     cuisines: ["Pizzas","Burger","Biryani","American","Snacks","FastFood"],
// //   //     avgRating: "4.1",
// //   //     deliveryTime: 31,
// //   //   },
// //   // },
// //   // {
// //   //   info: {
// //   //     id: "10891",
// //   //     name: "Dominos",
// //   //     cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
// //   //     costForTwo:40000,
// //   //     cuisines: ["Pizzas"],
// //   //     avgRating: "3.8",
// //   //     deliveryTime: "31 minutes",
// //   //   },
// //   // },

// //   // {
// //   //   info: {
// //   //     id: "10897",
// //   //     name: "MCdONALD",
// //   //     cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
// //   //     costForTwo:40000,
// //   //     cuisines: ["Pizzas"],
// //   //     avgRating: "4.1",
// //   //     deliveryTime: 31,
// //   //   },
// //   // },
// //   // ];
// //   // const list =[]
// //   // lsit=["Abc"];
// //   // list.push("Abc");

// //   //Use ternary operator to handle this

// Whenever state variables update ,reat triggers a reconcilation cycle(re-renders the component)


// ADDING THE SEARCH BUTTON

// const [listofRestaurants,setListOfRestraunt]=useState([]);
// const [searchText,setsearchText]=useState(" ")


// //   return  listOfRestaurants.length === 0 ? (<Shimmer/>) : (
// //     <div className="body">
// //       <div className="filter">
// //         <div className="search">
// //           <input 
// //           type="text" 
// //           className="search-box" 
// //           value={searchText} 
// //           onChange={(e)=>{                                     // to get the input box to be updated , and setting the value as well 
                                                                     // react is finding the difference beteen the new and old virtual dom 
                                                                     //react rendering the  whole componet
                                                                     // react 
// //             setSearchText(e.target.value)
// //           }}/>

// //           {/* as soon as list of  restaturant is updated (whenver  state variable is updated  react will rerender the body component this time it will render with the filter data */}

// //           <button 
// //           onClick={ ()=>{
// //             //Filter the restraunt card and update the ui
// //             //searchtext
// //             console.log(searchText); 

// //             const filteredRestaurant =listOfRestaurants.filter((res)=>res.data.name.toLowerCase.includes(searchText));

// //             setfilteredRestaurant(filteredRestaurant);
// //           }

// //           } >Search</button>
// //         </div>
// //         <button 
// //         className="filter-btn"
        
// //         onClick={()=>{ 
// //           //Filter logic here 

// //           const filteredList=listOfRestaurants.filter(
// //             (res)=> res.info.avgRating>4
// //           );
// //           setListOfRestaurants(filteredList);
// //         }}
        
// //         >Top rated Restaturant</button>
// //       </div>
// //       <div className="res-container">
// //       <div className="res-container">
// //        {
// //         filteredRestaurant.map((restaurant) => (
// //       <RestaurantCard 
// //         key={restaurant.info.id}
// //         resData={restaurant} 
// //       />
// //     ))
// //      }
// //     </div>
// //       </div>
// //     </div>
// //   )
// // };

// // export default Body;

//// Build the search bar to search the restaturant with the name 


// import RestaurantCard from "./RestaurantCard";    
// import {useState,useEffect} from "react";
// import Shimmer  from  "./Shimmer"
// const Body =() =>{
//   const [listOfRestaurants,setListOfRestaurants]=useState([]);
//   const [filteredRestaurant,setfilteredRestaurant]=useState([]);
//   const [searchText,setSearchText]=useState(" ")
//   useEffect(() =>{
//    fetchData();

//   },[]);
// const fetchData = async () => {
//      const data = await fetch(
//         "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//       );
//     const json = await data.json();
//     console.log(json);
//   setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//   setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
// };
//   return  listOfRestaurants.length === 0 ? (<Shimmer/>) : (
//     <div className="body">
//       <div className="filter">
//         <div className="search">
//           <input 
//           type="text" 
//           className="search-box" 
//           value={searchText} 
//           onChange={(e)=>{
//             setSearchText(e.target.value)
//           }}/>
//           <button 
//           onClick={ ()=>{
//             console.log(searchText); 
//             const filteredRestaurant =listOfRestaurants.filter((res)=>res.data.name.toLowerCase.includes(searchText));

//             setfilteredRestaurant(filteredRestaurant);
//           }

//           } >Search</button>
//         </div>
//         <button 
//         className="filter-btn"
        
//         onClick={()=>{ 
//           //Filter logic here 

//           const filteredList=listOfRestaurants.filter(
//             (res)=> res.info.avgRating>4
//           );
//           setListOfRestaurants(filteredList);
//         }}
        
//         >Top rated Restaturant</button>
//       </div>
//       <div className="res-container">
//       <div className="res-container">
//        {
//         filteredRestaurant.map((restaurant) => (
//       <RestaurantCard 
//         key={restaurant.info.id}
//         resData={restaurant} 
//       />
//     ))
//      }
//     </div>
//       </div>
//     </div>
//   )
// };

// export default Body;



import RestaurantCard from "./RestaurantCard";    
import {useState,useEffect} from "react";
import Shimmer  from  "./Shimmer"
const Body =() =>{
  const [listOfRestaurants,setListOfRestaurants]=useState([]);
  const [filteredRestaurant,setfilteredRestaurant]=useState([]);
  const [searchText,setSearchText]=useState(" ")
  useEffect(() =>{
   fetchData();

  },[]);
const fetchData = async () => {
     const data = await fetch("https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
   console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


  setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};
  return listOfRestaurants.length === 0 ? (<Shimmer/>) :(
    <div className="body">
      <div className="filter">
        <div className="search">
          <input 
          type="text" 
          className="search-box" 
          value={searchText} 
          onChange={(e)=>{
            setSearchText(e.target.value)
          }}/>
          <button 
          onClick={ ()=>{
            console.log(searchText); 
            const filteredRestaurant =listOfRestaurants.filter((res)=>res.data.name.toLowerCase.includes(searchText));

            setfilteredRestaurant(filteredRestaurant);
          }

          } >Search</button>
        </div>
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
        filteredRestaurant.map((restaurant) => (
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


