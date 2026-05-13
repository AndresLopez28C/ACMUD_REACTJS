export function Tarjeta({ codigo, nombre, carrera, curso, children}){
    return(
        <>
        <div>
            <h3>Codigo: {codigo}</h3>
            <h3>Nombre: {nombre}</h3>
            <h3>Carrera: {carrera}</h3>
            <h3>Curso: {curso}</h3>
            <h3></h3>
            <h3>Po</h3>
            {children}
        </div>

        </>
    )
}
