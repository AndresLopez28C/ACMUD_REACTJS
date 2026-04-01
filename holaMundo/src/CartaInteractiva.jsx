import { useState } from 'react'
const CartaInteractiva=() =>{
    const [ModoOscuro, setModoOscuro] = useState(false);

    const estilosContenedor = {
        backgroundColor: ModoOscuro ? '#A4133C' : '#F9F9F9',
        color: ModoOscuro ? '#1a1a1a' : '#2D3436',
        padding: '1rem',
        borderRadius: '0.015rem',
        textAlign: 'center',
        transition: 'all .3s ease'
    };

    const estilosBoton = { 
        backgroundColor: ModoOscuro ? '#FDCB6E' : '#6c5ce7',
        color : 'white',
        border: 'none',
        outLine: 'none',
        borderRadius: '.5rem',
        marginTop: '.625rem',
        fontWeight : 'bold'
    };
    return(<>
        {/* Creamos el contenedor con los estilos y definidos */}
        <div className="contenedor" style={estilosContenedor}>
            <h3 className="title">{ModoOscuro ? 'Modo Oscuro Activo' : 'Modo Claro Activo'}</h3>
            <p className="p__contenedor">Este componente cambia su aparencia dependiendo del botón, pasando de modo oscuro entre true o false </p>

            {/* Creamos el btn con los estilos definidos previamente también */}
            <button className="btn" style={estilosBoton} onClick={()=>{setModoOscuro(!ModoOscuro)}}>
                {/* Dentro del btn colocamos la función encargada del cambio de tema */}
                Cambiar a {ModoOscuro ? 'Modo Claro' : 'Modo Oscuro'}
            </button>
        </div>
    
    </>)
}

export default CartaInteractiva