import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../data/products'; // Импортируем данные о продуктах

const Product = () => {
  const { id } = useParams(); // Получаем ID товара из параметров маршрута
  const product = productsData.find((p) => p.id === parseInt(id)); // Находим товар по ID

  if (!product) {
    return <div>Товар не найден.</div>; // Обработка случая, если товар не найден
  }

  return (
    <div>
      <h1>{product.name.ru}</h1> {/* Динамически отображаем информацию о товаре */}
      <img src={product.image} alt={product.name.ru} />
      <p>{product.name.ru}</p> {/* Можно добавить описание */}
    </div>
  );
};

export default Product;