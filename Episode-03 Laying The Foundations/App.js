// React create Element == This basically create the object  when we return this element to dom then it became an html element

// to execute the project npx parcel index.html
// this will create the development build for us 
// parcel is hosting this build in the local host

// to create the script  we have package.json 
// we can create the script in dev mode 
// scripts
// "start": "parcel index.html" -- starting the project in dev mode 
// "build" :"parcel build index.html"

// this is the industry standard 
//we create the script
//go to the package.json  find the scripts and run the projects 

// npm run start
// it basically called the script parcel index.html

// to build the project for production 
//npm run build

// npm run start is same as  npm start 
// Behind the scene calling the parcel index.html

//What is Dom element ?
//What is React Element ?

// h1 tag with the heading in react

// it will do a lot of things 

// We are executing 
// const heading=React.createElement(
//   "h1",
//   {id:"heading"}, // object
//   "Namaste React"); // what are the children of the heading 

// React.createElement creates an object
// when we render this element into dom then it become the html element 


// TO display into browser ,we use ReactDom.createRoot
// to get this we use import ReactDOM from "react-dom/client"

// const heading=React.createElement("h1",{id:"heading"},"Namaste React🚀 ")
// const root=ReactDOM.createRoot(document.getElementById())
//root.render(heading)

// Let learn what does root.render will do 
// we create a react elemet it is nothing but an object
//you can check in the console ,it is object 

// root.render 
//reactdom take this object convert into htML ELEMET 
//PUSH IT TO THE BROWSER REPLACE EVERYTING WHAT WASTHERE IN THE HTML CODE 

// In THE HTML CODE MOST OF THEM NOTrENDERED 
// SUPPOSE THERE IS A BUG ,YOU CAN SEE CLEARLY 

// THIS IS NOT A GOOD WAY 
// CREATING REACT.CREATEElement  is annoying
// that is the reaaon
//Soom react developer realise ,this is not going to work 
// this is not developer friendly
// Facebook developer comes with Jsx
// React is different and jsx is different

//we can write react without jsx as well
//it make the developers life as easy 

// how we used to build the web application earlier
// from start html 
// onclick logic in javascript
// it tries to merge javascript and html together

// jsx is a convention where we do it 

//react element created using React
// const heading=React.createElement("h1",{id:"heading"},"Namaste React🚀 ")
// below code is equivalent to the below code 
// const jsxHeading=<h1 id="heading">Namaste React using JSX🚀 </h1>
// React elemet created using jsx

// jsx is  differnet than html

// jsx is different html is different  xml is different 
// it looks more closer like xml
// jsx is just just ,it is a different syntax

// console.log(jsxheading)
//console.log(heading)
// both will give the same output 
// We are writing code for human not for machine otherwise we will write the code in binary 

// code is for human first 

// A good library and framework is that makes developers life easy 

// Facebook developer built it 
// We will never be using react.creatElement 

// jsx is a valid javascript 
// it is not a valid javascript ,it is not pure javascript
//js engine does not understand jsx

// js understand ecma script es6
// This is what pure javascript that js engine understand 
// does your browser understand this piece of code 
//it is not a valid pure javascript

// if jsengine not able tounderstand it 
// parcel is doing the job behid the scene
// even before the code is given to the browser 
// parcel will transpiles it first 

// Jsx(Transpiled before it reaches the Js engine )

// parcel will do conversion ,parcel is like a amanager for you 
// it gives the transpiles responsibilty to do Babel,it is apackage
//parcel install it already 
//as soon as i build babel will transpiles the code 

//Babel is a javascript compiler ,takes your code and convert it to the js engine understand

// Babel is not created by facebook

// How is this code running ?

// We were wring react.createelement => rEACTeLEMENT =?jS OBJECT==> htMLeLEMENT(RENDER)


// jsx ==>React.createElement => ReactElement => Js object => Html Element(Render)

// a kind jsx is nothing but createElemnt 
// Babel is converting Jsx code  into ReactElement 
//Jsx end of the day converted to the ReactElement 

//Babel is a superhero,Javascript compiler 
// Babel is a javacript code ,it will convert differnt type of code to the different type of code 

//babeljs.io

// parcel is a manager of  babel(transpiler)

//babel reads one by one character and understand the language and try to convert it 

// just like compiler Design 

// it is marvel engineering 

// javescript is the most loved language 

// how it is not html ?
// it is html and javascript mix 

// in jsx we have to do the className 

// how do we write an anchor tag ,how we write image tag 

