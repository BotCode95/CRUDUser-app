import React, {Fragment, useState, useContext, useEffect} from 'react';
import contactoContext from '../../context/contactos/contactoContext'

const NuevoContacto = () => {

    const contactosContext = useContext(contactoContext);
    const {errorformulario, agregarContacto, obtenerContacto, mostrarError, 
        contactoActual, limpiarContacto, actualizarContacto, contactoseleccionado} = contactosContext;


    useEffect(() => {
        if(contactoseleccionado !== null){
            guardarContacto(contactoseleccionado);
        } else{
            guardarContacto({
                nombre: '',
                apellido: '',
                telefono: '',
                ciudad: '',
                email: ''
            })
        }
    },[contactoseleccionado]);

    
    const [contacto, guardarContacto] = useState({
        nombre: '',
        apellido: '',
        telefono : '',
        ciudad: '',
        email: ''
    })

    const {nombre,apellido,telefono,ciudad, email} = contacto;

    //si no hay contacto seleccionado
    if(!contacto) return null;

    //array destructuring para extraer el contacto actual
    // const [contactoActual] = contacto;

    const onChange = e => {
        guardarContacto({
            ...contacto,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitContacto = e => {
        e.preventDefault();

        if(nombre === '' || email === ''){
            mostrarError();
            return;
        }

        if(contactoseleccionado === null){
            //agregar contacto
            // contacto = contactoActual._id;
            agregarContacto(contacto);
        }else {
            //editar contacto
            actualizarContacto(contacto);
            //eliminar el contacto del state
            limpiarContacto();
        }

        // //obtener y filtrar
        obtenerContacto(contactoActual.id);
        // agregarContacto(contacto);
        //reset
        guardarContacto({
            nombre: '',
            apellido: '',
            telefono : '',
            ciudad: '',
            email: ''
        })
    }

    // const onClickFormulario = () => {
    //     mostrarFormulario();
    // }


    return (
        <Fragment>
       
         <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <form
                    onSubmit={onSubmitContacto}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            autoComplete="off"
                            value={nombre}
                            onChange={onChange} />
                    </div>
                    
                    <div className="campo-form">
                        <label htmlFor="apellido">Apellido</label>
                        <input 
                            type="text"
                            id="apellido"
                            name="apellido"
                            placeholder="Tu apellido"
                            autoComplete="off"
                            value={apellido}
                            onChange={onChange} />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="telefono">Telefono</label>
                        <input 
                            type="text"
                            id="telefono"
                            name="telefono"
                            placeholder="Tu telefono"
                            autoComplete="off"
                            value={telefono}
                            onChange={onChange} />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="ciudad">Ciudad</label>
                        <input 
                            type="text"
                            id="ciudad"
                            name="ciudad"
                            placeholder="Tu ciudad"
                            autoComplete="off"
                            value={ciudad}
                            onChange={onChange} />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            autoComplete="off"
                            value={email}
                            onChange={onChange} />
                    </div>
                    <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                        value= {contactoseleccionado ? 'Editar Contacto' : "Crear Contacto" }
                    />
                </form>
            </div>
        </div>
        {errorformulario ? <p className="mensaje error">El nombre del contacto es obligatorio</p> : null}
        </Fragment>
    )

}

export default NuevoContacto;