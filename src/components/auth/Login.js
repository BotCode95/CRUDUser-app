import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext'
import AlertContext from '../../context/alertas/alertaContext';

const Login = (props) => {

    
      //extraer los valores del context
      const alertaContext = useContext(AlertContext);
      const {alerta, mostrarAlerta} = alertaContext;

    //state usuario
    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, iniciarSesion} = authContext;

      //en caso de que el usuario o password no exista
      useEffect(() => {   
        if(autenticado){
            props.history.push('/usuarios');
        }

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        //eslint-disable-next-line
    },[mensaje, autenticado, props.history]);

    //state for login
    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    })

    //extract from users
    const {email, password} = usuario;

    const onChange = e => {

        setUsuario({
            ...usuario, // para que no se se reescriba lo que este en otro campo
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

          //validar que no haya campos vacios
          if(email.trim() === '' || password.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            
        }

        //pasarlo al action del label
        iniciarSesion({email, password})
    }

    return (  
        <div className="form-usuario">
         { alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
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
                            value={password}
                            onChange={onChange} />
                    </div>
                    <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Iniciar Sesión"
                    />
                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta">Obtener Cuenta</Link>
            </div>
        </div>
    );
}
 
export default Login;