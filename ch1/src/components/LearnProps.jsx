
export const LearnProps = (props) => {
  return (
    <>
    {/*  Parent Component se child component me data pass karna hai tab using Props */}
    <h1>App.jsx me ja kr attribute dalo name ka usme koi data dalo to yum parent se koi data child me arah h or in prop.jsx file me props.name se get kar lo</h1>
    <h1> {props.name} </h1>
    <h1>  sum is = {props.roll} </h1>
    </>
  )
}
