// import { nanoid } from "nanoid";
// import { useTranslation } from "react-i18next";
// import {
//   BiLogoJavascript,
//   BiLogoTypescript,
//   BiLogoPostgresql,
//   BiLogoMongodb,
// } from "react-icons/bi";
// import { FaNodeJs, FaReact, FaVuejs } from "react-icons/fa";
// import { TbBrandCSharp } from "react-icons/tb";
// import {
//   SiExpress,
//   SiNestjs,
//   SiDotnet,
//   SiNextdotjs,
//   SiAngular,
//   SiNuxtdotjs,
//   SiReact,
//   SiExpo,
//   SiIonic,
//   SiGodotengine,
//   SiRedis,
//   SiDocker,
//   SiAmazonaws,
// } from "react-icons/si";
// import React from "react";

// export type SkillCategory = "web" | "mobile" | "games" | "misc";

// export type SkillItem = {
//   id: string;
//   title: string;
//   icon: React.ReactElement;
//   text: string;
//   category: SkillCategory;
// };

// const SkillsData = (): SkillItem[] => {
//   const { t } = useTranslation();

//   const skills: SkillItem[] = [
//     {
//       id: nanoid(),
//       title: "JavaScript",
//       icon: (
//         <BiLogoJavascript className="h-8 w-8 text-yellow-200 rounded-full" />
//       ),
//       text: t("skills.js"),
//       category: "web",
//     },
//     {
//       id: nanoid(),
//       title: "TypeScript",
//       icon: <BiLogoTypescript className="h-8 w-8 text-blue-200" />,
//       text: t("skills.ts"),
//       category: "web",
//     },
//     {
//       id: nanoid(),
//       title: "C#",
//       icon: <TbBrandCSharp className="h-8 w-8 text-purple-300" />,
//       text: t("skills.cs"),
//       category: "web",
//     },
//     {
//       id: nanoid(),
//       title: ".NET",
//       icon: <SiDotnet className="h-8 w-8 text-purple-300" />,
//       text: t("skills.dotnet"),
//       category: "web",
//     },
//     {
//       id: nanoid(),
//       title: "NodeJS",
//       icon: <FaNodeJs className="h-8 w-8 text-green-200" />,
//       text: t("skills.node"),
//       category: "web",
//     },
//     {
//       id: nanoid(),
//       title: "Express",
//       icon: <SiExpress className="h-8 w-8 text-gray-400" />,
//       text: t("skills.express"),
//       category: "web",
//     },
//     {
//       id: nanoid(),
//       title: "NestJS",
//       icon: <SiNestjs className="h-8 w-8 text-red-300" />,
//       text: t("skills.nest"),
//       category: "web",
//     },
//     {
//       id: nanoid(),
//       title: "React",
//       icon: <FaReact className="h-8 w-8 text-blue-300" />,
//       text: t("skills.react"),
//       category: "web",
//     },
//     {
//       id: nanoid(),
//       title: "NextJS",
//       icon: <SiNextdotjs className="h-7 w-7 text-gray-400" />,
//       text: t("skills.next"),
//       category: "web",
//     },
//     {
//       id: nanoid(),
//       title: "Angular",
//       icon: <SiAngular className="h-7 w-7 text-red-300" />,
//       text: t("skills.angular"),
//       category: "web",
//     },
//     {
//       id: nanoid(),
//       title: "VueJS",
//       icon: <FaVuejs className="h-7 w-7 text-green-200" />,
//       text: t("skills.vue"),
//       category: "web",
//     },
//     {
//       id: nanoid(),
//       title: "NuxtJS",
//       icon: <SiNuxtdotjs className="h-7 w-7 text-green-200" />,
//       text: t("skills.nuxt"),
//       category: "web",
//     },
//     {
//       id: nanoid(),
//       title: "JavaScript",
//       icon: (
//         <BiLogoJavascript className="h-8 w-8 text-yellow-200 rounded-full" />
//       ),
//       text: t("skills.js"),
//       category: "mobile",
//     },
//     {
//       id: nanoid(),
//       title: "TypeScript",
//       icon: <BiLogoTypescript className="h-8 w-8 text-blue-200" />,
//       text: t("skills.ts"),
//       category: "mobile",
//     },
//     {
//       id: nanoid(),
//       title: "React Native",
//       icon: <SiReact className="h-8 w-8 text-purple-300" />,
//       text: t("skills.reactnative"),
//       category: "mobile",
//     },
//     {
//       id: nanoid(),
//       title: "Expo",
//       icon: <SiExpo className="h-7 w-7 text-gray-400" />,
//       text: t("skills.expo"),
//       category: "mobile",
//     },
//     {
//       id: nanoid(),
//       title: "Ionic",
//       icon: <SiIonic className="h-7 w-7 text-blue-200" />,
//       text: t("skills.ionic"),
//       category: "mobile",
//     },
//     {
//       id: nanoid(),
//       title: "Godot",
//       icon: <SiGodotengine className="h-7 w-7 text-blue-200" />,
//       text: t("skills.godot"),
//       category: "games",
//     },
//     {
//       id: nanoid(),
//       title: "PostgreSQL",
//       icon: <BiLogoPostgresql className="h-7 w-7 text-blue-200" />,
//       text: t("skills.postgres"),
//       category: "misc",
//     },
//     {
//       id: nanoid(),
//       title: "MongoDB",
//       icon: <BiLogoMongodb className="h-7 w-7 text-green-200" />,
//       text: t("skills.mongo"),
//       category: "misc",
//     },
//     {
//       id: nanoid(),
//       title: "Redis",
//       icon: <SiRedis className="h-7 w-7 text-red-300" />,
//       text: t("skills.redis"),
//       category: "misc",
//     },
//     {
//       id: nanoid(),
//       title: "Docker",
//       icon: <SiDocker className="h-7 w-7 text-blue-200" />,
//       text: t("skills.docker"),
//       category: "misc",
//     },
//     {
//       id: nanoid(),
//       title: "AWS",
//       icon: <SiAmazonaws className="h-7 w-7 text-yellow-200" />,
//       text: t("skills.aws"),
//       category: "misc",
//     },
//   ];

