import React, { useContext, useReducer } from 'react'
import { CartContext } from './CreateContext'
import { CartReducer } from './CreateReducer'
const initialState = {
    items : []
}
function CartProvider({children}) {

   const [state,dispatch] = useReducer(CartReducer,initialState)
  return (
    <>
    <CartContext.Provider value={{state,dispatch}}>
        {children}

    </CartContext.Provider>

    </>
  )
}
export const useCart = ()=>{
    const context = useContext(CartContext)
    if(!context){
        throw new Error("useCart must be used within a CartProvider");
    }
    return context
}

export default CartProvider