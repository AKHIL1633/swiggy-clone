
import{useSelector} from "react-redux";
import {clearCart} from "../utils/cartSlice";
import {useDispatch} from "react-redux";
const Cart=() =>{
    // always subscribed to the small portion of the  code 
    
 const cartItem=useSelector((store)=>store.cart.items);

 // subscribing to the full store
 //below is the next efficient
//  const store=useSelector((store)=>Store);
//  const cartItems=store.cart.items;
const dispatch=useDispatch();

const handleClearCart=() =>{
    // our card is vanished out 
    // if the items are zero
dispatch(clearCart());
}
    return (
    <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
         <button className="p-2 m-2 bg-black text-white rounded-lg"
         onClick={handleClearCart}>Clear cart
         </button>
         {cartItems.length ===0 && <h1>Cart is empty Add items to the cart</h1>}
            <ItemList items={cartItem}/>
        </div>
        </div>
    )
};
export default Cart ;

// we can make the feature of clear cart as well