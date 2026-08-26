import Link from "next/link";

const capabilitySignals = [
  ["Architecture", "Cloud security design and control boundaries"],
  ["Infrastructure", "Terraform-managed, reviewable change"],
  ["Validation", "Control tests, investigation, and remediation"],
  ["Evidence", "Architecture, records, and engineering writing"],
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800 pt-28">
      <div className="absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(rgba(103,232,249,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.05)_1px,transparent_1px)] [background-size:3rem_3rem]" />
      <div className="mx-auto max-w-screen-2xl px-5 pb-14 sm:px-8 lg:px-16 lg:pb-20">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:gap-16">
          <div className="pt-4">
            <p className="inline-flex border-l-2 border-cyan-300 pl-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
              Cloud Security Architecture Console
            </p>
            <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Engineering security controls that can be reviewed, validated,
              and explained.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Cloud security engineering across AWS and Google Cloud, centered
              on Terraform, IAM, Zero Trust, detection, incident response, and
              evidence-led delivery.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/#engineering-projects"
                className="inline-flex items-center justify-center bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-200"
              >
                View Project Records
              </Link>
              <a
                href="https://github.com/nagasesank"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 hover:border-cyan-300 hover:text-cyan-100"
              >
                GitHub Profile
              </a>
            </div>
          </div>

          <aside
            aria-labelledby="engineering-brief-heading"
            className="border border-slate-700 bg-[#0b1725]/90 p-5 shadow-[0_1.5rem_4rem_rgba(0,0,0,0.2)] sm:p-7"
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-700 pb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Engineering brief
              </p>
              <span className="border border-cyan-300/30 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-cyan-100">
                Portfolio
              </span>
            </div>
            <h2 id="engineering-brief-heading" className="mt-5 text-2xl font-semibold text-white">
              Architecture and evidence before assumption.
            </h2>
            <dl className="mt-6 divide-y divide-slate-800 border-y border-slate-800">
              {[
                ["Cloud scope", "AWS and Google Cloud"],
                ["Delivery", "Terraform and Infrastructure as Code"],
                ["Security focus", "IAM, Zero Trust, detection, and governance"],
                ["Evidence", "Architecture, validation, and engineering records"],
              ].map(([term, detail]) => (
                <div key={term} className="grid gap-1 py-3 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    {term}
                  </dt>
                  <dd className="text-sm leading-6 text-slate-200">{detail}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <div
          id="capabilities"
          aria-label="Core cloud security capabilities"
          className="mt-14 grid border border-slate-700 bg-[#0b1725]/80 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4"
        >
          {capabilitySignals.map(([capability, description], index) => (
            <div
              key={capability}
              className="border-b border-slate-700 p-5 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
                0{index + 1}
              </p>
              <p className="mt-3 text-sm font-semibold text-white">{capability}</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
