import React from 'react';
import EditarUsuario from '../usuarios/EditarUsuario';
import ListadoUsuario from '../usuarios/ListadoUsuarios'
// import EditarUsuario from '../usuarios/EditarUsuario'

const FormularioUsuario = () => {
    return (
        <div>
            <h1>Formulario <span>Usuarios</span></h1>
            {/* <EditarUsuario/> */}
            <div className="contactos">
                <h2>Usuarios en BD</h2>
                <ListadoUsuario/>
            </div>
        </div>
    )
}

export default FormularioUsuario;