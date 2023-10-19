import { FaGithub } from 'react-icons/fa';
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
        <article className='bg-violet-900/10 rounded-lg hover:bg-violet-900/20 duration-300'>
            <img
                src={img}
                alt={title}
                className='w-full object-cover rounded-t-lg h-64'
            />
            <div className='capitalize p-8'>
                <h2 className='text-violet-100 text-xl tracking-wide font-medium'>{title}</h2>
                <p className='mt-4 text-violet-100 leading-loose'>{text}</p>
                <div className='mt-4 flex gap-x-4'>
                    <a href={github}><FaGithub className="h-7 w-7 hoover-settings" /></a>
                    {url ? (
                        <a href={url}>
                            <TbWorldWww className="h-8 w-8 hoover-settings" />
                        </a>
                    ) : null}
                </div>
            </div>
        </article>
    )
}
export default ProjectsCard