import React, {useContext, useEffect} from 'react';
import Formulario from '../layout/Formulario'
import Barra from '../layout/Barra'
// import ListadoContactos from '../contactos/ListadoContactos'
import AuthContext from '../../context/autenticacion/authContext'


const Contactos = () => {
    const authContext = useContext(AuthContext);
    const {usuarioAutenticado} = authContext;

    useEffect(() => {
        usuarioAutenticado();
    },[])

    return (
        <div className="contenedor-app">
            <div className="form-contacto">
                <Formulario/>
            </div>

            <div className="seccion-principal">
                <Barra/>
                <main>
                {/* Form contactos */}
                    <div className="contenedor-contactos">
                        {/* <ListadoContactos/>  */}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Contactos;