import Link from "next/link";

import type { PortfolioProject } from "@/components/project-data";
import type { Publication } from "@/components/publication-data";

type ProjectConsoleProps = {
  project: PortfolioProject;
  projectIndex: number;
  publications: Publication[];
  previousProject?: PortfolioProject;
  nextProject?: PortfolioProject;
};

function formatPublishedDate(publishedAt?: string) {
  if (!publishedAt) return null;
  return new Intl.DateTimeFormat("en", { month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${publishedAt}T00:00:00Z`));
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return <h2 className="flex items-center gap-3 text-xl font-semibold tracking-tight text-white sm:text-2xl"><span className="font-mono text-xs font-medium tracking-[0.16em] text-cyan-200">{number}</span>{title}</h2>;
}

export default function ProjectConsole({ project, projectIndex, publications, previousProject, nextProject }: ProjectConsoleProps) {
  const sequence = `PROJECT-${String(projectIndex + 1).padStart(2, "0")}`;

  return (
    <article className="mx-auto max-w-screen-2xl px-5 pb-16 sm:px-8 sm:pb-20 lg:px-16">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
        <Link href="/" className="hover:text-cyan-100">Home</Link><span aria-hidden="true"> / </span>
        <Link href="/#engineering-projects" className="hover:text-cyan-100">Engineering Projects</Link><span aria-hidden="true"> / </span>
        <span className="text-slate-300">{project.title}</span>
      </nav>

      <header className="mt-8 border-b border-slate-700 pb-10 sm:mt-10">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-start">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">{sequence} / {project.category}</p>
            <h1 className="mt-4 max-w-5xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">{project.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{project.summary}</p>
          </div>
          <dl className="border border-slate-700 bg-[#0b1725] text-sm">
            <div className="border-b border-slate-700 p-4"><dt className="font-mono text-xs uppercase tracking-[0.14em] text-slate-400">State</dt><dd className="mt-2 font-semibold text-cyan-100">{project.status}</dd></div>
            <div className="p-4"><dt className="font-mono text-xs uppercase tracking-[0.14em] text-slate-400">Platform</dt><dd className="mt-2 leading-6 text-slate-200">{project.platforms.join(" / ")}</dd></div>
          </dl>
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={project.repository} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center bg-cyan-300 px-5 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200">View Source Repository</a>
          <Link href="/#engineering-projects" className="inline-flex min-h-11 items-center justify-center border border-slate-600 px-5 text-sm font-semibold text-slate-100 transition-colors hover:border-cyan-200 hover:text-cyan-100">Back to Projects</Link>
        </div>
      </header>

      <div className="grid gap-5 py-10 lg:grid-cols-2">
        <section aria-labelledby="security-objective-heading" className="border border-slate-700 bg-[#0b1725] p-6 sm:p-7">
          <div id="security-objective-heading"><SectionHeading number="01 /" title="Security Objective" /></div>
          <p className="mt-5 text-lg leading-8 text-slate-200">{project.objective}</p>
          <p className="mt-6 border-t border-slate-700 pt-4 text-sm leading-6 text-slate-400"><span className="font-semibold text-slate-300">Category:</span> {project.category}</p>
        </section>
        <section aria-labelledby="architecture-heading" className="border border-slate-700 bg-[#102033] p-6 sm:p-7">
          <div id="architecture-heading"><SectionHeading number="02 /" title="Architecture Overview" /></div>
          <p className="mt-5 text-lg leading-8 text-slate-200">{project.architecture}</p>
          <div className="mt-6 border-t border-slate-700 pt-4"><p className="font-mono text-xs uppercase tracking-[0.14em] text-slate-400">Platform scope</p><ul className="mt-3 flex flex-wrap gap-2">{project.platforms.map((platform) => <li key={platform} className="border border-slate-600 px-2.5 py-1 text-xs text-slate-200">{platform}</li>)}</ul></div>
        </section>
      </div>

      <section aria-labelledby="controls-heading" className="border-y border-slate-700 py-10">
        <div id="controls-heading"><SectionHeading number="CONTROL /" title="Controls in Scope" /></div>
        <ul className="mt-6 flex flex-wrap gap-2.5">{project.controls.map((control) => <li key={control} className="border border-slate-600 bg-[#0b1725] px-3 py-2 text-sm text-slate-100">{control}</li>)}</ul>
      </section>

      <div className="grid gap-5 py-10 lg:grid-cols-2">
        <section aria-labelledby="implementation-heading" className="border border-slate-700 bg-[#0b1725] p-6 sm:p-7">
          <div id="implementation-heading"><SectionHeading number="03 /" title="Implementation Record" /></div>
          <p className="mt-5 leading-8 text-slate-200">{project.implementation}</p>
          <dl className="mt-6 border-t border-slate-700 pt-4"><dt className="font-mono text-xs uppercase tracking-[0.14em] text-slate-400">Delivery</dt><dd className="mt-2 leading-7 text-slate-300">{project.delivery}</dd></dl>
        </section>
        <section aria-labelledby="validation-heading" className="border border-slate-700 bg-[#102033] p-6 sm:p-7">
          <div id="validation-heading"><SectionHeading number="04 /" title="Validation Record" /></div>
          <dl className="mt-5 divide-y divide-slate-700 border-y border-slate-700"><div className="py-4"><dt className="font-mono text-xs uppercase tracking-[0.14em] text-slate-400">Validation method</dt><dd className="mt-2 leading-7 text-slate-200">{project.validation}</dd></div><div className="py-4"><dt className="font-mono text-xs uppercase tracking-[0.14em] text-slate-400">Evidence record</dt><dd className="mt-2 leading-7 text-slate-200">{project.evidence}</dd></div></dl>
        </section>
      </div>

      <section aria-labelledby="lifecycle-heading" className="border-t border-slate-700 py-10">
        <div id="lifecycle-heading"><SectionHeading number="WORKFLOW /" title="Engineering Lifecycle" /></div>
        <ol className="mt-6 grid border-l border-t border-slate-700 sm:grid-cols-2 xl:grid-cols-4">{project.lifecycle.map((step, index) => <li key={step} className="border-b border-r border-slate-700 bg-[#0b1725] p-4"><span className="font-mono text-xs text-cyan-200">{String(index + 1).padStart(2, "0")}</span><span className="mt-3 block text-sm font-semibold text-slate-100">{step}</span></li>)}</ol>
      </section>

      <section aria-labelledby="limitations-heading" className="border-y border-slate-700 bg-[#0b1725] px-5 py-8 sm:px-7 sm:py-9">
        <div id="limitations-heading"><SectionHeading number="05 /" title="Current State & Limitations" /></div>
        <div className="mt-5 grid gap-5 lg:grid-cols-[12rem_minmax(0,1fr)] lg:items-start"><p className="border-l-2 border-cyan-300 pl-3 text-sm font-semibold text-cyan-100">{project.status}</p><p className="max-w-4xl leading-8 text-slate-200">{project.limitations}</p></div>
      </section>

      {publications.length > 0 ? <section aria-labelledby="publications-heading" className="py-10"><div id="publications-heading"><SectionHeading number="RELATED /" title="Published Engineering Write-ups" /></div><div className="mt-6 grid gap-4 lg:grid-cols-2">{publications.map((publication) => <article key={publication.url} className="border border-slate-700 bg-[#0b1725] p-5"><div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs"><span className="font-mono uppercase tracking-[0.14em] text-cyan-200">{publication.platform}</span>{publication.publishedAt ? <span className="text-slate-400">{formatPublishedDate(publication.publishedAt)}</span> : null}</div>{publication.series ? <p className="mt-3 text-xs text-slate-400">{publication.series}{publication.part ? ` / Part ${publication.part}` : ""}</p> : null}<a href={publication.url} target="_blank" rel="noopener noreferrer" className="mt-2 block text-lg font-semibold leading-7 text-white underline decoration-slate-600 underline-offset-4 hover:text-cyan-100 hover:decoration-cyan-300">{publication.title}</a></article>)}</div></section> : null}

      <section aria-label="Project repository action" className="border-t border-slate-700 py-8"><a href={project.repository} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center border border-cyan-300 px-5 text-sm font-semibold text-cyan-100 transition-colors hover:bg-cyan-300 hover:text-slate-950">View Source Repository</a></section>
      <nav aria-label="Project navigation" className="grid gap-4 border-t border-slate-700 pt-8 sm:grid-cols-2">{previousProject ? <Link href={`/projects/${previousProject.slug}/`} className="min-h-24 border border-slate-700 bg-[#0b1725] p-5 transition-colors hover:border-cyan-300"><span className="text-sm text-cyan-200">← Previous Project</span><span className="mt-2 block font-semibold text-white">{previousProject.title}</span></Link> : <div aria-hidden="true" />}{nextProject ? <Link href={`/projects/${nextProject.slug}/`} className="min-h-24 border border-slate-700 bg-[#0b1725] p-5 text-right transition-colors hover:border-cyan-300"><span className="text-sm text-cyan-200">Next Project →</span><span className="mt-2 block font-semibold text-white">{nextProject.title}</span></Link> : <div aria-hidden="true" />}</nav>
    </article>
  );
}
