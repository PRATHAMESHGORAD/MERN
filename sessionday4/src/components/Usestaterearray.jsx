import React, { useState } from 'react'

const Usestaterearray = () => {
    const[emp,setEmps]=useState([])
    const[name,setName]=useState()
    const[sal,setSal]= useState(0)
    const addEmp =()=>{setEmps([...emp,{id:emp.length+1,ename:name,esal:sal}])}
  return (
    <div>
      <input type="text" onChange={(e)=>setName(e.target.value)} />
      <input type="number" onChange={(e)=>setSal(e.target.value)}/>
      <button onClick={addEmp}>addEmp</button>
      <ul>
        {
            emp.map((emp)=>(
                <li key={emp.id}>id:{emp.id} name:{emp.ename} salary:{emp.esal}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default Usestaterearray
