import { Link } from "react-router-dom"
import './css/Footer.css'
function Footer () {
  return (
    <footer>
      <div class='container'>
        <div class='footer-content'>
          <p>© 2023 Ejemplo de Página Web. Todos los derechos reservados.</p>
          <ul class='footer-links'>
            <li>
              <Link to='/' className=" text-cyan-600 ">Inicio</Link>
            </li>
            <li>
            <Link to='/acerca_de' className=" text-cyan-600 ">Acerca de</Link>
            </li>
            <li>
              <a href='#'>Servicios</a>
            </li>
            <li>
              <Link to={'/contacto'} className=" text-cyan-600 ">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
export default Footer
