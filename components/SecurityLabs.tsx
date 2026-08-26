import Link from "next/link";
import { portfolioProjects } from "@/components/project-data";
import { publications } from "@/components/publication-data";

const securityLabs = publications
  .filter((publication) => publication.series === "Friday Security Projects")
  .sort((left, right) => (left.part ?? 0) - (right.part ?? 0));

function formatPublishedDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00Z`));
}

export default function SecurityLabs() {
  if (!securityLabs.length) {
    return null;
  }

  return (
    <section
      id="security-labs"
      aria-labelledby="security-labs-heading"
      className="border-y border-slate-800 bg-slate-900/20 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-16">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Published project series
          </p>
          <h2
            id="security-labs-heading"
            className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          >
            Security Labs &amp; Project Series
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            A chronological record of the Friday Security Projects, with each
            lab documented as an engineering write-up.
          </p>
        </div>

        <ol className="mt-10 grid gap-3 lg:grid-cols-2">
          {securityLabs.map((publication) => {
            const project = portfolioProjects.find(
              (item) => item.slug === publication.projectSlug,
            );

            return (
              <li
                key={publication.url}
                className="border border-slate-800 bg-slate-950/50 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
                    Project {publication.part ?? "lab"}
                  </p>
                  <span className="shrink-0 text-xs text-slate-500">
                    {publication.platform}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-7 text-white">
                  {publication.title}
                </h3>
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                  {publication.publishedAt ? (
                    <time className="text-slate-400" dateTime={publication.publishedAt}>
                      {formatPublishedDate(publication.publishedAt)}
                    </time>
                  ) : null}
                  {project ? (
                    <Link
                      href={`/projects/${project.slug}/`}
                      className="font-semibold text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 hover:text-cyan-100"
                    >
                      Related Project: {project.title}
                    </Link>
                  ) : null}
                </div>
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex border-b border-cyan-300 pb-1 text-sm font-semibold text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 hover:border-cyan-100 hover:text-cyan-100"
                >
                  Read article
                </a>
              </li>
            );
          })}
        </ol>

        <Link
          href="/writing/"
          className="mt-8 inline-flex border-b border-cyan-300 pb-1 text-sm font-semibold text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 hover:border-cyan-100 hover:text-cyan-100"
        >
          View All Engineering Writing
        </Link>
      </div>
    </section>
  );
}
