import './App.css'
import { Boton } from './componentes/boton'
import { Boton2 } from './componentes/boton_2'
import { Tarjeta } from './componentes/tarejtausuario'
import {useState,useEffect } from 'react'
import CardInteractiva from './componentes/UseState';
import { Timer } from './componentes/Timer'
function App() {
  let texto = "Soy un boton de componente \n pero este texto lo heredo por objeto props"
  let texto2= "Soy un boton pero recibo por desestructurado {}  "
  const datosUsario ={
    codigo: 2020251678011,
    nombre: "Andres Lopez",
    carrera: "Ingenieria en telematica",
    curso: "Frontend ReactJS"

  }
	const [count , setCount] = useState(0);
	const increment = ()=>{
    setCount(count + 1);
  }
  
  const restar = ()=>{
    setCount(count - 1);
  }

  const [tecla , setTecla] = useState("") 

  useEffect(()=>{
    const manejarTecla = (event)=>{
      setTecla(event.key);
    }
  
    window.addEventListener("keydown" , manejarTecla);
    
    return () => {
      //Limpiamos la memoria de los efectos para cuando el elemento desaparezca
      window.removeEventListener("keydown" , manejarTecla);
    }
    
  }, [])
  
  return (
    <>
      <h2>Hola! Esta es mi pagina personal para el curso de ReactJS ACMUD, es una recopilacion total de todos los temas vistos, nada de IA solo inteligencia artesanal :3 </h2>
      <button> Hola soy un boton generico html! </button>
      <br/>
      <Boton text = {texto}/>
      <br/>
      <Boton2 text = {texto2}/>
      <br/>
      <Tarjeta {...datosUsario}>{<button>Yo soy un boton child </button>}</Tarjeta>
	    <h2 className='contador-h2'> {count} </h2>
      <button  onClick={increment} className='button'>+</button>
      <button  onClick={restar} className='button'>-</button>
	    <CardInteractiva/>
      <h2>última tecla oprimida: {tecla}</h2>
      <Timer/>
      
    </>
  )
}

export default App
