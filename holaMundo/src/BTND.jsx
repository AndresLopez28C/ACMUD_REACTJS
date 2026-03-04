import './botones.css'

export function BTND({text,name}){
    return(
        <>
        <button className={name}>{text}</button>
        </>
    )
}