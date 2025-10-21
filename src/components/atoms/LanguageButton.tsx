type Props = {
  onClick: () => void;
  text: string;
};

function LanguageButton({ onClick, text }: Props) {
  return (
    <button
      className="common-button language-options-buttons navigation-buttons jost-semi-bold"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default LanguageButton;
