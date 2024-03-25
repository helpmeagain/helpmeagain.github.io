import { FaGithub } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb'
import ClickableIcon from '../atoms/ClickableIcon';

type Props = {
    gitHubLink: string;
    deployUrl?: string;
}

function ProjectLinks({ gitHubLink, deployUrl }: Props) {
    return (
        <div className='mt-4 flex gap-x-4'>
            <ClickableIcon link={gitHubLink} icon={FaGithub} />
            {deployUrl ? (<ClickableIcon link={deployUrl} icon={TbWorldWww} />) : null}
        </div>
    )
}

export default ProjectLinks;