import Project1 from '../../assets/project1.jpeg';
import Project2 from '../../assets/project2.jpeg';
import Project3 from '../../assets/project3.png';
import Project4 from '../../assets/project4.png';

export const projectsData = [
  {
    id: 1,
    image: Project1,
    title: 'Gingyman',
    content: 'JavaScript-based browser game',
    category: 'game',
    github: 'https://github.com/kristina-lim/Gingyman',
    demo: 'https://kristina-lim.github.io/Gingyman/'
  },
  {
    id: 2,
    image: Project2,
    title: 'OOTD',
    content: 'Full-Stack Node.js social application',
    category: 'social',
    github: 'https://github.com/kristina-lim/ootd',
    demo: 'https://ootd-fit-of-the-day.herokuapp.com/'
  },
  {
    id: 3,
    image: Project3,
    title: '[codemonk]',
    content: 'Full-Stack Django web application',
    category: 'web',
    github: 'https://github.com/kristina-lim/-codemonk-',
    demo: 'http://codemonk-wars.herokuapp.com/'
  },
  {
    id: 4,
    image: Project4,
    title: "Universe's Wardrobe",
    content: 'MERN-Stack e-commerce application',
    category: 'e-commerce',
    github: 'https://github.com/kristina-lim/mern-e-commerce',
    demo: 'http://universe-wardrobe.herokuapp.com/'
  }
];

export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'web',
  },
  {
    name: 'e-commerce'
  },
  {
    name: 'social',
  },
  {
    name: 'game',
  }
];