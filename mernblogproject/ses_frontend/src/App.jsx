import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Add from './component/Add'
import Show from './component/Show'
import Edit from './component/Edit'
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './component/Register'
import Login from './component/Login'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/:id' element={<Show/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
