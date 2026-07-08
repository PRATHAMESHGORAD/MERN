import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
       addToCart(state,action){
        
        const existingProduct = state.items.find((items)=> items.id === action.payload.id)
        if(existingProduct){
            existingProduct.quantity++;
        }else{
           
            state.items.push({...action.payload,quantity:1})
        }
       },
       removeFromCart(state,action){
        state.items = state.items.filter((items)=> items.id !== action.payload)
       }
    }
})
export const {addToCart,removeFromCart} = cartSlice.actions
export default cartSlice.reducer;