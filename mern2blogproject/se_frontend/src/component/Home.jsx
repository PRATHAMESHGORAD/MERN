import React from 'react'
import { useState } from 'react'


const Home = () => {
    const [blogs,setBlogs] =useState([])

  return (
    <>
    <div
        class="container"
    >
        <div
            class="row justify-content-center align-items-center g-2"
        >
            <div class="col">
                
                        {
                            blogs.map((blog)=>(
                                <div class="card ">
                                    <img class="card-img-top" src={blog.imageUrl} alt="Title" />
                                    <div class="card-body">
                                        <h4 class="card-title">{blog.title}</h4>
                                        <p class="card-text">{blog.concept}</p>
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
