import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(0)
  const [numberAllowed,setNumberAllowed]=useState(false)

  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState('')
  
  return (
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'> Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        
      </div>
     </div>
  )
}

export default App
