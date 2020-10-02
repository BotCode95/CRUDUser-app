import React from 'react';
import ListadoUsuario from '../usuarios/ListadoUsuarios'
// import NuevoUsuario from '../usuarios/NuevoUsuario'

const FormularioUsuario = () => {
    return (
        <div>
            <h1>Formulario <span>Usuarios</span></h1>
            {/* <NuevoUsuario/> */}
            <div className="contactos">
                <h2>Usuarios en BD</h2>
                <ListadoUsuario/>
            </div>
        </div>
    )
}

export default FormularioUsuario;