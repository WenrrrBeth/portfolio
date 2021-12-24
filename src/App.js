import React from 'react';
import './App.css';
import Nav from "./components/NavBar/Nav";
import Portfolio from "./components/Portfolio/Portfolio";
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
