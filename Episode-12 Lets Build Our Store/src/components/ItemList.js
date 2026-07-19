import {CDN_URL} from "../utils/constants";
import{useDispatch} from "react-redux";
import{addItem} from "../utils/cartSlice";

const ItemList=({items}) => {

 // when someonce click on tha add item ,i want to dispatch an action
 const dispatch=useDispatch();
  const handleAddItem=(item) => {
   // Dispatch an action 
   // we have export exported some action on slice
   // whatever value i am passing here it will go to the reducer function 
   //that too inside the payload
   //internal redux is handled everything 

   // vanilla redux is tough ,it is the simplest 

   //it will take whatever value you have passed
   // redux will create an object in reducer through payload 
   // if click on it ,it will automatically update it
   //whenever the store is getting modified ,it is changing it 

   // this is the whole cycle work write and read
   // let try to add the real item to the cart 
   // let create the cart as well
 
   


   dispatch(addItem(item))
  }
    console.log(items)
  return (
    <div>
       {items.map((item) =>(
         <div
          key={item.card.info.id} 
          className="p-2 m-2 border-gray-400 border-b-2 text-left justify between">
        
         <div className="w-9/12">
         <div className="py-2">
            <span>{items.card.info.name}</span>
            <span>
                -${items.card.info.price ?  
                 item.card.info.price/100 
                 :item.card.info.defaultPrice/100 }
                 </span>
    </div>
    <p className="text xs">{item.card.info.description}</p>
    </div>
    <div className="w-3/12 p-4">
         <div className="absolute">
         <button className="p-2 mx-16 rounded-lg  bg-black shadow-lg "
         onClick ={()=>handleAddItem(item)}>
         Add +
         </button>
         </div>
          <img 
         src={CDN_URL + item.card.info.imageId} 
         className="w-14 h-auto"/>
    </div>
    </div>
  ))}
  </div>
  );
};
export default ItemList;

// let add  the add button as well