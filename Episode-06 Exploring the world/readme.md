npm start then the project will start 

Monololithic and Microservice Architecture 

intiall all app are built is developed using Monololithic
We would have large projects which has Api code ,Ui code ,Auth code ,db code ,sms code 

A single projects here we would do all the changes  at one place 
in java we have jsp pages
eVEN WE Have to make color changes ,We have to build the whole project 
The world is moving towards Microservice Architecture 
In the microservices 
We have  different microservices for different jobs
Backend Services 
Ui Services 
Auth Services 
DB services 
Sms Services 
Email Services 

THESE Are small services  forms a big app

Uber follow microservice architecture they will talk to each other 
For each and every small thing we had a differnet project .This is known as separation of concern 

otherwise all work in the same project 
so microservices is better 


How to do these services interact with each other Ui would talk with backend ,talk to the auth,Backend would talk with Db

How are these deplouyed ?

React project is a Ui microservice These microservice is written in react
you can have differnt tech stack for different things 
sms golang ui in react backend in java 

All big companies are using differnt stack which tech stack is usable for it

How These services are connected 
same as our ui deployed on some port,on different port we can deploy different services 


All these services run on their own specific port 

1234 : Ui 
1000 : Backend 
3000 : Sms
At the end all the  port can be mapped to domain name

/
/api
/sms

They make call to different port 

We will see Ui make connection and explore the world 



React application make a backend api call and fetch the data

Dummy data is coming from swiggy 
Now we can see fetch dynamically 


here we treat our react project ui microservice


Two approach Ui fetch the data from the backend 


1 --> When our app load ,As as app load we can make api and fetch the data,render to the Ui



2> As soon as page load we will just render the Ui  ,After we render then we make the api call ,
then re reder the ui

## In react we will use the Second approach 


This is a better apprach 
it is a better Ux

We load the page render the skeltom then we re render with the data  

We are rendering twice ,Most Important part is return cycle of react is very fast 
2 render are okay ,In react we would follow this approach 

Here we will make use of useEffect hook 
Hook is nothing but normal javascription function given by react which we use for a prticular use case

useEffect(()=>{
    console.log("useEfffect Called");
},[]);

useEffect will be called after our component render 

it is that easy 
after rendering the component it will work

to see the flow 
you have to go to the Sources  put the debugger 


refer to the body.js and Header.js code once 

Shimmer Ui
it is kind we load fake pages  until we get actually data from the api

fake cards 
meanwhile the page is loaded swiggy will show the page cards 

Even youtube follow shimmer 

I want my shimmer UI


// to understand the indepth feature of login and logout 


// keep in mind if there is change in the usestate and useEffect ,it will rerender the component ,think about it 

### Notes 

Function component -- normal javascript function
React Elemet -- javascript object 
React Hook is a normal function is given to us by Reacy ,prebuilt given by react ,we can used it directly

card is coming from resobj
on Click we take the call back functions

State Variables -Super powerful variable 

For that we use hooks (useState)
USESTATE IS TO CREATE THE STATE VARIABLE IT WILL MAINTAIN THE STATE OF THE COMPONENT
LOCAL STATE VARIABLE SCOPE IS INSIDE THE COMPONENT

Keeps the layer sink with the ui 

First the body will be rendered then  useeffect will be called 
It will save the call back function ,render the body js ,then it will call th callback function...
useeffect is usefule ,body component will be rendered ,then  call back function is call 

How we fetch the data is exactly the same as we do in javascript fetch()

whatever the value we will pass in the useState will become the default of const here 

This is array restructuring 
const arr=useState(resList);
const [listOfRestaurants,setListOfRestaurants]=arr;
  
const arr=useState(resList);
const listOfRestaurants=arr[0];
const setListOfRestaurants=arr[1];

TO Debug the code we have to go to the inspect -> Source



Whenever  state variable variables update ,react triggers a reconcilation cycle(rerender  the component)
react is finding the difference between the older virtual don and newer virtual dom then it will changes the dom part  which has made the difference
dom manipulation react do effictively
useEffect hook ,Hook is nothing  but a normal javascript function it has its own specific cases Usestate is use to create the state variable
useeffect is a function take two arguments 
First argument is arrow function (call back function ),dependenies 

it will be called after our Body component render 

whent the body render as soon as it render ,it will just call the call back function 
can we use swiggy api in you app 
fetch will return the promise 
to handle this we will use async and await 
sometimes it will block the  fetching  
calling  swiggy .com  from local host has been blocked due to the Cors Poilicy
Who is blocking us ,browser blockers  to call api from one origin to different origin 

if there is origin mismatch ,the browser blocks that api call that is the cors poilcy 
how to bypass this cors chrome extension will bypass the cors error 
As soon as we got this data  ,put the data into listof restaturant rerender the component with the ui


