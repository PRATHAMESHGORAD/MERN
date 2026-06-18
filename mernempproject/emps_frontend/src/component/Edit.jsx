import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
    const{id} = useParams()
    const navigate = useNavigate()
    const [emp,setEmp] = useState({title: '',salary: '',dept: ''})

    useEffect(()=>{
        axios.get(`http://localhost:2000/emp/showEmp/${id}`)
        .then((res) => setEmp
            (res.data)
        ).catch((err) => 
            console.log(err)
            
);
    },[])

    const handeledit = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:2000/emp/updateEmp/${id}`,emp)
        .then((res) => navigate
            (`/${id}`)
        ).catch((err) => 
            console.log(err)
            
);
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
               
                    <h4 class="card-title">edit emp</h4>
                    <form onSubmit={handeledit}>
                        <div class="form-floating mb-3">
                            <input
                                type="text"
                                class="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                value={emp.name}
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
                                value={emp.salary}
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
                                value={emp.dept}
                                onChange={(e)=>setEmp({...emp,dept:e.target.value})}
                            />
                            <label for="formId1">dept</label>

                        </div>
                        <button
                            type="submit"
                            class="btn btn-primary"
                        >
                            edit emp
                        </button>
                        
                    </form>
                    
                </div>
            </div>
            
        </div>
        
       </div>
       
  )
}

export default Edit
