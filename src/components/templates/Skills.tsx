import SectionTitle from "../atoms/SectionTitle"
import SkillsData from "../../assets/data/SkillsData";
import SkillsCard from "../organisms/SkillsCard"
import { useTranslation } from 'react-i18next';

function Skills() {
    const { t } = useTranslation();

    return (
        <section className="py-20 align-element" id="skills">
            <SectionTitle text={t('titles.skills')} />
            <div className="py-16 grid gap-8 min-[600px]:grid-cols-2 lg:grid-cols-3">
                {SkillsData().map((skill) => {
                    return <SkillsCard key={skill.id} {...skill} />
                })}
            </div>
        </section>
    )
}
export default Skills