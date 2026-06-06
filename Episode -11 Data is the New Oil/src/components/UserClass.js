// // class UserClass extends React.Component {
// //     render (){
// //         return (<div className="user-card">
// //     <h2>Name:Akshay</h2>
// //     <h3>Location:Dehradun</h3>
// //     <h4>Contact:@akshaymarch7</h4>
// //     </div>)

// //     }
// // }
// //what do you mean by when you creating the instance of the class
// // when i am rendering the function  component ,on your web page  if there is a function component on it 
// //it loads (you are mounting that function component (invoking the function component))

// //  you are loading the class based component  means you are creating the instance of the class 
// //on a webpage it mean
// //intially react was built ,there was class based component 
// // way to create the state variable 
// // it is a big object which will contain all the state variable

// import React from "react"
// class UserClass extends React.Component {
//     constructor(props){
//         super(props);
//         this.state= {
//             count:0,
//             count2:2,
//             count3:0,
//             count4:0,
//             count5:0
//         };
//         console.log("Child Constructor")
//     }
//     componentDidMount () {
//         console.log("Child Component Did Mount");
//     }
// //this.state.count =this.state.count + 1 //wrong way
// //you can batch this up as well
// // this.setState({
// //    count: this.state.count+1,
// //    count2:this.state.count2+1
// //     })
// // it will update the value of those we have done it 
// // it will not touch the value of other 



//     render (){
//         console.log("Child render")
//          const {name,location}=this.props
//         //  const {count,count2}=this.state
//         const {count} =this.state ;
//          return (
//             <div className="user-card">
//                 <h1>Count:{count}</h1>
//                 <button onClick={()=>{
//                     // NEVER Update STATE Varaibles Directly 
//                     this.setState({
//                         count:this.state.count+1
//                     })
//                 }}>
//                     Count Increase </button>
//                 <h2>Name :{name}</h2>
//                 <h3>Location:{location}</h3>
//                 <h4>Contact:@akshaymrch7</h4>
//             </div>
//          )
//         //const {count,count2}=this.state
//         //if i have to create two state variavle
//     // return (<div className="user-card">
//     // <h1>Count :{this.state.count}</h1>
//     // <h2>Count2:{this.state.count2}</h2>
//     // <h2>Name:{this.props.name}</h2>
//     // <h3>Location:{this.props.location}</h3>
//     // <h4>Contact:@akshaymarch7</h4>
//     // </div>)

//     }
// }
// export default UserClass;

// // whenever the instance of the class is created ,a constuctor is called 


// //props can be accesed anywhere inside the class using this
// //render will return the piece of Jsx which will return the Ui
// //class  based component is a class which extends the React.Componet
// //it has the render method which will return the jsx 
// //React.Component is a class which is given to by react 
// //UserClass will inherient the property from it 

// //it is given to us by react 
// //React.component will come from react package 


// //HAS A METHOD RENDER WILL RETURH THE PIECE OF JSX 

// // let make the About  also as class based component


// import React from "react";
// class UserClass extends React.Component {
//     constructor(props){
//          super(props);
//           this.state= {
//             count:0,
//              count2:2,
//     };
//     console.log(this.props.name +"Child Constructor")
// }
//     componentDidMount(){
//         console.log("child Component Did Mount");
//         // Api calls this method technique in class component
//     }
//     render (){
//         console.log("Child render")
//         const {name,location}=this.props
//         // const {count,count2}=this.state
//         const {count} =this.state ;
//         return (
//         <div className="user-card">
//                  <h1>Count:{count}</h1>
//                 <button onClick={()=>{
//                     // NEVER Update STATE Varaibles Directly 
//                      this.setState({
//                         count:this.state.count+1
//                      })
//                 }}>
//                      Count Increase </button>
//                  <h2>Name :{name}</h2>
//                 <h3>Location:{location}</h3>
//                 <h4>Contact:@akshaymrch7</h4>
//             </div>               )
// }
// }

// export default UserClass ;

// import React from "react";
// class UserClass extends React.Component {
//     constructor(props){
//         super(props);
//         this.state={};

//      }
//     async componentDidMount(){
//         // Api call
//         // you can create this function as async  then we will make the api call here 
//         const data=await fetch("https://api.github.com/users/AKHIL1633");
//         const json=await data.json(); 
//         console.log(json);

//     }
//     render(){
//         const{name,location}=this.props;
//         return (
//             <div className="user-card">
//                 <h2>Name:{name}</h2>
//                 <h3>Location:{location}</h3>
//                 <h4>Contact:@akshaymarch7</h4>
//             </div>
//         );

//     }
// }
// export default UserClass;





