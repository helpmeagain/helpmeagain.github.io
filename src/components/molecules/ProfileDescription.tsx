import { useTranslation } from 'react-i18next';
import SectionTitle from "../atoms/SectionTitle";

function ProfileDescription() {
    const { t } = useTranslation();
    return (
        <article>
            <SectionTitle text={t('titles.about')} />
            <p className="text-violet-100 mt-8 leading-loose atkinson-hyperlegible-regular">
                {t('about.text')}
            </p>
        </article>
    );
}

export default ProfileDescription;