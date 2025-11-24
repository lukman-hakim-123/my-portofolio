import HeroSection from "./components/HeroSection";
import SkillSection from "./components/SkillSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ProjectSection from "./components/ProjectSection";
import AchievementSection from "./components/AchievementSection";

export default function Home() {
  return (
    <main className="text-white">
      <HeroSection />
      <SkillSection />
      <ProjectSection />
      <AchievementSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
