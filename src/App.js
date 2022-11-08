import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import { Banner } from './components/Banner/Banner'
import { Footer } from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
