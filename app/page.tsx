import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import CoreSkills from "@/components/CoreSkills";
import ProjectsGrid from "@/components/ProjectsGrid";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <FeaturedProject />
      <CoreSkills />
      <ProjectsGrid />
      <About />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}