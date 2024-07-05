import {useState} from 'react'

export const useCustomCounter = () => {
  const [count, setCount] = useState(0)

   const countIncrease = () =>{
    setCount(count +1);
  }
  
  return (
    count,countIncrease
  )
}