import { nanoid } from 'nanoid';
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { TbBrandCSharp, TbBrandCpp } from 'react-icons/tb'
import { useTranslation } from 'react-i18next';
import { BiLogoTypescript, BiLogoJavascript, BiLogoPython } from 'react-icons/bi'
import { BsUnity } from 'react-icons/bs'
import { SiDotnet, SiExpress, SiFlask } from 'react-icons/si'

const SkillsData = () => {
    const { t } = useTranslation();

    const skills = [
        {
            id: nanoid(),
            title: 'JavaScript',
            icon: <BiLogoJavascript className='h-8 w-8 text-yellow-100 rounded-full' />,
            text: t('skills.js'),
        },
        {
            id: nanoid(),
            title: 'TypeScript',
            icon: <BiLogoTypescript className='h-8 w-8 text-blue-300' />,
            text: 'none',
        },
        {
            id: nanoid(),
            title: 'React',
            icon: <FaReact className='h-6 w-6 text-blue-300' />,
            text: t('skills.react'),
        },
        {
            id: nanoid(),
            title: 'Express',
            icon: <SiExpress className='h-7 w-7 text-slate-300' />,
            text: 'none',
        },
        {
            id: nanoid(),
            title: 'HTML',
            icon: <FaHtml5 className='h-7 w-7 text-red-300' />,
            text: 'none',
        },
        {
            id: nanoid(),
            title: 'CSS',
            icon: <FaCss3Alt className='h-7 w-7 text-blue-300' />,
            text: 'none',
        },
        {
            id: nanoid(),
            title: 'C#',
            icon: <TbBrandCSharp className='h-7 w-7 text-purple-300 ' />,
            text: t('skills.cs'),
        },
        {
            id: nanoid(),
            title: '.NET#',
            icon: <SiDotnet className='h-9 w-9 text-purple-300 ' />,
            text: t('skills.cs'),
        },
        {
            id: nanoid(),
            title: 'Unity',
            icon: <BsUnity className='h-6 w-6 text-slate-200' />,
            text: t('skills.unity'),
        },
        {
            id: nanoid(),
            title: 'C++',
            icon: <TbBrandCpp className='h-7 w-7 text-blue-300' />,
            text: t('skills.cpp'),
        },
        {
            id: nanoid(),
            title: 'Python',
            icon: <BiLogoPython className='h-8 w-8 text-blue-300' />,
            text: t('skills.py'),
        },
        {
            id: nanoid(),
            title: 'Flask',
            icon: <SiFlask className='h-6 w-6 text-green-300' />,
            text: 'none',
        },

    ]

    return skills;
}

export default SkillsData;