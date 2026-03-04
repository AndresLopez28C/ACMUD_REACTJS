import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BTN } from './BTN'
import { BTND } from './BTND'
import { Fruteria } from './Fruteria'
function App() {
  const [count, setCount] = useState(0)
  let btnText = "Boton de texto por codigo"
  const borrar = "delete"
  //Le estamos enviando un texto a 2 botones que son clase 
  return (
    <>
      {/* <button Classname= 'btn'>soy boton normal html </button> */}
      <BTN text={btnText} name={"hola"}/>
      <BTND text={borrar} name={"chao"}/>    


      <Fruteria/>
    </>
  )
}

export default App
