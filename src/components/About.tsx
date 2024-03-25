import SectionTitle from "./SectionTitle";
import waifu from '../assets/images/waifu.jpg'
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <section className="bg-violet-700/5 py-20" id="about">
            <div className="align-element grid md:grid-cols-2 items-center gap-16">
                <img src={waifu} className="mx-auto m-0 h-72 rounded-full border-2 shadow-2xl border-violet-400/30" />
                <article>
                    <SectionTitle text={t('titles.about')} />
                    <p className="text-violet-100 mt-8 leading-loose atkinson-hyperlegible-regular">
                        {t('about.text')}
                    </p>
                </article>
            </div>
        </section>
    )
}
export default About