import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const appStore =configureStore({
    reducer:{
        cart:cartReducer,
        // user:userReducer
    }

})


export default appStore;

// if you want to modify the store ,it will also have reducer
//each slice will have it owns reducer 
//app will also has the reducer
//whole big app is a reducer 

// we will all the reducer inside it 

// we have plugged in all the things 

// we have created the store 
//added the reducer
