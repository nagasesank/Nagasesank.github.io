import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
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

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main className="pt-28">
        <article className="mx-auto max-w-5xl px-5 pb-20 sm:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-cyan-200">
            <Link href="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <Link href="/#engineering-projects">Engineering Projects</Link>
            <span aria-hidden="true"> / </span>
            <span>{project.title}</span>
          </nav>

          <header className="mt-10 border-b border-slate-800 pb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              {project.category}
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              {project.summary}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-100">
                {project.status}
              </span>
              {project.platforms.map((platform) => (
                <span key={platform} className="border border-slate-700 px-3 py-1 text-sm">
                  {platform}
                </span>
              ))}
            </div>
            <a href={project.repository} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
              View GitHub repository
            </a>
          </header>

          <section aria-labelledby="snapshot-heading" className="py-8">
            <h2 id="snapshot-heading" className="text-2xl font-semibold text-white">Engineering snapshot</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[['Security problem', project.objective], ['Architecture', project.architecture], ['Implementation', project.implementation], ['Validation and evidence', `${project.validation} Evidence: ${project.evidence}.`]].map(([heading, content]) => (
              <div key={heading}>
                <h2 className="font-semibold text-white">{heading}</h2>
                <p className="mt-2 leading-7 text-slate-300">{content}</p>
              </div>
            ))}
            </div>
          </section>

          <section className="border-y border-slate-800 py-10">
            <h2 className="text-2xl font-semibold text-white">Security controls</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.controls.map((control) => <span key={control} className="border border-slate-700 px-3 py-2 text-sm">{control}</span>)}
            </div>
          </section>

          <section className="py-8">
            <h2 className="text-2xl font-semibold text-white">Engineering lifecycle</h2>
            <ol className="mt-4 flex flex-wrap gap-2">
              {project.lifecycle.map((step, index) => <li key={step} className="border border-slate-700 px-3 py-2 text-sm">{index + 1}. {step}</li>)}
            </ol>
          </section>

          {project.articles?.length ? <section className="border-t border-slate-800 py-8"><h2 className="text-xl font-semibold text-white">Project articles</h2><div className="mt-4 flex flex-wrap gap-3">{project.articles.map((article) => <a key={article.url} href={article.url} target="_blank" rel="noopener noreferrer" className="border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-100 hover:border-cyan-300">{article.platform}</a>)}</div></section> : null}

          <section className="border-t border-slate-800 py-10">
            <h2 className="text-2xl font-semibold text-white">Current state and limitations</h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-300">{project.limitations}</p>
          </section>

          <section aria-label="Project actions" className="border-t border-slate-800 pt-8">
            <div className="flex flex-wrap gap-3">
              <Link href="/#engineering-projects" className="border border-slate-600 px-5 py-3 font-semibold text-slate-100 hover:border-cyan-300 hover:text-cyan-100">
                Back to Engineering Projects
              </Link>
              <a href={project.repository} target="_blank" rel="noopener noreferrer" className="bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
                GitHub Repository
              </a>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
