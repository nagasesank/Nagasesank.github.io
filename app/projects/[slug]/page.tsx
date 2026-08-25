import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioProjects } from "@/components/project-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return portfolioProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);
  return project
    ? { title: `${project.title} | Surya`, description: project.summary }
    : {};
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <main className="min-h-screen bg-slate-950 pt-28 text-slate-200"><article className="mx-auto max-w-5xl px-5 pb-20 sm:px-8"><nav aria-label="Breadcrumb" className="text-sm text-cyan-200"><Link href="/">Home</Link><span aria-hidden="true"> / </span><Link href="/#engineering-projects">Engineering Projects</Link><span aria-hidden="true"> / </span><span>{project.title}</span></nav><header className="mt-10 border-b border-slate-800 pb-10"><p className="text-xs font-semibold uppercase tracking-[.2em] text-cyan-200">{project.category}</p><h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">{project.title}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{project.summary}</p><div className="mt-6 flex flex-wrap gap-2">{project.platforms.map((item) => <span key={item} className="border border-slate-700 px-3 py-1 text-sm">{item}</span>)}</div><a href={project.repository} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300">View GitHub repository</a></header><section className="grid gap-6 py-10 sm:grid-cols-3"><div><h2 className="font-semibold text-white">Security problem</h2><p className="mt-2 leading-7 text-slate-300">{project.objective}</p></div><div><h2 className="font-semibold text-white">Architecture approach</h2><p className="mt-2 leading-7 text-slate-300">{project.architecture}</p></div><div><h2 className="font-semibold text-white">Implementation approach</h2><p className="mt-2 leading-7 text-slate-300">{project.implementation}</p></div></section><section className="border-y border-slate-800 py-10"><h2 className="text-2xl font-semibold text-white">Security controls</h2><div className="mt-5 flex flex-wrap gap-2">{project.controls.map((item) => <span key={item} className="border border-slate-700 px-3 py-2 text-sm">{item}</span>)}</div></section><section className="py-10"><h2 className="text-2xl font-semibold text-white">Validation and evidence</h2><p className="mt-4 max-w-3xl leading-7 text-slate-300">{project.validation} Evidence type: {project.evidence}.</p><h2 className="mt-10 text-2xl font-semibold text-white">Engineering lifecycle</h2><ol className="mt-5 flex flex-wrap gap-2">{project.lifecycle.map((item, index) => <li key={item} className="border border-slate-700 px-3 py-2 text-sm">{index + 1}. {item}</li>)}</ol></section><section className="border-t border-slate-800 py-10"><h2 className="text-2xl font-semibold text-white">Current state and limitations</h2><p className="mt-4 max-w-3xl leading-7 text-slate-300">{project.limitations}</p></section></article></main>;
}
