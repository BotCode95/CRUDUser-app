import React from 'react';
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom'
import Login from './components/auth/Login'
import NuevaCuenta from './components/auth/NuevaCuenta'
import Contactos from './components/contactos/Contactos'
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';
import ContactoState from './context/contactos/contactoState'
import tokenAuth from './config/tokenAuth';
import RutaPrivada from './components/rutas/rutaPrivada'
//revisar si tenemos un token 
const token = localStorage.getItem('token');
if(token){
  tokenAuth(token);
}


function App() {

  console.log(process.env.REACT_APP_BACKEND_URL);
  return (
    <ContactoState>
      <AlertaState>
        <AuthState>
          <Router>
            <Switch>
              <Route exact path="/" component ={Login}/>
              <Route exact path="/nueva-cuenta" component ={NuevaCuenta}/>
              <RutaPrivada exact path="/contactos" component ={Contactos}/>
            </Switch>
          </Router>
        </AuthState>
      </AlertaState>
    </ContactoState>
  );
}

export default App;
