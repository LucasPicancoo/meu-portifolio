import { HeroSection } from "./components/pages/home/hero-section";
import { ProjectsSection } from "./components/pages/home/project-section";
import StackCarousel from "./components/stack-carousel";

export default function Home() {
  return (
    <div>
        <HeroSection />
        <StackCarousel />
        <ProjectsSection />
        <div className="h-[200vh]"></div>
    </div>
  );
}
