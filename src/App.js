import React from "react";
import './App.css';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom'
import Navbar from './componets/navbar'
import Home from './componets/Home'
import EditUser from './componets/Edituser'
import Adduser from './componets/Adduser'
import { GlobalProvider } from "./context/GlobalState";



function App() {
  return (

    <div className="App">
      <Navbar />
      <div style={{ maxWidth: "60rem", margin: "10rem auto" }}>
        <GlobalProvider>
          <Router>
            <Switch>
              < Route exact path='/' component={Home} />
              < Route path='/add' component={Adduser} />
              < Route path='/edit/:id' component={EditUser} />
              <Adduser />
            </Switch>
          </Router>
        </GlobalProvider>
      </ div >
    </div >
  );
}

export default App;
