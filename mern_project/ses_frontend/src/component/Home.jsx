import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {

    const[blogs,setBlogs]= useState([])

    useEffect(()=>{
        axios.get('http://localhost:2000/blog')
        .then((res) =>setBlogs (res.data))
        .catch((err) =>console.log(err))
        
    },[])
  return (
    <>
    <div
        className="container"
    >
        <div
            className="row justify-content-center align-items-center g-2"
        >
            <div className="col">
                {
                    blogs.map((blog)=>(
                        <div className="card ">
                            <img className="card-img-top" src={blog.imageUrl} alt="Title" />
                            <div className="card-body">
                                <h4 className="card-title">{blog.title}</h4>
                                <p className="card-text">{blog.content}</p>
                                <NavLink
                                    name=""
                                    id=""
                                    className="btn btn-secondary"
                                    to={`/${blog._id}`}
                                    role="button"
                                    >read more</NavLink>
                                
                            </div>
                        </div>
                        
                    ))
                }
            </div>
            
        </div>
        
    </div>
    
    </>
  )
}

export default Home
