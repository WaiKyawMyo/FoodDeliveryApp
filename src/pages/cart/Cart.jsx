import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {
  const{ food_list,cartItem, removeFromCard}=useContext(StoreContext)
  return (
    <div className='cart'>
        <div className="cartitem">
          <div className="cart-item-tital">
           <p>Items</p>
           <p>Title</p>
           <p>Price</p>
           <p>Quantity</p>
           <p>Total</p>
           <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item,index)=>{
            if(cartItem[item._id]>0){
              return (
                <>
              <div className='cart-item-tital cart-item-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price*cartItem[item._id]}</p>
                  <p onClick={()=>removeFromCard(item._id)} className='cross'>x</p>
              </div>
              <hr />
             </> ) }
          })}
        </div>
        <div className='cart-bottom'>
            <div className='cart-total'>
              <h2>Cart Totals</h2>
              <div>
                <div className="cart-total-details">
                  <p>
                    Subtotal
                  </p>

                </div>
                <div className="cart-total-details"></div>
                <div className="cart-total-details"></div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Cart