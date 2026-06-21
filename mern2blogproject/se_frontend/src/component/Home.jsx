import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'


const Home = () => {
    const [blogs,setBlogs] =useState([])

    useEffect(()=>{
        axios.get('http://localhost:2000/blog/showblogs')
        .then((res)=>setBlogs(res.data))
        .catch((err)=>console.log(err));
        
    },[])
  return (
    <>
    <div
        className="container"
    >
        <div
            className="row justify-content-center align-items-center g-2"
        >
            <div className="col md-3">
                
                        {
                            blogs.map((blog)=>(
                                <div className="card ">
                                    <img className="card-img-top" src={blog.imageUrl} alt="Title"/>
                                    <div className="card-body">
                                        <h4 className="card-title">{blog.title}</h4>
                                        <p className="card-text">{blog.concept}</p>
                                    </div>
                                    <NavLink

                                        name=""
                                        id=""
                                        className="btn btn-primary"
                                        to={`/${blog._id}`}
                                        role="button"
                                        >read me more</NavLink>
                                    
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
