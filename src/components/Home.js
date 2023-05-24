import Footer from './Footer'
import Header from './header'
import { Route, Routes } from 'react-router-dom'

function Home () {
  return (
    <>
      <Header />
      <main>
        <h1>Tienda Online</h1>
      </main>
      <Footer />
    </>
  )
}

export default Home
