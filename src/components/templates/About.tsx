import { useTranslation } from "react-i18next";
import SectionTitle from "../atoms/SectionTitle";
import AboutCard from "../organisms/AboutCard";

function About() {
  const { t } = useTranslation();
  return (
    <section className="py-20" id="about">
      <SectionTitle text={t("titles.about")} />
      <AboutCard />
    </section>
  );
}

export default About;
