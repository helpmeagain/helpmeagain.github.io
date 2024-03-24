import { nanoid } from 'nanoid';
import { FaReact } from 'react-icons/fa';
import { HiCodeBracketSquare } from "react-icons/hi2";
import { IoPerson } from "react-icons/io5";
import { PiDesktopTowerFill } from "react-icons/pi";
import { RiHome2Fill } from "react-icons/ri";
import { TbBrandCSharp, TbBrandCpp } from 'react-icons/tb'
import { BsUnity } from 'react-icons/bs'
import { BiLogoTypescript, BiLogoJavascript, BiLogoPython, BiLogoMongodb, BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi'
import { SiExpress, SiDotnet } from 'react-icons/si'

export const links = [
    { id: nanoid(), icon: <RiHome2Fill className="h-6 w-6" />, href: '#home', text: 'Início' },
    { id: nanoid(), icon: <HiCodeBracketSquare className="h-6 w-6" />, href: '#skills', text: 'Habilidades' },
    { id: nanoid(), icon: <IoPerson className="h-6 w-6" />, href: '#about', text: 'Sobre' },
    { id: nanoid(), icon: <PiDesktopTowerFill className="h-6 w-6" />, href: '#projects', text: 'Projetos' },
];

export const skills = [
    {
        id: nanoid(),
        title: 'JavaScript & TypeScript',
        icon: <div className='flex'><BiLogoJavascript className='h-16 w-16 text-yellow-200 rounded-full' /><BiLogoTypescript className='h-16 w-16 text-blue-300' /></div>,
        text: 'Lorem',
    },
    {
        id: nanoid(),
        title: 'C# & .NET',
        icon: <div className='flex items-center gap-2 h-16'><TbBrandCSharp className='h-16 w-16 text-purple-300 ' /><SiDotnet className='h-24 w-24 text-purple-300 overflow-hidden' /></div>,
        text: 'Lorem',
    },
    {
        id: nanoid(),
        title: 'C++',
        icon: <TbBrandCpp className='h-16 w-16 text-blue-300' />,
        text: 'Lorem',
    },
    {
        id: nanoid(),
        title: 'Python',
        icon: <BiLogoPython className='h-16 w-16 text-blue-300' />,
        text: 'Lorem',
    },
    {
        id: nanoid(),
        title: 'Unity',
        icon: <BsUnity className='h-16 w-16 text-slate-400' />,
        text: 'Lorem',
    },
    {
        id: nanoid(),
        title: 'React',
        icon: <FaReact className='h-16 w-16 text-blue-300' />,
        text: 'Lorem',
    },
];

export const projects = [
    {
        id: nanoid(),
        img: 'https://github.com/felipecomarques/veterinary-clinic-api/raw/main/docs/resource/image/swagger.png',
        github: 'https://github.com/felipecomarques/veterinary-clinic-api',
        title: 'API de Clínica Veterinária',
        icons: [
            <BiLogoTypescript className='h-8 w-8' />,
            <SiExpress className='h-8 w-8' />,
            <BiLogoMongodb className='h-8 w-8' />
        ],
        text: 'Lorem',
    },
    {
        id: nanoid(),
        img: 'https://github.com/felipecomarques/ward-gg/raw/main/docs/image.png',
        // url: 'https://react-projects.netlify.app/',
        github: 'https://github.com/felipecomarques/ward-gg',
        title: 'Ward.GG',
        icons: [
            <BiLogoJavascript className='h-8 w-8 rounded-full' />,
            <BiLogoReact className='h-8 w-8' />,
            <BiLogoTailwindCss className='h-8 w-8' />
        ],
        text: 'Lorem',
    },
    {
        id: nanoid(),
        img: 'https://user-images.githubusercontent.com/57302703/208323181-18cbc4e7-34d6-4f45-86da-f7a00df95e85.gif',
        // url: 'https://react-projects.netlify.app/',
        github: 'https://github.com/felipecomarques/flappy-bird',
        title: 'Flappy Bird Clone',
        icons: [
            <TbBrandCSharp className='h-9 w-9' />,
            <BsUnity className='h-8 w-8' />
        ],
        text: 'Lorem',
    },
    {
        id: nanoid(),
        img: 'https://user-images.githubusercontent.com/57302703/226485402-c2e93082-bef4-428a-993d-04207be27dd1.gif',
        // url: 'https://react-projects.netlify.app/',
        github: 'https://github.com/felipecomarques/delivery-driver',
        title: 'Delivery Driver',
        icons: [
            <TbBrandCSharp className='h-9 w-9' />,
            <BsUnity className='h-8 w-8' />
        ],
        text: 'Lorem',
    },
];