import { nanoid } from "nanoid";
import { RiHome2Fill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { PiDesktopTowerFill } from "react-icons/pi";
import { useTranslation } from "react-i18next";

const LinksData = () => {
  const { t } = useTranslation();

  const links = [
    {
      id: nanoid(),
      icon: <RiHome2Fill className="h-6 w-6" />,
      href: "#home",
      text: t("navbar.home"),
    },
    {
      id: nanoid(),
      icon: <PiDesktopTowerFill className="h-6 w-6" />,
      href: "#projects",
      text: t("navbar.projects"),
    },
    {
      id: nanoid(),
      icon: <IoPerson className="h-6 w-6" />,
      href: "#work",
      text: t("navbar.work"),
    },
    {
      id: nanoid(),
      icon: <IoPerson className="h-6 w-6" />,
      href: "#about",
      text: t("navbar.about"),
    },
  ];

  return links;
};

export default LinksData;
