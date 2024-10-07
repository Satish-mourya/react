import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//    let counter=15
  //  const addValue=()=>{     it doesn't update the value of ui
  //   counter=counter+1;
  //   console.log(counter);
  //  }
     const [counter,setcounter]=useState(3)
    //  const addValue=()=>{
    //   setcounter(counter+1)
    //  }
    //  const removeValue=()=>{    if we use more than one setcounter method then also it doesn't show the increment of more than one
    //   setcounter(counter-1)
    //  }

       const addValue=()=>{
      setcounter((prevcounter)=>prevcounter+1)
      setcounter((prevcounter)=>prevcounter+1)
      setcounter((prevcounter)=>prevcounter+1)
      setcounter((prevcounter)=>prevcounter+1)
      setcounter((prevcounter)=>prevcounter+1)
     }
     const removeValue=()=>{    
      setcounter(counter-1)
     }


  return (
    <>
      <h1> iron man {counter}</h1>
      <h2>counter value:{counter}</h2>
      <button
       onClick={addValue}> Add value</button>{" "}
      <button
      onClick={removeValue}>remove value</button>
      <p>footer: </p>
      
    </>
  )
}

export default App
