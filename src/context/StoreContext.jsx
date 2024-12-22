import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{
  const [cartItem,setcartItem]=useState({})

  const addToCart=(itemID)=>{
    if(!cartItem[itemID]){
      setcartItem((prev)=>({...prev,[itemID]:1}))
    }else{
      setcartItem((prev)=>({...prev,[itemID]:prev[itemID]+1}))
    }
  }
  const removeFromCard =(itemID)=>{
    setcartItem((prev)=>({...prev,[itemID]:prev[itemID]-1}))
  }
  const contextvalue ={
      food_list,
      cartItem,
      setcartItem,
      addToCart,
      removeFromCard
  }
  useEffect(()=>{
     console.log(cartItem)
  },[cartItem])
  return(
    <StoreContext.Provider value={contextvalue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;