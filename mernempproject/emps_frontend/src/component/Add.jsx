import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Add = () => {

    const [emp,setEmp ]= useState({name: '',salary: '',dept: ''})
const navigate = useNavigate()
   const handleSubmit=(e)=>{
   e.preventDefault()
   axios.post('http://localhost:2000/emp/add',emp)
   .then((res) => 
    navigate('/')
   ).catch((err) => 
    console.log(err));
    
   

   }
  return (
    
    <div
        class="container"
    >
       <div
        class="row justify-content-center align-items-center g-2"
       >
        <div class="col">
            <div class="card ">
               
                    <h4 class="card-title">Add emp</h4>
                    <form onSubmit={handleSubmit}>
                        <div class="form-floating mb-3">
                            <input
                                type="text"
                                class="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                onChange={(e)=>setEmp({...emp,name:e.target.value})}
                            />
                            <label for="formId1">name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input
                                type="text"
                                class="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                onChange={(e)=>setEmp({...emp,salary:e.target.value})}
                            />
                            <label for="formId1">salary</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input
                                type="text"
                                class="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                onChange={(e)=>setEmp({...emp,dept:e.target.value})}
                            />
                            <label for="formId1">dept</label>

                        </div>
                        <button
                            type="submit"
                            class="btn btn-primary"
                        >
                            add emp
                        </button>
                        
                    </form>
                    
                </div>
            </div>
            
        </div>
        
       </div>
       
    
    
    
  )
}

export default Add
