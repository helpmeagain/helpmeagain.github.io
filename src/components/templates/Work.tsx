import { useTranslation } from "react-i18next";
import SectionTitle from "../atoms/SectionTitle";
import ExperienceList from "../molecules/ExperienceList";

function Work() {
  const { t } = useTranslation();
  return (
    <section
      className="py-20 select-none md:w-8/12 w-11/12 mx-auto text-center"
      id="work"
    >
      <SectionTitle text={t("titles.work")} />
      <ExperienceList />
    </section>
  );
}

export default Work;
