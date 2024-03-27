import ProjectImage from '../molecules/ProjectImage';
import ProjectLinks from '../molecules/ProjectLinks';

type ProjectCardProps = {
    url?: string;
    img: string;
    github: string;
    title: string;
    icons: React.ReactNode;
    text: string;
}

const ProjectsCard = ({ url, img, github, title, icons, text }: ProjectCardProps) => {
    return (
        <article className='bg-violet-900/10 rounded-lg duration-300'>
            <ProjectImage img={img} title={title} icons={icons} />
            <div className='p-8'>
                <h2 className='text-violet-100 text-xl tracking-wide font-medium jost-semi-bold'>{title}</h2>
                <p className='mt-4 text-violet-100 leading-loose text-justify atkinson-hyperlegible-regular h-36'>{text}</p>
                <ProjectLinks gitHubLink={github} deployUrl={url} />
            </div>
        </article>
    )
}
export default ProjectsCard