import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default",
                avatar_url:"http://dummy-photo.com"
            },
        };

     }
    async componentDidMount(){
        // Api call
        // you can create this function as async  then we will make the api call here 
        const data=await fetch("https://api.github.com/users/AKHIL1633");
        const json=await data.json(); 
        // console.log(json);
        this.setState({
            userInfo:json,
        })
   console.log(json);
    }

    componentDidUpdate(){
        console.log("Component Did update");
    }
    // this will be called just we are before trhe unmount 
    componentWillUnmount()
    {
       console.log("Compount will unmount ");
    }
    render(){
        const {name,location,avatar_url}=this.state.userInfo;
        // debugger;
        return (
            <div className="user-card">
                <img  src={avatar_url}/>
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                <h4>Contact:@akshaymarch7</h4>
            </div>
        );

    }
}
export default UserClass;

// Mounting cycle update 

//As soon as user class was loaded  , the constructor was called 
//when the constructor was called state variable was created  
//after the constructor render happens 
//this state variable have default value right 
// whole component was render with default value (dummy data),you will see dummy data for a while
// react updated the dom with the dummy data user see something  to show some shimmer data 

// Mounting cycle finished 

// now our componentdidmount  was called 
//Api called was made
//setstate was call and set variable are updated 

//updated cycle  begin when we do setstate 
//setstate update the state variable
// when the setstate is updated  react trigger the function once again 
//now the render happen state has been changed  the state value 
//react will update the dom with the new value 
//new name and image will be update 
//componentdidupdate all present is called later on 

//that how our life cycle works 


// constructor is called(dummy)
//Render is called (dummy)
//html has dummy data
//Componet did Mount is called 
// we will make the api called after that 
// we do this.setstate -->State variable is updated 

// this was our mounting life cycle


// update cycle begin

// render () happens with Api  data
// <html> is loaded with (new api data)
// then it will call componentdidupdate 



// First the mounting cycle happen then the update cycle happen 
//what do you mean by unmounting cycle 


// unmount means when the component will disappers from the html0
// in the webpage removing from the ui
// when i will go the new page we will get the unmount message directly 


//This is the lifecycle works 
//mounting
//updating
//unmounting

//Earlier we used to write the code in this way 


// React has simplified a lot 

// class based component is  not important 

//useeffect == componentdidmount ---wrong  
// never compare  react lifecycle method to function component 
//after every first render componentdidmount will be called 
//after every subsequent render ,it is updated not mounted 


//in useeffect we do [],it will be called just once initial render
//modern react code has removed the lifecyclemethod all new react will not know about it 
//what will happen if  we write [count],everytime the count changes it will be rendered 
//whenever the count chances it will be called

// how can i do this in class based component

//lifecycle method is componentdidupdate ,it will be called after every update 


// componentDidupdate(prevProps,prevState){
//     if(this.state.count !=== prevState.count){
          //code 
//     }
//     console.log("ComponentDidUpdate");
// }

//old version of react 
//if previous count is equal to the latest count then do this 


//we can use two useeffect if one is for count and other is for count2

//here you have to write two if conditonone for count1 and count2
//if and else condition will go for 30--40 lines 

// componet will unmount will when we are leaving the page 
//when we go to the home to the about page,there is lot of things we need to clear when we are leaving the page 


// one more things this will be shared with the all the components of the class i mean all the method and function





// componentDidMount(){
//     this .setInterval(() => {
//         console.log("NAMASTE  REACT OP")
//     },1000);
// } 


// What clean up should i do 

// componentdidmount will unmount when we are leaving the page 
//React is a single page application 
// When we we go from home to amount ,amount to home ,but it a single page 
//but lot of things we need to clear 
//Cons of single page application 
//after every second what will happen  namaste react op after each second 
//if i move to home page it will still calling 
//time interval one 


// now see it will start calling again if we move contact 

// when you are changing your pages ,you are not reloading the page understand it 
// it is just changing the component power of sop but it is a bad think about sop
// Everytime when i coming to the new page it is creating new time interval ,
//if you left your page right ,how much perform lost you are doing 
// you should know why we need to unmount the things 
// you should know about scaling the application ,this what the difference will make
//Junior developers will do that ,senior developers will already know this things ,he should clean up

// How you will clear this interval 
//i will clear interval where i will used ,when my componet unmount


// componentDidMount() {
//     this.timer=setInterval(()=>{
//         console.log("Namaste React op");
//     },1000);
//     console.log("Child=componentDidMount");
// }

// componentWillUnmount(){
//     clearInterval(this.timer);
//     console.log("ComponentWillUnmount");
// }

// it will show in this way 

//if i go to the about it will start the new setinterval it is running fter 1 sec
//when i go to the contactpage it will clear this 



//in the functional component page it will  work in the same way 
// useEffect(()=>{
//     //Api call
//    const timer = setInterval(()=>{
//         console.log("Namate React OP");
//     },1000);
// },[]);

// There is something call return 

//Useeffect return 

// return () => {
//    clearInterval(timer);
// console.log("useEffect Return ");
//     };
// },[]);
// this function will called when we are unmounting it 


// render
//useeffect 
//useffect return 

// After i leave leave the page then it will call useeffect return ,after  it will leave the page 

// This is kind of unmounting phase 

//clearInterval will clear the timer when we move to the another page 
//When react was created ,there was many more things in the lifecycle ,it has been depricated or removed
// React makes developer experience better 










