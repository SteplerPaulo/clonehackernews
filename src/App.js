import React from 'react';
import './App.css';
import Brand from './components/Brand.js'
import Nav from './components/Nav.js'

function App() {
  return (
    <div className="container-fluid">
      <Brand/>
      <Nav/>
    </div>
  );
}

export default App;
