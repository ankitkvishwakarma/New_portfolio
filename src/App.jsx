import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeroSection from "./components/HeroSection";
import TechStack from "./components/TechStack";
import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import FeaturedProjects from "./components/FeaturedProjects";
import ContactSection from "./components/ContactSection";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";

import AllProjects from "./pages/AllProjects";
import ProjectDetails from "./pages/ProjectDetails";
import Resume from "./pages/Resume";

function Home() {
  return (
    <div
      className="
        relative
        min-h-screen
        w-full
        overflow-x-hidden
        bg-[#030712]
        text-gray-100
        font-sans
        selection:bg-cyan-500/30
        selection:text-cyan-200
      "
    >
      <CustomCursor />

      <div
        className="
          fixed
          inset-0
          z-0
          pointer-events-none
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            top-[-10%]
            left-[-10%]
            w-[40vw]
            h-[40vw]
            rounded-full
            bg-indigo-600/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            top-[40%]
            right-[-10%]
            w-[30vw]
            h-[30vw]
            rounded-full
            bg-cyan-600/10
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            bottom-[-10%]
            left-[20%]
            w-[40vw]
            h-[40vw]
            rounded-full
            bg-purple-600/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.015]
            bg-[url('https://grainy-gradients.vercel.app/noise.svg')]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)]
            bg-[size:60px_60px]
            [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          w-full
          min-h-screen
        "
      >
        <Navbar />

        <main
          className="
            w-full
            m-0
            p-0
            flex
            flex-col
          "
        >
          <section className="w-full m-0 p-0">
            <HeroSection />
          </section>

          <section className="w-full m-0 p-0">
            <TechStack />
          </section>

          <section className="w-full m-0 p-0">
            <FeaturedProjects />
          </section>

          <section className="w-full m-0 p-0">
            <AboutSection />
          </section>

          <section className="w-full m-0 p-0">
            <SkillsSection />
          </section>

          <section className="w-full m-0 p-0">
            <EducationSection />
          </section>

          <section className="w-full m-0 p-0">
            <ContactSection />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/resume" element={<Resume />} />

        <Route path="/projects" element={<AllProjects />} />

        <Route
          path="/projects/:slug"
          element={<ProjectDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}