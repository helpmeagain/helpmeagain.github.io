import SectionTitle from "../atoms/SectionTitle"
import { useTranslation } from 'react-i18next';
import ProjectSlide from "../organisms/ProjectSlide";

function Projects() {
    const { t } = useTranslation();

    return (
        <section className="flex flex-col items-center py-20 max-sm:pt-5 px-28 max-sm:px-12 w-screen gap-y-4 bg-gradient-to-t from-[#080414] via-violet-700/10 to-[#080414] select-none" id="projects">
            <SectionTitle text={t('titles.projects')} />
            <ProjectSlide />
        </section>
    )
}
export default Projects