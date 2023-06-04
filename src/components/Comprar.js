import React from 'react'
import productos from '../json/productos.json'

// Función para renderizar las estrellas de la puntuación
function renderStars(rating) {
  const stars = Array.from({ length: Math.floor(rating) }, (_, index) =>
    <span key={index} className='text-yellow-500'>
      &#9733;
    </span>
  )

  return stars
}

export default function Comprar(producto) {
  // Obtiene todos los productos del archivo JSON
  const displayedProductos = productos.categories.flatMap(
    category => category.products
  )

  return (
    <div className='Catalogo grid content-normal font-semibold'>
      <div className='flex flex-wrap justify-center'>
        {displayedProductos.map((producto, index) =>
          <div
            className='Productos bg-[#7eb6eb] dark:bg-[#282a36] rounded-lg w-48 h-72 m-2 p-2 flex flex-col justify-between'
            key={index}
          >
            <div className='Producto_imagen w-44 h-36 flex items-center mx-auto rounded-lg overflow-hidden'>
              <img
                src={producto.imagen}
                alt=''
                className='object-cover w-full h-full'
              />
            </div>
            <p className='text-gray-800 dark:text-gray-200 font-bold text-lg mb-1'>
              {producto.name}
            </p>
            <h1 className='text-center text-gray-600 dark:text-gray-300 text-sm mb-2'>
              {producto.brand}
            </h1>
            <p className='text-gray-600 dark:text-gray-400 mb-2'>
              Precio: {producto.price}
            </p>
            <p className='text-gray-600 dark:text-gray-400 mb-2'>
              Stock: {producto.stock}
            </p>
            <p className='text-gray-600 dark:text-gray-400 mb-2 background'>
              Puntuación: {renderStars(producto.rating)}
            </p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg' >
              Comprar
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
