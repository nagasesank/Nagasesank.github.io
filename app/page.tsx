import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import CoreSkills from "@/components/CoreSkills";
import ProjectsGrid from "@/components/ProjectsGrid";
import SecurityLabs from "@/components/SecurityLabs";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = { alternates: { canonical: "/" }, openGraph: { title: "Surya Naga Sesank M | Cloud Security Engineering", description: "Cloud security engineering across AWS and Google Cloud, with Terraform, IAM and Zero Trust, DevSecOps, incident response, and security architecture.", url: "/" }, twitter: { title: "Surya Naga Sesank M | Cloud Security Engineering", description: "Cloud security engineering across AWS and Google Cloud, with Terraform, IAM and Zero Trust, DevSecOps, incident response, and security architecture." } };

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <FeaturedProject />
      <CoreSkills />
      <ProjectsGrid />
      <SecurityLabs />
      <About />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
