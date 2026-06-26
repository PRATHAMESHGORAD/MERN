import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import socket from "../socket"

const Home = () => {

    const[blogs,setBlogs]= useState([])

    useEffect(()=>{
        axios.get('http://localhost:2000/blog')
        .then((res) =>setBlogs (res.data))
        .catch((err) =>console.log(err))

        
       
    },[])
    useEffect(()=>{
            socket.on("connect",()=>{
                console.log("connected");
            })
            socket.on("newBlog",(blog)=>{
                setBlogs((previousBlogs)=>[
                    blog,...previousBlogs
                ])
                
            })
            socket.emit("hello",
                {
                    name:"pratham",
                    age:22,
                    course:"mern"
                }
            ); //sends data
            return ()=>{
                socket.off("new blog")
                socket.off("connect")
                
            }
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
                        <div className="card " key={blog._id}>
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
