import React from 'react';
import './Footer.css';
import logo from '../../assets/images/webPics/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column">
        <img src={logo} alt="Miltér logo" className="footer__logo-img" />

          <div className="footer__company">ООО «Милтер»<br />СОЗДАЕМ ПРОДУКТЫ С ЗАБОТОЙ О БУДУЩЕМ </div>
        </div>
        <div className="footer__column">
          <div className="footer__title">Телефоны</div>
          <div className="footer__info">+7 (999) 123-45-67</div>
          <div className="footer__info">+7 (495) 765-43-21</div>
        </div>
        <div className="footer__column">
          <div className="footer__title">Email</div>
          <div className="footer__info">info@milter.ru</div>
          <div className="footer__info">support@milter.ru</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
