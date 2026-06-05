
// const User=() =>
// {
//     return (<div className="user-card">
//     <h2>Name:Akshay</h2>
//     <h3>Location:Dehradun</h3>
//     <h4>Contact:@akshaymarch7</h4>
//     </div>)
// }


// to access the props we have to uses  props

// const User1=(props)=>{
//  return (
//     <div className="user-card ">
//         <h2>Name:{props.name}</h2>

//     </div>
//  ) 
// }

// we have create state variable inside the class component 
// To make the api call in the function component we will make use of async function 

import {useState} from "react";



const User=({name})=>{
    const [count,setcount]=useState(0);
    const [count2]=useState(1);


    // useEffect(()=>{
    //     // Api calls
    // },[]);
    // async function getUserInfo(){
    //    const data;
    // }
    // after every render will be called if we dont put the dependies 
 return (
    <div className="user-card ">
        <h1>Count={count}</h1>
        <h1>Count2={count2}</h1>
        <h2>Name:{name}</h2>
        <h3>Location:Dehradun</h3>
        <h4>Contact:@akshaymarch7</h4>

    </div>
 ) 
}
export default User;