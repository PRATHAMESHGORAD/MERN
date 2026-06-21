import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const Add = () => {
   const [blog,setBlog] = useState({title: '',concept: '',imageUrl: '',desp: ''})
   const navigate = useNavigate()

   const handleadd = (e)=>{
    e.preventDefault()
    axios.post(`http://localhost:2000/blog/addBlog`,blog)
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
            
            <div className="card-body">
              <h4 className="card-title">add form</h4>
              <form onSubmit={handleadd}>
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
                    onChange={(e)=>setBlog({...blog,concept:e.target.value})}
                  />
                  <label for="formId1">concept</label>
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
                  <label for="formId1">image Url</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="formId1"
                    id="formId1"
                    placeholder=""
                    onChange={(e)=>setBlog({...blog,desp:e.target.value})}
                  />
                  <label for="formId1">desp</label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  add
                </button>
                
                
              </form>
             
            </div>
          </div>
          
        </div>
        
      </div>
      
    </div>
    
    </>
    
  )
}

export default Add
