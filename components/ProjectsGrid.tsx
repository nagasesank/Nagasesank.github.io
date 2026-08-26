import Link from "next/link";

import { portfolioProjects } from "./project-data";
import { publications } from "./publication-data";

export default function ProjectsGrid() {
  return (
    <section id="engineering-projects" className="border-b border-slate-800 bg-[#091521] py-16 sm:py-20">
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-16">
        <div className="grid gap-6 border-b border-slate-700 pb-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Engineering projects</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Flagship project records</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">Four focused case studies with traceable objectives, controls, delivery methods, and evidence types.</p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {portfolioProjects.map((project, index) => {
            const articleCount = publications.filter((publication) => publication.projectSlug === project.slug).length;
            return (
              <article key={project.slug} className="flex flex-col border border-slate-700 bg-[#0b1725] p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-xs text-cyan-200">PROJECT-{String(index + 1).padStart(2, "0")}</p>
                  <p className="shrink-0 border border-slate-600 px-2 py-1 text-xs text-slate-200">{project.status}</p>
                </div>
                <p className="mt-5 text-sm text-cyan-100">{project.category}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{project.objective}</p>
                <dl className="mt-6 grid gap-4 border-t border-slate-700 pt-5 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Platform scope</dt>
                    <dd className="mt-2 text-sm leading-6 text-slate-200">{project.platforms.join(" / ")}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Delivery</dt>
                    <dd className="mt-2 text-sm leading-6 text-slate-200">{project.delivery}</dd>
                  </div>
                </dl>
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Key controls</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.controls.map((control) => <li key={control} className="border border-slate-600 px-2 py-1 text-xs text-slate-300">{control}</li>)}
                  </ul>
                </div>
                <p className="mt-5 text-sm leading-6 text-slate-400"><span className="font-semibold text-slate-300">Evidence:</span> {project.evidence}</p>
                {articleCount > 0 ? <p className="mt-3 font-mono text-xs text-cyan-200">{articleCount} Published Article{articleCount === 1 ? "" : "s"}</p> : null}
                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 border-t border-slate-700 pt-5 text-sm font-semibold">
                  <Link href={`/projects/${project.slug}/`} className="text-cyan-200 underline decoration-cyan-300/50 underline-offset-4 hover:text-cyan-100">View case study</Link>
                  <a href={project.repository} target="_blank" rel="noopener noreferrer" className="text-slate-200 underline decoration-slate-500 underline-offset-4 hover:text-cyan-100">GitHub repository</a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
