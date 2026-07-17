import React ,{ lazy,Suspense}from "react" ;
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Body from  "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
// import  About from "./components/About";
import  Contact  from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import appStore from "./utils/appStore";
// import Grocery from "./components/Grocery";


//lazy loading 

//when our app load intially  ,app home page will load  not load the code for grocery 
//only when i go to the grocery page then only we will load that code

// we will loading when we are required
// lazy is a function which is given by react to us
// it will come from the react library
//it is a one line code ,it is lot of power ,it can do magical things
//grocery.js has its own code 
//initially grocery code not there when we click on it we will get the error 
//it will take some time ,but react will try to render at that time we wil get error
// so we have to make use of Suspense
const Grocery=lazy(() => import("./components/Grocery") );
const About=lazy(() => import("./components/About") );

//create browser Router will vreate the routing configuration for us 
// it will list of paths (paths is nothing but an object)
//object is nothing but key value and pair 


//outlet is like a tunnel such that children will move into it 
// ui layer and Data layer will make up the front end

//CreateBrowserRouter is export from rreact-router-dom
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
//  we want header and footer in every page example of about and contact page 


const AppLayout=() =>{
  return (
    <Provider store={appStore}>
    <div className="app">
    <Header/>
    <Outlet/>
    </div>
    </Provider>
  )
}
// Some information that will tell the browserRouter  that what will happen in specific route 
//page is nothing but a composition of component 
// about us is also a component 
// below are the routing configuration 
//Every thing is component in react 



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
    element:<Suspense fallback={<h1>Loading....</h1>}><About/></Suspense>
    },
    {
    path:"/contact",
    element:<Contact/>,
  },
  {
      path :"/grocery",
      element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>,
  },
  {
    path :"/restaurants/:resId",
    element:<RestaurantMenu/>
  },
  {
    path :"/cart",
    element:<Cart/>
  },

  ],
  errorElement:<Error/>,
  }
]);
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);


// http://localhost:1234/restaurants/123
//create the  component the restaurants menu