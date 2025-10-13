import {
  Carousel,
  CarouselContent,
  CarouselControlsBottom,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../atoms/ui/carousel";
import ProjectsData from "../../assets/data/ProjectsData";
import ProjectsCard from "../molecules/ProjectsCard";

function ProjectSlide() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="lg:w-10/12 w-full"
    >
      <CarouselContent>
        {ProjectsData().map((project) => (
          <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
            <ProjectsCard {...project} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-white" />
      <CarouselNext className="text-white" />
      <CarouselControlsBottom />
      <CarouselDots className="mt-4 hidden md:flex" />
    </Carousel>
  );
}

export default ProjectSlide;
