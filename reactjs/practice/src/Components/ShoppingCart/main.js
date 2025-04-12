import React from 'react'
import CartProvider from './CartProvider'
import ProductList from './ProductList'
import Cart from './Cart'
function Main() {
  return (
    <>
    <CartProvider>
        <ProductList/>
        <Cart/>
    </CartProvider>
    </>
  )
}

export default Main