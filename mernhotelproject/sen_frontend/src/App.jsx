import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './component/Navbar'
import Edit from './component/Edit'
import Add from './component/Add'

import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './component/Home'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/add' element={<Add/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
           

      </Routes>
      
    </BrowserRouter>
  )
}

export default App
