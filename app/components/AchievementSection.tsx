import { achievements } from "../data/achievement";
import Image from "next/image";

export default function AchievementSection() {
  return (
    <section className="py-24 bg-[#0f1620]" id="achievements">
      <h2 className="text-5xl font-bold text-center mb-12">Achievements</h2>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-[#2a3444] rounded-full"></div>

        <div className="space-y-16">
          {achievements.map((a, idx) => (
            <div key={idx} className="relative pl-20">
              <div className="absolute left-5 top-2 w-6 h-6 bg-blue-500 rounded-full border-4 border-[#111827]"></div>

              <h3 className="text-2xl font-semibold text-white">{a.title}</h3>
              <p className="text-blue-300 text-sm mb-2">{a.year}</p>
              <p className="text-zinc-400 mb-4">{a.desc}</p>

              <div className="w-48 overflow-hidden border border-[#2a3444] rounded-lg shadow-md">
                <Image
                  src={a.certificate}
                  alt="certificate"
                  width={600} // cukup besar supaya tajam
                  height={400} // aspek landscape
                  className="object-contain hover:scale-105 transition duration-300"
                  quality={95}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
