import {
    OBTENER_USUARIO,
    USUARIO_ACTUAL,
    VALIDAR_USUARIO,
    ELIMINAR_USUARIO,
    LIMPIAR_USUARIO,
    ACTUALIZAR_USUARIO,
    USUARIO_ERROR
} from '../../types'

export default (state, action) => {
    switch(action.type){
        case OBTENER_USUARIO: 
            return {
                ...state,
                usuarios:action.payload
            }
        case VALIDAR_USUARIO:
            return {
                ...state,
                errorformulario: true
            }
        case ELIMINAR_USUARIO: 
            return {
                ...state,
                usuarios: state.usuarios.filter(usuario => usuario._id !== action.payload),
                usuario: null //reset
            }
        case USUARIO_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
        case ACTUALIZAR_USUARIO:
            return {
                ...state,
                usuarios: state.usuarios.map(usuario => usuario._id === action.payload
                    ? action.payload
                    : usuario)
            }
        case USUARIO_ACTUAL:
            return {
                ...state,
                usuarioseleccionado: action.payload
            }
        case LIMPIAR_USUARIO:
            return {
                ...state,
                usuarioseleccionado: null
            }
        default: {
            return state
        }
    }
}