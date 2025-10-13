import SkillsData, {
  SkillItem,
  SkillCategory,
} from "../../assets/data/SkillsData";
import SkillTag from "../atoms/SkillTag";
import { useTranslation } from "react-i18next";

type Props = { title?: string };

// const ORDER: SkillCategory[] = ["web", "mobile", "games", "misc"];
const ORDER: SkillCategory[] = ["web", "misc"];

function SkillCard({ title }: Props) {
  const { t } = useTranslation();

  const labels: Record<SkillCategory, string> = {
    web: t("skills.categories.web"),
    // mobile: t("skills.categories.mobile"),
    // games: t("skills.categories.games"),
    misc: t("skills.categories.misc"),
  };

  const grouped = SkillsData().reduce<Record<SkillCategory, SkillItem[]>>(
    (acc, s) => {
      if (!acc[s.category]) acc[s.category] = [];
      acc[s.category].push(s);
      return acc;
    },
    { web: [], misc: [] }
  );

  return (
    <div className="w-full">
      {title && (
        <h2 className="mb-4 text-center text-violet-200 jost-regular text-md">
          {title}
        </h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {ORDER.map((cat) => (
          <section
            key={cat}
            className="rounded-2xl border border-violet-400/20 bg-violet-700/10 backdrop-blur-xl p-4 shadow-lg shadow-violet-900/10 hover:shadow-violet-900/20 transition"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-violet-100 jost-semi-bold text-lg">
                {labels[cat]}
              </h3>
            </div>

            <ul className="mt-3 flex flex-wrap gap-2">
              {(grouped[cat] ?? []).map((skill) => (
                <SkillTag
                  key={skill.id}
                  name={skill.title}
                  description={skill.text}
                  icon={skill.icon}
                />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;
