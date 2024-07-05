
import{useState } from "react"
export const LearnState = () => {
  const [defaultValue,setValue] = useState(48);
  console.log(defaultValue);
  const handleState = () =>{
    setValue(1190);

  }
    const [position,setPosition] = useState({x:'motorola',y:'Realme'})
    console.log( 'phone brand : ',position);
    const changeBrand = () =>{
      setPosition({x :'Iphone15pro' , y:'iqoo'});
    }
  return (

<>
{/*  we using useState as a hook its giving one current value and 2nd is function which is for changing the current value */}
 <h1> number {defaultValue} </h1>
 <h1> phone Brand : {position.x} {position.y} </h1>
 <button onClick= {handleState} > changedNum </button>
 <button onClick= {changeBrand} > changedBrand </button>
</>  )
}
