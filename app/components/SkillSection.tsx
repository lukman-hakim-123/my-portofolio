import { skills } from "../data/skills";

export default function SkillsSection() {
  return (
    <section className="py-24 bg-[#0f1620]" id="skills">
      <h2 className="text-5xl font-bold text-center mb-4">
        Skills & Technologies
      </h2>

      <p className="text-center text-xl text-zinc-400 mb-16">
        Tools and technologies I work with
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-[#111827] border border-zinc-700 rounded-xl p-4 flex flex-col items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.4)] hover:border-blue-400 hover:-translate-y-3 transition-all duration-300"
          >
            {/* Icon */}
            <span className={`text-xl`}>
              <img src={skill.icon} alt={skill.name} className="w-24 h-24" />
            </span>

            <p className="text-white text-xl font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