//Single line vs multiline
//if the jsx in th single line ,below is the example
// const jsxHeading=<h1 className="head">Namaste React using Jsx </h1>

// for multicomment ,we have to wrap inside the () bracket 
//const jsxHeading=(<h1 className="head">Namaste React using Jsx </h1>)

// React Element 

// const heading=(
//   <h1 className="head" tabIndex="5">
//     Namaste React using JSX🚀
//   </h1>
// )

// IN REACT ,EVERYTING IS a component
// Header ,footer ,search bar is a component 


// What is a component ?
// There are two types of component
// a) Class Based Component -Old  b) Functional Based Component -New 

// no one uses Class Based Component 

// you should be very good at functional Based component

//here we will learn both 

//There are some legacy project ,which are still using the class based components

// What is a React Function component ?
// it a normal javascript function
// a javascript function which return the some piece of jsx 


// Function component should be created with the capital letter 
// a function which return the jsx code is the function component
//jsx is the react element
// const HeadingComponent=()=>{
// return <h1>Namaste React Functional Component</h1>
//  };
// const fn=() => true
// const fn() =>{
// return true;
//  }

// both code are same
const HeadingComponent=() => {
  return <h1>Namaste React Functional Component</h1>;
};

// in industry they  follow it assume as it return actually 

const HeadingComponent2=() => (
  <div>
  <h1>Namaste React Functional Component</h1>
  </div>
);


// React element 
const Heading3=(
<h1 className="head" tabIndex="5">
  Namaste React using JSX
</h1>
);

// I WANT to render the component into the root
// we cant render like this root.render(HeadingComponent);
//How to render it
//root.render(<HeadingComponent/>) // in this way you render it 


// let play with code 
import React from "react";
import ReactDOM from "react-dom/client";

// const Title=function(){
//   return(
//     <h1 className="head" tabIndex="5">
//       Namaste React using JSX 🚀
//     </h1>
//   )
// }

const Title=() =>{
  <h1 className="head" tabIndex="5">
  Namaste React using Jsx
  </h1>
}

//below is the example of the component composition
// Component Composition 


const HeadingComponent=() =>(
  <div id="container">
    <Title/>
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>
)

/// last part of the episode
//functional component return some piece of jsx code 
// or return reactElement


// IF I WANT TO PUT ELEMENT INSIDE THE COMPONENT 
// iN JSX anywhere you wrote {} - you can write 
//any javascript code or expressions

