import SocialMedia from "../molecules/SocialMedia";
import { useTranslation } from 'react-i18next';

function ContactCard() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col pb-5 items-center justify-center gap-5 jost-semi-bold">
            <h1 className="text-violet-200 text-3xl">{t('contact.description')}</h1>
            <SocialMedia />
        </div>
    );
}

export default ContactCard;