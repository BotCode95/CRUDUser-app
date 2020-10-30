import React, { useContext, useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom'
import AuthContext from '../../context/autenticacion/authContext'
//higher order components

const RutaPrivada = ({ component: Component, ...props}) => {
    
    const authContext = useContext(AuthContext);
    const { autenticado, cargando, usuarioAutenticado } = authContext;

    useEffect(() => {
        //al recargar la pag mantiene la sesion
        usuarioAutenticado();
        //eslint-disable-next-line
    },[])
    return(
        <Route {...props} 
        render={props => !autenticado && !cargando
         ? (
             //si el usuario no esta autenticado se redirige a la pag principal
            <Redirect to="/" />
        )
        : (
            //si esta autenticado va a la pag que necesita
            <Component {...props} />
        )}

        />
    );
}

export default RutaPrivada;