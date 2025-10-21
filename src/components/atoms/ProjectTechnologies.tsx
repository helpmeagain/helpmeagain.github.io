function ProjectTechnologies({ icons }: { icons: React.ReactNode[] }) {
  return (
    <div
      className="flex items-center justify-center gap-x-3
                 bg-violet-950/40 rounded-full px-4 py-2 border-2 border-violet-400/40
                 text-violet-100 w-fit mx-auto"
    >
      {icons}
    </div>
  );
}

export default ProjectTechnologies;
