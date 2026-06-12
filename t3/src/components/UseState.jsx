import React from 'react'
import { useState } from 'react'

const UseState = () => {
    const [count,setCount] = useState(0)
    const [title,setTitle] = useState("clickedme")
  return (
    <div>
        <h1>count-{count}</h1>
      <button onClick={()=>setCount(count+1)}>increment</button>
      <button onClick={()=>setCount(count-1)}>decrement</button>
      <button onClick={()=>setTitle('clicked')}>{title}</button>
    </div>
  )
}

export default UseState
