import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import FeaturedProjects from "./components/FeaturedProjects";
import ContactSection from "./components/ContactSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  const [loading, setLoading] = useState(true);

  // Premium Loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] text-gray-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <CustomCursor />
      
      {/* Background System */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Subtle mesh gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-cyan-600/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-purple-600/10 blur-[120px]" />
        
        {/* Noise overlay for texture */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <Navbar />
        
        <main className="w-full flex flex-col items-center">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <FeaturedProjects />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}