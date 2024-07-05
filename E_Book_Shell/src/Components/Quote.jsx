import React from 'react'
import { Books } from '../data.js'

export const Quote = () => {
  return (
<>
<div className='mt-6 mx-10 md:mx-40 flex gap-28'>
  <div>
<h1 className='text-7xl font-bold mb-10'>Unlock Worlds, <br />turn Pages...</h1>
<p className='text-xl'> “Consistency is harder when no one is clapping for you. You must clap for yourself during those times, you should always be your biggest fan.” - Luis Garcia</p>
</div>

 <div className='w-72'>
<swiper-container effect="cards" autoplay="true" >
  {
    Books.map((book,i) =>(
      <swiper-slide>
        <img src={book.book_cover} alt={book.title} width='200px' />
        </swiper-slide>
    ))
  }
  </swiper-container>
</div> 
</div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill=" #feb2b2" fillOpacity="0.4" d="M0,32L24,37.3C48,43,96,53,144,69.3C192,85,240,107,288,144C336,181,384,235,432,240C480,245,528,203,576,176C624,149,672,139,720,149.3C768,160,816,192,864,202.7C912,213,960,203,1008,186.7C1056,171,1104,149,1152,170.7C1200,192,1248,256,1296,282.7C1344,309,1392,299,1416,293.3L1440,288L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
</>  )
}

export default Quote
