import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Add = () => {
    const [hotel,setHotel] = useState({roomnumber: '',roomtype: '',pricepernight: '',capacity: ''})
    const navigate = useNavigate()
   
    

    const handleedit= (e)=>{
        e.preventDefault()
        axios.post(`http://localhost:2000/hotel/addHotel`,hotel)
        .then((res)=>navigate('/'))
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
                    <h4 class="card-title">add info</h4>
                   <form onSubmit={handleedit}>
                    <div class="form-floating mb-3">
                        <input
                            type="text"
                            class="form-control"
                            name="formId1"
                            id="formId1"
                            placeholder=""
                           
                            onChange={(e)=>setHotel({...hotel,roomnumber:e.target.value})}
                        />
                        <label for="formId1">roomnumber</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input
                            type="text"
                            class="form-control"
                            name="formId1"
                            id="formId1"
                            placeholder=""
                           
                            onChange={(e)=>setHotel({...hotel,roomtype:e.target.value})}
                        />
                        <label for="formId1">roomtype</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input
                            type="text"
                            class="form-control"
                            name="formId1"
                            id="formId1"
                            placeholder=""
                            
                            onChange={(e)=>setHotel({...hotel,pricepernight:e.target.value})}
                        />
                        <label for="formId1">pricepernight</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input
                            type="text"
                            class="form-control"
                            name="formId1"
                            id="formId1"
                            placeholder=""
                            
                            onChange={(e)=>setHotel({...hotel,capacity:e.target.value})}
                        />
                        <label for="formId1">capacity</label>
                    </div>
                    <button
                        type="submit"
                        class="btn btn-primary"
    
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
