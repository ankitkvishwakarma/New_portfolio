import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeroSection from "./components/HeroSection";
import TechStack from "./components/TechStack";
import AboutSection from "./components/AboutSection";
// import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import FeaturedProjects from "./components/FeaturedProjects";
import ContactSection from "./components/ContactSection";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
// import CustomCursor from "./components/CustomCursor";

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
        text-foreground
        font-sans
        selection:bg-green-500/20
        selection:text-green-100
      "
    >
      {/* Custom Cursor */}
      {/* <CustomCursor /> */}

   

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
         

          <section
            id="home"
            className="
              w-full
              m-0
              p-0
            "
          >
            <HeroSection />
          </section>

       

          <section
            id="tech-stack"
            className="
              w-full
              m-0
              p-0
            "
          >
            <TechStack />
          </section>


          <section
            id="projects"
            className="
              w-full
              m-0
              p-0
            "
          >
            <FeaturedProjects />
          </section>

     

          <section
            id="about"
            className="
              w-full
              m-0
              p-0
            "
          >
            <AboutSection />
          </section>


          <section
            id="skills"
            className="
              w-full
              m-0
              p-0
            "
          >
            <SkillsSection />
          </section>

         

          {/* <section
            id="education"
            className="
              w-full
              m-0
              p-0
            "
          >
            <EducationSection />
          </section> */}



          <section
            id="contact"
            className="
              w-full
              m-0
              p-0
            "
          >
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

    return () => {
      clearTimeout(timer);
    };
  }, []);


  if (loading) {
    return <Loader />;
  }



  return (
    <BrowserRouter>
      <Routes>

      

        <Route
          path="/"
          element={<Home />}
        />

      

        <Route
          path="/resume"
          element={<Resume />}
        />

        

        <Route
          path="/projects"
          element={<AllProjects />}
        />

  

        <Route
          path="/projects/:slug"
          element={<ProjectDetails />}
        />

      </Routes>
    </BrowserRouter>
  );
}