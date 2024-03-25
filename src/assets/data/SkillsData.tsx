import { nanoid } from 'nanoid';
import { FaReact } from 'react-icons/fa';
import { TbBrandCSharp, TbBrandCpp } from 'react-icons/tb'
import { useTranslation } from 'react-i18next';
import { BiLogoTypescript, BiLogoJavascript, BiLogoPython } from 'react-icons/bi'
import { BsUnity } from 'react-icons/bs'
import { SiDotnet } from 'react-icons/si'

const SkillsData = () => {
    const { t } = useTranslation();

    const skills = [
        {
            id: nanoid(),
            title: 'JavaScript & TypeScript',
            icon: <div className='flex'><BiLogoJavascript className='h-16 w-16 text-yellow-200 rounded-full' /><BiLogoTypescript className='h-16 w-16 text-blue-300' /></div>,
            text: t('skills.js'),
        },
        {
            id: nanoid(),
            title: 'C# & .NET',
            icon: <div className='flex items-center gap-2 h-16'><TbBrandCSharp className='h-16 w-16 text-purple-300 ' /><SiDotnet className='h-24 w-24 text-purple-300 overflow-hidden' /></div>,
            text: t('skills.cs'),
        },
        {
            id: nanoid(),
            title: 'C++',
            icon: <TbBrandCpp className='h-16 w-16 text-blue-300' />,
            text: t('skills.cpp'),
        },
        {
            id: nanoid(),
            title: 'Python',
            icon: <BiLogoPython className='h-16 w-16 text-blue-300' />,
            text: t('skills.py'),
        },
        {
            id: nanoid(),
            title: 'Unity',
            icon: <BsUnity className='h-16 w-16 text-slate-400' />,
            text: t('skills.unity'),
        },
        {
            id: nanoid(),
            title: 'React',
            icon: <FaReact className='h-16 w-16 text-blue-300' />,
            text: t('skills.react'),
        }
    ]

    return skills;
}

export default SkillsData;