import React, { createContext, useState } from "react";
import all_menu_items from "../assets/all_menu_items.js";

// Step 1: Create the context
export const ShopContext = createContext(null);

const getDefaultContext=()=>{
        let cart={};
        for(let index=0;index< all_menu_items.length+1;index++){
            cart[index]=0
        }return cart;
    }

// Step 2: Make a Provider component
const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultContext);
    
    
    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_menu_items.find((product)=>product.id === Number(item))
                totalAmount += itemInfo.new_price*cartItems[item];
            }
    }
     return totalAmount;
   }

   const getTotalCartItems=()=>{
        let totalItems=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItems += cartItems[item];
            }
    }
     return totalItems;
 }

     const contextValue={getTotalCartItems,getTotalCartAmount,all_menu_items,cartItems,addToCart,removeFromCart}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

// Step 3: Export it so it can be used in main.jsx
export default ShopContextProvider;
