import { useState } from 'react'
// import './App.css'
import {BotonC} from './boton'
import { BotonC2 } from './boton2'
import { Datosusuario } from './datosusuarios'

function App() {
  let texto ="Soy un boton componente! es decir tengo un archivo .jsx y recibo por props"
  let texto_d ="Soy un boton componente! pero recibo por desestructurado"
  const userData ={
    id:20251678011,
    nombre: "Andres",
    carrera: "Ingenieria telematica",
    curso: "ReactJS por ACMUD"
  }

  return (
    <>
    <button>Hola, soy un boton generico html</button>
    <br></br>
    <BotonC text={texto} name={"Tipo1"}></BotonC>
    <BotonC2 text={texto_d} name={"Tipo2"}></BotonC2>
    <Datosusuario {...userData}> {<BotonC text="Soy un boton componente pero hijo de contenedor" />} </Datosusuario>
    </>
  )
}

export default App
