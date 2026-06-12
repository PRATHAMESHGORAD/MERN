import React from 'react'
import Props from './components/Props'
import UseState from './components/UseState'
import ConditionalRendering from './components/Conditionrendering'
import Condition2 from './components/Condition2'
import LIstRendering from './components/ListRendering'

const App = () => {
  return (
    <div>
      <Props name='peter' age={22}/>
      <UseState/>
      <ConditionalRendering isLoggedin={true}/>
      <Condition2 isLoggedin={false}/>
      <LIstRendering/>

    </div>
  )
}

export default App
