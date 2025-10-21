import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import ProjectTechnologies from "../atoms/ProjectTechnologies";
import { FlickeringGrid } from "../atoms/ui/flickering-grid";
import HeroCard from "../organisms/HeroCard";
import { SiDotnet } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

function Hero() {
  return (
    <section className="relative h-screen" id="home">
      <FlickeringGrid
        className="absolute inset-0"
        squareSize={8}
        gridGap={7}
        flickerChance={0.3}
        color="rgb(124, 58, 237)"
        maxOpacity={0.4}
        fadeTopBottom={30}
      />
      <div className="relative z-10 flex flex-col items-center left justify-center h-full gap-6">
        {/* Centraliza tudo na tela */}
        <HeroCard name="Felipe Marques" />
        <ProjectTechnologies
          icons={[
            <BiLogoTypescript key="ts" className="h-8 w-8 rounded-full" />,
            <BiLogoJavascript key="ts" className="h-8 w-8 rounded-full" />,
            <TbBrandCSharp key="nest" className="h-8 w-8" />,
            <SiDotnet key="nest" className="h-9 w-9" />,
          ]}
        />
      </div>
    </section>
  );
}

export default Hero;
