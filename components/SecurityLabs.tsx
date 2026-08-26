import Link from "next/link";

import { portfolioProjects } from "./project-data";
import { publications } from "./publication-data";

const securityLabs = publications
  .filter((publication) => publication.series === "Friday Security Projects")
  .sort((first, second) => (first.part ?? 0) - (second.part ?? 0));

function formatPublishedDate(publishedAt?: string) {
  if (!publishedAt) {
    return null;
  }

  return new Intl.DateTimeFormat("en", { month: "short", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${publishedAt}T00:00:00Z`),
  );
}

export default function SecurityLabs() {
  if (securityLabs.length === 0) {
    return null;
  }

  return (
    <section
      id="security-labs"
      aria-labelledby="security-labs-heading"
      className="border-b border-slate-800 bg-[#07111d] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-16">
        <div className="grid gap-6 border-b border-slate-700 pb-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Security Labs &amp; Project Series</p>
            <h2 id="security-labs-heading" className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Working notes from hands-on security labs</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">A lower-hierarchy series of public engineering write-ups. These records complement, rather than replace, the four flagship case studies above.</p>
        </div>

        <ol className="mt-8 divide-y divide-slate-700 border-y border-slate-700">
          {securityLabs.map((publication) => {
            const relatedProject = publication.projectSlug
              ? portfolioProjects.find((project) => project.slug === publication.projectSlug)
              : undefined;

            return (
              <li key={publication.url} className="grid gap-4 py-5 sm:grid-cols-[8rem_1fr_auto] sm:items-center">
                <div>
                  <p className="font-mono text-sm text-cyan-200">LAB {String(publication.part).padStart(2, "0")}</p>
                  <p className="mt-1 text-xs text-slate-400">{publication.platform}{publication.publishedAt ? ` / ${formatPublishedDate(publication.publishedAt)}` : ""}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-7 text-white">{publication.title}</h3>
                  {relatedProject ? <Link href={`/projects/${relatedProject.slug}/`} className="mt-2 inline-block text-sm text-cyan-200 underline decoration-cyan-300/50 underline-offset-4 hover:text-cyan-100">Related project: {relatedProject.title}</Link> : null}
                </div>
                <a href={publication.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center justify-center border border-slate-600 px-4 text-sm font-semibold text-slate-100 transition-colors hover:border-cyan-200 hover:text-cyan-100">Read article</a>
              </li>
            );
          })}
        </ol>

        <Link href="/writing/" className="mt-8 inline-flex min-h-11 items-center border border-cyan-300 px-5 text-sm font-semibold text-cyan-100 transition-colors hover:bg-cyan-300 hover:text-slate-950">View All Engineering Writing</Link>
      </div>
    </section>
  );
}
