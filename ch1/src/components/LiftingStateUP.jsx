
export const LiftingStateUP = (props) => {
  const handClick =(e) => {
    e.preventDefault();
     let dt = document.write("this is the data my password and ID of bank");
    props.myClick(dt);
  }
  return (
    <>
    {/* data ko child se parent me bejna h by using events */}
     <button onClick={handClick}>get data</button>
    </>
  )
}
