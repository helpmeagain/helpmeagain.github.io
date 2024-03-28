type Props = {
    onClick: () => void;
    text: string;
};

function LanguageButton({ onClick, text }: Props) {
    return (
        <button className="language-options-buttons jost-semi-bold" onClick={onClick}>
            {text}
        </button>
    );
}

export default LanguageButton;