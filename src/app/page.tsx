import Header from "./components/header";
import { HeroSection } from "./components/pages/home/hero-section";

export default function Home() {
  return (
    <div>
        <HeroSection />
        <div className="h-[200vh]"></div>
    </div>
  );
}
