import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import productos from '../../json/productos.json'

export function renderStars (rating) {
  const stars = Array.from({ length: Math.floor(rating) }, (_, index) =>
    <span key={index} className='text-yellow-500'>
      &#9733;
    </span>
  )

  return stars
}

export default function GetProductos () {
  const displayedProductos = productos
  const navigate = useNavigate()

  const handleVerMas = producto => {
    navigate(`/Producto/${producto.id}`)
  }

  return (
    <div className='Catalogo grid content-normal font-semibold'>
      <div className='flex flex-wrap justify-center'>
        {displayedProductos.map((producto, index) =>
          <div
            className='Productos bg-[#7eb6eb] dark:bg-[#282a36] rounded-lg w-80 m-4 p-4 flex flex-col justify-between'
            key={index}
          >
            <div className='Producto_imagen h-64 flex justify-center items-center mx-auto rounded-lg overflow-hidden'>
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className='object-cover object-center h-[250px] w-[288px]'
              />
            </div>
            <p className='text-gray-800 dark:text-gray-200 font-bold text-lg my-2'>
              {producto.nombre}
            </p>
            <h1 className='text-center text-gray-600 dark:text-gray-300 text-sm my-2'>
              {producto.marca}
            </h1>
            <p className='text-gray-600 dark:text-gray-400 my-2'>
              Precio: {producto.precio}
            </p>
            <p className='text-gray-600 dark:text-gray-400 my-2'>
              Stock: {producto.stock}
            </p>
            <p className='text-gray-600 dark:text-gray-400 my-2'>
              Puntuación: {renderStars(producto.valoracion)}
            </p>
            <div className='producto_botones flex justify-between'>
              <Link to={`/Producto/${producto.id}`}>
                <button
                  className='bg-blue-500 text-white font-bold py-2 px-3 rounded-lg'
                  onClick={() => handleVerMas(producto)}
                >
                  Ver más
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