//   return skills;
// };

// export default SkillsData;

import React from "react"; // Necessário para o tipo JSX.Element
import { nanoid } from "nanoid";
import { useTranslation } from "react-i18next";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoPostgresql,
  BiLogoMongodb,
} from "react-icons/bi";
import { FaNodeJs, FaReact, FaVuejs } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import {
  SiExpress,
  SiNestjs,
  SiDotnet,
  SiNextdotjs,
  SiAngular,
  SiNuxtdotjs,
  SiExpo,
  SiIonic,
  SiGodotengine,
  SiRedis,
  SiDocker,
  SiAmazonaws,
} from "react-icons/si";

// export type SkillCategory = "web" | "mobile" | "games" | "misc";
export type SkillCategory = "web" | "misc";

export interface SkillItem {
  id: string;
  title: string;
  icon: React.ReactElement;
  text: string;
  category: SkillCategory;
}

const SkillsData = (): SkillItem[] => {
  const { t } = useTranslation();
  const ico = "h-8 w-8 text-violet-200";

  const skills: SkillItem[] = [
    // --- Web ---
    {
      id: nanoid(),
      title: "JavaScript",
      icon: <BiLogoJavascript className={ico} />,
      text: t("skills.js"),
      category: "web",
    },
    {
      id: nanoid(),
      title: "TypeScript",
      icon: <BiLogoTypescript className={ico} />,
      text: t("skills.ts"),
      category: "web",
    },
    {
      id: nanoid(),
      title: "C#",
      icon: <TbBrandCSharp className={ico} />,
      text: t("skills.cs"),
      category: "web",
    },
    {
      id: nanoid(),
      title: "NodeJS",
      icon: <FaNodeJs className={ico} />,
      text: t("skills.node"),
      category: "web",
    },
    {
      id: nanoid(),
      title: "Express",
      icon: <SiExpress className={ico} />,
      text: t("skills.express"),
      category: "web",
    },
    {
      id: nanoid(),
      title: "NestJS",
      icon: <SiNestjs className={ico} />,
      text: t("skills.nest"),
      category: "web",
    },
    {
      id: nanoid(),
      title: ".NET",
      icon: <SiDotnet className={ico} />,
      text: t("skills.dotnet"),
      category: "web",
    },
    {
      id: nanoid(),
      title: "React",
      icon: <FaReact className={ico} />,
      text: t("skills.react"),
      category: "web",
    },
    {
      id: nanoid(),
      title: "NextJS",
      icon: <SiNextdotjs className="h-7 w-7 text-violet-200" />,
      text: t("skills.next"),
      category: "web",
    },
    {
      id: nanoid(),
      title: "Angular",
      icon: <SiAngular className="h-7 w-7 text-violet-200" />,
      text: t("skills.angular"),
      category: "web",
    },
    {
      id: nanoid(),
      title: "VueJS",
      icon: <FaVuejs className={ico} />,
      text: t("skills.vue"),
      category: "web",
    },
    {
      id: nanoid(),
      title: "NuxtJS",
      icon: <SiNuxtdotjs className={ico} />,
      text: t("skills.nuxt"),
      category: "web",
    },

    // --- Mobile ---
    // {
    //   id: nanoid(),
    //   title: "JavaScript",
    //   icon: <BiLogoJavascript className={ico} />,
    //   text: t("skills.js"),
    //   category: "mobile",
    // },
    // {
    //   id: nanoid(),
    //   title: "TypeScript",
    //   icon: <BiLogoTypescript className={ico} />,
    //   text: t("skills.ts"),
    //   category: "mobile",
    // },
    // {
    //   id: nanoid(),
    //   title: "React Native",
    //   icon: <SiReact className={ico} />,
    //   text: t("skills.reactnative"),
    //   category: "mobile",
    // },
    {
      id: nanoid(),
      title: "Expo",
      icon: <SiExpo className="h-7 w-7 text-violet-200" />,
      text: t("skills.expo"),
      category: "web",
    },
    {
      id: nanoid(),
      title: "Ionic",
      icon: <SiIonic className="h-7 w-7 text-violet-200" />,
      text: t("skills.ionic"),
      category: "web",
    },

    // --- Games ---
    // {
    //   id: nanoid(),
    //   title: "Godot",
    //   icon: <SiGodotengine className="h-7 w-7 text-violet-200" />,
    //   text: t("skills.godot"),
    //   category: "games",
    // },
    {
      id: nanoid(),
      title: "Godot",
      icon: <SiGodotengine className="h-7 w-7 text-violet-200" />,
      text: t("skills.godot"),
      category: "misc",
    },

    // --- Miscelânea ---
    {
      id: nanoid(),
      title: "PostgreSQL",
      icon: <BiLogoPostgresql className={ico} />,
      text: t("skills.postgres"),
      category: "misc",
    },
    {
      id: nanoid(),
      title: "MongoDB",
      icon: <BiLogoMongodb className={ico} />,
      text: t("skills.mongo"),
      category: "misc",
    },
    {
      id: nanoid(),
      title: "Redis",
      icon: <SiRedis className={ico} />,
      text: t("skills.redis"),
      category: "misc",
    },
    {
      id: nanoid(),
      title: "Docker",
      icon: <SiDocker className={ico} />,
      text: t("skills.docker"),
      category: "misc",
    },
    {
      id: nanoid(),
      title: "AWS",
      icon: <SiAmazonaws className={ico} />,
      text: t("skills.aws"),
      category: "misc",
    },
  ];

  return skills;
};

export default SkillsData;
