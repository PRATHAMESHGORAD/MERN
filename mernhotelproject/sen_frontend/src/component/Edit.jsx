import React, { useEffect, useState } from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
    const [hotel,setHotel] = useState({roomnumber: '',roomtype: '',pricepernight: '',capacity: ''})
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:2000/hotel/showHotel/${id}`)
        .then((res)=>setHotel(res.data))
        .catch((err)=>console.log(err));
        
    },[id])

    const handleedit= (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:2000/hotel/updateHotel/${id}`,hotel)
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
                    <h4 className="card-title">edit info</h4>
                   <form onSubmit={handleedit}>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="formId1"
                            id="formId1"
                            placeholder=""
                            value={hotel.roomnumber}
                            onChange={(e)=>setHotel({...hotel,roomnumber:e.target.value})}
                        />
                        <label for="formId1">roomnumber</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="formId1"
                            id="formId1"
                            placeholder=""
                            value={hotel.roomtype}
                            onChange={(e)=>setHotel({...hotel,roomtype:e.target.value})}
                        />
                        <label for="formId1">roomtype</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="formId1"
                            id="formId1"
                            placeholder=""
                            value={hotel.pricepernight}
                            onChange={(e)=>setHotel({...hotel,pricepernight:e.target.value})}
                        />
                        <label for="formId1">pricepernight</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="formId1"
                            id="formId1"
                            placeholder=""
                            value={hotel.capacity}
                            onChange={(e)=>setHotel({...hotel,capacity:e.target.value})}
                        />
                        <label for="formId1">capacity</label>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
    
                    >
                        update
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
