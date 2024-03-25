import { IconType } from "react-icons";

type Props = {
    link: string;
    icon: IconType;
}

function ClickableIcon({ link, icon: Icon }: Props) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Icon className="h-8 w-8 hoover-settings" />
        </a>
    );
}

export default ClickableIcon;
