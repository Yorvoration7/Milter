const products = [
  {
    id: 1,
    name: {
      ru: 'Майонез',
      uz: 'Mayonez',
      en: 'Mayonnaise'
    },
    image: '../../src/assets/images/product1.png',
    description: {
      ru: 'Благородный вкус и изысканный аромат с точкой настоящего испанского оли экового масла',
      uz: 'Placeholder узбекское описание',
      en: 'Placeholder english description'
    },
    composition: {
      ru: 'Подсолнечное и слиЕ фвое мвела, вода, сахар, яичный желток, соль поваренная, лимонный сок, уксуЕ, горччноейвла.',
      uz: 'Placeholder узбекский состав',
      en: 'Placeholder english composition'
    },
    nutritionalInfo: {
      // ru: 'В одной порции содержится:',
    },
    variations: [
      {
        name: {
          ru: 'классический',
          uz: 'klassik',
          en: 'classic'
        },
        nutritionalInfo: {
          ru: {
            Калории: '153 kcal',
            Жиры: '16.8г',
            Насыщенные_жиры: '2.7г',
            Сахар: '0.5г',
            Соль: '0.3г',
            Геакы: '0.15 г',
            Масса_нетто: '100,230, 400,800,900'
          },
          uz: { /* Placeholder */ },
          en: { /* Placeholder */ }
        }
      },
      {
        name: {
          ru: 'жирный',
          uz: 'yog\\\'li',
          en: 'fatty'
        },
        nutritionalInfo: {
          ru: {
            Калории: 'Placeholder',
            Жиры: 'Placeholder',
            Насыщенные_жиры: 'Placeholder',
            Сахар: 'Placeholder',
            Соль: 'Placeholder',
            Геакы: 'Placeholder',
            Масса_нетто: 'Placeholder'
          },
          uz: { /* Placeholder */ },
          en: { /* Placeholder */ }
        }
      },
      {
        name: {
          ru: 'американский',
          uz: 'amerika',
          en: 'american'
        },
        nutritionalInfo: {
          ru: {
            Калории: 'Placeholder',
            Жиры: 'Placeholder',
            Насыщенные_жиры: 'Placeholder',
            Сахар: 'Placeholder',
            Соль: 'Placeholder',
            Геакы: 'Placeholder',
            Масса_нетто: 'Placeholder'
          },
          uz: { /* Placeholder */ },
          en: { /* Placeholder */ }
        }
      }
    ]
  },
  {
    id: 2,
    name: {
      ru: 'Масло',
      uz: 'Yog\'',
      en: 'Oil'
    },
    image: '../../src/assets/images/webPics/product2.png'
  },
  {
    id: 3,
    name: {
      ru: 'Спреды',
      uz: 'Spredlar',
      en: 'Spreads'
    },
   image: '../../src/assets/images/webPics/product3.png'
  },
  {
    id: 4,
    name: {
      ru: 'Соусы чили',
      uz: 'Chili souslari',
      en: 'Chili Sauces'
    },
   image: '../../src/assets/images/webPics/product4.png'
  },
  {
    id: 5,
    name: {
      ru: 'Сгущенное молоко',
      uz: 'Quyultirilgan sut',
      en: 'Condensed Milk'
    },
     image: '../../src/assets/images/webPics/product5.png'
  },
  {
    id: 6,
    name: {
      ru: 'Варенка',
      uz: 'Varenka',
      en: 'Varenka'
    },
   image: '../../src/assets/images/webPics/product6.png'
  },
  {
    id: 7,
    name: {
      ru: 'Десертная паста',
      uz: 'Desert pastasi',
      en: 'Dessert Paste'
    },
   image: '../../src/assets/images/webPics/product7.png'
  },
  {
    id: 8,
    name: {
      ru: 'Ириска',
      uz: 'Iriska',
      en: 'Toffee'
    },
   image: '../../src/assets/images/webPics/product8.png'
  },
];

export default products; 