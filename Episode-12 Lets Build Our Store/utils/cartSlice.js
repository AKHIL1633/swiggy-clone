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

// cart is the name of the slice 
//it takes the initial state

// reducer is an object which has action contain it
// addItem:(state,action)=>{
//             //mutating the state here 

//             state.items.push(action.payload);
//         },

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:["burger","pizza"]
    },
    reducers:{
        addItem:(state,action)=>{
            //mutating the state here 

            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        //originalState={items:["pizza"]}
        clearCart: (state,action)=> {
            state.items.length=0; // originalState=[]
            // RTK -either you have to Mutate or return a new State
            // return {items: [] }; // this new [] will be replaced inside originalState=[]
        },
        
    },
});




//cart slice is the big object which has action and reducer
//we are taking the action indivudally and exporting it 


// here we have exported the actions 
export const{addItem,removeItem,clearCart}=cartSlice.actions;

// exporting the slice  here 
//

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

