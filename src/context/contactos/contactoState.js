import React, {useReducer} from 'react';
import contactoContext from './contactoContext'
import contactoReducer from './contactoReducer';
import {
    OBTENER_CONTACTOS,
    AGREGAR_CONTACTO,
    CONTACTO_ERROR,
    VALIDAR_CONTACTO,
    CONTACTO_ACTUAL,
    ELIMINAR_CONTACTO,
    ACTUALIZAR_CONTACTO,
    LIMPIAR_CONTACTO
} from '../../types'
import clienteAxios from '../../config/axios.js'


const ContactoState = props => {
    const contactos = []

    const initialState = {
        contactos: [],
        formulario: false,
        errorformulario: false,
        contacto: null,
        mensaje: null,
        contactoseleccionado: null
    }

    //create dispacth y state
    const [state, dispatch] = useReducer(contactoReducer, initialState);

    // const obtenerContacto = async () => {
    //     // console.log(contacto)
    //     try {
    //         const resultado = await clienteAxios.get('/api/contactos');
    //         console.log(resultado)
    //         dispatch( {
    //             type: OBTENER_CONTACTOS,
    //             payload: resultado.data.contactos
    //         })
    //     } catch (error) {
    //         const alerta = {
    //             msg: 'Hubo un error',
    //             categoria: 'alerta-error'
    //         }
    //         dispatch({
    //             type: CONTACTO_ERROR,
    //             payload: alerta
    //         })
    //     }
    // }

    const obtenerContacto = async () => {
        // console.log(contacto)
        try {
            const resultado = await clienteAxios.get('/api/contactos');
            console.log(resultado)
            dispatch( {
                type: OBTENER_CONTACTOS,
                payload: resultado.data.contactos
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: CONTACTO_ERROR,
                payload: alerta
            })
        }
    }
      //add contactos
      const agregarContacto = async contacto  => {
        
        try {
            const resultado = await clienteAxios.post('/api/contactos', contacto);
            console.log(resultado);
              //insert to proyect the state
              dispatch({
                type: AGREGAR_CONTACTO,
                payload: resultado.data
               
            })
            
        }catch (error) {

            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: CONTACTO_ERROR,
                payload: alerta
            })
        }
    }

    //Valida el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_CONTACTO
        })
    }

    //seleccionar el contacto actual
    const contactoActual = contactoId => {
        dispatch({
            type: CONTACTO_ACTUAL,
            payload: contactoId
        })
    }
    //Actualizar contacto
    const actualizarContacto = async contacto => {

        try {
            //check el put 
            const resultado = await clienteAxios.put(`/api/contactos/${contacto._id}`, contacto);
            console.log(resultado);
            dispatch({
                type: ACTUALIZAR_CONTACTO,
                payload: resultado.data.contacto
            })
        } catch (error) {
            console.log(error);
        }
    }

    const guardarContactoActual = contacto => {
        dispatch({
            type: CONTACTO_ACTUAL,
            payload: contacto
        })
    }

    const limpiarContacto = () => {
        dispatch({
            type: LIMPIAR_CONTACTO
        })
    }
    //Elimina un Contacto
    const eliminarContacto = async contactoId => {
        try {
            await clienteAxios.delete(`/api/contactos/${contactoId}`);
            dispatch({
                type: ELIMINAR_CONTACTO,
                payload: contactoId
            })
        } catch (error) {

            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: CONTACTO_ERROR,
                payload: alerta
            })
        }
    }

    return (
        <contactoContext.Provider
            value={{
                contactos: state.contactos,
                formulario : state.formulario,
                errorformulario: state.errorformulario,
                contacto: state.contacto,
                mensaje: state.mensaje,
                contactoseleccionado: state.contactoseleccionado,
                obtenerContacto,
                agregarContacto,
                mostrarError,
                contactoActual,
                eliminarContacto,
                guardarContactoActual,
                actualizarContacto,
                limpiarContacto
                }}
        >
            {props.children}
        </contactoContext.Provider>
    )
}

export default ContactoState;