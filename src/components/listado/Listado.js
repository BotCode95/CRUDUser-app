// import React, {Fragment, useContext, useEffect} from 'react';

// import Barra from '../layout/Barra'

// import AuthContext from '../../context/autenticacion/authContext'

// import ListadoUsuarios from './ListadoUsuarios';


// const Listado = () => {

//      //extraer la informacion de autenticacion 
//  const authContext = useContext(AuthContext);
//  const {usuarioAutenticado} = authContext;

//  useEffect(() => {
//      usuarioAutenticado();
//      //eslint-disable-next-line
//      //obtenerUsuarios();
     
//  },[])
//     return (  
//         <Fragment>
//         <div className="seccion-principal">
//                 <Barra/>
//             </div>
//         <div className="contenedor-form sombra-dark">
//              <table className="table table-striped">
//             <thead className="bg-primary table-dark">
//                 <tr>
//                     <th scope="col">Nombre</th>
//                     <th scope="col">Apellido</th>
//                     <th scope="col">Email</th>
//                     <th scope="col">Telefono</th>
//                     <th scope="col">Ciudad</th>
//                     <th scope="col">Acciones</th>
//                 </tr>
//             </thead>
//             <tbody>
//             {/* <ListadoUsuarios/> */}
            
//             </tbody>
//         </table>
//         </div>
//         <div>
//             {/* <ListadoUsuarios/> */}
//         </div>
                    
          
//         </Fragment>
//     );
// }
 
// export default Listado;
