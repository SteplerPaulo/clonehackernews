import React from 'react';
import './App.css';
import Brand from './components/Brand.js'
import Nav from './components/Nav.js'
import ItemCard from './components/ItemCard.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="container-fluid">
      <Brand/>
      <Nav/>
      <ItemCard/>
      <Footer/>
    </div>
  );
}

export default App;
