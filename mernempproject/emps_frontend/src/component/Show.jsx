import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Show = () => {

    const[emp,setEmp] = useState({})
    const{id} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:2000/emp/showEmp/${id}`)
        .then((res) => setEmp
            (res.data)
        ).catch((err) => 
            console.log(err)
            
        );
    })

    const handeldel = (e)=>{
        e.preventDefault()
        axios.delete(`http://localhost:2000/emp/deleteEmp/${id}`,emp)
        .then((res) => navigate
            ('/')
        ).catch((err) => 
            console.log(err)
            
        );
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
                        <h4 className="card-title">{emp.name}</h4>
                        <p className="card-text">{emp.salary}</p>
                        <p className="card-text">{emp.dept}</p>
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
                            to={`/edit/${emp._id}`}
                            role="button"
                            >edit</NavLink>
                        <button
                            type="button"
                            class="btn btn-primary"
                            onClick={handeldel}
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
