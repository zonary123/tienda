import Filter from './components/Filter'
import Productos from './components/Productos/productos'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Error404 from './components/Error404'
import Contacto from './components/Contacto'


function App () {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='*' element={<Error404 />} />
      <Route path='/contacto' element={<Contacto />} />
    </Routes>
    </>
  )
}


export default App
