import React, { useState, useEffect } from 'react'
import '../css/header.css'
import { Link } from 'react-router-dom'
import { FaMoon, FaSun, FaSearch } from 'react-icons/fa'
import productos from '../../json/productos.json'

function Header () {
  const [darkMode, setDarkMode] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isSearchFocused, setSearchFocused] = useState(false)

  useEffect(
    () => {
      const storedTheme = localStorage.getItem('theme')
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
        .matches

      if (storedTheme === 'dark' || (!storedTheme && prefersDarkMode)) {
        setDarkMode(true)
        document.documentElement.classList.add('dark')
      } else {
        setDarkMode(false)
        document.documentElement.classList.remove('dark')
      }

      const filteredProducts = productos.filter(
        product =>
          (product.nombre &&
            product.nombre.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (product.descripcion &&
            product.descripcion
              .toLowerCase()
              .includes(searchTerm.toLowerCase()))
      )

      setSearchResults(filteredProducts)
    },
    [searchTerm]
  )

  const changeTheme = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light')
  }

  const handleSearchChange = event => {
    setSearchTerm(event.target.value)
    setSearchFocused(true)
  }

  return (
    <div className='Header font-bold bg-orange-400 dark:bg-[#22252c] dark:text-white flex justify-center items-center'>
      <div>
        <img src='./logo.png' alt='' className='logo rounded-full p-2' />
      </div>
      <div className='Search relative'>
        <input
          type='search'
          className={`rounded-lg text-black dark:text-black bg-gray-100 border-gray-400 border-y-2 border-x-2 dark:bg-white pl-8 pr-2 ${isSearchFocused
            ? 'search-focused'
            : ''}`}
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
        />

        <FaSearch
          size={20}
          className='absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500'
        />
        {isSearchFocused &&
          searchResults.length > 0 &&
          <ul className='absolute top-full left-0 right-0 rounded-lg bg-white dark:bg-gray-900 shadow-md z-10'>
            {searchResults.map(product =>
              <li key={product.id} className='p-2 border-b'>
                <Link
                  to={`/Producto/${product.id}`}
                  className='text-gray-800 dark:text-gray-200 hover:text-orange-500 dark:hover:text-cyan-300 flex items-center'
                  onClick={() => setSearchFocused(false)}
                >
                  <img src={product.imagen} alt='' className='mr-2 w-6 h-6' />
                  {product.nombre}
                </Link>
              </li>
            )}
          </ul>}
      </div>
      <div>
        <Link
          to='/SignUp'
          className='text-white bg-blue-500 px-4 py-2 rounded-lg mr-2'
        >
          SignUp
        </Link>

        <button
          onClick={changeTheme}
          className='Theme dark:bg-white dark:text-black m-2 p-2 rounded-lg border-slate-400 border-y-2 border-x-2 bg-white'
        >
          {darkMode ? <FaMoon size={20} className='' /> : <FaSun size={20} />}
        </button>
      </div>
    </div>
  )
}

export default Header
