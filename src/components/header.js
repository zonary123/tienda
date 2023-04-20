import React, { useState } from 'react'

function Header () {
  const [darkMode, setDarkMode] = useState(false)

  const ChangeTheme = () => {
    setDarkMode(!darkMode)
    const body = document.querySelector('body')
    body.classList.toggle('dark')
  }
  return (
    <div className='Header font-bold bg-white dark:bg-[#20252c] dark:text-white'>
      <h1>Header</h1>
      <button
        onClick={ChangeTheme}
        className='Theme dark:bg-white dark:text-black m-2 p-2 rounded-lg border-slate-400 border-y-2 border-x-2'
      >
        Theme
      </button>
    </div>
  )
}

export default Header
