import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contacts.css'; // Создадим этот CSS файл позже для стилей
import girlCompImage from '../../assets/images/webPics/girlcomp.png';

const translations = {
  ru: {
    contactUsTitle: 'СВЯЖИТЕСЬ С НАМИ',
    contactUsDescription: 'Если у вас есть какие-то вопросы и пожелания,\nзаполните информацию для обратной связи',
    fullNameLabel: 'ФИО',
    emailLabel: 'E-mail*',
    phoneLabel: 'Телефон',
    messageLabel: 'Сообщение...',
    sendButton: 'Отправить',
    distributorContactsTitle: 'КОНТАКТЫ ДИСТРИБЬЮТОРОВ',
    ourBranchesButton: 'НАШИ ФИЛЛИАЛЫ ↑',
  },
  // Добавьте переводы для других языков здесь
  uz: {
    contactUsTitle: 'BIZ BILAN BOG\'LANING', // Пример перевода
    contactUsDescription: 'Agar sizda savollar yoki istaklar bo\'lsa,\nqayta aloqa uchun ma\'lumotni to\'ldiring', // Пример перевода
    fullNameLabel: 'Ism-sharif', // Пример перевода
    emailLabel: 'E-mail*', // Пример перевода
    phoneLabel: 'Telefon', // Пример перевода
    messageLabel: 'Xabar...', // Пример перевода
    sendButton: 'Yuborish', // Пример перевода
    distributorContactsTitle: 'DISTRIBUTORLAR KONTAKTLARI', // Пример перевода
    ourBranchesButton: 'FILIALLARIMIZ ↑', // Пример перевода
  },
   en: {
    contactUsTitle: 'CONTACT US', // Example translation
    contactUsDescription: 'If you have any questions or wishes,\nplease fill in the information for feedback', // Example translation
    fullNameLabel: 'Full Name', // Example translation
    emailLabel: 'E-mail*', // Example translation
    phoneLabel: 'Phone', // Example translation
    messageLabel: 'Message...', // Example translation
    sendButton: 'Send', // Example translation
    distributorContactsTitle: 'DISTRIBUTOR CONTACTS', // Example translation
    ourBranchesButton: 'OUR BRANCHES ↑', // Example translation
  },
};

// Данные о дистрибьюторах
const distributors = [
  { id: 1, name: 'ЛАЛА-ЛЕНД' },
  { id: 2, name: 'ЙОРВОРЕЙШН-ЛЕНД' },
  { id: 3, name: 'ДЖИГИТ-ЛЕНД' },
  { id: 4, name: 'ХЕРЗНАЕТ-ЛЕНД' },
  // Добавьте другие дистрибьюторы здесь
];

const Contacts = ({ activeLang = 'ru' }) => { // Устанавливаем русский по умолчанию, если activeLang не передан
  const t = translations[activeLang] || translations.ru; // Получаем переводы для активного языка, или русский по умолчанию
  const [showBranches, setShowBranches] = useState(false);
  const form = useRef();

  // Функция для переключения видимости информации о филиалах
  const toggleBranches = () => {
    setShowBranches(!showBranches);
  };

  // Функция для обработки клика по дистрибьютору (placeholder для перехода по ссылке)
  const handleDistributorClick = (distributorName) => {
    let youtubeLink = 'https://www.youtube.com/@milteruzbekistan7818'; // Ссылка по умолчанию

    if (distributorName === 'ЙОРВОРЕЙШН-ЛЕНД') {
      youtubeLink = 'https://www.youtube.com/watch?v=bMq2riFCF90';
    } else if (distributorName === 'ДЖИГИТ-ЛЕНД') {
      youtubeLink = 'https://www.youtube.com/watch?v=IzuKVQVQirk';
    } else if (distributorName === 'ХЕРЗНАЕТ-ЛЕНД') {
      youtubeLink = 'https://g.co/kgs/Eqoi1wG';
    }
    // Для 'ЛАЛА-ЛЕНД' будет использоваться ссылка по умолчанию

    window.open(youtubeLink, '_blank'); // Открываем ссылку в новой вкладке
  };

  // Функция для отправки email
  const sendEmail = (e) => {
    e.preventDefault(); // Предотвращаем стандартную отправку формы

    emailjs.sendForm('service_f5i02rd', 'template_v72hzb9', form.current, 'n6AZ23nt5fvy0lFmP')
      .then(
        () => {
          console.log('SUCCESS!');
          if (form.current) {
            form.current.reset();
          }
          toast.success('Заявка принята ✅', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Bounce,
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Попробуйте заново ❌', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Bounce,
          });
        }
      );
  };

  return (
    <div className="contacts-container"> {/* Основной контейнер для страницы контактов */}
      <div className="contact-section"> {/* Контейнер для секции СВЯЖИТЕСЬ С НАМИ */}
        <div className="contact-image"> {/* Контейнер для изображения */}
          <img src={girlCompImage} alt="Operator helping a customer" className="contact-girl-image" />
        </div>
        <div className="contact-form-container"> {/* Контейнер для формы */}
          <h2 className="contact-title">{t.contactUsTitle}</h2>
          <p className="contact-description">{t.contactUsDescription}</p>
          <form className="contact-form" ref={form} onSubmit={sendEmail}> {/* Привязываем ref и onSubmit */}
            <input type="text" name="user_name" placeholder={t.fullNameLabel} /> {/* Добавляем name="user_name" */}
            <div className="email__phone">
              <input type="email" name="user_email" placeholder={t.emailLabel} /> {/* Добавляем name="user_email" */}
              <input type="tel" name="user_phone" placeholder={t.phoneLabel} /> {/* Добавляем name="user_phone" */}
            </div>
            <textarea name="message" placeholder={t.messageLabel}></textarea> {/* Добавляем name="message" */}
            <button type="submit" className="send-button">{t.sendButton}</button>
          </form>
        </div>
      </div>

      <div className="distributor-section"> {/* Контейнер для секции КОНТАКТЫ ДИСТРИБЬЮТОРОВ */}
        <h2>{t.distributorContactsTitle}</h2>
        <button className="branches-button" onClick={toggleBranches}>
          {t.ourBranchesButton.replace('↑', showBranches ? '↓' : '↑')}
        </button>

        {/* Блок с информацией о дистрибьюторах, отображается условно */}
        {showBranches && (
          <div className={`distributor-list ${showBranches ? 'visible' : ''}`}> {/* Класс для стилизации списка, добавляем класс visible */}
            {distributors.map(distributor => (
              <div
                key={distributor.id}
                className="distributor-item" // Класс для стилизации элемента
                onClick={() => handleDistributorClick(distributor.name)} // Передаем имя дистрибьютора
              >
                {distributor.name}
              </div>
            ))}
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contacts;
