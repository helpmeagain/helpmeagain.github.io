import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { PiFileDocDuotone } from "react-icons/pi";
import { Button } from "../atoms/ui/button";
import { useTranslation } from "react-i18next";

type Props = {
  gitHubLink: string;
  deployUrl?: string;
  docs?: string;
};

function ProjectLinks({ gitHubLink, deployUrl, docs }: Props) {
  const { t } = useTranslation();
  return (
    <div className="flex gap-x-4 justify-between">
      <Button
        size="default"
        variant="outline"
        className="rounded-full border-violet-600/70 bg-zinc-700/20 hover:bg-zinc-900/40 jost-regular text-md"
        asChild
      >
        <a href={gitHubLink} target="_blank">
          <FaGithub /> {t("projectsLinks.repo")}
        </a>
      </Button>
      {deployUrl ? (
        <Button
          size="default"
          variant="outline"
          className="rounded-full border-violet-600/70 bg-zinc-700/20 hover:bg-zinc-900/40 jost-regular text-md"
          asChild
        >
          <a href={deployUrl} target="_blank">
            <TbWorldWww /> {t("projectsLinks.site")}
          </a>
        </Button>
      ) : null}
      {docs ? (
        <Button
          size="default"
          variant="outline"
          className="rounded-full border-violet-600/70 bg-zinc-700/20 hover:bg-zinc-900/40 jost-regular text-md"
          asChild
        >
          <a href={docs} target="_blank">
            <PiFileDocDuotone /> {t("projectsLinks.docs")}
          </a>
        </Button>
      ) : null}
    </div>
  );
}

export default ProjectLinks;
