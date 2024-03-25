import { useTranslation } from 'react-i18next';
import SocialMedia from '../molecules/SocialMedia';
import WelcomeMessage from '../atoms/WelcomeMessage';
import Typewriter from '../atoms/Typewriter';

function HeroCard({ name }: { name: string }) {
    const { t } = useTranslation();
    return (
        <div>
            <WelcomeMessage message={t('hero.welcome')} name={name} />
            <Typewriter />
            <SocialMedia />
        </div>
    )
}

export default HeroCard