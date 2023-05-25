import React, { useState } from 'react'

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  return (
    <div className='bg-gray-900 min-h-screen flex items-center justify-center'>
      <div className='bg-white text-gray-900 rounded-lg shadow-2xl p-8'>
        <h1 className='text-5xl font-bold mb-8'>SignUp</h1>
        <form>
          <div className='mb-8'>
            <label
              htmlFor='username'
              className='block text-lg font-medium text-gray-700'
            >
              Username
            </label>
            <input
              type='text'
              id='username'
              className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-3 px-4 border-gray-300 rounded-lg shadow-sm text-lg'
              placeholder='Enter your username'
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className='mb-8'>
            <label
              htmlFor='email'
              className='block text-lg font-medium text-gray-700'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-3 px-4 border-gray-300 rounded-lg shadow-sm text-lg'
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='mb-8'>
            <label
              htmlFor='password'
              className='block text-lg font-medium text-gray-700'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-3 px-4 border-gray-300 rounded-lg shadow-sm text-lg'
              placeholder='Enter your password'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type='submit'
            className='w-full flex justify-center py-4 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
