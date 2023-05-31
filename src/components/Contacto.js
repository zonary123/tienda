import { useState } from 'react'
import { Link } from 'react-router-dom'

function Contacto () {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    // Aquí iría el código para enviar el mensaje por email o por alguna API
    setEnviado(true)
  }

  const handleChangeNombre = e => {
    setNombre(e.target.value)
  }

  const handleChangeEmail = e => {
    setEmail(e.target.value)
  }

  const handleChangeMensaje = e => {
    setMensaje(e.target.value)
  }

  if (enviado) {
    return (
      <div
        className={`flex justify-center items-center h-screen dark:bg-gray-900 dark:text-white bg-gray-100`}
      >
        <div
          className={`bg-gray-300 dark:bg-gray-800 p-8 rounded-lg dark:text-white text-gray-900`}
        >
          <h2 className='text-center text-2xl font-bold mb-4'>
            ¡Gracias por tu mensaje!
          </h2>
          <p className='text-center'>
            Nos pondremos en contacto contigo lo antes posible.
          </p>
          <Link to='/' className='text-center block mt-4'>
            Volver a la página de inicio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`flex justify-center items-center h-screen dark:bg-gray-900 dark:text-white bg-gray-100`}
    >
      <div
        className={`bg-gray-200 dark:bg-gray-800 p-8 rounded-lg dark:text-white text-gray-900`}
      >
        <h2 className='text-center text-2xl font-bold mb-4 text-black dark:text-white'>
          Contacto
        </h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='nombre'
              className={`block dark:text-gray-300 text-gray-700 font-bold mb-2`}
            >
              Nombre
            </label>
            <input
              type='text'
              id='nombre'
              name='nombre'
              className={`shadow appearance-none border rounded w-full py-2 px-3 dark:text-gray-300 dark:bg-gray-700 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline`}
              value={nombre}
              onChange={handleChangeNombre}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className={`block  dark:text-gray-300 text-gray-700  font-bold mb-2`}
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className={`shadow appearance-none border rounded w-full py-2 px-3 dark:text-gray-300 dark:bg-gray-700 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline`}
              value={email}
              onChange={handleChangeEmail}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='mensaje'
              className={`block dark:text-gray-300 text-gray-700 font-bold mb-2`}
            >
              Mensaje
            </label>
            <textarea
              id='mensaje'
              name='mensaje'
              className={`shadow appearance-none border rounded w-full py-2 px-3 dark:text-gray-300 dark:bg-gray-700 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline`}
              value={mensaje}
              onChange={handleChangeMensaje}
              required
            />
          </div>
          <div className='flex justify-center space-x-4'>
            <button
              type='submit'
              className={`bg-gray-800 dark:bg-gray-300 text-white dark:text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors duration-300`}
            >
              Enviar
            </button>
            <button
              type='button'
              className={`bg-gray-800 dark:bg-gray-300 text-white dark:text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors duration-300`}
            >
              <Link to='/' className='text-center '>
                Volver
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacto
