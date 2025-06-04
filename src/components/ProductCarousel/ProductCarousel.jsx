import React, { useState, useEffect } from 'react';
import './ProductCarousel.css'; // Создайте этот CSS файл для стилей
import leftArrowIcon from '../../assets/images/webPics/arrowleft.png';
import rightArrowIcon from '../../assets/images/webPics/arrowright.png';
import productsData from '../../data/products'; // Импортируем данные о продуктах

// Импортируем изображения продуктов напрямую (убедитесь, что пути правильные)
import product1Image from '../../assets/images/product1.png';
import product2Image from '../../assets/images/webPics/product2.png';
import product3Image from '../../assets/images/webPics/product3.png';
import product4Image from '../../assets/images/webPics/product4.png';
import product5Image from '../../assets/images/webPics/product5.png';
import product6Image from '../../assets/images/webPics/product6.png';
import product7Image from '../../assets/images/webPics/product7.png';
import product8Image from '../../assets/images/webPics/product8.png';
// Добавьте импорты для остальных изображений продуктов, если нужно

// Создаем объект для сопоставления путей изображений и импортированных модулей
const productImageMap = {
  '../../src/assets/images/product1.png': product1Image, // Обновленный путь
  '../../src/assets/images/webPics/product2.png': product2Image, // Обновленный путь
  '../../src/assets/images/webPics/product3.png': product3Image, // Обновленный путь
  '../../src/assets/images/webPics/product4.png': product4Image, // Обновленный путь
  '../../src/assets/images/webPics/product5.png': product5Image, // Обновленный путь
  '../../src/assets/images/webPics/product6.png': product6Image, // Обновленный путь
  '../../src/assets/images/webPics/product7.png': product7Image, // Обновленный путь
  '../../src/assets/images/webPics/product8.png': product8Image, // Обновленный путь
  // Добавьте остальные сопоставления с обновленными путями
};

const translations = {
  ru: {
    ourProducts: 'Наша продукция',
    compositionTitle: 'Состав:',
    variationsTitle: 'Варианты:',
    nutritionalTitle: 'Пищевая ценность:',
    prevVariation: 'Предыдущий',
    nextVariation: 'Следующий',
    // Добавьте другие переводы, если необходимо
  },
  uz: {
    ourProducts: 'Mahsulotlarimiz',
    compositionTitle: 'Tarkibi:',
    variationsTitle: 'Variantlari:',
    nutritionalTitle: 'Oziqlik qiymati:',
    prevVariation: 'Oldingi',
    nextVariation: 'Keyingi',
    // Добавьте другие переводы, если необходимо
  },
  en: {
    ourProducts: 'Our Products',
    compositionTitle: 'Composition:',
    variationsTitle: 'Variations:',
    nutritionalTitle: 'Nutritional Info:',
    prevVariation: 'Previous',
    nextVariation: 'Next',
    // Добавьте другие переводы, если необходимо
  },
};

