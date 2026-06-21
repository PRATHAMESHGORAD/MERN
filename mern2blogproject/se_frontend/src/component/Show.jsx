
import React, { useEffect ,useState} from 'react'
import axios from 'axios'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Show = () => {
   const {id} = useParams()
 const [blog,setBlog] = useState({})

 const navigate = useNavigate()

 useEffect(()=>{
        axios.get(`http://localhost:2000/blog/showBlog/${id}`)
        .then((res)=>setBlog(res.data))
        .catch((err)=>console.log(err));
        
    })

  const handeldelete = (e)=>{
    e.preventDefault()
    axios.delete(`http://localhost:2000/blog/deleteBlog/${id}`,blog)
    .then((res)=>navigate('/'))
    .catch((err)=>console.log(err));
   
  }

  

  return (
    <>
    <div
      className="container"
    >
      <div
        className="j justify-content-center align-items-center g-2"
      >
        <div className="col">
          <div className="card ">
            <img className="card-img-top" src={blog.imageUrl} alt="Title" />
            <div className="card-body">
              <h4 className="card-title">{blog.title}</h4>
              <p className="card-text">{blog.concept}</p>
              <p className="card-text">{blog.desp}</p>

              <NavLink
                name=""
                id=""
                className="btn btn-primary"
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
                type="submit"
                className="btn btn-primary"
                onClick={handeldelete}
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
