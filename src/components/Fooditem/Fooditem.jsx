import React, { useContext, useState } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const Fooditem = ({id,name,price,description,image}) => {
   
    const{cartItem,addToCart,removeFromCard}=useContext(StoreContext)
    return (
    <div className='food-item'>
        <div className="fooditem-image-container">
            <img className='food-item-image' src={image} alt="" />
            {!cartItem[id]
             ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white}/>
                :<div className='food-item-counter'>
                    <img onClick={()=>removeFromCard(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItem[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>

            }
        </div>
        <div className="food-item-info">
            <div className="fooditem-name-rateing">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">
                {description}

            </p>
            <p className='food-item-price'>
                ${price}
            </p>
        </div>
    </div>
  )
}

export default Fooditem