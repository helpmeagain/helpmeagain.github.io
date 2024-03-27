type Props = {
    onClick: () => void;
    text: string;
};

function LanguageButton({ onClick, text }: Props) {
    return (
        <button className="jost-semi-bold language-buttons h-10" onClick={onClick}>
            {text}
        </button>
    );
}

export default LanguageButton;