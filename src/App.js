import React from 'react';
import './App.css';
import Header from './components/Header.js'
import News from './views/News.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="container-fluid">
      <Header/>
      <News/>
      <Footer/>
    </div>
  );
}

export default App;
