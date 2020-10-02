import React, {useContext, useEffect} from 'react';
// import FormularioUsuario from '../layout/FormularioUsuario';
import Barra from '../layout/Barra'

import AuthContext from '../../context/autenticacion/authContext'
import FormularioUsuario from '../layout/FormularioUsuario';

const Usuarios = () => {
    const authContext= useContext(AuthContext);
    const {usuarioAutenticado} = authContext;

    useEffect(() => {
        usuarioAutenticado();
    },[])

    return (
        <div className="contenedor-app">
            <div className="form-contacto">
                <FormularioUsuario/>
            </div>

            <div className="seccion-principal">
                <Barra/>
                
            </div>

        </div>
    )

}

export default Usuarios;