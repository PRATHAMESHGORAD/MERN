import React from 'react'

const Condition3 = ({role}) => {
  
    
        switch (role) {
            case "admin":
                return <h1>hello admin</h1>
            case "user":
                return <h1>hello user</h1>
            case "guest":
                return <h1>hellow guest</h1>
                
               
        
            default:
                return <h1>invalid role</h1>;
        }
      
    
  
}

export default Condition3
