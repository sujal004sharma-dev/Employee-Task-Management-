import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

  const [Email, setEmail] = useState('')
  const [password, setpassword] = useState('')

  const SubmitHandler = (e) => {

    e.preventDefault();
    handleLogin(Email, password)

    setEmail("")
    setpassword("")
  }

  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <div className='flex flex-col text-white font-bold border-emerald-600  border-2 rounded-2xl p-20 justify-between items-center bottom-2 '>
        <h1 className='mb-5'>Login</h1>

        <div>
          <form onSubmit={(e) => {
            SubmitHandler(e)
          }}
            className='flex flex-col justify-center items-center ' action="">
            <input
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              required className='border-2 border-emerald-400 rounded-full flex text-l p-2 text-gray-500 outline-none bg-transparent ' type="email" placeholder='Enter Your Email' />
            <input
              value={password}
              onChange={(e) => {
                setpassword(e.target.value)
              }}
              required className='border-2 border-emerald-400 rounded-full flex mt-4 p-2 text-l  outline-none bg-transparent text-gray-500' type="password" placeholder='Enter Your Password' />
            <button className='text-white mt-5 outline-none border-none rounded-2xl  p-1 w-20 cursor-pointer transition-transform hover:scale-95 bg-emerald-400'>Log In</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
