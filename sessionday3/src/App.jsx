import React from 'react'
import Props from './components/props'
import UseState from './components/UseState'
import ConditionalRendering from './components/ConditionalRendering'
import Condition2 from './components/Condition2'
import LIstRendering from './components/LIstRendering'

const App = () => {
  return (
    <div>
      <Props name='peter' age={22}/>
      <UseState/>
      <ConditionalRendering isLoggedin={true}/>
      <Condition2 isLoggedin={true}/>
      <LIstRendering/>
    </div>
  )
}

export default App
