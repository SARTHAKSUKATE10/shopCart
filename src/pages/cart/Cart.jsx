import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/ShopContext'
import { CartItems } from './CartItems'
import './cart.css'

import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()
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
      {totalAmount > 0 ?
        <div className='checkout'>
          <h3>Subtotal: ${totalAmount}</h3>
          <button onClick={() => navigate('/')}>Continue Shopping</button>
          <button>Checkout</button>
        </div> :
        <h1>Your Cart is Empty</h1>
      }
    </div>
  )
}
