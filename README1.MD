## Event loop 


Callback queue
multitask queue



Javascript is a  Synrochonous single threaded language


it has 1 call stack ,it can do one thing at a time 



Global execution context is put in the call stack 
the whoile code is run line by line 
function will be allocated memorny

a() is called 
in case of the function invokation ,
a execution context is created for the function a ()
to execute the code of the function 


a() will be inside the call stack -its code will be printed line by line 
post execution it will be deleted from the call stack 
end will be executed 
then there is no thing to execute 
then GEC WILL BE POPPED OUT FROM THE  CALL BACK()



output:-
a wil be printed 
End 


function a(){
    console.log("a");
}
a();
console.log("End");


--------------------------------------------------------------------------------------------------------

call stack does not has a timer ,to have the a keep track of time ,we need a  super power 


Call stack will be inside the Js engine 

Js engine will have the call stack 
browser has the Js engine 
it has also has the local storage ,also has the timer inside it 

browser has superpower to communicate with the external world ,to get over here and to display in the browser 
display the videos and show the suggestion 

it is a most remarkable history of mankind


we need access to the timer ,local storage 

js engine need way to access to superpower 


to access all thos superpower we need web api() 

1)set Timeout() is not a part of javascript
2)DOM API()  <html> dom tree
3)FETCH()    
4)Local Storage
5)console
6)Location

global object is small window ,it will facilate to use this superpower 

windows.setTimeout()
windows.fetch() 

that i how you access to this super power 


it is a global object 
windows.setTimeout() or Timeout() it is a same thing 


console.log("Start")
setTimeout(function cb(){
    comsole.log("Callback");
},5000);

console.log("End");



Whenever you try to execute any javascript code 
global execution context is created and pushed into the call stack 


GEC 
whole code will run line by line 

console.log("Start")
will call console web api 
to access the console.log                                                   output:
                                                                            Start 
then the settimeout 

it will call settimeout web api to access time feature of the browser
it bascically register the call back  over there 
also start the timeer of 5000 millisec 
the javascript will move to the next line 

it will again go to the console ,which will print "End"                         output:
                                                                                Start 
                                                                                End


The timer is still running  ,once we are done with the execution 
once the code is executed completely 
then GEC will be removed fron the call stack 


the timer is expired ,the callback function need to be executed  
we nedd call back functions need to be in call stack 

The event loop will come into the picture 

5000 ms is running ,the call back is registered 
as soon as the time is expired this call back need to be go to the callstack 

it will not directly go to the call stack ,it will go through the callback queue  

it will put inside the callback queue 
the event loop function is to check the call back queue 

put the function of the callback queue 
to the call stack ,it will act as gate keeper 
it is the function of it ,to push it into the call stack 



Call stack quickly execute the call back function 
it creates the execution context 
it will puish the function and run it line by line 
it sees the console log of call back 
go to the console log web api 




that how my friend the whole things work 




-------------------------------------------------------------------------------------------------------


console.log("Start")
document.getElementById("btn").addEventListener("click",function cb() {
    console.log("Callback");
});

xonsole.log("End")


we have event listener this time 
we have put the click feature for the button we will see all the web api into it 


First the GEC will be created in the all stack 
cosde is execute the line by line 


Start is printed with the help of the console.log

what is addeventlIstner (it is another feature given by the browser to the javascript through the windoes 
in form of web api (Dom api) it bascially access the dom code )

eventListender will re3gister the callback in form of event

in the webapi() environment ,the call back will be  registered 
evenet name is event which is attached to it 

Javascript waits for none
it will move to the next line 

End

the global execution context  is removed from the call stack 

but the event handler will remain inside  web api envioronment ,until and unless ,we remove it from the web api enviroment 
by closing the browser 

it will sit overhere ,some day the user will click the button it will go the call stack 


when the user click on the button ,the callback  is pushed inside the call back queue 
and it waits over it turns to get executed 

Event loop has only one job 
continusally monitorthe call back and call stack 

it will see the function in the call back queue and put it in the call stack 
and execute the call back line by line 

print call back 
once it is completely executed it will be remove the call stack 



why we would need callback queue ()


event loop could have directly picked it up  directely from it 