const number=10000;
const HeadingComponent4=() =>(
  <div id="container">
    {number}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

// you can write { 100 + 200 }
//{console.log("Akhil")}

// react elemet inside the react componet 
// you can amazing inside it 
const Title=(
  <h1 className="head" tabIndex="5">
  Namaste React using Jsx
  </h1>
)

const HeadingComponent4=() =>(
  <div id="container">
    {Title}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);


//-------------------------------------------------
// React element kei andhar another element 

const elem=<span>React Element</span>

const Title=(
  <h1 className="head" tabIndex="5">
    {elem}
  Namaste React using Jsx
  </h1>
)


// YOU Can put component inside a react Element as well


const elem=<span>React Element</span>

const HeadingComponent4=() =>(
  <div id="container">
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);


const Title=(
  <h1 className="head" tabIndex="5">
    {elem}
  Namaste React using Jsx
  <HeadingComponent/>
  </h1>
)

// -------------------------------------------------

// what if an api send some malicious dat
//if api is a bad api ,for the sake of an argument
// attacker  try to run some code,javascript is running it
// code will be run in your browser
//what can  i do ,this attack is know cross script scripting

// it can steal cookies ,attack local storage
// jsx will take care of this kind of attack
//jsx will escape it 
//it will santise the data whatever is coming and pass it
// jsx is such powerful




//const fdata=api.getData()

//Both way of writing title is same now 
//Everything is javascript
// Title is a normal function
// {Title()}

// it is just to make your fundamental strong


const HeadingComponent=() =>(
  <div id="container">
    {Title()}
    <Title/>
    <Title></Title>
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

// jsx is making readable to react 













//------------------------------------------------------------

//JSX It is not html we can say it is like html like syntax more like xml

//React.createElement  gives you the element is  an object at the end  (Jsx is rendered as the html element)


// JSX ==> React.createElement =>ReactElement-Js Object ==>HTMLElement(render)

// babel is converting into Js object (it taks all your jsx code ) ,we will used this syntax to create element 

// Babeljs.io is a javascript compiler // it read the character token by token

//it does a lot of other things as well ,old browser does not es6 Babel will do the Transpilation 

//attribute of JSX has to be given in the camel case 

// const jsxHeading=<h1 className="head" tabIndex="1">Namaste React using JSX</h1>;

// to write in the multiple lines we have to wrap it with the  round brackets


// JSX => babel trannspiles it to React.createElement => ReactElement.js object =>Html Element (Render)


//React Element
// jsx is the React element 

// const jsxHeading=(<h1 className="head" tabIndex="1">Namaste React using JSX</h1>);
// console.log(jsxHeading);


//React component ==> Everything is a componet it a react yes it is true

// Class Based Components --> Old way of writing code
//Functional Components ---> New 

// React Functional Component -- Just a normal Javascript function -- Name with capital letter which return the piece of JSX
// a function which return the jsx code 
// a function which return the react element ,we will use functional compnent all across the pages 
//if you have one line of code then remove return 

// const HeadingComponent1=() =>{
//   return <h1>Namate React Functional Component</h1>
// }

// const HeadingComponent2=() =>(
//   <div id ="container">
//   <h1>Namate React Functional Component</h1>
//   </div>
// );


// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

// i want to render heading component 

// import React  from "react" ;
// import ReactDOM from "react-dom/client";

// React Element
// const jsxHeading=(
// <h1 className="head" tabIndex="1">
//   Namaste React using JSX
//   </h1>
// );

//  React Functional Component


// const HeadingComponent=() =>(
//   <div id ="container">
//   <h1 className="heading">Namate React Functional Component</h1>
//   </div>
// );

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent/>);


// iwant to render title component inside the heading (This is component Composition  )

// import React  from "react" ;
// import ReactDOM from "react-dom/client";

// const Title = () => (
// <h1 className="head" tabIndex="1">
//   Namaste React using JSX
//   </h1>
// );



// const HeadingComponent=() =>(
//   <div id ="container">
//     <Title/>
//   <h1 className="heading">
//     Namate React Functional Component</h1>
//   </div>
// );


// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent/>);


// {} you can run any javascript code in the jsx code



//import React  from "react" ;
// import ReactDOM from "react-dom/client";

// React Element

// const jsxHeading=(
// <h1 className="head" tabIndex="1">
//   Namaste React using JSX
//   </h1>
// );

//  React Functional Component


// const HeadingComponent=() =>(
//   <div id ="container">
//   <h1 className="heading">Namate React Functional Component</h1>
//   </div>
// );

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent/>);


// iwant to render title component inside the heading (This is component Composition  )

// import React  from "react" ;
// import ReactDOM from "react-dom/client";

// const Title = () => (
// <h1 className="head" tabIndex="1">
//   Namaste React using JSX
//   </h1>
// );
// fgrg


// const HeadingComponent=() =>(
//   <div id ="container">
//     <Title/>
//   <h1 className="heading">
//     Namate React Functional Component</h1>
//   </div>
// );


// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent/>);

// {} code to insert javascript inside the jsx code 

// import React  from "react" ;
// import ReactDOM from "react-dom/client";

// const Title = () => (
// <h1 className="head" tabIndex="1">
//   Namaste React using JSX
//   </h1>
// );

// // {100 + 200 } ==?you can inject any javascript code inside the parenthesis 

// const number=10000;

// const HeadingComponent=() =>(
//   <div id ="container">
//     <h2>console.log{"abcd"}</h2>
//     {Title}
//     <h2>{number}</h2>
//   <h1 className="heading">
//     Namate React Functional Component</h1>
//   </div>
// );


// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent/>);



import React  from "react" ;
import ReactDOM from "react-dom/client";

const elem=<span>React Element </span>

const Title =(
<h1 className="head" tabIndex="5">
  {elem}
  Namaste React using JSX
  </h1>
);

// suppose data is coming from the api 

// const  data=AudioParam.getData() 
// get can  send some milicauious data 
//This attack is known as Cross Siting  (He can red cookies ,private data )if i am able to run the javascript but Jsx will escape it
//It will santize the data whatever is coming it will prevents Cross Scripting 

// You can render in this way 
// {Title}
// <Title></Title>
//<Title/>
//{Title()}
//hi
const number=10000;

const HeadingComponent=() =>(
  <div id ="container">
    <h2>{console.log("abcd")}</h2>
    {Title}
    <h2>{number}</h2>
  <h1 className="heading">
    Namate React Functional Component</h1>
  </div>
);


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);


