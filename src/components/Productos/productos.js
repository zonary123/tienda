import React from 'react'
import productos from '../../json/productos.json'
export function renderStars (rating) {
  const stars = Array.from({ length: Math.floor(rating) }, (_, index) =>
    <span key={index} className='text-yellow-500'>
      &#9733;
    </span>
  )

  return stars
}

function getProductos () {
  const displayedProductos = productos.categories.flatMap(
    category => category.products
  )

  return (
    <div className='Catalogo grid content-start'>
      <div className='flex overflow-x-auto'>
        {displayedProductos.map((producto, index) =>
          <div
            className='Productos bg-slate-700 dark:bg-slate-500 rounded-lg w-48 h-72 m-2 p-2 flex flex-col justify-between'
            key={index}
          >
            <div className='Producto_imagen w-44 h-36 flex items-center mx-auto rounded-lg overflow-hidden'>
              <img
                src={producto.imagen}
                alt=''
                className='object-cover w-full h-full'
              />
            </div>
            <p>
              {producto.name}
            </p>
            <h1 className='text-center overflow-hidden'>
              {producto.brand}
            </h1>
            <p className='overflow-hidden'>
              Precio: {producto.price}
            </p>
            <p className='overflow-hidden'>
              Stock: {producto.stock}
            </p>
            <p className='overflow-hidden'>
              Puntuación: {renderStars(producto.rating)}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default getProductos
