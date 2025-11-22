import HeroSection from "./components/HeroSection";
import SkillSection from "./components/SkillSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="text-white">
      <HeroSection />
      <SkillSection />
      {/* Projects Section */}
      <section className="py-24 bg-[#111827]">
        <h2 className="text-5xl font-bold text-center mb-8">
          Featured Projects
        </h2>
        <p className="text-center text-xl text-zinc-400">
          Some of my recent work
        </p>
      </section>
      <AboutSection />
      <ContactSection />
    </main>
  );
}
