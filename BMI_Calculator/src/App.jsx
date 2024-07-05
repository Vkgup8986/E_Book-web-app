 import { useState } from "react";
 function App() {

  const [Weight ,setWeight] = useState()
  const [Height ,setHeight] = useState()
  const [Bmi ,setBmi] = useState("")
  const [Message, setMessage] = useState("")

// Logic
 let calcBmi = (e) => {
  e.preventDefault();
if(Weight === 0|| Height===0){
  alert("Please enter the valid Weight and Height")
}
else{
let Bmi = (Weight/(Height*Height/10000))
 setBmi(Bmi.toFixed(1)) // search man lena tofixed kya hai
}

if( Bmi < 18.5){
setMessage(" you are underweight")
}
 else if(Bmi > 18.5 && Bmi < 25){
  setMessage("you are in Healthy Weight")
 }
 else if(Bmi > 25 && Bmi < 30){
  setMessage("you are Overweight")
 }
 else if(Bmi > 30 && Bmi < 40){
  setMessage("you are in Obese Class")
 }

 else{
  setMessage("You are OverWeight and need to Exercise,Burn calories do Cardio Activity")
 }

 }

 const Reload = () => {
  window.location.reload();
}
  return(
    <div className="App">
      <div className="container">
        <h1>BMI Calculator</h1>
        <form onSubmit={calcBmi}>
          <div>
          <label>Weight(in kg)</label>
          <input type="text" placeholder="Type Weight in (kg)" value={Weight} onChange={(e) => setWeight(e.target.value)} />
          </div>

          <div>
              <label>Height(in cm)</label>
                 <input type="text" placeholder="Type Height in (cm)" value={Height}  onChange={(e) => setHeight(e.target.value)}/>
                  </div>

                  <div>
                <button className="btn" type="submit">
            Submit
          </button>
          <button className="btn btn-outline" onClick={Reload} type="submit">
            Reload
          </button>
        </div>

        <div className="center">
          <h3>Double Click or Tap Submit Button</h3>
        </div>

        <div className="center">
          <h3>Your BMI is :{Bmi} </h3>
          <p> Classification : {Message} </p>
        </div>

        </form>
      </div>

    </div>

  );
}

export default App;