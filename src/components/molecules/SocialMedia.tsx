import { RiLinkedinFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";
import { BsFillPersonLinesFill } from "react-icons/bs";
import ClickableIcon from "../atoms/ClickableIcon";

function SocialMedia() {
  return (
    <div className="flex gap-x-3 items-center">
      <ClickableIcon
        link="https://www.github.com/helpmeagain"
        icon={FaGithub}
      />
      <ClickableIcon
        link="https://www.linkedin.com/in/felipecomarques"
        icon={RiLinkedinFill}
      />
      <ClickableIcon
        link="mailto:felipe.marques.desenvolvedor@gmail.com"
        icon={RiMailFill}
      />
      <ClickableIcon
        link="https://helpmeagain.github.io/curriculum-vitae/"
        icon={BsFillPersonLinesFill}
      />
    </div>
  );
}

export default SocialMedia;
