import React from 'react'

const ConditionalRendering = ({isLoggedin}) => {
if(isLoggedin){
  return (
   <>
   <h2>login succesfull</h2>
   
   </>
  )
}
else{
    return(
        <>
        <h2>failed</h2>
        </>
    )
   }
  
}

export default ConditionalRendering
