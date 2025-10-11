import React from "react";
import SkillTag from "../atoms/SkillTag";
import WorkData from "@/assets/data/WorkData";
import SectionTitle from "../atoms/SectionTitle";
import { useTranslation } from "react-i18next";

const ExperienceList: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto md:w-full w-11/12">
      <SectionTitle text={t("titles.work")} />
      <ol>
        {WorkData().map((exp, i) => (
          <li
            key={i}
            className="relative pl-10 sm:pl-12 py-2 first:pt-0 last:pb-0 group/row"
          >
            <span
              className="pointer-events-none absolute left-3 sm:left-4 top-0 bottom-1/2 w-px bg-violet-600/30 group-first/row:hidden"
              aria-hidden="true"
            />
            <span
              className="pointer-events-none absolute left-3 sm:left-4 top-1/2 bottom-0 w-px bg-violet-600/30 group-last/row:hidden"
              aria-hidden="true"
            />
            <span
              className="absolute left-3 sm:left-4 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-block w-4 h-4 rounded-full bg-violet-500 ring-3 ring-violet-500/20"
              aria-hidden="true"
            />
            <div className="rounded-xl border border-violet-600/30 bg-violet-700/20 dark:bg-zinc-700/30 p-4">
              <div className="mb-2 flex items-center gap-3">
                <span className="font-bold text-lg text-violet-100">
                  {exp.name}
                </span>
                <span className="italic text-sm opacity-80">
                  {exp.start} — {exp.end}
                </span>
              </div>
              <p className="m-0 text-justify">{exp.description}</p>
              <ul className="mt-3 flex gap-2 flex-wrap text-violet-200">
                {exp.icons.map((tag, idx) => (
                  <SkillTag key={idx} name="" description="" icon={tag.icon} />
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ExperienceList;
