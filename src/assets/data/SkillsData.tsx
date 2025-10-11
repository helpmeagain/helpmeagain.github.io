import { nanoid } from "nanoid";
import { useTranslation } from "react-i18next";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoPostgresql,
  BiLogoMongodb,
} from "react-icons/bi";
import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaVuejs } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import {
  SiExpress,
  SiNestjs,
  SiDotnet,
  SiNextdotjs,
  SiAngular,
  SiNuxtdotjs,
  SiTailwindcss,
  SiReact,
  SiExpo,
  SiIonic,
  SiGodotengine,
  SiRedis,
  SiDocker,
  SiAmazonaws,
} from "react-icons/si";

const SkillsData = () => {
  const { t } = useTranslation();

  const skills = [
    {
      id: nanoid(),
      title: "JavaScript",
      icon: <BiLogoJavascript className="h-8 w-8 text-violet-200" />,
      text: t("skills.js"),
    },
    {
      id: nanoid(),
      title: "TypeScript",
      icon: <BiLogoTypescript className="h-8 w-8 text-violet-200" />,
      text: t("skills.ts"),
    },
    {
      id: nanoid(),
      title: "C#",
      icon: <TbBrandCSharp className="h-8 w-8 text-violet-200" />,
      text: t("skills.cs"),
    },
    {
      id: nanoid(),
      title: "NodeJS",
      icon: <FaNodeJs className="h-8 w-8 text-violet-200" />,
      text: t("skills.node"),
    },
    {
      id: nanoid(),
      title: "Express",
      icon: <SiExpress className="h-8 w-8 text-violet-200" />,
      text: t("skills.express"),
    },
    {
      id: nanoid(),
      title: "NestJS",
      icon: <SiNestjs className="h-8 w-8 text-violet-200" />,
      text: t("skills.nest"),
    },
    {
      id: nanoid(),
      title: ".NET",
      icon: <SiDotnet className="h-8 w-8 text-violet-200" />,
      text: t("skills.dotnet"),
    },
    {
      id: nanoid(),
      title: "React",
      icon: <FaReact className="h-8 w-8 text-violet-200" />,
      text: t("skills.react"),
    },
    {
      id: nanoid(),
      title: "NextJS",
      icon: <SiNextdotjs className="h-8 w-8 text-violet-200" />,
      text: t("skills.next"),
    },
    {
      id: nanoid(),
      title: "Angular",
      icon: <SiAngular className="h-8 w-8 text-violet-200" />,
      text: t("skills.angular"),
    },
    {
      id: nanoid(),
      title: "VueJS",
      icon: <FaVuejs className="h-8 w-8 text-violet-200" />,
      text: t("skills.vue"),
    },
    {
      id: nanoid(),
      title: "NuxtJS",
      icon: <SiNuxtdotjs className="h-8 w-8 text-violet-200" />,
      text: t("skills.nuxt"),
    },
    {
      id: nanoid(),
      title: "HTML",
      icon: <FaHtml5 className="h-8 w-8 text-violet-200" />,
      text: t("skills.html"),
    },
    {
      id: nanoid(),
      title: "CSS",
      icon: <FaCss3Alt className="h-8 w-8 text-violet-200" />,
      text: t("skills.css"),
    },
    {
      id: nanoid(),
      title: "TailwindCSS",
      icon: <SiTailwindcss className="h-8 w-8 text-violet-200" />,
      text: t("skills.tailwind"),
    },
    {
      id: nanoid(),
      title: "React Native",
      icon: <SiReact className="h-8 w-8 text-violet-200" />,
      text: t("skills.reactnative"),
    },
    {
      id: nanoid(),
      title: "Expo",
      icon: <SiExpo className="h-8 w-8 text-violet-200" />,
      text: t("skills.expo"),
    },
    {
      id: nanoid(),
      title: "Ionic",
      icon: <SiIonic className="h-8 w-8 text-violet-200" />,
      text: t("skills.ionic"),
    },
    {
      id: nanoid(),
      title: "Godot",
      icon: <SiGodotengine className="h-8 w-8 text-violet-200" />,
      text: t("skills.godot"),
    },
    {
      id: nanoid(),
      title: "PostgreSQL",
      icon: <BiLogoPostgresql className="h-8 w-8 text-violet-200" />,
      text: t("skills.postgres"),
    },
    {
      id: nanoid(),
      title: "MongoDB",
      icon: <BiLogoMongodb className="h-8 w-8 text-violet-200" />,
      text: t("skills.mongo"),
    },
    {
      id: nanoid(),
      title: "Redis",
      icon: <SiRedis className="h-8 w-8 text-violet-200" />,
      text: t("skills.redis"),
    },
    {
      id: nanoid(),
      title: "Docker",
      icon: <SiDocker className="h-8 w-8 text-violet-200" />,
      text: t("skills.docker"),
    },
    {
      id: nanoid(),
      title: "AWS",
      icon: <SiAmazonaws className="h-8 w-8 text-violet-200" />,
      text: t("skills.aws"),
    },
  ];

  return skills;
};

export default SkillsData;
