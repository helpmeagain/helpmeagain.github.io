import { useTranslation } from 'react-i18next';
import SocialMedia from '../molecules/SocialMedia';
import WelcomeMessage from '../atoms/WelcomeMessage';
import Typewriter from '../atoms/Typewriter';

function HeroCard({ name }: { name: string }) {
    const { t } = useTranslation();
    return (
        <div className='flex flex-col gap-2'>
            <WelcomeMessage message={t('hero.welcome')} name={name} />
            <Typewriter intro={t('hero.intro')} phrases={["backend developer", "frontend developer", "game developer"]} />
            <SocialMedia />
        </div>
    )
}

export default HeroCard