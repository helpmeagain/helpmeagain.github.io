import ProjectImage from './ProjectImage';
import ProjectLinks from './ProjectLinks';

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
        <article className='bg-violet-950/20 border-violet-400/5 border rounded-2xl duration-300 w-full'>
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