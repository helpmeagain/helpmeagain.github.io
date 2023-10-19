import { nanoid } from 'nanoid';
import { FaReact } from 'react-icons/fa';
import { TbBrandCSharp, TbBrandCpp } from 'react-icons/tb'
import { BsUnity } from 'react-icons/bs'
import { BiLogoTypescript, BiLogoJavascript } from 'react-icons/bi'

export const links = [
    { id: nanoid(), href: '#home', text: 'home' },
    { id: nanoid(), href: '#skills', text: 'skills' },
    { id: nanoid(), href: '#about', text: 'about' },
    { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
    {
        id: nanoid(),
        title: 'C# and .NET',
        icon: <TbBrandCSharp className='h-16 w-16 text-violet-200' />,
        text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
    },
    {
        id: nanoid(),
        title: 'C++',
        icon: <TbBrandCpp className='h-16 w-16 text-violet-200' />,
        text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
    },
    {
        id: nanoid(),
        title: 'Unity',
        icon: <BsUnity className='h-16 w-16 text-violet-200' />,
        text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
    },
    {
        id: nanoid(),
        title: 'JavaScript',
        icon: <BiLogoJavascript className='h-16 w-16 text-violet-200 rounded-full' />,
        text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
    },
    {
        id: nanoid(),
        title: 'TypeScript',
        icon: <BiLogoTypescript className='h-16 w-16 text-violet-200' />,
        text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
    },
    {
        id: nanoid(),
        title: 'React',
        icon: <FaReact className='h-16 w-16 text-violet-200' />,
        text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
    },
];

export const projects = [
    {
        id: nanoid(),
        img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
        url: 'https://react-projects.netlify.app/',
        github: 'https://github.com/john-smilga',
        title: 'first project',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    },
    {
        id: nanoid(),
        img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
        url: 'https://react-projects.netlify.app/',
        github: 'https://github.com/john-smilga',
        title: 'second project',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    },
    {
        id: nanoid(),
        img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
        url: 'https://react-projects.netlify.app/',
        github: 'https://github.com/john-smilga',
        title: 'third project',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    },
];