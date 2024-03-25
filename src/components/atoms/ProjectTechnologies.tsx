function ProjectTechnologies({ icons }: { icons: React.ReactNode }) {
    return (
        <div className="text-violet-100 absolute bottom-2 right-2 flex gap-x-2
                bg-violet-950/70 backdrop-blur-sm rounded-full p-2 pl-3 pr-3 border-2 border-violet-400/50">
            {icons}
        </div>
    )
}

export default ProjectTechnologies