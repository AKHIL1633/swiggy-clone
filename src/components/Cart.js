import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <div className="cart-header">
        <h1>Cart</h1>
        {items.length > 0 && (
          <button className="clear-cart-btn" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
        )}
      </div>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="cart-items">
          {items.map((item, i) => (
            <li className="cart-item" key={item.id + "-" + i}>
              <span>{item.name}</span>
              <span>₹{(item.finalPrice ?? item.price ?? item.defaultPrice ?? 0) / 100}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
