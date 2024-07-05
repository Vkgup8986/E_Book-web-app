import React from 'react'

export const Navbar = () => {
  return (
    <nav className='p-4 mx-8'>
      <div>
      <div className='flex item-center justify-between' >
        <h1 className='text-gray-800 hover:text-gray-950 text-2xl font-bold mr-10 cursor-pointer'>e_Kitabe Padhe <span className='font-semibold text-sm'>E-Book-Store</span> </h1>
      
      <div className='flex item-center space-x-4'>
        <a href="" className='text-gray-950 px-4 py-1 rounded border-2 border-gray-700 transition duration-950 hover:border-gray-500 cursor-pointer hover:text-gray-700 bg-red-300 opacity-50'>Login</a>
        <a href="" className='text-gray-950 px-4 py-1 rounded border-2 border-gray-700 transition duration-950 hover:border-gray-500 cursor-pointer hover:text-gray-700 bg-red-300 opacity-50'>Creat Account</a>
      </div>
      </div>
      </div>
      
    </nav>
  )
}

export default Navbar