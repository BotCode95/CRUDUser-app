import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AlertContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';
// import usuarioContext from '../../context/usuarios/usuariosContext';

const NuevaCuenta = (props) => {
    //extraer los valores del context
    const alertaContext = useContext(AlertContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, registrarUsuario} = authContext;

    //en caso de que el usuario se haya autenticado/registrado o es un registro duplicado
    useEffect(() => {   
        if(autenticado){
            props.history.push('/usuarios');
        }

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        //eslint-disable-next-line
    },[mensaje, autenticado, props.history]);

    //state usuario
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        ciudad: '',
        email: '',
        password: '',
        confirmar: ''
    })
    //extraer user
    const {nombre, apellido, telefono, ciudad, email, password, confirmar} = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        //validar que no haya campos vacios
        if(nombre.trim() === '' ||
            email.trim() === '' || 
            password.trim() === '' ||
           confirmar.trim()=== ''){
               mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
               return;
           }

        //password minimo de 6 caracteres
        if(password.length < 6) {
            mostrarAlerta('La contraseña debe contener minimo 6 caracteres', 'alerta-error');
            return;
        }

        //los 2 password deben ser iguales
         if(password !== confirmar){
            mostrarAlerta('La contraseña no coinciden', 'alerta-error');
            return;
        }
        
        //pasarlo al action
        registrarUsuario({
            nombre,
            apellido,
            telefono,
            ciudad,
            email,
            password
        });
    }

    return (  
        <div className="form-usuario">
          { alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Obtener Cuenta</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            autoComplete="off"
                            value={nombre}
                            onChange={onChange} />
                    </div>
                    
                    <div className="campo-form">
                        <label htmlFor="apellido">Apellido</label>
                        <input 
                            type="text"
                            id="apellido"
                            name="apellido"
                            placeholder="Tu apellido"
                            autoComplete="off"
                            value={apellido}
                            onChange={onChange} />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="telefono">Telefono</label>
                        <input 
                            type="text"
                            id="telefono"
                            name="telefono"
                            placeholder="Tu telefono"
                            autoComplete="off"
                            value={telefono}
                            onChange={onChange} />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="ciudad">Ciudad</label>
                        <input 
                            type="text"
                            id="ciudad"
                            name="ciudad"
                            placeholder="Tu ciudad"
                            autoComplete="off"
                            value={ciudad}
                            onChange={onChange} />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            autoComplete="off"
                            value={email}
                            onChange={onChange} />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            autoComplete="off"
                            value={password}
                            onChange={onChange} />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar</label>
                        <input 
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Confirma tu contraseña"
                            autoComplete="off"
                            value={confirmar}
                            onChange={onChange} />
                    </div>
                    <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Registrarme"
                    />
                </form>
                <Link to={'/'} className="enlace-cuenta">ir a inicio de sesión</Link>
            </div>
        </div>
    );
}
 
export default NuevaCuenta;