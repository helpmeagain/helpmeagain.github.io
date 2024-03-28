import ProjectTechnologies from "../atoms/ProjectTechnologies"

type Props = {
    img: string;
    title: string;
    icons: React.ReactNode;
}

function ProjectImage({ img, title, icons }: Props) {
    return (
        <div className="relative z-0">
            <img
                src={img}
                alt={title}
                className='w-full object-cover rounded-t-2xl h-60'
            />
            <ProjectTechnologies icons={icons} />
        </div>
    )
}

export default ProjectImage