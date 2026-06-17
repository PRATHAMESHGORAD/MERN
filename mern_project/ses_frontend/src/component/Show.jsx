import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Show = () => {
    const {id} = useParams()
    const [blog,setBlog] = useState({})
const navigate = useNavigate()
    useEffect (()=>{
        axios.get(`http://localhost:2000/blog/showblog/${id}`)
        .then((res)=>setBlog(res.data))
        .catch((err)=>console.log(err));
        
    })

    const handledelete= ()=>{
        axios.delete(`http://localhost:2000/blog/deleteblog/${id}`)
        .then((res)=>navigate('/'))
        .catch((err)=>console.log(err));
    
    }
  return (
    <>
    <div
        className="container"
    >
       <div
        className="row justify-content-center align-items-center g-2"
       >
        <div className="col">
            <div className="card ">
                <img className="card-img-top" src={blog.imageUrl} alt="Title" />
                <div className="card-body">
                    <h4 className="card-title">{blog.title}</h4>
                    <p className="card-text">{blog.content}</p>
                    <h4 className="text-secondary">author:{blog.author}</h4>

                    <NavLink
                        name=""
                        id=""
                        className="btn btn-secondary"
                        to="/"
                        role="button"
                        >back to home</NavLink>

                    
                    <NavLink
                        name=""
                        id=""
                        className="btn btn-primary"
                        to={`/edit/${blog._id}`}
                        role="button"
                        >edit</NavLink>

                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={handledelete}
                    >
                        delete
                    </button>
                    


                    
                    
                </div>
            </div>
            
        </div>
        
       </div>
       
    </div>
    
    </>
  )
}

export default Show
