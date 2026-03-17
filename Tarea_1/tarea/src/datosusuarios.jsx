export function Datosusuario ({id, nombre, carrera,curso, children}){
    return(
        <>
        <div class="bordered-rectangle">
            <h2>Hola, soy un contenedor que recibo datos de manera Spread</h2>
            <h3>Codigo de la U: {id}</h3>
            <h3>Nombre: {nombre}</h3>
            <h3>Carrera que estudio: {carrera}</h3>
            <h3>Curso de esta practica: {curso}</h3>
            {children}
            <h3>Por eso no tiene css, no le hemos dado un nombre class</h3>
        </div>
        </>
    )
   
}