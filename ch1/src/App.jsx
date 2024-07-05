
import { CounterApp } from './components/CounterApp';
import { LearnComponent } from './components/LearnComponent';
import { LearnEvent } from './components/LearnEvent';
import { LearnJSX } from './components/LearnJSX';
import { LearnProps } from './components/LearnProps';
import { LearnState } from './components/LearnState';
import { LearnUseEffect } from './components/LearnUseEffect';
import { LearnUseMemo } from './components/LearnUseMemo';
import { LiftingStateUP } from './components/LiftingStateUP';
import { LearnCustomHook } from './components/LearnCustomHook';

function App() {
  let sum = 39 + 40 + 50;
  let getdata = (data) =>{
console.log(data);
  }

  return (
    <>
    {/* <LearnComponent/> use ctrl + k + c for comment for uncommnet use  u instred of c*/} 
    {/* <LearnJSX/> */}
    {/* < LearnProps name = "Vikash Gupta" roll = {sum} /> */}

    {/* < LearnEvent/> */}
    {/* < LiftingStateUP myClick = {getdata} /> */}
    {/* < LearnState/> */}
    {/* < CounterApp/> */}
    {/* < LearnUseEffect/> */}
    {/* < LearnUseMemo/> */}
    < LearnCustomHook/>
    </>
  );
}

export default App
