import React from 'react'
import { useSelector } from 'react-redux'
const Cart = () => {
    const items = useSelector((state)=>state.cart.items)
  return (
    <div>
      <h2>cart</h2>
      {
        items.map((items)=>(
            <div key={items.id}>
                <h3>{items.name}</h3>
                <p>{items.price}</p>
            </div>
        ))
      }
    </div>
  )
}

export default Cart

