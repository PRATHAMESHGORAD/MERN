import React from 'react'
import ProductList from './components/ProductList'
import Cart from "./components/Cart"
const App = () => {
  return (
    <div>
      <h1>redux shopping cart</h1>
      <ProductList/>
      <hr />
      <Cart/>
    </div>
  )
}

export default App
