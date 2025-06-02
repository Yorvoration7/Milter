import React, { useState, useEffect, useRef } from 'react';
import './About.css';
 import Pic from '../../assets/images/ourpurposehalal.png'
import aboutusPic from '../../assets/images/usandyou.png'
import technologyPic from '../../assets/images/webPics/technologypicture.png';

const translations = {
  ru: {
    goalTitle: 'Наша цель',
    goalP1: 'Наша цель - предоставить потребителям высококачественные и вкусные продукты, которые соответствуют самым высоким стандартам Халяль.',
    goalP2: 'Мы стремимся к постоянному развитию и инновациям в производстве, чтобы удовлетворить потребности и предпочтения наших клиентов.',
    title: 'О нас и о вас',
    q: 'Что для вас значит быть дома?',
    p1: 'В кругу родных усесться за стол, поджав под себя ноги.',
    p2: 'Заправить салат майонезом, но не перемешивать, пока не придет папа.',
    p3: 'Громко смеяться! Есть руками! Выловить лук из тарелки, пока мама не видит. И облизывать пальцы после промасленных блинчиков.',
    p4: 'Да. Мы такие, какие есть.',
    p5: 'Настоящие. Milter вдохновляется искренностью вашей искренности. И мы хотим, чтобы время в кругу семьи приносило вам еще больше теплых эмоций! А вкусная еда дарила удовольствие. Будь то завтрак на скорую руку или праздничный стол.',
    technologyTitle: 'Внимательно к технологиям',
    technologyP1: 'На сегодняшний день существует множество систем контроля и регулирования производственной деятельности предприятий, которые призваны помогать и повышать в конечном итоге качество',
    technologyP2: 'По всему миру крупные компании успешно внедряют эти системы, и наша компания не исключение',
    technologyP3: 'Для Milter качество превыше всего, поэтому его контроль происходит на каждом из этапов производства.',
  },
  uz: {
    goalTitle: 'Bizning maqsadimiz',
    goalP1: 'Bizning maqsadimiz - iste\'molchilarni eng yuqori Halol standartlariga javob beradigan yuqori sifatli va mazali mahsulotlar bilan ta\'minlash.',
    goalP2: 'Biz mijozlarimizning ehtiyojlari va xohishlarini qondirish uchun ishlab chiqarishda doimiy rivojlanish va innovatsiyalarga intilamiz.',
    title: 'Biz haqimizda va siz haqingizda',
    q: 'Siz uchun uyda bo\'lish nimani anglatadi?',
    p1: 'Oilangiz bilan stolga o\'tirish, oyog\'ingizni ostingizga olib.',
    p2: 'Salatga mayonez qo\'shish, lekin otangiz kelguncha aralashtirmaslik.',
    p3: 'Qattiq kulish! Qo\'llaringiz bilan yeyish! Onasi ko\'rmasdan likopchadan piyozni terib olish. Va yog\'li blinchiklardan so\'ng barmoqlarni yalanglash.',
    p4: 'Ha. Biz shundaymiz.',
    p5: 'Haqiqiy. Milter sizning samimiyligingizdan ilhomlanadi. Va biz oila davrasidagi vaqtingiz sizga yanada ko\'proq iliq his-tuyg\'ular olib kelishini istaymiz! Shirin taom zavq bag\'ishlaydi. Tez tayyorlanadigan nonushta yoki bayramona stol bo\'lsin.',
    technologyTitle: 'Texnologiyalarga e\'tibor',
    technologyP1: 'Bugungi kunda korxonalarning ishlab chiqarish faoliyatini nazorat qilish va tartibga solishning ko\'plab tizimlari mavjud bo\'lib, ular yakuniy mahsulot sifatini oshirishga yordam berish uchun mo\'ljallangan.',
    technologyP2: 'Butun dunyo bo\'ylab yirik kompaniyalar ushbu tizimlarni muvaffaqiyatli joriy etmoqda va bizning kompaniyamiz ham bundan mustasno emas.',
    technologyP3: 'Milter uchun sifat hamma narsadan ustundir, shuning uchun nazorat ishlab chiqarishning har bir bosqichida amalga oshiriladi.',
  },
  en: {
    goalTitle: 'Our Goal',
    goalP1: 'Our goal is to provide consumers with high-quality and delicious products that meet the highest Halal standards.',
    goalP2: 'We strive for continuous development and innovation in production to meet the needs and preferences of our customers.',
    title: 'About us and you',
    q: 'What does being home mean to you?',
    p1: 'Sitting down at the table with your family, tucking your legs under you.',
    p2: 'Dressing the salad with mayonnaise, but not mixing it until Dad comes.',
    p3: 'Laughing loudly! Eating with your hands! Picking onions out of the plate while Mom isn\'t looking. And licking your fingers after oily pancakes.',
    p4: 'Yes. We are who we are.',
    p5: 'Authentic. Milter is inspired by your sincerity. And we want the time spent with family to bring you even more warm emotions! Delicious food brings pleasure. Whether it\'s a quick breakfast or a festive table.',
    technologyTitle: 'Attentive to technology',
    technologyP1: 'Today, there are many systems for controlling and regulating the production activities of enterprises, which are designed to help and ultimately improve the quality.',
    technologyP2: 'Large companies around the world are successfully implementing these systems, and our company is no exception.',
    technologyP3: 'For Milter, quality is paramount, so its control takes place at every stage of production.',
  },
};

const About = ({ activeLang }) => {
  const t = translations[activeLang];

  // Add a check in case activeLang is not yet set or invalid
  if (!t) {
    return <div>Loading translations...</div>; // Or render a default language/message
  }

  return (
    <>
      <div className="aboutUs-section">
        <div className="section-1">
          <img src={Pic} alt="" className='section-1-pic' />
        </div>

        <div className="section-2">
          <img src={aboutusPic} alt=""
          className='aboutus__pic'
          />
          <div className="aboutus__section">
            <h2>{t.title}</h2>
            <p>{t.q}</p>
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
            <p>{t.p4}</p>
            <p>{t.p5}</p>
          </div>
        </div>

        {/* New Technology Section */}
        <div className="technology-section">
          <div className="technology__text-content">
            <h2>{t.technologyTitle}</h2>
            <p>{t.technologyP1}</p>
            <p>{t.technologyP2}</p>
            <p>{t.technologyP3}</p>
          </div>
          <div className="technology__image">
            <img src={technologyPic} alt="Technology" className="technology__pic" />
          </div>
        </div>

        <div className="section-3">

        </div>
      </div>
    </>
  );
};

export default About;
