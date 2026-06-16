import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Fetchsinglepost = () => {
    const[post,setPost] = useState({})
    const[id,setId] = useState(0)
    const [buttonclicked,setButtonclicked] = useState(0)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonclicked}`)
        .then((res)=>setPost(res.data))
        .catch((err)=>console.log(err));
     },[buttonclicked])

     const handleclicked = ()=>{
        setButtonclicked(id)
     }
  return (
    <div>
      <input type="text" onChange={(e)=>setId(e.target.value)}/>
      <button onClick={handleclicked}>fetch</button>
      <h1>{post.title}</h1>
    </div>
  )
}

export default Fetchsinglepost
