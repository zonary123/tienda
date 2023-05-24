import React from 'react'
import { useLocation } from 'react-router-dom'

const Error404 = () => {
  const location = useLocation()

  const goBack = () => {
    window.history.back()
  }

  return (
    <div
      style={styles.container}
      className='w-full bg-white dark:bg-[#22252c] text-black dark:text-white'
    >
      <img
        src='https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_960_720.png'
        alt=''
        className='w-72 h-72'
      />
      <h1 style={styles.heading}>Página no encontrada</h1>
      <p style={styles.text}>
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <button style={styles.button} onClick={goBack}>
        Volver
      </button>
    </div>
  )
}

export default Error404

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center'
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px'
  },
  text: {
    fontSize: '18px',
    marginBottom: '20px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
}
