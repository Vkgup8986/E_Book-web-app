import {useState} from "react"
import {useEffect} from "react"
export const LearnUseEffect = () => {
  const [count,setCount] = useState(0)
  const handlEffect = () =>{
setCount(count + 1);
  }
  const [randamNum,setRandamNum] = useState(null)
  const generateRandomNum = () =>{
    const newRandomNum = Math.floor(Math.random() * 100) +1 ;
    setRandamNum(newRandomNum);
  }
  // eg.1 => it run each time when Component is mounted and re-render
   useEffect(() => {console.log("useEffect Called");})
  return (
    <>
    <h1>count : {count} </h1>
    <button onClick={handlEffect} > ClickToIncrease</button>

    <hr/>
    <h1>Random number generate : {randamNum} </h1>
    <button onClick={generateRandomNum } > ClickToGenerate</button>
    </>
  )
}
