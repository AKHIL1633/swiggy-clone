Prettier -code Formatter 

Bracket Pair Colorization Toggler

it is easy to distinguish the brracket

better comments 

inspect>console
inspect>network
inspect>application

rafce 

in jsx comment should be written as 

{/* */}

react Developer tools in chrome
-- in console 
-- we will two more things 
-- Components 
-- Profiler 


--it will show all the components 
--if any click on any components it will show the data layer
--it will show the virtual dom of the ui


on the right hand side it will show the props which it has recived 

-- profiler (it will record the things what you do in the react application )

it is recording all our action 
all the action we are doing (what i was doing )

flamegraph (colourful are the one which are affected by our action)


-ranked
--timeline

this tool will help you 
try to use as much as you can 
we need all the accordian has different show items 

----------------------------------



error in the console

whenever you use map in the code,always have a key over there 
key 


in the browser itself you can turn off the internet

Network > No throtting > offline 

if someone is using your app ,this will be displayed 

start component name with the Capital letter 

When you build large scale application ,how to make it perform 

what is the problem  of such developing large scale  app 


whenever you are developin a react application 
the second episode 
parcel is a bundler 

but one imp job is to bundle our application 

it means that all your file and make it into one 

// generate one js file 

// whole code will be compressed 

// it will generate one js file 

//loaded into the browser 

network tab -> js file will be there it will contained all that code will be present ,is it good or bad

let go to makebytrip

med size xompany use to book flights 
you can book everything 

it is a huge 
it has so many components 
everything is a component 
one js file for thousand of component 
size of the js file will increase a lot by how many components it hold 
you cannot develop frontend application 
you have to take care of it 
otherwise app will become slow 
you have to keep into minf
you have to break your app to smaller pieces  

What we have to do ?
we will make smaller bundle of the file ,this process 
is known as chunking or code splitting 

dynamic bundling ,lazy loadig



display flex to  come things side by side
justify space between to put space between the side by side content


tailwind vs code extension 

tailwind css  intellisense

ctrl+spacebar to get the space


it will give you superpower 
you dont have to website again and again 
it will give suggesttion

This extension will tell you what are you doing 

flex 
 justify-between
 flex align-center 


 --------------------------------------------------

 lifting the state up in react 

lifting State up
try to read the example ,it wil explain the example of accordian



--------------------------------------------------------------------------------------

###  Testing the application 

How to write the test case 
What are differnt type of test cases
it is huge field 


Tesing team ,Ua team 
here we will leave about the developer kind of testing 

a)Manual testing 

to check the testing whatwver i have develop 
searching functionality -- > developer manual testing 
it is not very efficient 

i am not going to test other feature 

every time , you add feature for it 
there could be chances of bug inthe code 
when you  make your application big ,there will be a lot of components 
components will be interactive with each other 

if you change the functionality of Add button ,it will affect the accordian ,cart  page functionality as well
single line of code can mess up the things 
testing is very very important ,for large scale comapany 

developer can do manual testing 
and write the code to do the testing 

2) writing the test cases ,to test our application ,which we will focus on it 




What are diggernt type of testing we can do as a react developer

### Type of Testing (developer)

 -Unit Testing
 -Integration Testing
 -End to End Testing - e2e testing


 -unIT TESTING  -- TEST your  REACT COMPONENTS IN ISOLATION 
 i want to test your header components ,i will test the header only ,
 i will try to testit in isolation of the app 
 one unit of your code (you are testing a sepecific code )

 Integration testing 
 Testing the integration of your component 
 so many component  ,you  are testing 
 multiple components are evolve ,who are involved 


 ## end to end testing 
 user landing to the page 
 checking out 
 it ia kind of simulation user will do 

 end 2 end require differnt kind of tools 
 Selenium 

 puppet

 testing is a part of development 

 how do you setup your application to develop the test case :: 

npm start -- application is running on local host 1234 

## React testing library 



it is the most standard library ,as most of the company use it 
there used to be Dom testing library 
Testing library comes with react testing library 
react testing library is built on top of dom testing library 

without any framework

React Testing Library
testing library already present in it 

we have build our application ,right from scratch 

we have to integrate react testing library 

I want you to understand it from scratch 
there is a lot of library required to build whole big application



if you create with react App
this things will already be installed in it 


How to set up in our project ?


build on Dom test library 
react testing library make use of jest 

it is a delightful javascript testing framework with a focus on simplicity 
internally it used Maven 



lot of developers dont do it

# Notes
- Install React Testing library

- Install jest 

- Install Babel dependenies(you will get in the jest website )

- Configure Babel 

- Configure  Parcel Config file to disable default babel transpilation

