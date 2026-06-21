import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
  const [blog,setBlog] = useState({title: '',concept: '',imageUrl: '',desp: ''})
  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(()=>{
        axios.get(`http://localhost:2000/blog/showBlog/${id}`)
        .then((res)=>setBlog(res.data))
        .catch((err)=>console.log(err));
        
    },[])

  const handeledit = (e)=>{
    e.preventDefault()
    axios.put(`http://localhost:2000/blog/updateBlog/${id}`,blog)
    .then((res)=>navigate(`/${id}`))
    .catch((err)=>console.log(err));
    
  }
  return (
    <>
<div
  class="container"
>
 <div
  class="row justify-content-center align-items-center g-2"
 >
  <div class="col">
    <div class="card ">
      
      <div class="card-body">
        <h4 class="card-title">edit the info</h4>
        <form onSubmit={handeledit}>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              name="formId1"
              id="formId1"
              placeholder=""
              value={blog.title}
              onChange={(e)=>setBlog({...blog,title:e.target.value})}
            />
            <label for="formId1">title</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              name="formId1"
              id="formId1"
              placeholder=""
              value={blog.concept}
              onChange={(e)=>setBlog({...blog,concept:e.target.value})}
            />
            <label for="formId1">concept</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              name="formId1"
              id="formId1"
              placeholder=""
              value={blog.imageUrl}
              onChange={(e)=>setBlog({...blog,imageUrl:e.target.value})}
            />
            <label for="formId1">image url</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              name="formId1"
              id="formId1"
              placeholder=""
              value={blog.desp}
              onChange={(e)=>setBlog({...blog,desp:e.target.value})}
            />
            <label for="formId1">desp</label>
          </div>
          <button
            type="submit"
            class="btn btn-primary"
          >
            edit
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

export default Edit
