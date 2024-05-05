import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div className='absolute m-auto '>
      <div className='absolute w-52 bg-gradient-to-b from black px-2 py-2 z-20'>
        <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='logo'/>
      </div>
       <Header/>
       <form className='absolute justify-center m-auto w-3/12 text-white p-2 m-2  bg-gradient-to-r from-purple-500 to-pink-500 '>
        <h1 className='m-4 p-4 text-2xl'>Sign In</h1>
          <input type="email" placeholder="Email or mobile number" className='m-4 p-4' />
          <input type="password" placeholder="Password" className='m-4 p-4' />
          <button className='m-4 p-4 bg-red-700 text-xl flex w-7/12 mr-44'>Sign In</button>
       </form>
    </div>
  )
}

export default Login