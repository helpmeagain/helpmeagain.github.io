import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import ClickableIcon from '../atoms/ClickableIcon';

function SocialMedia() {
    return (
        <div className="flex gap-x-3 ">
            <ClickableIcon link="https://www.github.com/felipecomarques" icon={FaGithubSquare} />
            <ClickableIcon link="https://www.linkedin.com/in/felipecomarques" icon={FaLinkedin} />
        </div>
    );

}

export default SocialMedia;