import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../features/cart/cartSlice'
const Cart = () => {
    const items = useSelector((state)=>state.cart.items)
    const dispatch = useDispatch()
    
  return (
    <div>
      <h2>cart</h2>
      {
        items.map((items)=>(
            <div key={items.id}>
                <h3>{items.name}</h3>
                <p>{items.price}</p>
                <p>{items.quantity}</p>
                <button
                onClick={()=> dispatch(removeFromCart(items.id))}>
                    remove
                </button>
            </div>
        ))
      }
    </div>
  )
}//mew things
//every same thing
//renewal theory 
//rational theroyie allongwith depednies
//remotively
//nothing

export default Cart

