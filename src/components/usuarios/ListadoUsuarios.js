import React, {useContext, useEffect} from 'react'
import Usuario from './Usuario';
import usuarioContext from '../../context/usuarios/usuarioContext';
import AlertaContext from '../../context/alertas/alertaContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const ListadoUsuarios = () => {

    const usuariosContext = useContext(usuarioContext);
    const {mensaje, usuarios, obtenerUsuario} = usuariosContext;

    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    useEffect(() => {
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        obtenerUsuario();
    }, [mensaje])

    if(usuarios.length === 0)return <p>No hay usuarios, agrega uno</p>

    return (
        <ul className="listado-contactos">
        {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>): null}
            <TransitionGroup>
                {usuarios.map(usuario => (
                    <CSSTransition
                        key= {usuario._id}
                        timeout={200}
                        classNames="contacto"
                    >
                        <Usuario
                         usuario={usuario}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>

        </ul>
    )
}

export default ListadoUsuarios;