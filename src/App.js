import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Component/Home'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      {/* <Route path="/about" component={About} /> */}
    </BrowserRouter>
  );
}

export default App;
