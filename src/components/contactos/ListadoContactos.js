import React, {useContext, useEffect} from 'react';
import Contacto from './Contacto';
import contactoContext from '../../context/contactos/contactoContext'
import AlertaContext from '../../context/alertas/alertaContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const ListadoContactos = () => {

    const contactosContext = useContext(contactoContext);
    const {mensaje, contactos, obtenerContacto} = contactosContext;

    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    useEffect(() => {
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

    obtenerContacto();
      //eslint-disable-next-line
    }, [mensaje])

    if(contactos.length === 0)return <p>No hay contactos, agrega uno</p>

    return (
        <ul className="listado-contactos">
        {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>): null}
            <TransitionGroup>
                {contactos.map(contacto => (
                    <CSSTransition
                        key= {contacto._id}
                        timeout={200}
                        classNames="contacto"
                    >
                        <Contacto
                         contacto={contacto}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>

        </ul>
    )
}

export default ListadoContactos