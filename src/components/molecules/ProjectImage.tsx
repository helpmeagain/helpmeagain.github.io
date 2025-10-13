type Props = {
  img: string;
  title: string;
};

function ProjectImage({ img, title }: Props) {
  return (
    <div className="relative z-0">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-2xl h-48"
      />
    </div>
  );
}

export default ProjectImage;
