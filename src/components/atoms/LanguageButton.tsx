type Props = {
    onClick: () => void;
    icon?: React.ReactNode;
    text: string;
};

function LanguageButton({ onClick, icon, text }: Props) {
    return (
        <button className="jost-semi-bold language-buttons" onClick={onClick}>
            {icon} {text}
        </button>
    );
}

export default LanguageButton;