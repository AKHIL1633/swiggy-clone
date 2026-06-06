import React,{lazy,Suspense,useEffect,useState}  from "react" ;
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from  "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
// import  About from "./components/About";
import  Contact  from "./components/Contact";
import Error from "./components/Error";

import RestaurantMenu  from "./components/RestaturantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

//outlet is a component below header you create it ,whenever there is a change in the path the outlet will be filled according to the path
///about page that fill be filled in that page it is like a tunnel 

//outlet is like a tunnel such that children will move into it 
// ui layer and Data layer will make up the front end

//vreateBrowserRouter is export from rreact-router-dom
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

// earlier we are rendering the Applayout directly now i WILL PROVIDE THE ROUTER CONFIGURATIONS
//
// const AppLayout=() =>{
//   return (
//     <div className="app">
//     <Header/>
//     {/* if path = /  */}
//     <Body/>
//     {/* if path = /about */}
//     <About/>
//     {/* if path = /contact  */}
//     <Contact/>
//     </div>
//   )
// }

// Chunking
// Code splitting
//Dynamic Bundling
//Lazy loading
//on demand loading

// lazy is a function fiven to us by react 
//this import will take the path of my grocery component

// this is a one line code which has lot of power in it


const Grocery=lazy(() => import("./components/Grocery"));
const About=lazy(() =>import ("./components/About"));
const AppLayout=() =>{
  const [userName,setUserName]=useState();
  // authentication 

  useEffect(()=> {
    // Make a Api call and send username and password
    const data={
      name:"Akshay Saini",

    };
    setUserName(data.name);
  },[])

  // i have got my context 
  // to pass new information to the app we use 
  // we will use usercontextProvider  that is provided by Rect
  //it will warp this whole app inside the ContextProvide
  //the component will not be using the default value
  //they will use this value 
  //in all the cart i have this value
  // i am overriding the userContext 
  // that is why loggedinuser is Akshay Saini

  // return (
  // <div className="app">
  //   <userContext.Provider value=({loggedInUser:userName})>
  //   <Header/>
  //   </UserContext.Provider>
  //   </outlet>
  //   </div>
  // )

  // here the header will have the new logged in value and rest will have 
  // default value
  //context is the global space which i can provide small portion of the app
  // or the whole portion of the app
  //I can create the multiple context

  // i can overrider where i want it 

  // Generally want you do is you want to access something
  // all across your app
  //i will provide provider in the app
  // the whole components can access in it

// can we have nested provider
// is it correct or not
// header will use elon musk rest as akshay saini

// return(
//   // Default
//   <UserContext.Provider value={{loggedInUser:userName}}>
//     {/* Akshay Saini */}

//     <div className="app">
//       <UserContext.Provider value={({loggedInUser:"Elon Musk"})}>
//         {/* Elon mUsk */}
//         <Header/>
//       </UserContext.Provider>
//       <Outlet/>
//     </div>
//   </UserContext.Provider>

// // it depends on were you provides the provider


// )






  return (
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="app">
    <Header/>
    <Outlet/>
    </div>
    </UserContext.Provider>
  )
}
// Some information that will tell the browserRouter  that what will happen in specific route 
//page is nothing but a composition of component 
// about us is also a component 
const appRouter=createBrowserRouter([
  {
  path:"/",
  element:<AppLayout/>,
  children:[
    {
      path:"/",
      element:<Body/>,

    },
    {
    path:"/about",
    element:(
    <Suspense fallback={<h1>Loading ... </h1>}>
      <About/>
      </Suspense>),
    },
    {
    path:"/contact",
    element:<Contact/>,
    },
   {
    path:"/grocery",
    element:(
    <Suspense fallback={<h1>Loading ... </h1>}>
      <Grocery/>
      </Suspense>),
  },
  {
    path:"/restaurants/:resId",
    element:<RestaurantMenu/>
  }

  ],
  errorElement:<Error/>,
  }
]);
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);

// const appRouter=createBrowserRouter([
//   {
//     path:"/",
//     element:<AppLayout/>,

//   },
//   {
//     path:"/about",
//     element:<About/>,
//   }
// ]);
//const root=ReactDOM.createRoot(document.getElementById("root"));
//root.render(<RouterProvider router = {appRouter}/>);
// i imported the RouteProvidee  component this component is  exported from my  reacter-router-dom library  
//code written in reacter-router-dom 
//localhost:1234/about 
//the above link will work 

// Go to the react-router-dom documentation 

// shortcut to create the component is rafc 
//when we put the unexpected url it will show ,output like that 

//reacter-router dom will create the error page by itself 
//we can create our own page using component oops something went wrong 




// import React  from "react" ;
// import ReactDOM from "react-dom/client";
// import Header from "./components/Header";
// import Body from  "./components/Body";
// import RestaurantCard from "./components/RestaurantCard";
// import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
// import  About from "./components/About";
// import  Contact  from "./components/Contact";
// import Error from "./components/Error";
// import RestaurantMenu from "./components/RestaurantMenu";

// //create browser Router will vreate the routing configuration for us 
// // it will list of paths (paths is nothing but an object)
// //object is nothing but key value and pair 


// //outlet is like a tunnel such that children will move into it 
// // ui layer and Data layer will make up the front end

// //CreateBrowserRouter is export from rreact-router-dom
// // Restaturant card
// // Way to write the inline style take the javascript object 
// // First bract is telling about the javascript ,second bracket is telling about the javascript objects 
// // we can many cards in the Body 
// //how data comes from backend to us it will comes in the form of json to us

// // Developer consol -> inspect _>Network ->Refresh the page ->> Fetch/Xhr 
// //there will see the api of the restaturant list 

// // install the plugin  Json viewer Pro 

// // Conflict  Drivien  Ui (our website are driven by Conflict ,contolling  is driven by data as per the location 
// //All the ui is driven by Ui 
// //As the data can be different for Delhi ,Mumbai ,Bangalore according to the data coming from the backend Ui changes 

// // earlier we are rendering the Applayout directly now i WILL PROVIDE THE ROUTER CONFIGURATIONS
// //
// // const AppLayout=() =>{
// //   return (
// //     <div className="app">
// //     <Header/>
// //     {/* if path = /  */}
// //     <Body/>
// //     {/* if path = /about */}
// //     <About/>
// //     {/* if path = /contact  */}
// //     <Contact/>
// //     </div>
// //   )
// // }
// //  we want header and footer in every page example of about and contact page 


// const AppLayout=() =>{
//   return (
//     <div className="app">
//     <Header/>
//     <Outlet/>
//     </div>
//   )
// }
// // Some information that will tell the browserRouter  that what will happen in specific route 
// //page is nothing but a composition of component 
// // about us is also a component 
// // below are the routing configuration 
// //Every thing is component in react 



// const appRouter=createBrowserRouter([
//   {
//   path:"/",
//   element:<AppLayout/>,
//   children:[
//     {
//       path:"/",
//       element:<Body/>,

//     },
//     {
//     path:"/about",
//     element:<About/>
//     },
//     {
//     path:"/contact",
//     element:<Contact/>,
//   },
//   {
//     path :"/restaurants/:resId",
//     element:<RestaurantMenu/>
//   },

//   ],
//   errorElement:<Error/>,
//   }
// ]);

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(<RouterProvider router = {appRouter}/>);


// // http://localhost:1234/restaurants/123
// //create the  component the restaurants menu