Suppose the user click the button 7 to 8 times click click 
in that case the call back function will be pushed  to the callbackqueue 

call back ,call back 
we will have all the call back  waiting for their turn 
slowly slowly it will be executed it one by one 


They could get a chance one after the owner 
this is the way they execute it 



Fetch is a differennt case 

it works different way 


-------------------------------------------------------------------------------------------------

This example is very important

Fetch is goes and fetch the api call 
fetch function will return the promise ,and we have to pass the call back function 
it will be executed when the  promisr is resolved 



console.log("Start")
setTimeout(function cbT(){
    console.log("CB sertTimeout";
},5000)

fetch("https://api.netflix.com")
.then(function  cbF(){
    comsole.log("CB Netflix");
});


console.log("End");



GEC is pushed into the Call stack 
and it will start executing line by line 

it will print Start

then setTimeout will register this call back

cbt() register inside the wer api environment 

fetch is again a web api which is used to make the network call


it bascially register it in to web api environment 
cbf()


Now we have to function cbF() and cbt() 
cbt is waiting fo the time out to expire 
cbf  is waiting for the data to be returned from the netflix server 
fetch function will make the call 
once we get the data the function cbf is ready to be executed 


suppose netflix is fast 
after 5 millisec we get the data 
the call back function will go the call back queue ,that will be not happen 



We also have Microtask queue 


this queue is similar ,but has higher priority 
whatever function will comes here ,will be executed first 

CbF will go to the microtask queue() 
and job of event loop is see the queue continously 

we already got the data from the netflix server 

## Supoose we have lot of 10000 lines after the fetch 
it will take some time to execute it but we already have  cbf in the micro quue ,waiting over there 


meanfile we are running the 1000 lines of code the TIMER ALSO GET EXPIRED 
browswer is doing lot of things 

cbt() is also redy to be executer in the call back queue 


the middle line of the code is running ,but both are kepet in the queue 

suppose the 1000 lineso f code is finish executing 
now we reach the end ,end will be printed in the console 


event loop will contontiously monitoring it
once the gec execution is completely it will be called out from the call back 

microtask queue has greater priority 
it will be pushed inside the call stack 

it will run the code of Cbf() line by line                                                output:
                                                                                          sTART 
                                                                                          eND
                                                                                          CB NETFLIX 

it will be completely executer then 
it will schedule running of sbt function 

Start
End
Cb Netflix
Cb SetTIMEOUT()


-----------------------------------------------------------
wHAT CAN COME INSIDE THE MICROTASK QUEUE 

all the callback which comes through promises 
is pushed into multi queue 

mutation observer will keep on checking ,is there any mutation in the dom tree or not 

Promises and Mutation Observer goes inside the microtask queue 

everything will move into the call back queue 


CallbackQueue is also known as CallbackQueue() 


Suppose there are 3 task inside multitask queue and 1 task in callback queue 
Event loop will give the priority to the multitask queue 


if call back in multitaak queue will creat anothe micro task  then 
it will be difficult to execute the call back queue then 

as it has more priority ,it will not get the chance  to execute ,we call it known as starvation  of the callback queue 


-------------------------------------------------------------------------------------------------------------------------------

Js engine does nt much work you will,
it will do huge work in the Call back queue 

We will see the difference between the js engine and javascript run time


----------------------------------------------------------------------------------------------------------------------------

###   JS Engine Exposed 

Js is everywhere 
it can run inside the serverand browser 


Javascript runtime environment is a big container 
which will have all the thing to run the javascript code 

To run any piece of any code java script code we would need js engine 


It conatan :


Js engine (it is the heart of the javascript code )
Api 
Cq
mq 



Every browser hava Java script run time environment
to run anything the javascript code ,we would need javascript runtime environment

there could be different api 
setTimeout internally they are implemented differently 

Let dive deep inside the Java Script Egine 

lot of  Javascript engine available



Chakra --- Microsoft
SpiderMonkey  ---Mozilla 
V8 ---- Google chrome ,Node.js,Demo 

You can create your own javascript Engine 

Ecama is a governin body for the javascript

What was the first javascript engine

NEtscap (now it is known as SpiderMonkey)


Js engine --- > it si not a machine 

it is a normal code written by the Enginners 
take the high level out and splits out into machine level code 

in general it is a normal code 

Js Engine 

Code will go in thress steps 

Code --> Parsing -->Compilation -->Execution

Parsing (Code is broken down into tokens )
Also there is Syntax process 
take the code and broke it into Ast (Abstract Syntax tree)


Parsing phase will generate the syntax tree

it is passed int ocompilation phase  astexploer.net

Compilation and execution phase is the best part 
as it will go hand by hand 

Javascript has JIT compilation 
what is interepetr and compiler 

Interpretter  ---> takes your code and start the code exectution line by line 
cOMPILER - WHOLE CODE IS COMPILED AND compiled into optmised one ,then  you will start executing the code 

in the interpretter code execution is fast ,we would have more efficiency 
in compiler it is efficient 


Javascript can behave in both ways ,depends on the Js engine 


Most of the js engine , uses noth compiler and interpreter both 


Jit compilation as they can use both interpreter and compiler to execute the code 

Compilation and execution goes  line by line 

----------------------------------------------------------------

Compiler will take to the interpretter 
it can happen in multiphase phase
js engine will have their algorithm time

it will gives the byte code which will executed in the excuted phase 
Memory heap and the call stack

whole js runtime environments
has memory heap and the call stack 

Call stack is the same which we see in the previous lectures 

memory heap is the space where all the variables and function to assign to memory to it 

we will Grabagae collector to free up the space 
which will follow the algorithm of  of Mark and Sweep 

widely used 

other form of optimisation that the compiler does for the code 
those optimisation are the inline ,copying a region ,inline caching when it will compiling the code 

--->Inlining
--->Copying elision
--->inline Caching 


All js engine has their own ways of implementing the things ,this is generic one 
This is what comapny try to acheive ,that what engineer are working 


Google V8 consider to be fasest created 
You can read the v8 blog
It has interpreter  --- iGNITION
ALONG WITH THAT - Turbofan -->Optimising compiler 

They both make your code run faster 

They have garbage collector -Orinoco 
OIlpan which is used for differnt purpose 

Js can ve used for any purpose 
Function programming and Object oriented




------------------------------------------------ 


## Set Timeout Timers 

Trust iisue int SetTimeout Timers 

same code  we have taken of event loop 

Gec is pushed into the call stack 
code will be run line by line 

set timeout we will see ,it will registered in to the call back 

with the start of the timer 5000 ms ,it will wait for it to be executed 

js will not wait ,it will print end 

suppose we have 1 million code after the end 

which takes lots of time 10 sec to run 


in that case gec will still be busy executing the code while the time is running 

Gec would nt go out  it will executer the that cdoe 
while the main thread is busy executing 1 million code 
timer has executed ,it pushed in the callback queue

event loop will keep on check when the call back to be empty 
then it  can push the call back  

when will the callback will get the  time to execute 
it will be after 10 seconds 
it will wait for the whole program to be executed 


this isknown as concurrency model 

suppose the Gec goes back 
, then the callback is oushed into stack 

it will start executing 
after 10 sec it is executed ,we  though that it will be exeuted it in the 10 5 sec onlky 


You should nt block the main thread 

how we can block the main thread ,with the help of code 


console.log("Start")
setTimeout(function cb() {
    console.log("Callback");

},5000)

console.log("End");
// million of code 

let startDate =new Date().getTime();
let endDate=startDate;

while(endDate <startData+10000) {
   endDate =new Date().getTime();
}

console.log("While expires");


output:
Start
End
While Expires 
Callback 

Settimeout will not guarantee the time but it can gurantee the time it will wait 

Javascript is a synchorous single threaded language 

setTimeout(function cb() {
    console.log("Callback");

},0)
it will not wait to execute 

output : 


Start 
end 
callback 


Suppose we want to defer the piece of code 
sometimes the code is not that important 
suppose it is coming to the end of the page 

it means the whole main thread is important 


if you want to defer some code ,there you can use it 
Because of the concurrency model in the java script 

how i can set up this kind of Environment 


you can install the extension of the Live Server (Ritwick Dey)


Vs code and chrome ,live server ,you just need this 


-----------------------------------------------------------------------


### Introduction of  