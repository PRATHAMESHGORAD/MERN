import React, { useEffect, useState } from 'react'
import {useRef} from 'react'
function App() {
  const [title,setTitle] = useState("");
  const [notes,setNotes] = useState([])
  const inputRef = useRef(null);
  const handleAddNote = () => {
    setNotes([...notes,title]);
    setTitle("")
  }
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

export default App
