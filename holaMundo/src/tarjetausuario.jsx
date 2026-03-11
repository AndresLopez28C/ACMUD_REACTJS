export function TarjetaUsuario({nombre, rol, id, equipo, onDelete}){
    return(<>
    <div className="user-info_container" >
        <h3>Id: {"" + id}</h3> 
        <h3>Nombre: {"" +nombre}</h3> 
        <h3>Rol:{"" +rol}</h3> 
        <h3>Equipo:{" " +equipo}</h3> 
        <button className="btn-delete" onClick={()=> onDelete(nombre)}> borrar usuario</button>

    </div>
    </>)
}