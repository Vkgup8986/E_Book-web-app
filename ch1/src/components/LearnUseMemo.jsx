// useMemo is used for increase performance by cache the unused code in all components
import {useState , useMemo,useEffect} from 'react'


export const LearnUseMemo = () => {

  const [count,setCount] = useState(0);
  console.log("Increase count function");
  const  handleCount = () =>{
    setCount(count +1);
  }

    
   const [randamNum,setRandamNum] = useState(null)
   console.log("Generate Random Number function");

  const generateRandomNum = () =>{
    const newRandomNum = Math.floor(Math.random() * 100) +1 ;
    setRandamNum(newRandomNum);
  }

  useEffect(() => {console.log("useEffect Called");},[count])


  // const isNumTen = () =>{
  //   console.log("isNumTen is Called");
  //   if( count === 10)
  //     {
  //       return "yyyeeessss"
  //     }
  //     return "no no no.."
  // } 

  // using useMemo for not calling into another components what above code in console isNumTen is called in both components

  const isNumTen = useMemo(() =>{
    console.log("isNumTen is Called");
    if( count === 10)
      {
        return "yyyeeessss"
      }
      return "no no no.."
  },[count] )
  return (
    <>
    <h1> Count Number is : {count} is Ten ? : {isNumTen} </h1>
    <button onClick={handleCount}>ClickToIncrease</button>
    <hr/>
    <h1> RAndom Number is : {randamNum} </h1>
    <button onClick={generateRandomNum}>ClickToIncrease</button>
    </>
  )
}
