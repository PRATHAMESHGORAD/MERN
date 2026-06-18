import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const [blog,setBlog] = useState({title: '',content: '',imageUrl: '',author: ''})
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect (()=>{
        axios.get(`http://localhost:2000/blog/showblog/${id}`)
        .then((res)=>setBlog(res.data))
        .catch((err)=>console.log(err));
       
    },[])

    const handleedit=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:2000/blog/updateBlog/${id}`,blog)
        .then(()=>navigate(`/${id}`))
        .catch((err)=>console.log(err));
    }

  return (
    <div
        className="container"
    >
       <div
        className="row justify-content-center align-items-center g-2"
       >
        <div className="col">
            <div className="card ">
                
                <div className="card-body">
                    <h4 className="card-title text center">edit blog</h4>
                    <form onSubmit={handleedit}>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                value={blog.title}
                                onChange={(e)=>setBlog({...blog,title:e.target.value})}
                            />
                            <label for="formId1">title</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                value={blog.content}
                                onChange={(e)=>setBlog({...blog,content:e.target.value})}
                            />
                            <label for="formId1">content</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                value={blog.imageUrl}
                                onChange={(e)=>setBlog({...blog,imageUrl:e.target.value})}
                            />
                            <label for="formId1">imageUrl</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                value={blog.author}
                                onChange={(e)=>setBlog({...blog,author:e.target.value})}
                            />
                            <label for="formId1">author</label>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            edit
                        </button>
                        
                        
                    </form>
                </div>
            </div>
            
        </div>
       
       </div>
       
    </div>
    
  )
}

export default Edit
