
export const LearnEvent = () => {
  const handleClick = (e) =>{
    e.preventDefault() ;
    console.log("button clicked one time");
  }
  const handleClick2 = (argu1) =>{
    console.log("button clicked having argument or parameters time",argu1);
  }
  return (

    <>
    {/*  without Arrrguments */}
    <button onClick = {handleClick}> Click 1 </button>

    {/*  with Arrgument */}
    <button onClick = { (e) => handleClick2("this is arguments")}> Click 2 </button>
    </>
  )
}
