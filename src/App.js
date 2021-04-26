import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Contact from './Contact';
import Service from './Service';
import Home from './Home';
import About from './About';
import { Redirect, Route, Switch } from 'react-router';
import Navbar from './Navbar';
import './index.css';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/service' component={Service}/>
        <Redirect to="/"/>
      </Switch>
    </>
  );
}

export default App;
