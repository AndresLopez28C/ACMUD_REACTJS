import './estilos.css'
export function BotonC(props){
    return(
        <>
        <button className={props.name}>{props.text} </button>
        </>
    )
}