import { useState } from 'react'
import './App.css'
import Products from './components/Products/Products'
import { Routes, Route } from 'react-router-dom'
import Product from './components/Product/Product'
import CustomizedBadges from './components/Header/Header'


function App() {
  const [num, setNum] = useState(0)
 
  return (
    <>
      <CustomizedBadges num = {num}/>
      <Routes>
         <Route path='/' element={<Products num={num} setNum={setNum}/>}/>
         <Route path='/:id' element={<Product/>}/>
      </Routes>
      
    </>
  )
}

export default App
