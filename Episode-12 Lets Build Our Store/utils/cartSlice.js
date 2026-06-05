import {createSlice} from "@reduxjs/toolkit";


// First we will create the slice using the createSlice
// it will tak the config which has name cart
//it have initial state
//it has also reducer objects ,which will contain the actions
// reducer funtion
// addItem:(state,action)=>{
//             state.items.push(action.payload);
// },
// then i want to add the slice to the store 
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            //mutating the state here 

            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart: (state)=> {
            state.items.length=0; // []
            // state []
        },
        
    },
});

export const{addItem,removeItem,clearCart}=cartSlice.actions;

// exporting the slice 

export default cartSlice.reducer;

// we will write the reducer for the corresponding action

//reducer will get access to the state ,it also get access to the action

// state ,action ,it will modify the state based upon the action

// cartSlice has names cart 
// INTIAL STATE 
// SOME ACTION REDUCER WHICH WILL MODIFY THE STATE 

// WE will export our action and reducer


// i am exporting by actions


// cartSlice will retrun action and reducer 

//how we read the data from the cart 
// we have to subscribe to the store using the selector 
//
