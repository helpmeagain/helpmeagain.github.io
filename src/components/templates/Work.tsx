import { useTranslation } from "react-i18next";
import SectionTitle from "../atoms/SectionTitle";
import ExperienceList from "../molecules/ExperienceList";

function Work() {
  const { t } = useTranslation();
  return (
    <section
      className="py-20  mx-auto text-center bg-gradient-to-t from-[#080414] via-violet-400/10 to-[#080414]"
      id="work"
    >
      <SectionTitle text={t("titles.work")} />
      <ExperienceList />
    </section>
  );
}

export default Work;
