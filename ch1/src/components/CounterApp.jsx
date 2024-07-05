import {useState} from "react" 
export const CounterApp = () => {
  const [count,setCount] = useState(0)

  const IncreaseCount = () =>{
  //setCount(count+1) ;
  setCount((prevCount) => prevCount +1)
  }
  const ResetCount = () =>{
setCount(0) 
  }
  return (
<>
<h1>Click to count : {count} </h1>
<button onClick= {IncreaseCount} >clickToIncrease</button>
<button onClick= {ResetCount} >clickToReset</button>
</>  
)
}
