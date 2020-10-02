import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/autenticacion/authContext'
// import ListadoUsuarios from '../listado/ListadoUsuarios';


const Barra = () => {

    //extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const {usuario, usuarioAutenticado, cerrarSesion } = authContext;

    useEffect(() => {
        usuarioAutenticado();
        //eslint-disable-next-line
       
    }, []);

    
    return (  
        <header className="app-header">
        { usuario
         ? <p className="nombre-usuario">Hola <span>{usuario.nombre}-{usuario.apellido}</span></p>
         : null}
         

            <nav className="nav-principal">
                {/* <a href="#!">Cerrar Sesión</a> */}
                <button
                    className="btn btn-blank cerrar-sesion"
                    onClick={() => cerrarSesion()}
                >Cerrar Sesión</button>
            </nav>
            
        </header>
    );
}
 
export default Barra;