import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link для навигации
import './ProductCarousel.css'; // Создайте этот CSS файл для стилей
import leftArrowIcon from '../../assets/images/webPics/arrowleft.png';
import Slider from 'react-slick';
import rightArrowIcon from '../../assets/images/webPics/arrowright.png';
import productsData from '../../data/products'; // Импортируем данные о продуктах

const translations = {
  ru: 'Наша продукция',
  uz: 'Mahsulotlarimiz',
  en: 'Our Products',
};

const ProductCarousel = ({ activeLang }) => {
  const products = productsData; // Используем импортированные данные
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = 4;

  const nextSet = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSet = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  if (!Array.isArray(products) || products.length === 0) {
    return <div>Загрузка продуктов или нет данных...</div>; // Сообщение об ошибке
  }

  // Получаем 4 товара для отображения, учитывая текущий индекс
  const displayedProducts = Array.from({ length: productsPerPage }, (_, i) => {
    return products[(currentIndex + i) % products.length];
  });

  return (
    <div className="product-carousel-container">
      <h1 className="our__products">{translations[activeLang]}</h1>
      <div className="carousel-wrapper">
        <button onClick={prevSet} className="arrow left-arrow">
          <img src={leftArrowIcon} alt="Previous" />
        </button>
        <div className="product-list">
          {displayedProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="product-item fade-in">
              <img src={product.image} alt={product.name[activeLang]} />
              <p className="product-title">{product.name[activeLang]}</p>
            </Link>
          ))}
        </div>
        <button onClick={nextSet} className="arrow right-arrow">
          <img src={rightArrowIcon} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;