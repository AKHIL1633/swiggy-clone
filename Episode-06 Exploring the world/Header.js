// // Actually like the component name



// import { LOGO_URL } from "../utils/constant";
// const Header = () => {
//   // local variable
//   // on click of the button we should chain the login button to the log out button 
//   let btnName="Login";
//   return (
//     <div className="header">
//       <div className="logo-container">
//       <img className="logo" src= {LOGO_URL}/>
//     </div>
//     <div className="nav-items">
//       <ul>
//         <li>Home</li>
//         <li>About Us</li>
//         <li>Contact us </li>
//         <li>Card</li>

//      login button  we need to creat a local variable btnName="Login"
 //      it is not changing


//         <button 
//         className="login" 
//         onClick={()=>{
//           btnName ="Logout"
//           console.log(btnName);
//         }}
//         >
//         {btnName}
//         </button>

//       </ul>
//     </div>
//     </div>
//   )
// };

// export default Header;

// //ui does got updated  that is why javascript does not work that why we used state variable 
//here no way for the react ot track  in the above example 

 

// use of state variable 
// it is rendering the whole header component 

//what will happen ish react will render this component again 


// Actually like the component name

// import { LOGO_URL } from "../utils/constant";
// import { useState } from "react";

// const Header =()=>{
//   // local variable
//   // on click of the button we should chain the login button to the log out button

//   // let btnName="Login";
//   // there is no way for react to track 

//   const[btnNameReact,setBtnNameReact]=useState("Login");
//   return (
//     <div className="header">
//       <div className="logo-container">
//       <img className="logo" src= {LOGO_URL}/>
//     </div>
//     <div className="nav-items">
//       <ul>
//         <li>Home</li>
//         <li>About Us</li>
//         <li>Contact us </li>
//         <li>Card</li>

//         <button 
//         className="login" 
//         onClick={()=>{
//           setBtnNameReact("Logout");
//         }}
//         >
//         {btnNameReact}
//         </button>

//       </ul>
//     </div>
//     </div>
//   )
// };

// export default Header;



/// login and logout both toggle changes on  clicking


// Actually like the component name

// import { LOGO_URL } from "../utils/constant";
// import { useState } from "react";

// //when i click this login button ,Header whole component was called again 
// //this react was keeping track of this button 
// //it will give the updated the value of the btnNameReact 


// const Header =()=>{
//   // local variable
//   // on click of the button we should chain the login button to the log out button

//   // let btnName="Login";
//   // there is  way for react to track 
// // initial state variable login post on click it changes to logout with the updated value
// //As soon as you call setBtnNameReact it will update the btnnamereact  value then it will  find the diff between 
// // the older version and new version and it will see the difference in the button only this button will be changed 

// // when you click on the login button only the header component changed  rest all remains same 

// // let make the toggle effect on it 
// // everytime the reconcilation algorithm is called when we click on the login button 


//   const[btnNameReact,setBtnNameReact]=useState("Login");
//   console.log("Header render ");
//   return (
//     <div className="header">
//       <div className="logo-container">
//       <img className="logo" src= {LOGO_URL}/>
//     </div>
//     <div className="nav-items">
//       <ul>
//         <li>Home</li>
//         <li>About Us</li>
//         <li>Contact us </li>
//         <li>Card</li>

//         <button 
//         className="login" 
//         onClick={()=>{
//           btnNameReact === "Login" 
//           ? setBtnNameReact("Logout")
//           : setBtnNameReact("Login");
//         }}
//         >
//         {btnNameReact}
//         </button>

//       </ul>
//     </div>
//     </div>
//   )
// };

// export default Header;