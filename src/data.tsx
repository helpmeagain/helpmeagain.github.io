import { nanoid } from 'nanoid';
import { FaReact } from 'react-icons/fa';
import { HiCodeBracketSquare } from "react-icons/hi2";
import { IoPerson } from "react-icons/io5";
import { PiDesktopTowerFill } from "react-icons/pi";
import { RiHome2Fill } from "react-icons/ri";
import { TbBrandCSharp } from 'react-icons/tb'
import { BsUnity } from 'react-icons/bs'
import { BiLogoTypescript, BiLogoJavascript, BiLogoPython, BiLogoMongodb, BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi'
import { SiGodotengine, SiExpress } from 'react-icons/si'

export const links = [
    { id: nanoid(), icon: <RiHome2Fill className="h-6 w-6" />, href: '#home', text: 'Início' },
    { id: nanoid(), icon: <HiCodeBracketSquare className="h-6 w-6" />, href: '#skills', text: 'Habilidades' },
    { id: nanoid(), icon: <IoPerson className="h-6 w-6" />, href: '#about', text: 'Sobre' },
    { id: nanoid(), icon: <PiDesktopTowerFill className="h-6 w-6" />, href: '#projects', text: 'Projetos' },
];

export const skills = [
    {
        id: nanoid(),
        title: 'C#',
        icon: <TbBrandCSharp className='h-16 w-16 text-violet-200' />,
        text: 'Proficiente em programação orientada a objeto, com experiência sólida no desenvolvimento de aplicativos desktop e aplicações .NET, oferecendo soluções de software de alto desempenho.',
    },
    {
        id: nanoid(),
        title: 'JavaScript & TypeScript',
        icon: <div className='flex'><BiLogoJavascript className='h-16 w-16 text-violet-200 rounded-full' /><BiLogoTypescript className='h-16 w-16 text-violet-200' /></div>,
        text: 'Especializado na criação de aplicações web escaláveis e eficientes usando TypeScript, Express e Node.js, proporcionando soluções inovadoras e confiáveis.',
    },
    {
        id: nanoid(),
        title: 'Python',
        icon: <BiLogoPython className='h-16 w-16 text-violet-200' />,
        text: 'Experiência em desenvolvimento web utilizando Flask, além de expertise em processamento digital de imagens.',
    },
    {
        id: nanoid(),
        title: 'Unity',
        icon: <BsUnity className='h-16 w-16 text-violet-200' />,
        text: 'Especializado na criação de jogos envolventes com Unity, com ênfase em jogos 2D. Combinando habilidades criativas e técnicas sólidas, transformo conceitos em experiências interativas memoráveis.',
    },
    {
        id: nanoid(),
        title: 'Godot',
        icon: <SiGodotengine className='h-16 w-16 text-violet-200' />,
        text: 'Tenho nada KKKKKKKKK',
    },
    {
        id: nanoid(),
        title: 'React',
        icon: <FaReact className='h-16 w-16 text-violet-200' />,
        text: 'Proficiência na construção de interfaces de usuário envolventes e responsivas com React, integrando-as perfeitamente com aplicativos back-end.',
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
        text: 'Uma API para um clínica veterinária fictícia. Há operações de CRUD como criar, pesquisar, editar e deletar tutores e pets. Também possui autentificação de usuários e utilização do MongoDB',
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
        text: 'Plataforma que exibirá o histórico e estatísticas de partidas do League of Legends, se utilizando da API da Riot Games. ',
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
        text: 'Projeto de um jogo similar a Flappy Bird, com propósito de aprender o básico de Unity. Baseado no projeto do canal Game Maker Toolkit',
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
        text: 'Projeto desenvolvido no curso de jogos 2D em Unity e C#. Deste modo, foi realizado um jogo simples, com um carro que realizará entregas.',
    },
];