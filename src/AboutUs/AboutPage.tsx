import React from 'react';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero__text">
          <h1>Наша цель</h1>
          <p className="about-hero__subtitle">Создавать вкусные продукты с заботой о будущем</p>
        </div>
        <div className="about-hero__image-block">
          <img src="/placeholder-hero.png" alt="Мама и ребенок в поле" className="about-hero__image" />
          <img src="/placeholder-halal.png" alt="Halal" className="about-hero__halal" />
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-family">
        <img src="/placeholder-family.png" alt="Семья за столом" className="about-family__image" />
        <div className="about-family__text">
          <h2>О нас и о вас</h2>
          <p>
            Что для вас может быть важно?<br /><br />
            В еду вкладываются не слова, а силы, труд, забота под одной целью. Здоровье и счастье семьи — не случайность.<br /><br />
            Продукты создаются БЕЗ вредных добавок, ГМО и пестицидов, чтобы на вашем столе всегда была натуральная и полезная еда.<br /><br />
            Да, мы тоже родители, хозяйки, дети.<br /><br />
            Нам важно, чтобы на вашем столе всегда был вкусный и полезный продукт, который вы можете доверить своим близким.
          </p>
        </div>
      </section>

      {/* Technology Section */}
      <section className="about-tech">
        <div className="about-tech__text">
          <h2>Внимательно к технологиям</h2>
          <p>
            На сегодняшний день существует множество систем контроля качества, но мы уделяем особое внимание каждой детали.<br /><br />
            Мы используем современные технологии и следим за всеми этапами производства, чтобы вы получали только лучшее.<br /><br />
            Для нас важно, чтобы продукты, которые вы выбираете, соответствовали самым высоким стандартам качества и безопасности.
          </p>
        </div>
        <img src="/placeholder-products.png" alt="Продукция Milter" className="about-tech__image" />
      </section>
    </div>
  );
};

export default AboutPage; 