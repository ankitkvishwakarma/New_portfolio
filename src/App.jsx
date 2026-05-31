import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturedProjects from "./components/FeaturedProjects";
import ContactSection from "./components/ContactSection";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#020b12] text-white overflow-hidden">
      
      {/* Global Glow 1 */}
      <div className="fixed top-0 left-0 w-[700px] h-[700px] bg-cyan-500/10 blur-[220px] pointer-events-none" />

      {/* Global Glow 2 */}
      <div className="fixed bottom-0 right-0 w-[700px] h-[700px] bg-purple-500/10 blur-[220px] pointer-events-none" />

      {/* Grid Overlay */}
      <div
        className="
        fixed
        inset-0
        opacity-[0.03]
        pointer-events-none
        bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)]
        bg-[size:60px_60px]
        "
      />

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <FeaturedProjects />
        <ContactSection />
      </div>

      <Navbar />
    </div>
  );
}