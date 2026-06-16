import React from 'react'
import Formhandling from './componnets/Formhandling'
import 'bootstrap/dist/css/bootstrap.min.css'
import Usestateobject from './componnets/Usestateobject'
import Usestatearray from './componnets/Usestatearray'
import Useeffect from './componnets/Useeffect'
import Fetchmultipost from '../../sessionday5/src/components/Fetchmultipost'
import Fetchsinglepost from './componnets/Fetchsinglepost'
const App = () => {
  return (
    <div>
      <Formhandling/>
      <Usestateobject/>
      <Usestatearray/>
      <Useeffect/>
      <Fetchmultipost/>
      <Fetchsinglepost/>
    </div>
  )
}

export default App
