import React, { useState } from 'react'
import './header.css'

function Header () {
  const [darkMode, setDarkMode] = useState(false)

  const ChangeTheme = () => {
    setDarkMode(!darkMode)
    const html = document.querySelector('html')
    html.classList.toggle('dark')
  }
  return (
    <div className='Header font-bold bg-white dark:bg-[#22252c] dark:text-white mb-4'>
      <div>
        <img src='./logo.svg' alt='' className='logo' />
      </div>
      <div className='Search'>
        <input
          type='search'
          className=' rounded-lg bg-gray-200 border-gray-400 border-y-2 border-x-2 dark:bg-white'
        />
      </div>
      <div>
        <span>sign up</span>
        <button
          onClick={ChangeTheme}
          className='Theme dark:bg-white dark:text-black m-2 p-2 rounded-lg border-slate-400 border-y-2 border-x-2'
        >
          Theme
        </button>
      </div>
    </div>
  )
}

export default Header
