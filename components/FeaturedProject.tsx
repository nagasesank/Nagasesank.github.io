import Link from "next/link";

import { portfolioProjects } from "./project-data";
import { publications } from "./publication-data";

const featuredProject = portfolioProjects.find(
  (project) => project.slug === "hipaa-hitrust-healthcare-security",
);

export default function FeaturedProject() {
  if (!featuredProject) {
    return null;
  }

  const relatedArticles = publications.filter(
    (publication) => publication.projectSlug === featuredProject.slug,
  );

  return (
    <section className="border-b border-slate-800 bg-[#07111d] py-16 sm:py-20">
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-16">
        <div className="mb-8 flex flex-col gap-4 border-b border-slate-700 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Featured engineering record
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Current security engineering focus
            </h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-amber-200">
            Status: {featuredProject.status}
          </p>
        </div>

        <article className="grid border border-slate-700 bg-[#0b1725] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="font-mono text-xs text-cyan-200">PROJECT-04 / {featuredProject.category}</p>
            <h3 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {featuredProject.title}
            </h3>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              {featuredProject.summary}
            </p>
            <p className="mt-5 max-w-3xl border-l-2 border-cyan-300 pl-4 leading-7 text-slate-300">
              {featuredProject.limitations}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/projects/${featuredProject.slug}/`}
                className="inline-flex min-h-11 items-center justify-center bg-cyan-300 px-5 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200"
              >
                View Case Study
              </Link>
              <a
                href={featuredProject.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center border border-slate-500 px-5 text-sm font-semibold text-slate-100 transition-colors hover:border-cyan-200 hover:text-cyan-100"
              >
                GitHub Repository
              </a>
            </div>

            {relatedArticles.length > 0 ? (
              <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {relatedArticles.map((article) => (
                  <a key={article.url} href={article.url} target="_blank" rel="noopener noreferrer" className="text-cyan-200 underline decoration-cyan-300/50 underline-offset-4 hover:text-cyan-100">
                    {article.platform}: {article.title}
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <div className="border-t border-slate-700 bg-[#102033] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-400">Engineering evidence</p>
            <dl className="mt-6 divide-y divide-slate-700 border-y border-slate-700">
              <div className="py-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Objective</dt>
                <dd className="mt-2 leading-7 text-slate-200">{featuredProject.objective}</dd>
              </div>
              <div className="py-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Delivery</dt>
                <dd className="mt-2 leading-7 text-slate-200">{featuredProject.delivery}</dd>
              </div>
              <div className="py-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Validation record</dt>
                <dd className="mt-2 leading-7 text-slate-200">{featuredProject.evidence}</dd>
              </div>
            </dl>
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Controls in scope</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {featuredProject.controls.map((control) => (
                  <li key={control} className="border border-slate-600 px-2.5 py-1 text-xs text-slate-200">{control}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
