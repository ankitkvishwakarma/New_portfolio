import Hero from "./components/HeroSection";
import ParticlesBg from "./particals/ParticalsBg";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import FeaturedProjects from "./components/FeaturedProjects";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <ParticlesBg />
      <Hero />
      <AboutSection/>
      <FeaturedProjects/>
      <ContactSection/>
      <Navbar/>
    </div>
  );
}

export default App;