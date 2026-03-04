import { Selector } from "./selector"
export function Fruteria(){
    const manejarSeleccion = (fruta)=>{
        console.log(fruta)
    }
    return(<>
        <Selector deFruta={manejarSeleccion}/>
    </>)
}