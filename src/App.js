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
      {/* Ruta para la página de inicio */}
      <Route path='/' element={<Home />} />

      {/* Ruta para la página de registro */}
      <Route path='/signup' element={<SignUp />} />

      {/* Ruta para la página de contacto */}
      <Route path='/contacto' element={<Contacto />} />

      {/* Ruta para la página de un producto específico */}
      <Route path='/producto/:id' element={<ProductPage />} />

      {/* Ruta para mostrar una página de error 404 en caso de que no se encuentre ninguna ruta coincidente */}
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default App
