import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Productos from '../Productos/getproductos'; // Corregido: Cambiado "Producto" por "Productos"

function Home() {
  return (
    <>
      <Header />
      <main className='bg-white dark:bg-[#2c3039]'>
        <Productos />
      </main>
      <Footer />
    </>
  );
}

export default Home;
