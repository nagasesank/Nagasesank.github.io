import Link from "next/link";
import { portfolioProjects } from "@/components/project-data";

const featuredProject = portfolioProjects.find(
  (project) => project.slug === "hipaa-hitrust-healthcare-security",
);

export default function FeaturedProject() {
  if (!featuredProject) return null;

  return (
    <section aria-labelledby="featured-project-heading" className="bg-slate-950 py-16 sm:py-20">
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Featured engineering project</p>
        <div className="mt-4 grid gap-8 border border-slate-800 bg-slate-900/40 p-5 sm:p-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,.9fr)]">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">{featuredProject.category}</p>
            <h2 id="featured-project-heading" className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{featuredProject.title}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{featuredProject.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">{featuredProject.controls.map((control) => <span key={control} className="border border-slate-700 px-3 py-1 text-xs text-slate-200">{control}</span>)}</div>
          </div>
          <aside className="border-l border-slate-800 pl-0 lg:pl-8">
            <dl className="divide-y divide-slate-800 border-y border-slate-800">
              <div className="py-3"><dt className="text-xs uppercase tracking-[.14em] text-slate-500">Status</dt><dd className="mt-1 font-semibold text-amber-100">{featuredProject.status}</dd></div>
              <div className="py-3"><dt className="text-xs uppercase tracking-[.14em] text-slate-500">Delivery</dt><dd className="mt-1 text-sm text-slate-200">{featuredProject.delivery}</dd></div>
              <div className="py-3"><dt className="text-xs uppercase tracking-[.14em] text-slate-500">Evidence</dt><dd className="mt-1 text-sm text-slate-200">{featuredProject.evidence}</dd></div>
            </dl>
            <Link href={`/projects/${featuredProject.slug}/`} className="mt-6 inline-flex w-full justify-center bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300">View Case Study</Link>
            <a href={featuredProject.repository} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex w-full justify-center border border-slate-600 px-5 py-3 font-semibold text-slate-100 hover:border-cyan-300">GitHub Repository</a>
            {featuredProject.articles?.length ? <div className="mt-5 border-t border-slate-800 pt-4"><p className="text-xs font-semibold uppercase tracking-[.14em] text-cyan-200">Published engineering write-ups</p>{featuredProject.articles.map((article) => <a key={article.url} href={article.url} target="_blank" rel="noopener noreferrer" className="mt-2 block text-sm font-semibold text-slate-100 hover:text-cyan-200">{article.title} <span className="text-cyan-200">({article.platform})</span></a>)}</div> : null}
          </aside>
        </div>
      </div>
    </section>
  );
}
