import React from 'react'
import { useParams } from 'react-router-dom'
import productos from '../../json/productos.json'
import { Link } from 'react-router-dom'
import Error404 from '../error/Error404'
import comentarios from '../../json/comentarios.json'
import users from '../../json/users.json'
import { FiArrowLeft } from 'react-icons/fi'

function renderStars (rating) {
  const stars = Array.from({ length: Math.floor(rating) }, (_, index) =>
    <span key={index} className='text-yellow-500'>
      &#9733;
    </span>
  )

  return stars
}

const ProductPage = () => {
  const { id } = useParams()
  const producto = productos.find(p => p.id === parseInt(id))

  if (!producto) {
    return <Error404 />
  }

  const comentariosProducto = comentarios.filter(
    c => c.producto_id === parseInt(id)
  )

  const comentariosConUsuario = comentariosProducto.map(c => {
    const usuario = users.find(u => u.user_id === c.usuario_id)
    return {
      comentario_id: c.comentario_id,
      comentario: c.comentario,
      usuario: usuario ? usuario.username : '',
      img_perfil: usuario ? usuario.img_perfil : ''
    }
  })

  return (
    <div className='max-w-screen-lg mx-auto'>
      <div className='flex flex-col md:flex-row items-center justify-center md:justify-between my-8'>
        <div className='md:w-1/2 lg:w-3/5 xl:w-2/3'>
          <div className='md:sticky md:top-8'>
            <div className='Producto_imagen h-64 md:h-auto md:max-w-md lg:max-w-lg xl:max-w-xl flex justify-center items-center mx-auto rounded-lg overflow-hidden'>
              <img
                src={
                  producto.imagen === null
                    ? '../img/no-encontrado.png'
                    : producto.imagen
                }
                alt={producto.nombre}
                className='object-cover object-center h-full w-full'
              />
            </div>
          </div>
        </div>
        <div className='md:w-1/2 lg:w-2/5 xl:w-1/3'>
          <div className='px-4 md:px-6'>
            <h2 className='text-gray-800 dark:text-gray-200 font-bold text-3xl mb-2'>
              {producto.nombre}
            </h2>
            <h3 className='text-gray-600 dark:text-gray-300 text-xl mb-2'>
              {producto.marca}
            </h3>
            <p className='text-gray-600 dark:text-gray-400 my-2 text-2xl'>
              Precio: ${producto.precio.toFixed(2)}
            </p>
            <p className='text-gray-600 dark:text-gray-400 my-2 text-2xl'>
              Stock: {producto.stock}
            </p>
            <div className='flex items-center mb-2'>
              <p className='text-gray-600 dark:text-gray-400 text-lg mr-2'>
                Puntuación:
              </p>
              <div className='flex'>
                {renderStars(producto.valoracion)}
              </div>
            </div>
            <p className='text-gray-600 dark:text-gray-400 my-2 text-lg'>
              {producto.descripcion}
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className='text-center text-3xl font-bold mb-6 opacity-80 hover:opacity-100 transition-opacity duration-300'>
          Comentarios
        </h2>
        <div className='flex items-center justify-center'>
          <div className='bg-gray-100 dark:bg-gray-800 rounded-lg p-8 mx-auto max-w-md w-full md:w-3/4 lg:w-1/2'>
            {comentariosConUsuario.length === 0
              ? <div className='text-gray-700 dark:text-gray-300'>
                  No hay comentarios sobre este producto.
                </div>
              : comentariosConUsuario.map(comentario =>
                <div
                  className='bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4'
                  key={comentario.comentario_id}
                  >
                  <div className='flex items-center mb-4'>
                    {comentario.img_perfil
                        ? <img
                          src={comentario.img_perfil}
                          alt={comentario.usuario}
                          className='w-12 h-12 rounded-full mr-4'
                          />
                        : <div className='w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-4' />}
                    <p className='text-gray-900 dark:text-gray-100 font-bold text-lg'>
                      {comentario.usuario}
                    </p>
                  </div>
                  <p className='text-gray-700 dark:text-gray-300 text-lg'>
                    {comentario.comentario}
                  </p>
                </div>
                )}
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-8'>
        <Link
          to='/'
          className='bg-gray-800 dark:bg-gray-300 text-white dark:text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors duration-300 mb-2 flex items-center justify-center'
        >
          <FiArrowLeft className='mr-2 transition-transform duration-300 transform hover:translate-x-1' />
          Volver a la lista de productos
        </Link>
      </div>
    </div>
  )
}

export default ProductPage
