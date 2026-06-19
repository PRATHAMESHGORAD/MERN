import React, { useEffect, useState, } from 'react'
import axios from 'axios'
import {NavLink,useNavigate } from 'react-router-dom'


const Home = () => {

    const [hotels,setHotels] = useState([])
   
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:2000/hotel/showhotels')
        .then((res)=>setHotels(res.data))
        .catch((err)=>console.log(err));
        
    },[])

    const handledel = (e,id) =>{
        e.preventDefault()
        axios.delete(`http://localhost:2000/hotel/deleteHotel/${id}`,hotels)
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
                <div
                    className="table-responsive"
                >
                    <table
                        className="table table-primary"
                    >
                        <thead>
                            <tr>
                                <th scope="col">roomnumber</th>
                                <th scope="col">roomtype</th>
                                <th scope="col">pricepernight</th>
                                <th scope="col">capacity</th>
                                 <th scope="col">actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                hotels.map((hotel)=>(
                                     <tr key={hotel._id}>
                                <td scope="row">{hotel.roomnumber}</td>
                                <td scope="row">{hotel.roomtype}</td>
                                <td scope="row">{hotel.pricepernight}</td>
                                <td scope="row">{hotel.capacity}</td>
                           <td>
                                <NavLink
                                    name=""
                                    id=""
                                    className="btn btn-primary"
                                    to={`/edit/${hotel._id}`}
                                    role="button"
                                    >edit</NavLink>

                                 <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={(e)=>handledel(e,hotel._id)}
                                 >
                                    delete
                                 </button>
                                 

                                
                                </td>
                            </tr>
                                ))
                            }
                           
                            
                        </tbody>
                    </table>
                </div>
                
            </div>
            
        </div>
        
    </div>
    
    </>
  )
}

export default Home
