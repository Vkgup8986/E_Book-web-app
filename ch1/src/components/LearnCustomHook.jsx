import {useCustomCounter} from "../Hook/useCustomCounter"

export const LearnCustomHook = () => {
  const{ count,countIncrease} = useCustomCounter()

  return (
    <>
    <h1>Count is :{count} </h1>
    <button onClick={countIncrease} >ClickToIncrease</button>
    </>
  )
}

