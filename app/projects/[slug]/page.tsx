import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectConsole from "@/components/project/ProjectConsole";
import { portfolioProjects } from "@/components/project-data";
import { publications } from "@/components/publication-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return portfolioProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);

  return project ? { title: project.title, description: project.summary, alternates: { canonical: `/projects/${project.slug}/` }, openGraph: { type: "website", title: project.title, description: project.summary, url: `/projects/${project.slug}/` }, twitter: { card: "summary", title: project.title, description: project.summary } } : {};
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = portfolioProjects.findIndex((item) => item.slug === slug);
  const project = portfolioProjects[projectIndex];

  if (!project) {
    notFound();
  }

  const projectPublications = publications.filter(
    (publication) => publication.projectSlug === project.slug,
  );

  return (
    <div className="min-h-screen bg-[#07111d] text-slate-200">
      <Navbar />
      <main className="pt-28">
        <ProjectConsole
          project={project}
          projectIndex={projectIndex}
          publications={projectPublications}
          previousProject={portfolioProjects[projectIndex - 1]}
          nextProject={portfolioProjects[projectIndex + 1]}
        />
      </main>
      <Footer />
    </div>
  );
}
