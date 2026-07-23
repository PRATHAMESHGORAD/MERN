import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    items: [],
    loading: false,
    error:null
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
    },
    extraReducers:(builder)=>{
        builder.addCase(
            fetchProducts.pending,
            (state)=>{
                state.loading = true
            }
        )
    }
})
export const fetchProducts = createAsyncThunk(
    "cart/fetchProducts",
    async()=>{
        const response = await axios.get(
            "https://fakestoreapi.com/products"
        )
        return response.data;
    }
)
export const {addToCart,removeFromCart} = cartSlice.actions
export default cartSlice.reducer;
//evel donw
//revolt
//life regret
//reader
//agents
//revolutions
//rewards
