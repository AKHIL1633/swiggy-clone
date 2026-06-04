// Thinks 

// I JUST HAVE TO RETURN THE BOOLEAN VALUE 
import {useEffect} from "react";
import {useState} from "react";


const useOnlineStatus =() =>{
    constant [onlineStatus,setOnlineStatus] =useState(true);

    // check if online 


    // it will be executed only once

    useEffect(()=>{
        window.addEventListener("offline",() =>{
            setOnlineStaus(false);
        })
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        });

    },[]);


   

    //boolean value 
    return onlineStatus;
}

export default useOnlineStatus;
