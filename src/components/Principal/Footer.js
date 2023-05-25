import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Footer.css'
import Contacto from '../Contacto'

function Footer () {
  const [showContacto, setShowContacto] = useState(false)

  const handleShowContacto = e => {
    e.preventDefault()
    setShowContacto(true)
  }

  const handleHideContacto = () => {
    setShowContacto(false)
  }

  return (
    <footer className='bottom-0 left-0 w-full bg-gray-200 dark:bg-[#22252c] py-4'>
      <div className='container mx-auto'>
        <div className='footer-content flex justify-center items-center'>
          <p className='text-gray-600 dark:text-gray-200 text-sm'>
            © 2023 Ejemplo de Página Web. Todos los derechos reservados.
          </p>
          <ul className='footer-links ml-4'>
            <li>
              <Link to='/' className='text-gray-600 dark:text-gray-200'>
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to='/acerca_de'
                className='text-gray-600 dark:text-gray-200'
              >
                Acerca de
              </Link>
            </li>
            <li>
              <Link
                to='/servicios'
                className='text-gray-600 dark:text-gray-200'
              >
                Servicios
              </Link>
            </li>
            <li>
              <a
                href=' '
                className='text-gray-600 dark:text-gray-200'
                onClick={handleShowContacto}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
      {showContacto && <Contacto onClose={handleHideContacto} />}
    </footer>
  )
}

export default Footer
