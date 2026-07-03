import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {

    const [blog,setBlog] = useState({title: '',content: '',imageUrl: '',author: ''})
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(blog);
        
        axios.post('http://localhost:2000/blog/add',blog,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res)=>{ console.log(res.data);
              navigate('/')})
        .catch((err)=>{console.log(err.response)
            console.log(err.response?.data);
            console.log(err.response?.status);
            
            
        });
        
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
                        <h4 className="card-title text-center">add blog</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
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
                                    onChange={(e)=>setBlog({...blog,author:e.target.value})}
                                />
                                <label for="formId1">author</label>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-secondary"
                            >
                                add blog
                            </button>
                            
                            
                        </form>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    </div>
    
  )
}

export default Add
