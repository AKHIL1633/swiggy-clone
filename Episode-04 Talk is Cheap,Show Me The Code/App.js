import React  from "react" ;
import ReactDOM from "react-dom/client";



// header
  // logo
  // Navitem
//body 
 // Search 
 // Restaurant Container card container will have lot of restaturant cards
     // Restaturant card 
       // img 
       // name of rest ,Star rating,cuisine,delivery time 

// footer
   // Copyright
   //Links
   // address 
   // contact

//---------------------------------------
// Let start from scratch 
// app layout 


const Header =()=>{
  return (
    <div className="header">
      <div className="logo-container">
      <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact us </li>
        <li>Card</li>
      </ul>
    </div>
    </div>
  )
}


// Restaturant card
// Way to write the inline style take the javascript object 
// First bract is telling about the javascript ,second bracket is telling about the javascript objects 
// const styleCard ={
//   backgroundColor:"gray";
// }



const RestaturantCard =() =>{
  return (
    // < div className="res-card" style={styleCard}>
    <div className="res-card" style={
    {
    backgroundColor:"#f0f0f0",
    }}>
    <img className="res-logo" alt=" " src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/c8560e2d-defb-437e-a4af-169a700b7ac0_574056.ss.jpg"/>
      <h2>Meghana Foods</h2>
      <h4>Biryani,North Indian ,Asian </h4>
      <h4>4.4 stars </h4>
      </div>
  )
}
// we can many cards in the Body 

const Body =() =>{
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
      <RestaturantCard  />
      <RestaturantCard/>
      <RestaturantCard/>
      <RestaturantCard/>
      <RestaturantCard/>
      <RestaturantCard/>
      <RestaturantCard/>
      <RestaturantCard/>
      <RestaturantCard/>
      <RestaturantCard/>
      <RestaturantCard/>
      <RestaturantCard/>
      <RestaturantCard/>
      <RestaturantCard/>
      <RestaturantCard/>
      <RestaturantCard/>


     </div>
    </div>
  )
}
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


