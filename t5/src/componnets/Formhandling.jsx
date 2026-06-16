import React from 'react'
import { useState } from 'react'


const Formhandling = () => {
    const [user,setUser] = useState({uname:'',upass:''})
    
    const handlesubmit=(e)=>{
        e.preventDefault()
        alert(`welcome username:${user.uname} pass:${user.upass}`)

    }
  return (
    <div
        class="container"
    >
         <div
            class="row justify-content-center align-items-center g-2"
        >
            <div class="col"><div class="card text-start">
                
                <div class="card-body">
                    <h4 class="card-title">login</h4>
                    <form onSubmit={handlesubmit}>
                        <div class="form-floating mb-3">
                            <input
                                type="text"
                                class="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                onChange={(e)=>setUser({...user,uname:e.target.value})}
                            />
                            <label for="formId1">username</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input
                                type="text"
                                class="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                onChange={(e)=>setUser({...user,upass:e.target.value})}
                            />
                            <label for="formId1">password</label>
                        </div>
                        <button
                            type="submit"
                            class="btn btn-primary"
                        >
                        login
                        </button>
                        
                        
                        
                    </form>
                </div>
            </div>
            </div>
            
        </div>
        
    </div>
    
  )
}

export default Formhandling
