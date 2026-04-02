import { HeroSection } from "./components/pages/home/hero-section";
import StackCarousel from "./components/stack-carousel/stack-carousel";

export default function Home() {
  return (
    <div>
        <HeroSection />
        <StackCarousel />
        <div className="h-[200vh]"></div>
    </div>
  );
}
