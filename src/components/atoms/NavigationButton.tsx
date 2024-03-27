type Props = {
    onClick: () => void;
    icon?: React.ReactNode;
    text: string;
};

function NavigationButton({ onClick, icon, text }: Props) {
    return (
        <button className="jost-semi-bold navbar-links" onClick={onClick}>
            {icon} {text}
        </button>
    );
}

export default NavigationButton;
