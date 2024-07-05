import React from 'react'
import { Authors } from '../data.js'
const AuthorsName = () => {
  return (
    <>
    <h1 className='text-4xl font-bold text-center my-8'>Featured Author</h1>
    <div className='flex justify-around text-center'>
      {
      Authors.map((author,i) => (
        <div>
          <img src= {author.Profile_image} alt={author.name} 
          className='mx-auto mb-4 w-28 h-28 rounded-lg'/>
          <h5>{author.name}</h5>
        </div>
      ))
      }
    </div>
    </>
  )
}

export default AuthorsName