import { nanoid } from "nanoid";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoMongodb,
} from "react-icons/bi";
import {
  SiExpress,
  SiNestjs,
  SiAngular,
  SiIonic,
  SiRedis,
  SiDocker,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const WorkData = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: nanoid(),
      name: t("work.compassjunior.name"),
      start: t("work.compassjunior.start"),
      end: t("work.compassjunior.end"),
      description: t("work.compassjunior.description"),
      icons: [
        { icon: <BiLogoJavascript className="h-8 w-8 rounded-full" /> },
        { icon: <BiLogoTypescript className="h-8 w-8" /> },
        { icon: <SiNestjs className="h-7 w-7" /> },
        { icon: <SiExpress className="h-8 w-8" /> },
        { icon: <SiAngular className="h-6 w-6" /> },
        { icon: <SiIonic className="h-6 w-6" /> },
        { icon: <BiLogoMongodb className="h-8 w-8" /> },
        { icon: <SiRedis className="h-6 w-6" /> },
        { icon: <VscAzure className="h-7 w-7" /> },
      ],
    },
    {
      id: nanoid(),
      name: t("work.compassintern.name"),
      start: t("work.compassintern.start"),
      end: t("work.compassintern.end"),
      description: t("work.compassintern.description"),
      icons: [
        { icon: <BiLogoTypescript className="h-8 w-8" /> },
        { icon: <SiExpress className="h-8 w-8" /> },
        { icon: <BiLogoMongodb className="h-8 w-8" /> },
        { icon: <SiDocker className="h-8 w-8" /> },
        { icon: <FaAws className="h-8 w-8" /> },
      ],
    },
  ];

  return projects;
};

export default WorkData;
