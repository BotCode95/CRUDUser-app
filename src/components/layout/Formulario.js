import React from 'react';
import NuevoContacto from '../contactos/NuevoContacto'
import ListadoContacto from '../contactos/ListadoContactos'

const Formulario = () => {
    return (
        <div>
            <h1>Formulario <span>Contacto</span></h1>
            <NuevoContacto/>
            <div className="contactos">
                <h2>Tus contactos</h2>
                <ListadoContacto/>
            </div>
        </div>
    )
}

export default Formulario;