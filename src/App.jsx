import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturedProjects from "./components/FeaturedProjects";
import ContactSection from "./components/ContactSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
// import SkillsSection from "./components/SkillsSection";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme !== null) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  // Save theme
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkMode));

    document.body.style.backgroundColor = darkMode
      ? "#020b12"
      : "#f3f4f6";
  }, [darkMode]);

  // Loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      className={`relative min-h-screen overflow-hidden transition-all duration-500 ${
        darkMode
          ? "bg-[#020b12] text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      {/* Dark Mode Effects */}
      {darkMode && (
        <>
          <div className="fixed top-0 left-0 w-[700px] h-[700px] bg-cyan-500/10 blur-[220px] pointer-events-none" />

          <div className="fixed bottom-0 right-0 w-[700px] h-[700px] bg-purple-500/10 blur-[220px] pointer-events-none" />

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
        </>
      )}

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection darkMode={darkMode} />

        {/* Uncomment if needed */}
        {/* <SkillsSection darkMode={darkMode} /> */}

        <AboutSection darkMode={darkMode} />
        <FeaturedProjects darkMode={darkMode} />
        <ContactSection darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>

      {/* Floating Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </div>
  );
}