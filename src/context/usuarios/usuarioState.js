import React, {useReducer} from 'react';
import usuarioContext from './usuarioContext';
import usuarioReducer from './usuarioReducer';
import {
        OBTENER_USUARIO,
        AGREGAR_USUARIO,
        ACTUALIZAR_USUARIO,
        ELIMINAR_USUARIO,
        VALIDAR_USUARIO,
        USUARIO_ACTUAL,
        LIMPIAR_USUARIO,
        USUARIO_ERROR
} from '../../types'
import clienteAxios from '../../config/axios'

const UsuarioState = props => {

    const initialState = {
        usuarios: [],
        usuario: null,
        mensaje: null,
        errorformulario: false,
        formulario: false,
        usuarioseleccionado: null
    }

    //crear el dispatch y state
    const [state, dispatch] = useReducer(usuarioReducer, initialState);

    const obtenerUsuario = async () => {

        try {
            const resultado = await clienteAxios.get('/api/usuarios')
            dispatch({
                type: OBTENER_USUARIO,
                payload: resultado.data.usuarios
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: USUARIO_ERROR,
                payload: alerta
            })
        }
    }

    // const agregarUsuario = async usuario => {
    //     try {
    //         const resultado = await clienteAxios.post('/api/usuarios', usuario)

    //         dispatch({
    //             type: AGREGAR_USUARIO,
    //             payload: resultado.data
    //         })
    //     } catch (error) {
    //         const alerta = {
    //             msg: 'Hubo un error',
    //             categoria: 'alerta-error'
    //         }
    //         dispatch({
    //             type: USUARIO_ERROR,
    //             payload: alerta
    //         })
    //     }
    // }

      //Valida el formulario por errores
      const mostrarError = () => {
        dispatch({
            type: VALIDAR_USUARIO
        })
    }

    const usuarioActual = usuarioId => {
        dispatch({
            type: USUARIO_ACTUAL,
            payload: usuarioId
        })
    }

    const actualizarUsuario = async usuario => {
        try {
            const resultado = await clienteAxios.put(`/api/usuarios/${usuario._id}`, usuario)
            console.log(resultado);
            dispatch({
                type: ACTUALIZAR_USUARIO,
                payload: resultado.data.usuario
            })
        } catch (error) {
            console.log(error);
        }
    }

    const guardarUsuarioActual = usuario => {
        dispatch({
            type: USUARIO_ACTUAL,
            payload: usuario
        })
    }

    const limpiarUsuario = () => {
        dispatch({
            type: LIMPIAR_USUARIO
        })
    }

    const eliminarUsuario = async usuarioId => {
        try {
            await clienteAxios.delete(`api/usuarios/${usuarioId}`);
            dispatch({
                type: ELIMINAR_USUARIO,
                payload: usuarioId
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: USUARIO_ERROR,
                payload: alerta
            })
        }
    }

    return (
        <usuarioContext.Provider
            value = {{
                usuarios : state.usuarios,
                usuario: state.usuario,
                errorformulario: state.errorformulario,
                formulario: state.formulario,
                mensaje: state.mensaje,
                obtenerUsuario,
                mostrarError,
                usuarioActual,
                actualizarUsuario,
                guardarUsuarioActual,
                limpiarUsuario,
                eliminarUsuario
             }}
        >
            {props.children}
        </usuarioContext.Provider>
    )
}

export default UsuarioState;