import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'  //Centrar el documento 
import { BTN } from './BTN'
import { BTND } from './BTND'
import { Fruteria } from './Fruteria'
import { TarjetaUsuario } from './tarjetausuario'
import CartaInteractiva from './CartaInteractiva'
function App() {
  const [count, setCount ]= useState(0);
  const increment = ()=> 
    setCount(count +1);
  const restar = ()=>
    setCount(count-1);
  const userData ={
    id:101,
    nombre: "Andres",
    rol: "Front runner",
    equipo: "5"
  }
  const deleteUser = (nombre)=>{
    return alert(`${nombre} ha sido eliminado alt96`)
  }

  // const [count, setCount] = useState(0)
  // let btnText = "crear"
  // const borrar = "delete "
  //Le estamos enviando un texto a 2 botones que son clase 
  return (
    <>
      {/* <TarjetaUsuario {...userData} onDelete={deleteUser}/> */}
      <h2> {count} </h2>
      <button onClick={increment}> Sumar + 1  </button>
      <button onClick = {restar}> Restar - 1</button>
      <CartaInteractiva/>
   
      {/* <button Classname= 'btn'>soy boton normal html </button> */}
      {/* <BTN text={btnText} name={"hola"}/>
      <BTND text={borrar} name={"chao"}/>    


      <Fruteria/> */}
    </>
  )
}

export default App
