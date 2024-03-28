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
        <article className='bg-violet-950/20 border-violet-400/5 border rounded-2xl duration-300 w-full h-full'>
            <ProjectImage img={img} title={title} icons={icons} />
            <div className='flex flex-col p-8 max-sm:p-5 text-violet-100'>
                <h2 className='text-xl tracking-wide font-medium jost-semi-bold'>{title}</h2>
                <p className='mt-4 leading-7 text-justify atkinson-hyperlegible-regular overflow-hidden max-sm:h-64 max-lg:h-[255px] h-48'>{text}</p>
                <ProjectLinks gitHubLink={github} deployUrl={url} />
            </div>
        </article>
    )
}
export default ProjectsCard