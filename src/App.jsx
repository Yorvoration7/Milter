import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/NavBar/Navigation.jsx';
import HomePage from './HomePage/HomePage.jsx';
import Products from './components/Products/Products.jsx';
import About from './components/About/About.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

function App() {
  const [activeLang, setActiveLang] = useState('ru');

  return (
    <Router>
      <Navigation activeLang={activeLang} setActiveLang={setActiveLang} />
      <div style={{ paddingTop: 64, minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<HomePage activeLang={activeLang} />} />
          <Route path="/products" element={<Products activeLang={activeLang} />} />
           <Route path="/about" element={<About activeLang={activeLang} />} />
          <Route path="/contacts" element={<Contacts activeLang={activeLang} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;



