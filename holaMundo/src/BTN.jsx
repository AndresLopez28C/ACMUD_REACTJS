import './btn.css'
export function BTN(props){
    return(
        <>
        <button className={props.name}>{props.text} </button>
        </>
    )
}

