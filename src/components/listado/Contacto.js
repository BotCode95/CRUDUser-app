// import React, {useState, useContext, Fragment} from 'react';
// import usuarioContext from '../../context/contactos/contactoContext'
// import ListadoUsuarios from './ListadoContactos';
// // import tareaContext from '../../context/tareas/tareaContext'
// const Usuario = ({usuario}) => {

//     const usuariosContext = useContext(usuarioContext);
//     const { obtenerUsuario, guardarUsuarioActual} = usuariosContext;

   
//     const {nombre, apellido, email, telefono, ciudad, _id} = usuario;
//     const seleccionarUsuario = usuario => {
//         guardarUsuarioActual(usuario);
//     }

//     return (  
//     <Fragment>
//         <tr>
//             <td>{nombre}</td>
//             <td>{apellido}</td>
//             <td>{email}</td>
//             <td>{telefono}</td>
//             <td>{ciudad}</td>
//             <td className="acciones">
//                 <button
//                     type="button"
//                     // onClick={() => redireccionarEdicion(usuario)}
//                     className="btn btn-primary mr-2"
//                     onClick={() => seleccionarUsuario(usuario)}
//                 >Editar</button>
//                 <button
//                     type="button"
//                     className="btn btn-danger"
//                     // onClick={() => confirmarEliminarUsuario(id)}
//                 >Eliminar</button>
              
//             </td>
            
//         </tr>
        
//         </Fragment>
//     );
// }
 
// export default Usuario;
