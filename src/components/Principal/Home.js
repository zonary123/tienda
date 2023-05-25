import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Productos from '../Productos/getproductos'; // Corregido: Cambiado "Producto" por "Productos"

function Home() {
  return (
    <>
      <Header />
      <main className='bg-white dark:bg-[#2c3039]'>
        <h1>Tienda Online</h1>
        <Productos /> {/* Corregido: Cambiado "Producto" por "Productos" */}
      </main>
      <Footer />
    </>
  );
}

export default Home;
