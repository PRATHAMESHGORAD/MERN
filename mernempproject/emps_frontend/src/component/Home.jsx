import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
const Home = () => {
   const [emps,setEmps] = useState([])

   useEffect(()=>{
    axios.get('http://localhost:2000/emp')
    .then((res) => 
        setEmps(res.data)
    ).catch((err) => 
        console.log(err)
        
    );
   })
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
                    emps.map((emp)=>(
                        <div className="card ">
                    
                    <div className="card-body">
                        <h4 className="card-title">{emp.name}</h4>
                        <p className="card-text">{emp.salary}</p>
                        <NavLink
                            name=""
                            id=""
                            className="btn btn-primary"
                            to={`/${emp._id}`}
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
