import React from 'react'

const Condition2 = ({isLoggedin}) => {
  return (
    <div>
      {
        isLoggedin ? <h1>welcome</h1> : <h1>try agian</h1>
      }
    </div>
  )
}

export default Condition2
