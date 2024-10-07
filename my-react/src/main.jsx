import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const reactElement={
  type:'a',
  props:{
      href: 'https://google.com',
      target:'_blank'
  },
  children:'click me to visit google'
}

function My(){
return(
  <App/>
)
}

createRoot(document.getElementById('root')).render(
   
    
    <My/>
   
)
