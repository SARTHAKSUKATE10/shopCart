import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/ShopContext'
import { CartItems } from './CartItems'
import './cart.css'

export const Cart = () => {
  const {cartItems} = useContext(ShopContext)

  return (
    <div className='cart'>
      <div><h1>Your Cart Items</h1>
      </div>
      <div className='cart'>
      {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItems data={product} />;
          }
        })}
      </div>
    </div>
  )
}
