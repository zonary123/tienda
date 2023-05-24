import Header from './components/header'
import Filter from './components/Filter'
import Productos from './components/Productos/productos'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp'

function App () {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/SignUp' element={<SignUp />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
