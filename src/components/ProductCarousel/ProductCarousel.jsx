import React, { useState } from 'react';
import './ProductCarousel.css'; // Мы создадим этот CSS файл позже
import leftArrowIcon from '../../assets/images/webPics/arrowleft.png';
import rightArrowIcon from '../../assets/images/webPics/arrowright.png';
import productsData from '../../data/products'; // Импортируем данные о продуктах прямо сюда



const ProductCarousel = (
activeLang

) => { // Теперь компонент не принимает products как пропс
  // Вместо пропса products, используем импортированный массив productsData
  const products = productsData; // Используем импортированные данные

  const [currentIndex, setCurrentIndex] = useState(0); // Индекс первой карточки в текущем наборе
  const productsPerPage = 4; // Количество продуктов, отображаемых за раз

  const nextSet = () => {
    const lastIndex = products.length - productsPerPage; // Вычисляем последний возможный индекс
    setCurrentIndex(Math.min(currentIndex + productsPerPage, lastIndex < 0 ? 0 : lastIndex)); // Убеждаемся, что lastIndex не отрицательный если продуктов меньше 4
  };

  const prevSet = () => {
    setCurrentIndex(Math.max(currentIndex - productsPerPage, 0));
  };

  // Добавляем проверку, чтобы убедиться, что productsData загружены и являются массивом
  if (!Array.isArray(productsData) || productsData.length === 0) {
      return <div>Загрузка продуктов или нет данных...</div>; // Или другое сообщение
  }

  // Получаем продукты для текущего отображения
  const displayedProducts = products.slice(currentIndex, currentIndex + productsPerPage);

  return (
    <div className="product-carousel-container">
      <h2>Наша продукция</h2>
      <div className="carousel-wrapper">
        {/* Кнопка "Назад" будет отключена, если мы на первом наборе */}
        <button onClick={prevSet} className="arrow left-arrow" disabled={currentIndex === 0}>
          <img src={leftArrowIcon} alt="Previous" />
        </button>
        <div className="product-list">
          {displayedProducts.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name.ru} /> {/* Используем .ru для русского названия */}
              <p>{product.name.ru}</p>
            </div>
          ))}
        </div>
        {/* Кнопка "Вперед" будет отключена, если мы на последнем наборе */}
        <button onClick={nextSet} className="arrow right-arrow" disabled={currentIndex >= products.length - productsPerPage}>
           <img src={rightArrowIcon} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel; 