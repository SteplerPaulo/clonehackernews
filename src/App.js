import React from 'react';
import './App.css';
import Brand from './components/Brand.js'
import Nav from './components/Nav.js'
import ItemCard from './components/ItemCard.js'

function App() {
  return (
    <div className="container-fluid">
      <Brand/>
      <Nav/>
      <ItemCard/>
    </div>
  );
}

export default App;
