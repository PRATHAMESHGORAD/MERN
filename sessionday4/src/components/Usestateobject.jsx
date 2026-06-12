import React, { useState } from 'react'

const Usestateobject = () => {
    const [user,setUser] = useState({uname:" ",upass:" "})
  return (
    <div>
      <input type="text" onChange={(e)=>setUser({...user,uname:e.target.value})}/>
       <input type="text" onChange={(e)=>setUser({...user,upass:e.target.value})}/>
       <h1>username:{user.uname}-password:{user.upass}</h1>
    </div>
  )
}

export default Usestateobject
