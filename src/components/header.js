import React, { useState } from 'react'
import './css/header.css'
import { Link } from 'react-router-dom'
import { FaMoon, FaSun } from 'react-icons/fa'

function Header () {
  const [darkMode, setDarkMode] = useState(false)

  const ChangeTheme = () => {
    setDarkMode(!darkMode)
    const html = document.querySelector('html')
    html.classList.toggle('dark')
  }

  return (
    <div className='Header font-bold bg-gray-200 dark:bg-[#22252c] dark:text-white mb-4 flex justify-center items-center'>
      <div>
        <img src='./logo.png' alt='' className='logo rounded-full p-2' />
      </div>
      <div className='Search'>
        <input
          type='search'
          className='rounded-lg bg-gray-100 border-gray-400 border-y-2 border-x-2 dark:bg-white'
        />
      </div>
      <div>
        <span>
          <Link to='/SignUp' className=''>SignUp</Link>
        </span>
        <button
          onClick={ChangeTheme}
          className='Theme dark:bg-white dark:text-black m-2 p-2 rounded-lg border-slate-400 border-y-2 border-x-2 bg-white'
        >
          {darkMode ? <FaMoon size={20} className='' /> : <FaSun size={20} />}
        </button>
      </div>
    </div>
  )
}

export default Header
