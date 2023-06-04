import React from 'react'
import productos from '../json/productos.json'
import { renderStars } from './productos'

function getProductosByCategory (category) {
  const displayedProductos = productos.filter(
    producto => producto.categoria === category
  )

  return displayedProductos
}

function ProductosPorCategoria ({ category }) {
  const productos = getProductosByCategory(category)

  return (
    <div className='Catalogo grid content-start'>
      <div className='flex overflow-x-auto'>
        {productos.map(producto =>
          <div
            className='Productos bg-slate-700 dark:bg-slate-500 rounded-lg w-48 h-72 m-2 p-2 flex flex-col justify-between'
            key={producto.id}
          >
            <div className='Producto_imagen w-44 h-36 flex items-center mx-auto rounded-lg overflow-hidden'>
              <img
                src={producto.imagen}
                alt=''
                className='object-cover w-full h-full'
              />
            </div>
            <p>
              {producto.nombre}
            </p>
            <h1 className='text-center overflow-hidden'>
              {producto.marca}
            </h1>
            <p className='overflow-hidden'>
              Precio: {producto.precio}
            </p>
            <p className='overflow-hidden'>
              Stock: {producto.stock}
            </p>
            <p>
              Puntuación: {renderStars(producto.valoracion)}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductosPorCategoria
