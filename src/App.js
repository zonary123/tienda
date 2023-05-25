import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Principal/Home'
import SignUp from './components/SignUp'
import Error404 from './components/error/Error404'
import Contacto from './components/Contacto'
import ProductPage from './components/Productos/ProductPage'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/contacto' element={<Contacto />} />
      <Route path='/producto/:id' element={<ProductPage />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default App