- Jest Configuration npx jest --init

- Install jsdom library

- Install @babel/preset-react (to make JSX work in test cases )

- Include @babel/preset-react  inside my babel config

- iNCLUDE  @testing-library/jest-dom



npm install -D  @testing-library/react 

npm install i -D jest
--------------------------------------------------------------
using babel (you have required to install some dependies)


npm install --save-dev babel-jest @babel/core  @babel/preset
-----------------------------------------------------------

you haveto configure the babel

babel.config.js 

model.exports = { 
    presets: [['@babel/preset-env',{targets:{node:'current'}}]],
};

------------------------------------------------------------------------------

i told parcel already babel inside it 

whene you are jestand dependies

there will be concflict bettween the babel and parcel 

parcel will say it has know configurations of babel which it uses 
and i have also added the babel ocnfiguration it will just overirde 


as parcel already uses babel 
it will get confuse ,we have to change the parcel behaviour 
we have to make some changes in the parcel configuration



Parcel  documentation --> Search  jest 

 tranpilation --->


or 

get started 

JavaScript 
babel 

try to read it out 
it says parcel has own configuration of babel

you need to diable babel transipilation (not by default Parcel config)


.parcelrc 

{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}


create  a new file .parcelrc 

you have to do this configuration(when you do this configuration)

We have  done most of the configuration we can run it 

how to run the test cases 

i need a command for it 
in the package.json :

 "scripts": {
    "test":"jest"
 }

npm run test (this will run our test cases )

No test found existing with code 1 

We have setup our project configurations(now we will write the test cases)

we have to do the jest configuration

npx jest --init (new file)

we are executing the jest package 


Would you like to use the TypeScript for your configuration file? no


Chosse the test  environment  that will be used for testing  --> jsdom (browser-like)


jsdom 
When you are running the test cases
it will not run on browser (they will need the run time )
for that they used jsdom (it is like a browser which will gives feature like browser)


Which provider should be used to instument code for coverage ?

babel

Automatically clear mock  calls,instances,contexts and result before every test ?
yes 


jest config.js is created
it is a very big file 
it will show the options we have choose 


---------------------------------------------------------------

Go to the React testing library 
in that setup

jest 28 
go to the package.json 
check the version 
if you are using or later , jest environemnt ,jsdom package now must be installed seperately 


recently our jest 28 they have stopeed shifting together 


npm install --save-dev jest-environemnt-jsdom

-----------------------------------------------------------------------

Now let us start the writing the test cases 


Let us write a small thing 

let us test some java script code 


sum.js (it is not related to our application)


export const sum = (a,b) => {
    return a *b;
};

npm run test 

No tests found 

it try to find in these folder 
testmatch: **/ __ tests __/**/*



in the components creat it --->

   __tests__

   vscode-icons plugin to install this extension 

jest it will goin to match all this file 



Headers.test.js
Headers.test.ts
Headers.spec.js
Headers.spect.ts 


We are going to create the test file 


__ ( Two times of underscore  ) known as dunder 


so that nobody can create accidently with this names 

Let create the first test file 


__tests__
   sum.test.js 

import {sum} from "../sum";
test ("Sum function should calculate the sume of two numbers",() =>{

   const result=sum(3,4);


   // Assertion
   expect(result).toBe(7);

});

npm run test (it will say everything pass)
thisi s how you tested 



import {sum} from "../sum";
test ("Sum function should calculate the sume of two numbers",() =>{

   const result=sum(3,4);


   // Assertion
   expect(result).toBe(5);

});


it will say fail 
it will show the time to run 
Expected:5 but we received 7 

jest is an amazing libray 
we have result 7 i was expecting 5


---------------------------------------------------------------------------


Thisis how you write the test cases 

it is not mandatory 
if you dont expected anything it will pass anyhow

we always write expect function

This is how you assert the test cases 
-------------------------------------------------------------------------

We will also see complex test Cases 


Let see how we write the test cases for react now 


npm run start --> our app is successfuully now


click on contact page ,it is loading successful or not

let test it component


let add something to contact us page 


const Const =() =>{
    return (
        <div>
        <h1 className="font-bold text-3xl p-4 m-4">Contact us Page </h1>
        <form>
        <input type="text" className="border  border-black p-2 m-2 " placeholder="name"/>
        <input type="text" className="border  border-black p-2 m-2 " placeholder="message"/>
        <button className="border  border-black p-2 m-2  bg-gray-100 rounded-lg">Submit</button>
        </form>
        </div>
    )
}
export default Contact


now we will test contact component 
it will render or not



__tests__
 > Contact.test.js


