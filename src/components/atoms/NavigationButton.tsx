type Props = {
  onClick: () => void;
  icon?: React.ReactNode;
  text: string;
};

function NavigationButton({ onClick, icon, text }: Props) {
  return (
    <button
      className="common-button navigation-buttons jost-semi-bold"
      onClick={onClick}
    >
      {icon} {text}
    </button>
  );
}

export default NavigationButton;
