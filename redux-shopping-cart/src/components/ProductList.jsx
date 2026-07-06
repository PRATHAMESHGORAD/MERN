import React from 'react'
import {useDispatch} from "react-redux"
import { addToCart } from "../features/cart/cartSlice"
const ProductList = () => {
    const dispatch = useDispatch()
    const products = [
        {id:1,name:"iphone",price:80000},
        {id:2,name:"laptop",price:60000},

    ]
  return (
    <div>
      <h2>products</h2>
      {
        products.map((product)=>(
            
            <div key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button
                onClick={()=>dispatch(addToCart(product))}>
                    addtocart
                </button>
            </div>
            
        ))
      }
    </div>
  )
}

export default ProductList
//default features updated
//new features updated
