import { TypeAnimation } from "react-type-animation";

function TypewriterAnimation() {
  return (
    <h1 className="text-3xl max-sm:text-xl text-violet-200 pb-4 fira-mono-regular select-none">
      &lt;
      <TypeAnimation
        sequence={["fullstack developer", 1500, "game developer", 1500]}
        speed={50}
        deletionSpeed={60}
        cursor={false}
        repeat={Infinity}
        wrapper="span"
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-400 text-transparent bg-clip-text"
      />
      /&gt;
    </h1>
  );
}

export default TypewriterAnimation;
