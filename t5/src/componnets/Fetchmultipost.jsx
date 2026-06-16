import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const fetchmultipost = () => {
    const[posts,setPosts] = useState([])
    useEffect(()=>{
         axios.get('https://jsonplaceholder.typicode.com/posts')
         .then((res)=> setPosts(res.data))
         .catch((err)=> console.log(err));
         
    },[])
   
  return (
    <div>
      <ul>
      {
        posts.map((post)=>(
            <li key={post.id}>{post.title}</li>
        ))
      }
      </ul>
    </div>
  )
}

export default fetchmultipost
