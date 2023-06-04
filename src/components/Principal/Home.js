import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Productos from '../Productos/getproductos'; // Importamos el componente "Productos" desde el archivo "getproductos.js"

function Home() {
  return (
    <>
      <Header /> {/* Renderizamos el componente Header */}
      <main className='bg-white dark:bg-[#2c3039]'>
        <Productos /> {/* Renderizamos el componente Productos */}
      </main>
      <Footer /> {/* Renderizamos el componente Footer */}
    </>
  );
}

export default Home;
