import { IGameData } from "../types/types.ts";


const GAME_DATA: IGameData[] = [
  {
    level: 0,
    type: 'doubleQuestion',
    task: 'Угадайте для каждого изображения фото или рисунок?',
    options: [{
      alt: 'Option 1',
      src: 'https://render.fineartamerica.com/images/rendered/search/print/images-medium-5/kangaroo-grazing-graham-gercken.jpg',
      inputName: 'question1',
      answer: 'paint',
    },
    {
      alt: 'Option 2',
      src: 'https://www.miloserdie.ru/wp-content/uploads/2019/08/derevya-1024x683.jpg',
      inputName: 'question2',
      answer: 'photo',
    },
    ],
  },
  {
    level: 1,
    type: 'singleQuestion',
    task: 'Угадай, фото или рисунок?',
    options: [{
      alt: 'Option 1',
      src: 'https://cdn.trendhunterstatic.com/phpthumbnails/270/270140/270140_6_800.jpeg',
      inputName: 'question1',
      answer: 'paint',
    }],
  },
  {
    level: 2,
    type: 'tripleQuestion',
    task: 'Найдите рисунок среди изображений',
    options: [{
      alt: 'Option 1',
      src: 'https://i.pinimg.com/originals/aa/8c/64/aa8c643686154915d49238dc15118eae.jpg',
      answer: 'paint',
    },
    {
      alt: 'Option 2',
      src: 'https://img.freepik.com/free-photo/gorgeous-white-girl-with-long-wavy-hair-chilling-in-autumn-day-outdoor-portrait-of-interested-ginger-female-model-with-cup-of-coffee_197531-11735.jpg',
      answer: 'photo',
    },
    {
      alt: 'Option 3',
      src: 'https://static.wixstatic.com/media/5fd1de_ac3c1b4d264943c58349dea0de28aba3~mv2_d_2777_4165_s_4_2.jpg/v1/fill/w_304,h_455,al_c,q_80,usm_0.66_1.00_0.01/5fd1de_ac3c1b4d264943c58349dea0de28aba3~mv2_d_2777_4165_s_4_2.jpg',
      answer: 'photo',
    },
    ],
  },
  {
    level: 3,
    type: 'doubleQuestion',
    task: 'Угадайте для каждого изображения фото или рисунок?',
    options: [{
      alt: 'Option 1',
      src: 'https://render.fineartamerica.com/images/rendered/search/print/images-medium-5/kangaroo-grazing-graham-gercken.jpg',
      inputName: 'question1',
      answer: 'paint',
    },
    {
      alt: 'Option 2',
      src: 'https://images.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg?auto=compress&cs=tinysrgb&h=350',
      inputName: 'question2',
      answer: 'photo',
    },
    ],
  },
  {
    level: 4,
    type: 'singleQuestion',
    task: 'Угадай, фото или рисунок?',
    options: [{
      alt: 'Option 1',
      src: 'https://cdn.trendhunterstatic.com/phpthumbnails/270/270140/270140_6_800.jpeg',
      inputName: 'question1',
      answer: 'paint',
    }],
  },
  {
    level: 5,
    type: 'tripleQuestion',
    task: 'Найдите рисунок среди изображений',
    options: [{
      alt: 'Option 1',
      src: 'https://i.pinimg.com/originals/aa/8c/64/aa8c643686154915d49238dc15118eae.jpg',
      answer: 'paint',
    },
    {
      alt: 'Option 2',
      src: 'https://atlfoodandwinefestival.com/wp-content/uploads/2015/01/linton-hopkins304xx683-1024-0-0.jpg',
      answer: 'photo',
    },
    {
      alt: 'Option 3',
      src: 'https://static.wixstatic.com/media/5fd1de_ac3c1b4d264943c58349dea0de28aba3~mv2_d_2777_4165_s_4_2.jpg/v1/fill/w_304,h_455,al_c,q_80,usm_0.66_1.00_0.01/5fd1de_ac3c1b4d264943c58349dea0de28aba3~mv2_d_2777_4165_s_4_2.jpg',
      answer: 'photo',
    },
    ],
  },
  {
    level: 6,
    type: 'doubleQuestion',
    task: 'Угадайте для каждого изображения фото или рисунок?',
    options: [{
      alt: 'Option 1',
      src: 'https://render.fineartamerica.com/images/rendered/search/print/images-medium-5/kangaroo-grazing-graham-gercken.jpg',
      inputName: 'question1',
      answer: 'paint',
    },
    {
      alt: 'Option 2',
      src: 'https://images.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg?auto=compress&cs=tinysrgb&h=350',
      inputName: 'question2',
      answer: 'photo',
    },
    ],
  },
  {
    level: 7,
    type: 'singleQuestion',
    task: 'Угадай, фото или рисунок?',
    options: [{
      alt: 'Option 1',
      src: 'https://cdn.trendhunterstatic.com/phpthumbnails/270/270140/270140_6_800.jpeg',
      inputName: 'question1',
      answer: 'paint',
    }],
  },
  {
    level: 8,
    type: 'tripleQuestion',
    task: 'Найдите рисунок среди изображений',
    options: [{
      alt: 'Option 1',
      src: 'https://i.pinimg.com/originals/aa/8c/64/aa8c643686154915d49238dc15118eae.jpg',
      answer: 'paint',
    },
    {
      alt: 'Option 2',
      src: 'https://atlfoodandwinefestival.com/wp-content/uploads/2015/01/linton-hopkins304xx683-1024-0-0.jpg',
      answer: 'photo',
    },
    {
      alt: 'Option 3',
      src: 'https://static.wixstatic.com/media/5fd1de_ac3c1b4d264943c58349dea0de28aba3~mv2_d_2777_4165_s_4_2.jpg/v1/fill/w_304,h_455,al_c,q_80,usm_0.66_1.00_0.01/5fd1de_ac3c1b4d264943c58349dea0de28aba3~mv2_d_2777_4165_s_4_2.jpg',
      answer: 'photo',
    },
    ],
  },
  {
    level: 9,
    type: 'doubleQuestion',
    task: 'Угадайте для каждого изображения фото или рисунок?',
    options: [{
      alt: 'Option 1',
      src: 'https://render.fineartamerica.com/images/rendered/search/print/images-medium-5/kangaroo-grazing-graham-gercken.jpg',
      inputName: 'question1',
      answer: 'paint',
    },
    {
      alt: 'Option 2',
      src: 'https://images.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg?auto=compress&cs=tinysrgb&h=350',
      inputName: 'question2',
      answer: 'photo',
    },
    ],
  },
];

export default GAME_DATA;
