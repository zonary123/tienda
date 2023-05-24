import { Link } from 'react-router-dom'
import './css/Footer.css'

function Footer () {
  return (
    <footer className='fixed bottom-0 left-0 w-full bg-gray-200 py-4 dark:bg-[#22252c] '>
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
              <Link to='/acerca_de' className='text-gray-600 dark:text-gray-200'>
                Acerca de
              </Link>
            </li>
            <li>
              <a href='#' className='text-gray-600 dark:text-gray-200'>
                Servicios
              </a>
            </li>
            <li>
              <Link to='/contacto' className='text-gray-600 dark:text-gray-200'>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
