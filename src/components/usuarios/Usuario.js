import React, {useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import usuarioContext from '../../context/usuarios/usuarioContext'

const Usuario = ({usuario}) => {

    const usuariosContext = useContext(usuarioContext);
    const {eliminarUsuario, usuarioActual, guardarUsuarioActual} = usuariosContext;
    
    const history = useHistory();

    const usuarioEliminar = id => {
        eliminarUsuario(id, usuarioActual._id)
    }

    const seleccionarUsuario = usuario => {
        guardarUsuarioActual(usuario)
        history.push(`/nueva-cuenta/${usuario._id}`)
    }

    return (
        <li>
            <div>
                <p>{usuario.nombre}</p>
                <p>{usuario.apellido}</p>
                <p>{usuario.telefono}</p>
                <p>{usuario.ciudad}</p>
                <p>{usuario.email}</p>
            </div>
        <div className="acciones">
            <button
                type="button"
                className="btn btn-primario"
                onClick= {() => seleccionarUsuario(usuario)}
               
            >Editar</button>
            <button
                type="button"
                className="btn btn-secundario"
                onClick= {() => usuarioEliminar(usuario._id)}
            >Eliminar</button>
        </div>
        </li>
    )
}

export default Usuario;