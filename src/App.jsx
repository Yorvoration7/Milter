import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/NavBar/Navigation.jsx';
import HomePage from './HomePage/HomePage.jsx';
import Products from './components/Products/Products.jsx';
import AboutPage from './AboutUs/AboutPage.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <div style={{ paddingTop: 64, minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;



