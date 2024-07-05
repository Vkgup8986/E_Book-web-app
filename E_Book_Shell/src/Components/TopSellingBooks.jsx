import React from 'react'
import { Books } from "../data.js";

const TopSellingBooks = () => {
  return (
    
    <div className='mx-20 my-10'>
      <h1 className='text-xl font-bold mb-5 text-center'>Top Selling Books</h1>
      <swiper-container slides-per-view ='4' autoplay='true' enabled ='true' Loop='true'>
        {
          Books.map((book,i) =>(
            <swiper-slide>
              <div className='flex flex-col items-center'>
                <a href={book.id}>
              <img src={book.book_cover} alt={book.title} width="100px" />
              </a>
              <p className='font-semibold'>{book.price}</p>
              
              </div>
            </swiper-slide>
            
          ))
        }
      </swiper-container>

    </div>
    
  )
}

export default TopSellingBooks