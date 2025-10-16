import { IconType } from "react-icons";

type Props = {
  link: string;
  icon: IconType;
  className?: string;
};

function ClickableIcon({ link, icon: Icon, className }: Props) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="bg-violet-200 hover:bg-violet-400 text-indigo-950 duration-500 rounded-[3px]">
        <Icon className={`h-8 w-8 p-[3px] ${className || ""}`} />
      </div>
    </a>
  );
}

export default ClickableIcon;
