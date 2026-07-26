import React, { useEffect } from 'react'
import {useRef} from 'react'
function App() {
  const inputRef = useRef(null);
  useEffect(()=>{
    inputRef.current.focus()
  },[])
  return (
    
    <div>
      <h1>smart notes</h1>

      <input ref={inputRef}type="text" placeholder="enter note title" /><br /><br />
      <input ref={inputRef}type="description" placeholder="enter note title" />
    </div>
  )
}
//reverse
//gordan
export default App
