import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb'

interface ProjectCardProps {
    url?: string;
    img: string;
    github: string;
    title: string;
    text: string;
}
const ProjectsCard = ({ url, img, github, title, text }: ProjectCardProps) => {
    return (
        <article className='bg-violet-300 rounded-lg hover:bg-violet-300/90 duration-300'>
            <img
                src={img}
                alt={title}
                className='w-full object-cover rounded-t-lg h-64'
            />
            <div className='capitalize p-8'>
                <h2 className=' text-xl tracking-wide font-medium'>{title}</h2>
                <p className='mt-4 text-[#080414] leading-loose'>{text}</p>
                <div className='mt-4 flex gap-x-4'>
                    <a href={github}><FaGithubSquare className="h-8 w-8 text-[#080414] hover:text-violet-700 duration-300" /></a>
                    {url ? (
                        <a href={url}>
                            <TbWorldWww className="h-8 w-8 text-[#080414] hover:text-violet-700 duration-300" />
                        </a>
                    ) : null}
                </div>
            </div>
        </article>
    )
}
export default ProjectsCard