import { FlickeringGrid } from "../atoms/ui/flickering-grid";
import HeroCard from "../organisms/HeroCard";

function Hero() {
  return (
    <section className="relative h-screen" id="home">
      <FlickeringGrid
        className="absolute inset-0"
        squareSize={8}
        gridGap={7}
        flickerChance={0.3}
        color="rgb(124, 58, 237)"
        maxOpacity={0.28}
        fadeTopBottom={30}
      />
      <div className="relative z-10">
        <article className="h-screen flex flex-col justify-center md:ml-6">
          <HeroCard name="Felipe Marques" />
        </article>
      </div>
    </section>
  );
}

export default Hero;
