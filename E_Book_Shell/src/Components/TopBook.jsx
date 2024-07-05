import React from 'react'
import Book3 from '../assets/images/Books/book3.jpg'

const TopBook = () => {
  return (
    <>
    <h2 className='text-center font-bold mt-20 text-xl'>Top Selling Book of the Week</h2>
    <div className='bg-red-200 p-8'>
      <div className='flex items-center justify-center mb-4'>
        <img src= {Book3} alt="Book of the week" className='w-32 h-40 object-cover rounded-md'/>
      </div>
      <div className='text-center'>
        <h2 className='text-2xl font-bold mb-2'>Book of the week</h2>
        <p className='text-lg'>"Pencil"</p>
        <p className='italic font-bold'>BY Robert kibosaki</p>
      </div>
    </div>
    </>
  )
}

export default TopBook