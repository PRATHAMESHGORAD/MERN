import React from 'react'
import { useState } from 'react'

const Usestatearray = () => {
    const [emp,setEmp] = useState([])
    const[name,setName]=useState()
    const[sal,setSal]=useState(0)
    const addEmp = ()=>{setEmp([...emp,{id:emp.length+1,ename:name,esal:sal}])}
  return (
    <div>
      <input type="text" onChange={(e)=>setName(e.target.value)} />
      <input type="text" onChange={(e)=>setSal(e.target.value)}/>
      <button onClick={addEmp}>addEmp</button>
      <ul>
        {
            emp.map((emp)=>(
                <li key={emp.id}>id:{emp.id} name:{emp.ename} sal:{emp.esal}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default Usestatearray
