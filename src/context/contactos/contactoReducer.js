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

export default (state, action) => {
switch(action.type){
        case OBTENER_CONTACTOS:
            return {
                ...state,
                contactos:action.payload
            }
        case AGREGAR_CONTACTO: 
            return {
                ...state,
                contactos: [...state.contactos, action.payload],
                formulario: false, //es decir una vez agregado el contacto lo vuelvo a pasar como false
                //para que no quede esperando registrar un nuevo contacto
                errorformulario: false
            }
        case VALIDAR_CONTACTO: 
            return {
                ...state,
                errorformulario: true
            }
        case ELIMINAR_CONTACTO:
            return {
                ...state,
                contactos: state.contactos.filter(contacto => contacto._id !== action.payload),
                contacto: null, //reset
            }
        case CONTACTO_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
        case ACTUALIZAR_CONTACTO:
            return {
                ...state,
                contactos: state.contactos.map(contacto => contacto._id === action.payload._id 
                    ? action.payload 
                    : contacto)
            }
        case CONTACTO_ACTUAL:
            return {
                ...state,
                contactoseleccionado: action.payload
            }
        case LIMPIAR_CONTACTO:
            return {
                ...state,
                contactoseleccionado: null
            }
        default: 
            return state;
    }
}