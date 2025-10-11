import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaEnvelopeSquare } from "react-icons/fa";
import { FaSquarePollHorizontal } from "react-icons/fa6";
import ClickableIcon from "../atoms/ClickableIcon";

function SocialMedia() {
  return (
    <div className="flex gap-x-3 items-center">
      <ClickableIcon
        link="https://www.github.com/helpmeagain"
        icon={FaGithubSquare}
      />
      <ClickableIcon
        link="https://www.linkedin.com/in/felipecomarques"
        icon={FaLinkedin}
      />
      <ClickableIcon
        link="mailto:felipe.comarques12008@gmail.com"
        icon={FaEnvelopeSquare}
      />
      <ClickableIcon
        link="https://helpmeagain.github.io/curriculum-vitae/"
        icon={FaSquarePollHorizontal}
      />
    </div>
  );
}

export default SocialMedia;
