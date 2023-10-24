import { FaGithub } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb'

interface ProjectCardProps {
    url?: string;
    img: string;
    github: string;
    title: string;
    icons: React.ReactNode;
    text: string;
}
const ProjectsCard = ({ url, img, github, title, icons, text }: ProjectCardProps) => {
    return (
        <article className='bg-violet-900/10 rounded-lg hover:bg-violet-900/20 duration-300'>
            <div className="relative z-0">
                <img
                    src={img}
                    alt={title}
                    className='w-full object-cover rounded-t-lg h-64'
                />
                <div className="text-violet-100 absolute bottom-2 right-2 flex gap-x-2
                 bg-violet-950/70 backdrop-blur-sm rounded-full p-2 pl-3 pr-3 border-2 border-violet-400/50">
                    {icons}
                </div>
            </div>
            <div className='p-8'>
                <h2 className='text-violet-100 text-xl tracking-wide font-medium'>{title}</h2>
                {/* <p className='mt-4 text-violet-100 tracking-wide'>{icons}</p> */}
                {/* <div className='mt-4 text-violet-100 flex  gap-x-3'>{icons}</div> */}
                <p className='mt-4 text-violet-100 leading-loose text-justify'>{text}</p>
                <div className='mt-4 flex gap-x-4'>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="h-7 w-7 hoover-settings" />
                    </a>
                    {url ? (
                        <a href={url} target="_blank" rel="noopener noreferrer">
                            <TbWorldWww className="h-8 w-8 hoover-settings" />
                        </a>
                    ) : null}
                </div>
            </div>
        </article>
    )
}
export default ProjectsCard