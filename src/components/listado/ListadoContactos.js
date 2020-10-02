// import React, {Fragment, useContext, useEffect} from 'react';
// // import Proyecto from './Proyecto'

// import AlertaContext from '../../context/alertas/alertaContext';
// import {CSSTransition, TransitionGroup} from 'react-transition-group'
// import Usuario from './Contacto'
// import contactoContext from '../../context/contactos/contactoContext';

// const ListadoContactos = () => {
//     //extraer proyectos de state inicial
//     const contactosContext = useContext(contactoContext);
//     const { } = contactosContext;

//     const alertaContext = useContext(AlertaContext);
//     const {alerta, mostrarAlerta} = alertaContext;

  
//     //get proyect when charge the proyect
//     useEffect(() => {
//         //si hay un error
//         if(mensaje){

//             mostrarAlerta(mensaje.msg, mensaje.categoria);
//         }
//         obtenerUsuarios();
//         // eslint-disable-next
//     },[mensaje]);
  
    
//     return (
//         <Fragment>
        
//         <ul className="listado-proyectos">

//         {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>): null}

//             <TransitionGroup>  
//                 {usuarios.map(usuario => (
//                     <CSSTransition
//                         key= {usuario._id}
//                         timeout={200}
//                         classNames="proyecto"
//                     >
//                     <Usuario
//                         usuario={usuario}/>
                        
//                         </CSSTransition>
//                 ))}
//             </TransitionGroup>
            
//         </ul>
//         </Fragment>
//       );
// }
 
// export default ListadoContactos;