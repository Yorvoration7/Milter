import React from 'react';
import './HomePage.css';
// Удаляем импорт productsData, т.к. HomePage будет получать его как prop
// import productsData from '../data/products';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel.jsx';

// HomePage принимает массив продуктов и активный язык как props
const HomePage = ({ products, activeLang }) => { // Правильный синтаксис для приема props

  // Здесь у вас может быть другая логика или состояние для HomePage
  // activeLang теперь приходит как prop от родителя

  return (
    <div className="homepage">
      <section id="products" className="homepage-section">
{/* <h1 className="our__products">
Наша продукция
</h1> */}
        {/* Удаляем код, который пытался вывести продукты напрямую */}
        {/* <p> ... </p> */}

        {/* Передаем принятые props products и activeLang в дочерний компонент ProductCarousel */}
        {/* Убедитесь, что у вас есть компонент, который рендерит HomePage и передает ему эти props */}
        <ProductCarousel products={products} activeLang={activeLang} />

      </section>
      {/* ... другие секции HomePage ... */}
    </div>
  );
};

export default HomePage; 