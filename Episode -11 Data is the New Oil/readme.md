some of the restaturant has promoted label 
this is the freature 
we will take the existing card 
according to promoted we will split it 

High order components is components which will take some components and enhances it  with the new components 
example adding promoted label in the card


now we will add some more features

controlled and uncontrolled
important part of react is to manage the data

ui is very static and data is different part of it

all the react application has two layer
ui layer data layer
ui layer is powered by the data layer 
the major part is data layer

ui is the jsx 
data layer -- state ,props 

how we manage data properly in the app 

build a feature to learn the concept

if go to the restqaurant  page 
we will have restaturant menu 
in that we have certain section  - Recommended (4)
newly added (9)
lsssi shakes and smoothies 


figure out how we get the data 

// built the accordians 
show and hide the item list 

// let learn 

//react devtools chrome
//if i click on another ,i want onther to collaspe
//it is very tough to built that kind of feature 
// they are controlled in respective way as each one has differnt state variable

// Restaurant category has power of show and expand
//i want to give this power to the restaturant menu
// i want restatutanr menu should controll all of this restaturant category 

// whatever should i pass it should pass to the children


// controlled  vs uncontrolled componet 

// when it has its own state restaturant category 
was uncontolled

// restaturant menu will controlled  the restauturant category 

//lift the state up to control the things 
// if i collapse one,other should also collapse (take example of Swiggy)


//data layer is very very important 

// props drilling 
// in real world example lot of lots component 

react application goes big 
there would be lot of level nested inside it 

passing the things become very tough

the data is passed from parent to children 
in react 

restaturrant menu pass data restaturant category
it pass data to the item category
 kind of data stream ,there children to thrir children 

 if there is dummy data in the restaturant menu
 const dummy ="Dummy data"

 and i want pass it to the  item list 
 
 it could be pssible via  restaturant category 
 now i can access in the item list 
 passing the dummy data as a props 
 but think of very big react application 

 there are 7 -8 nesting
  will you follow the same pattern 
  Restaturant category nothing do this 

  this concept is props drilling 
  it is very important concept 
  read in the react docs 

  the problem with passing props 

  props is an essentail things 
  and state as well 

  component hs its own state and props 

  what if data is present somewhere else
  in large sceneria we need global dat ,i want to access some data 

  react  gives us the super power known as react context 
  while we use context we can avoid props drilling 

  it will be foolish if we pass from top to 10 layer 
we should nt pass to it 

how much level 

  in React  Context 
a kind of global place  where data is kept 
and anybody  can access it 
that is known as react context  



things of data which can be readable in any component 
what kind of data it is 

logged in user 
once we logged in 
we need that info in the header as well
another example is Theme  -light theme and dark theme 

if there is a dark theme 
i want the background to be black 
that we need anywhere in the app ,let try to creeat the context 
we are in episode 11

context solve the problem of props drilling 
as it is a central store 

context is a kind of global things
 it is created in utils 
 UserContext - this context will hold the global info 

 react give access  to important utility function 

 we use create context comes from react library 
 we will give some information to hold
 if // Suppose after the login i want the information of the logged in user 
// using react hook we can do it 

useContext 

// create multiple context 
//use when you will use in most of the components

// in class based component we dont have hooks
//we cant use usecontext over here 

// Suppose about.js is a classed based component

import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props){
    super(props);
    //console.log("Parent Constructor");
  }
}
componentDidMount() {
  //console.log("Parent Component Did Mount");
}

render(){
  //console.log("Parent Render");
}

return (
  <div>
  <h1>About Class Component</h1>
  <div>
    LoggedIn User 
    <UserContext.Consumer> // componet in that we have callback data is given by react 
    <!-- {
      (data)=>console.log(data)}
    } -->

    {
   ({loggedInUser}) =><h1 className="text-xl font-bold">{loggedInUser}</h1>
    }
    </UserContext.Consumer>
   </div>
  <h2>This is Namaste React Web Series </h2>
  <UserClass name={"First"} location={"Dehradun Class"}/>
  </div>
);
}
}
export default About;
// both are the way to consume the context 

// what we wanted to change the value of context instead of statuc

go to the app.js

const AppLayout =() => {
  // may be some authentication return over it 
   // username and password is correct or not

   const [userInfo,setUserInfo]=useState();
   // authentication 
   useEffect(()=>{
    //make an api call and send username and password

    const data= {
      name:"Akshay"
    };
    setUserInfo(data.name);
   },[])
 // how would pass this informstion to the context
  // using context provider

}


in the js of network of fetch.xr
we will get the details

