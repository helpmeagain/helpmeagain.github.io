import WelcomeMessage from "../atoms/WelcomeMessage";

function HeroCard({ name }: { name: string }) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <WelcomeMessage name={name} />
      {/* <TypewriterAnimation /> */}
      {/* <SocialMedia /> */}
    </div>
  );
}

export default HeroCard;
