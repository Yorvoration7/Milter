import React from 'react';
import './AboutPage.css';
import ourPurposeHalal from '../assets/images/webPics/ourpurposehalal.png';
import halalBadge from '../assets/images/webPics/halalbadge.png';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero__content">
          <div className="about-hero__text">
            <h1 className="about-hero__title">Наша цель</h1>
            <p className="about-hero__subtitle">
              Создавать вкусные продукты<br />
              с заботой о будущем
            </p>
            <div className="about-hero__desc">
              Мы стремимся создавать продукты, которые не только вкусные, но и полезные для здоровья, отвечающие самым высоким стандартам качества и соответствующие требованиям Halal.
            </div>
          </div>
          <div className="about-hero__image-block">
            <img src={ourPurposeHalal} alt="Наша цель" className="about-hero__image" />
            <img src={halalBadge} alt="Halal" className="about-hero__halal" />
          </div>
        </div>
      </section>
      {/* ...остальные секции... */}
    </div>
  );
};

export default AboutPage; 