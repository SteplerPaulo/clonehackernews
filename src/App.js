import React from 'react';
import './App.css';
import Header from './components/Header.js'
import ItemCard from './components/ItemCard.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="container-fluid">
      <Header/>
      <ItemCard/>
      <Footer/>
    </div>
  );
}

export default App;
