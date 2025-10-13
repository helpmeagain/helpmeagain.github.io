import { nanoid } from "nanoid";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoPostgresql,
} from "react-icons/bi";
import { SiExpress, SiGodotengine, SiNestjs, SiRedis } from "react-icons/si";
import { useTranslation } from "react-i18next";

const ProjectsData = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: nanoid(),
      img: "./src/assets/images/blackwell.png",
      // url: "https://react-projects.netlify.app/",
      github: "https://github.com/helpmeagain/blackwell",
      title: t("projects.blackwell.name"),
      icons: [
        <BiLogoTypescript className="h-8 w-8 rounded-full" />,
        <SiNestjs className="h-7 w-7 " />,
        // <BiLogoReact className="h-8 w-8" />,
        <BiLogoPostgresql className="h-8 w-8" />,
        <SiRedis className="h-8 w-8 " />,
      ],
      text: t("projects.blackwell.description"),
    },
    {
      id: nanoid(),
      img: "./src/assets/images/kiwi.png",
      // url: 'https://react-projects.netlify.app/',
      github: "https://github.com/helpmeagain/project-kiwi",
      title: t("projects.kiwi.name"),
      icons: [<SiGodotengine className="h-7 w-7" />],
      text: t("projects.kiwi.description"),
    },
    {
      id: nanoid(),
      img: "https://github.com/felipecomarques/ward-gg/raw/main/docs/image.png",
      // url: 'https://react-projects.netlify.app/',
      github: "https://github.com/felipecomarques/ward-gg",
      title: t("projects.ward.name"),
      icons: [
        <BiLogoJavascript className="h-8 w-8 rounded-full" />,
        <BiLogoReact className="h-8 w-8" />,
        <BiLogoTailwindCss className="h-8 w-8" />,
      ],
      text: t("projects.ward.description"),
    },
    {
      id: nanoid(),
      img: "https://github.com/felipecomarques/veterinary-clinic-api/raw/main/docs/resource/image/swagger.png",
      github: "https://github.com/felipecomarques/veterinary-clinic-api",
      title: t("projects.vet.name"),
      icons: [
        <BiLogoTypescript className="h-8 w-8" />,
        <SiExpress className="h-8 w-8" />,
        <BiLogoMongodb className="h-8 w-8" />,
      ],
      text: t("projects.vet.description"),
    },
    // {
    //   id: nanoid(),
    //   img: "https://user-images.githubusercontent.com/57302703/208323181-18cbc4e7-34d6-4f45-86da-f7a00df95e85.gif",
    //   // url: 'https://react-projects.netlify.app/',
    //   github: "https://github.com/felipecomarques/flappy-bird",
    //   title: t("projects.flap.name"),
    //   icons: [
    //     <TbBrandCSharp className="h-9 w-9" />,
    //     <BsUnity className="h-8 w-8" />,
    //   ],
    //   text: t("projects.flap.description"),
    // },
    // {
    //   id: nanoid(),
    //   img: "https://user-images.githubusercontent.com/57302703/226485402-c2e93082-bef4-428a-993d-04207be27dd1.gif",
    //   // url: 'https://react-projects.netlify.app/',
    //   github: "https://github.com/felipecomarques/delivery-driver",
    //   title: t("projects.deli.name"),
    //   icons: [
    //     <TbBrandCSharp className="h-9 w-9" />,
    //     <BsUnity className="h-8 w-8" />,
    //   ],
    //   text: t("projects.deli.description"),
    // },
  ];

  return projects;
};

export default ProjectsData;