const ProductCarousel = ({ activeLang }) => {
  const products = productsData; // Используем импортированные данные продуктов
  const productsPerPage = 4; // Количество товаров на странице карусели

  // Состояние для индекса текущего набора товаров в карусели
  const [currentIndex, setCurrentIndex] = useState(0);
  // Состояние для выбранного продукта (при клике)
  const [selectedProduct, setSelectedProduct] = useState(productsData && productsData.length > 0 ? productsData[0] : null); // Инициализируем первым продуктом по умолчанию
  // Состояние для индекса выбранного варианта продукта
  const [currentVariationIndex, setCurrentVariationIndex] = useState(0);

  // Эффект для сброса выбранного варианта при смене выбранного продукта
  useEffect(() => {
    if (selectedProduct && selectedProduct.variations && selectedProduct.variations.length > 0) {
      // Устанавливаем первый вариант нового выбранного продукта и сбрасываем индекс
      setCurrentVariationIndex(0);
    } else {
      // Если вариантов нет, сбрасываем индекс и выбранный вариант
      setCurrentVariationIndex(0);
    }
  }, [selectedProduct]); // Зависимость от selectedProduct

  // Вычисляем отображаемые товары для текущего слайда
  const displayedProducts = Array.from({ length: productsPerPage }, (_, i) => {
    return products[(currentIndex + i) % products.length];
  });

  // Функция для перехода к следующему набору товаров в карусели
  const nextSet = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  // Функция для перехода к предыдущему набору товаров в карусели
  const prevSet = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  // Функция для обработки клика по товару в карусели
  const handleProductClick = (product) => {
    setSelectedProduct(product); // Устанавливаем выбранный продукт
    // При выборе нового продукта, сбрасываем индекс варианта
    setCurrentVariationIndex(0);
  };

  // Получаем выбранный вариант продукта
  const selectedVariation = selectedProduct?.variations?.[currentVariationIndex];

  // Функции для навигации по вариантам выбранного продукта
  const nextVariation = () => {
    if (selectedProduct?.variations && selectedProduct.variations.length > 0) {
      setCurrentVariationIndex((prevIndex) => (prevIndex + 1) % selectedProduct.variations.length);
    }
  };

  const prevVariation = () => {
    if (selectedProduct?.variations && selectedProduct.variations.length > 0) {
      setCurrentVariationIndex((prevIndex) => (prevIndex - 1 + selectedProduct.variations.length) % selectedProduct.variations.length);
    }
  };

  if (!Array.isArray(products) || products.length === 0) {
    return <div>Загрузка продуктов или нет данных...</div>; // Сообщение об ошибке или загрузке
  }

  return (
    <div className="product-carousel-container"> {/* Контейнер для карусели и деталей */}
      <h1 className="our__products">{translations[activeLang]?.ourProducts}</h1> {/* Используем опциональную цепочку */}
      <div className="carousel-wrapper"> {/* Обертка для карусели и стрелок */}
        {/* Левая стрелка */}
        <button onClick={prevSet} className="arrow left-arrow">
          <img src={leftArrowIcon} alt="Previous" />
        </button>
        {/* Список товаров в карусели */}
        <div className="product-list"> {/* Контейнер для отображаемых товаров */}
          {displayedProducts.map((product) => (
            <div
              key={product?.id} // Используем опциональную цепочку
              className="product-item fade-in"
              onClick={() => handleProductClick(product)} // Обработка клика для выбора продукта
            >
              {/* Используем импортированное изображение из productImageMap (убедитесь в правильности путей в productImageMap) */}
              {/* Если productImageMap не используется, можете использовать product.image напрямую */}
              <img src={productImageMap[product?.image] || product?.image} alt={product?.name[activeLang]} /> {/* Используем опциональную цепочку */}
              <p className="product-title">{product?.name[activeLang]}</p> {/* Используем опциональную цепочку */}
            </div>
          ))}
        </div>
        {/* Правая стрелка */}
        <button onClick={nextSet} className="arrow right-arrow">
          <img src={rightArrowIcon} alt="Next" />
        </button>
      </div>

      {/* Секция для отображения деталей выбранного продукта (условно рендерится) */}
      {selectedProduct && ( // Рендерим блок только если selectedProduct не null
        <section className="selected-product-details"> {/* Используем класс для стилизации */}
          <div className="product-details"> {/* Используем класс для стилизации */} 
            {/* Изображение продукта */}
            {/* Используем productImageMap из ProductCarousel.jsx, если импортируете изображения напрямую */}
            {/* Отображаем изображение главного продукта, не варианта */}
            <img src={productImageMap[selectedProduct?.image] || selectedProduct?.image} alt={selectedProduct?.name[activeLang]} style={{ maxWidth: '300px', height: 'auto' }}/> {/* Используем опциональную цепочку */}

            {/* Информация о продукте и варианты */}
            <div className="product-info"> {/* Контейнер для названия, описания и т.д. */}
              <h2>{selectedProduct?.name[activeLang]}</h2> {/* Название продукта (используем опциональную цепочку) */}
              {selectedProduct?.description && <p>{selectedProduct.description[activeLang]}</p>} {/* Описание продукта, если есть (используем опциональную цепочку) */}

              {/* Состав продукта (если есть) */}
              {selectedProduct?.composition && (
                  <div className="product-composition"> {/* Добавьте класс для стилизации */}
                      <h4>{translations[activeLang]?.compositionTitle || 'Состав:'}</h4> {/* Заголовок Состав */}
                      <p>{selectedProduct.composition[activeLang]}</p> {/* Состав (используем опциональную цепочку) */}
                  </div>
              )}

              {/* Варианты продукта и кнопки навигации по вариантам */}
              {selectedProduct?.variations && selectedProduct.variations.length > 0 && (
                <div className="product-variations"> {/* Контейнер для вариантов */}
                   <h4>{translations[activeLang]?.variationsTitle || 'Варианты:'}</h4> {/* Заголовок Варианты */}
                   {/* Кнопки для навигации по вариантам */}
                   <div className="variation-navigation">
                      <button onClick={prevVariation} className="variation-arrow left-arrow">{translations[activeLang]?.prevVariation}</button> {/* Кнопка Предыдущий вариант */}
                      {/* Отображение текущего выбранного варианта */}
                      <span className="current-variation-name">{selectedVariation?.name[activeLang]}</span> {/* Название текущего варианта */}
                      <button onClick={nextVariation} className="variation-arrow right-arrow">{translations[activeLang]?.nextVariation}</button> {/* Кнопка Следующий вариант */}
                   </div>
                </div>
              )}

              {/* Пищевая ценность выбранного варианта */}
              {selectedVariation?.nutritionalInfo && selectedVariation.nutritionalInfo[activeLang] && (
                <div className="nutritional-info"> {/* Контейнер для пищевой ценности */}
                  {/* Заголовок для пищевой ценности */}
                  {/* Используем заголовок из данных варианта, если есть, иначе из переводов или дефолтный */}
                  <h4>{selectedVariation.nutritionalInfo[activeLang]['В одной порции содержится:'] || translations[activeLang]?.nutritionalTitle || 'Пищевая ценность:'}</h4> {/* Заголовок из данных, переводов или дефолтный */}
                  <ul> {/* Список пищевой ценности */}
                    {/* Проверяем, что nutritionalInfo[activeLang] является объектом, прежде чем итерировать */}
                    {typeof selectedVariation.nutritionalInfo[activeLang] === 'object' && Object.entries(selectedVariation.nutritionalInfo[activeLang]).map(([key, value]) => {
                        // Пропускаем заголовок из списка, если он есть в данных
                        if (key === 'В одной порции содержится:') return null;
                        return (
                        <li key={key}>
                            <strong>{key}:</strong> {value}
                        </li>
                        );
                    })}
                  </ul>
                </div>
              )}

            </div> {/* Конец product-info */}

          </div> {/* Конец product-details */}
        </section>
      )}

    </div>
  );
};

export default ProductCarousel;