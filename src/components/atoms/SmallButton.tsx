import { IconType } from "react-icons";

type Props = {
    onClick: () => void;
    icon: IconType;
};

function SmallButton({ onClick, icon: Icon }: Props) {
    return (
        <div className="flex items-center justify-center">
            <button className="small-button" onClick={onClick}>
                <Icon className="md:ml-1" />
            </button>
        </div>
    );
}

export default SmallButton;
