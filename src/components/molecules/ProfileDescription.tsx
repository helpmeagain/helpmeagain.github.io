import { useTranslation } from "react-i18next";
// import SkillCard from "./SkillCard";

function ProfileDescription() {
  const { t } = useTranslation();
  return (
    // <article className="w-11/12 max-w-5xl mx-auto select-none" id="about">
    //   <div className="flex md:flex-row flex-col items-center justify-center gap-6 w-full">
    //     <p className="w-full md:w-9/12 text-violet-100 atkinson-hyperlegible-regular text-justify">
    //       {t("about.text")}
    //     </p>

    //     <div className="w-full md:w-9/12 flex justify-center md:justify-end mt-2 md:mt-0">
    //       <SkillCard />
    //     </div>
    //   </div>
    // </article>
    <article
      id="about"
      className="w-11/12 max-w-3xl mx-auto flex items-center justify-center text-center"
    >
      <p className="text-violet-100 atkinson-hyperlegible-regular md:text-lg leading-relaxed text-justify">
        {t("about.text")}
      </p>
    </article>
  );
}

export default ProfileDescription;
