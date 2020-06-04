import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './component/Home/Home';
import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
import Alert from './component/layout/Alert';
import './App.css';
import Navbar from './component/dashboard/Navbar';
import Cartevisite from './component/dashboard/Cartevisite';
import Flyer from './component/dashboard/Flyer';
import admin from './component/dashboardAdmin/admin';
import facture from './component/dashboardAdmin/facture';

function App() {
  return (

    <div className="App">
      <Router>
      <Alert />
           <Switch>
      <Route exact path='/' component={Home} /> 
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route path='/dashboard' component={Navbar}/>
      <Route path='/cartevisite' component={Cartevisite}/>
      <Route path='/flyer' component={Flyer}/>
      <Route path='/admin' component={admin}/>
      <Route path='/facture' component={facture}/>


    </Switch>
    </Router>
    </div>
  );
}

export default App;
