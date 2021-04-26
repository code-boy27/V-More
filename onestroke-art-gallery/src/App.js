import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/Navbar/webNavBar';
import Home from './components/Home/Home';
import Artist from './components/Artist/artist';

function App() {

  return (
    <>
      <main>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route path="/Artist" component={Artist} />
        </Switch>       
      </main>
    </>
  );
}

export default App;