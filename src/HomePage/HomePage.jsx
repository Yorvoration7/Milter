import React from 'react';
import './HomePage.css';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel.jsx';

const HomePage = (products,activeLang ) => {
  return (
    <div className="homepage">
      <section id="products" className="homepage-section">
        <h1>HomePage</h1>
        <p>homr page</p>
        <ProductCarousel
        products={products }
        activeLang={activeLang}
        />
        {/* Здесь можно добавить карточки продуктов или другой контент */}
      </section>
    </div>
  );
};

export default HomePage; 