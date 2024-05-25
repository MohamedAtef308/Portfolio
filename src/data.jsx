import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    // url: "https://react-projects.netlify.app/",
    github: "https://github.com/Qwitter/Qwitter-Frontend",
    title: "Qwitter",
    text: "It's a Twitter (X) clone that was developed in a team with other members using Agile framework. I was responsible for the profile page, the sign up, and all popups in the project.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    // url: "https://react-projects.netlify.app/",
    github: "https://github.com/marwan995/Discoverr",
    title: "Discoverr",
    text: "A search engine implemented from scratch using Java. I was responsible for the crawler to get the data and store it in a MongoDB database for the indexer and I helped with the front-end.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    // url: "https://react-projects.netlify.app/",
    github: "https://github.com/marwan995/Graphics_Project-",
    title: "Ghost of CMP",
    text: "It's a game that was developed using OpenGL in C++. I was responsible for most of the game systems like collision, unlock, bullets, and weapons also I was the main designer for the game.",
  },
];
