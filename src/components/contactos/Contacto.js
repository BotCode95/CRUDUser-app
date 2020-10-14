import React, {useContext} from 'react';
import contactoContext from '../../context/contactos/contactoContext'


const Contacto = ({contacto}) => {

    //get state from the proyect
    const contactosContext = useContext(contactoContext);
    const {eliminarContacto, contactoActual, guardarContactoActual} = contactosContext;

    const contactoEliminar = id => {
        eliminarContacto(id, contactoActual._id); //, contactoActual._id
    }

    const seleccionarContacto = contacto => {
        guardarContactoActual(contacto)
    }

    return ( 
        <li>
            <div>
                <p>{contacto.nombre}</p>
                <p>{contacto.apellido}</p>
                <p>{contacto.telefono}</p>
                <p>{contacto.ciudad}</p>
                <p>{contacto.email}</p>
            </div>    
            <div className="acciones">
            <button
                type="button"    
                className="btn btn-primario"
                onClick={() => seleccionarContacto(contacto)}
            >Editar
            </button> 
            <button
                type="button"
                className="btn btn-secundario"
                onClick={ () => contactoEliminar(contacto._id)}
            >Eliminar
            </button> 
            </div>
        </li>
     );
}
 
export default Contacto;