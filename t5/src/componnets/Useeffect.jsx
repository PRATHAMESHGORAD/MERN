import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Useeffect = () => {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        document.title=`count:${count}`
    })
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>increment</button>
    </div>
  )
}

export default Useeffect
