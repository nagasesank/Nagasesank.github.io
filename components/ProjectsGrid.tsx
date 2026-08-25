import { portfolioProjects } from "@/components/project-data";
import { publications } from "@/components/publication-data";

function statusClasses(status: string) {
  if (status === "Validated") {
    return "border-cyan-400/30 bg-cyan-400/10 text-cyan-100";
  }

  if (status === "In Progress") {
    return "border-amber-400/30 bg-amber-400/10 text-amber-100";
  }

  return "border-slate-600 bg-slate-800 text-slate-200";
}

export default function ProjectsGrid() {
  return (
    <section
      id="engineering-projects"
      aria-labelledby="projects-heading"
      className="bg-slate-950 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-16">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Engineering portfolio
          </p>
          <h2
            id="projects-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Projects with reviewable evidence
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            Cloud security work documented through architecture, infrastructure,
            validation, and engineering records.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          {portfolioProjects.map((project) => {
            const articleCount = publications.filter((article) => article.projectSlug === project.slug).length;
            return (
            <article
              key={project.title}
              className="min-w-0 border border-slate-800 bg-slate-900/40 p-5 sm:p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold leading-7 text-white sm:text-2xl">
                    {project.title}
                  </h3>
                </div>
                <span
                  className={`w-fit shrink-0 border px-2.5 py-1 text-xs font-semibold ${statusClasses(project.status)}`}
                >
                  {project.status}
                </span>
              </div>

              <p className="mt-5 leading-7 text-slate-300">{project.objective}</p>

              {articleCount ? <p className="mt-3 text-xs font-semibold uppercase tracking-[.14em] text-cyan-200">{articleCount} Published {articleCount === 1 ? "Article" : "Articles"}</p> : null}

              <dl className="mt-6 grid gap-5 border-y border-slate-800 py-5 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Platform scope
                  </dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {project.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="border border-slate-700 px-2.5 py-1 text-xs font-medium text-slate-200"
                      >
                        {platform}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Key controls
                  </dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {project.controls.map((control) => (
                      <span
                        key={control}
                        className="border border-slate-700 px-2.5 py-1 text-xs font-medium text-slate-200"
                      >
                        {control}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Delivery
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-300">
                    {project.delivery}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Evidence
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-300">
                    {project.evidence}
                  </dd>
                </div>
              </dl>

              <a
                href={`/projects/${project.slug}/`}
                className="mt-6 inline-flex border-b border-cyan-300 pb-1 text-sm font-semibold text-cyan-200 hover:border-cyan-100 hover:text-cyan-100"
              >
                View Case Study
              </a>
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-5 inline-flex border-b border-slate-500 pb-1 text-sm font-semibold text-slate-200 hover:border-cyan-100 hover:text-cyan-100"
              >
                View GitHub repository
              </a>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
