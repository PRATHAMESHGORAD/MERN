import React from 'react'



const LIstRendering = () =>{
    const emps = [
        {id:1,name:"tom"},
        {id:2,name:"ate"}
    ]
    return(
        <div>
            <ul>
                {emps.map((emp)=>(
                    <li key={emp.id}>
id:{emp.id}-name:{emp.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LIstRendering


