import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/webPics/logo.png';
import './Navigation.css';

const Navigation = ({ activeLang, setActiveLang }) => {
  const [open, setOpen] = useState(false);
  const langRef = useRef(null);
  const location = useLocation(); // Get current location

  useEffect(() => {
    const handleClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  // Helper function to check if link is active
  const isLinkActive = (pathname) => location.pathname === pathname;

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <Link to="/">
            <img src={logo} alt="Miltér logo" className="navbar__logo-img" />
          </Link>
        </div>
        <ul className="navbar__menu">
          {activeLang === 'ru' && (
            <>
              <li className="navbar__menu-products">
                <Link to="/products" className={isLinkActive('/products') ? 'navbar__menu-link--active' : ''}>Продукты</Link>
              </li>
              <li className="navbar__menu-about">
                <Link to="/about" className={isLinkActive('/about') ? 'navbar__menu-link--active' : ''}>О нас</Link>
              </li>
              <li className="navbar__menu-contacts">
                <Link to="/contacts" className={isLinkActive('/contacts') ? 'navbar__menu-link--active' : ''}>Контакты</Link>
              </li>
            </>
          )}
          {activeLang === 'uz' && (
            <>
              <li className="navbar__menu-products">
                <Link to="/products" className={isLinkActive('/products') ? 'navbar__menu-link--active' : ''}>Mahsulotlar</Link>
              </li>
              <li className="navbar__menu-about">
                <Link to="/about" className={isLinkActive('/about') ? 'navbar__menu-link--active' : ''}>Biz haqimizda</Link>
              </li>
              <li className="navbar__menu-contacts">
                <Link to="/contacts" className={isLinkActive('/contacts') ? 'navbar__menu-link--active' : ''}>Aloqa</Link>
              </li>
            </>
          )}
          {activeLang === 'en' && (
            <>
              <li className="navbar__menu-products">
                <Link to="/products" className={isLinkActive('/products') ? 'navbar__menu-link--active' : ''}>Products</Link>
              </li>
              <li className="navbar__menu-about">
                <Link to="/about" className={isLinkActive('/about') ? 'navbar__menu-link--active' : ''}>About</Link>
              </li>
              <li className="navbar__menu-contacts">
                <Link to="/contacts" className={isLinkActive('/contacts') ? 'navbar__menu-link--active' : ''}>Contacts</Link>
              </li>
            </>
          )}
        </ul>
        <div className="navbar__lang-switcher" ref={langRef}>
          <button
            className="navbar__lang-btn active"
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            {activeLang === 'ru' && 'Ру'}
            {activeLang === 'uz' && 'Uz'}
            {activeLang === 'en' && 'En'}
            <span className={`navbar__lang-arrow${open ? ' open' : ''}`}>▼</span>
          </button>
          <div className={`navbar__lang-dropdown${open ? ' open' : ''}`}>
            {activeLang !== 'ru' && (
              <button className="navbar__lang-btn" onClick={() => { setActiveLang('ru'); setOpen(false); }} type="button">Ру</button>
            )}
            {activeLang !== 'uz' && (
              <button className="navbar__lang-btn" onClick={() => { setActiveLang('uz'); setOpen(false); }} type="button">Уz</button>
            )}
            {activeLang !== 'en' && (
              <button className="navbar__lang-btn" onClick={() => { setActiveLang('en'); setOpen(false); }} type="button">En</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 