wnehever you are testing the ui component ,you have to render that component in jsdom 
how will you that
now i will test it but how let write a test case if a heading is loaded in the component or not 
with the help of the screen

 import {render} from "@testing-library/react";
 import Contact from "../Contact";

 test("Should load contact us component",()=>{

   render(<Contact/>);

   const heading=screen.getByRole("heading");
   
   expect(heading).toBeInTheDocument();

 });

it failed
it says Syntax error
it try to say we cant load jsx isnt enable for your application you need to add babel/preset-react


npm i -D @babel/preset-react


babel.config.js 

model.exports = { 
    presets: [
        ['@babel/preset-env',{targets:{node:'current'}}],
        ["@babel/preset-react",{runtime:"automatic"}],
        ],

};


Why we adding the preset 
Babel is a transpiler convert your code  to one form into the another 


preset is helping 


jsx code to html code


npm run test (it will fail once again)

tobeinTheDocument is not a function 


import {render} from "@testing-library/react";
 import Contact from "../Contact";

 test("Should load contact us component",()=>{

   render(<Contact/>);

   const heading=screen.getByRole("heading");
   
   expect(heading).toBeInTheDocument(); (checking heading is inside the document or not)

 });

 npm i -D @testing-library/jest-dom need to be install 

--------------------------------------------------------------------------------


import {render} from "@testing-library/react";

import Contact from "../Contact";

import "@testing-library/jest-dom";


 test("Should load contact us component",()=>{

   render(<Contact/>);

   const heading=screen.getByRole("heading");

   //Assertion
   
   expect(heading).toBeInTheDocument();   (checking heading is inside the document or not)

 });

npm run test 
we have 2 test cases ,both will pass 

-------------------------------------------------------------------
Suppose iwant to find their is button is there orn ot

import {render} from "@testing-library/react";

import Contact from "../Contact";

import "@testing-library/jest-dom";


 test("Should load contact us component",()=>{

   render(<Contact/>);

   const heading=screen.getByRole("heading");

   //Assertion
   
   expect(heading).toBeInTheDocument();   (checking heading is inside the document or not)

 });

 test ("Should load button inside the Contact component",() => {
    render(Contact/>)

    const button =screen.getByRole("button");

    //Assertion 
    expect(button).toBeInTheDocument();

 });

 now there is 3 test cases ,all three test cases passed 

 this role is defined by getByRole
 there is more way to find the button 


 const button=screen.getByText("Submit"); or const button=screen.getByRole("button")

 another way to find out the button 

 let try to fail it now 


 const button=screen.getByText("Random");
 this time it will fail 

 unable to find the element with random 
 it will also what is render on the screen

 it couldnt find Random String ,that whay it throw an error 



 -----------------------------------------------------------------

 Suppose i wan to find the input or image 


test("Should load input  name inside Contact component ",() => {

    render(Contact/>)
    const inputName=screen.getAllByPlaceholderText("name")

    //Assertion 
    expect(inputName).toBeInTheDocument();

})


run the test case 
all the test case pass
------------------------------------------------------------------------------------------------------------


Similarly you can write load of get
try out a lot of thing 



There are multiple input box 

i want to tes

test("Should load 2 input boxes on the Contact component",()=>{
    render(<Contact/>);

    // Querying

    const inputBoxes=screen.getByRole("input");

    // Assertion   multiple items matches for that  use get all by role
    const inputBoxes=screen.getAllByRole("textbox");  // it will return jsx element or react element or virtual dom object

    console.log(inputBoxes)

     // InputBoxes is array you can see the first element ,here you will the virtual dom of react elment  inputBoxes[0]

     // InputBoxes.length it will print 2 

     //Assertion 

     expect(inputBoxes.length).toBe(2);  
     // it passes all the test case if i changes to 2 it will expect 3,you can   also   assert like expect(inputBoxes.length).not.toBe(3)



})


you will render something 
then you will qury something 
and then you will assert something ,in this way you write the test case 
-----------------------------------------------------------------------
Sometime the test file increase 
we will create small group of test cases 

we will make use of describe


 import {render,screen} from "@testing-library/react";

 import Contact from "../Contact";

 import "@testing-library/jest-dom";
 describe("Contact Us Page Test  Case ",() => {


    // you can paste all the test cases of contact here

    // you can add the test cases and nested as well 

    // in place of test ,you can write the it as well 
    
    //it and test both are the same thing 

    test("Should load 2 input boxes on the Contact component",()=>{

    render(<Contact/>);

    const inputBoxes=screen.getByRole("input");

    console.log(inputBoxes)

    expect(inputBoxes.length).toBe(2);  

    })
 })


 expect(inputBoxes.length).toBeTruthy();
 //you can hover on to this thing 
 //you will more information of it

 