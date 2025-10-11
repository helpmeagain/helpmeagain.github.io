function ProjectTechnologies({ icons }: { icons: React.ReactNode }) {
  return (
    <div
      className="text-violet-100 flex w-auto gap-x-2
                bg-violet-950/60 backdrop-blur-sm rounded-full p-2 px-3 border-2 border-violet-400/20"
    >
      {icons}
    </div>
  );
}

export default ProjectTechnologies;
