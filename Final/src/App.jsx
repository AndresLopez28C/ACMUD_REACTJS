import './App.css'
import { Boton } from './componentes/boton'
import { Boton2 } from './componentes/boton_2'
function App() {
  let texto = "Soy un boton de componente \n pero este texto lo heredo por objeto props"
  let texto2= "Soy un boton pero recibo por desestructurado {}  "
  const datosUsario ={
    codigo: 2020251678011,
    nombre: "Andres Lopez",
    carrera: "Ingenieria en telematica",
    curso: "Frontend ReactJS"

  }
  return (
    <>
      <button> Hola soy un boton generico html! </button>
      <Boton text = {texto}/>
      <Boton2 text = {texto2}/>

    </>
  )
}

export default App
