import React from 'react'
import { useCart } from './CartProvider'

function Cart() {
  const {state,dispatch} =  useCart()
  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <>
    <h2>Shopping Cart</h2>
      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {state.items.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}{" "}
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {state.items.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
    </>
  )
}

export default Cart