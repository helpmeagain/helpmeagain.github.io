import ExperienceList from "../molecules/ExperienceList";
import ProfileDescription from "../molecules/ProfileDescription";

function AboutCard() {
  return (
    <div className="flex justify-center px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
        <div className="w-full md:w-1/2 flex justify-center mb-10">
          <ProfileDescription />
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <ExperienceList />
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
