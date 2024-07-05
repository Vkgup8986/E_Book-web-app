import React from 'react'

const Footer = () => {
  return (
    <footer className='p-6 mt-8'>
    <div className='container mx-auto flex flex-col irems-center'>
     <p className='text-lg font-bold mb-2'>Book Center</p>
     <p className='text-gray-600 mb-4'>GT_Delhi_Road Sarojni Nagar,New Delhi,</p>
     <div className='flex space-x-4'>
      <a href="#" className='hover:text-gray-400'>About Us</a>
      <a href="#" className='hover:text-gray-400'>Contact</a>
      <a href="#" className='hover:text-gray-400'>Term & Condition</a>
      <a href="#" className='hover:text-gray-400'>Privacy Policy</a>
     </div>
    </div>
    </footer>
  )
}

export default Footer