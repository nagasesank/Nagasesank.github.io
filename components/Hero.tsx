import Link from "next/link";

export default function Hero() {
  return (
    <section className="border-b border-slate-800 bg-slate-950 pt-28">
      <div className="mx-auto max-w-screen-2xl px-5 pb-14 sm:px-8 lg:px-16 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <p className="inline-flex border-l-2 border-cyan-400 pl-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              Senior Cloud Security Engineering
            </p>

            <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Secure cloud infrastructure built with evidence, not assumptions.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              I design and validate AWS and multi-cloud security controls with
              Terraform, practical DevSecOps workflows, and documented
              engineering decisions.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/#engineering-projects"
                className="inline-flex items-center justify-center bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
              >
                View Engineering Projects
              </Link>

              <a
                href="https://github.com/nagasesank"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-slate-600 px-5 py-3 text-sm font-semibold text-white hover:border-cyan-300 hover:text-cyan-200"
              >
                GitHub
              </a>
            </div>
          </div>

          <aside
            aria-labelledby="evidence-heading"
            className="border border-slate-700 bg-slate-900/50 p-6 sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              Current engineering evidence
            </p>
            <h2 id="evidence-heading" className="mt-4 text-2xl font-semibold text-white">
              Multi-cloud WAF evaluation platform
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              A modular Terraform implementation for evaluating AWS WAF and
              Google Cloud Armor, supported by architecture documentation and
              validation records.
            </p>

            <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden border border-slate-700 bg-slate-700">
              {[
                ["Scope", "AWS + GCP"],
                ["Delivery", "Terraform"],
                ["Control", "WAF"],
                ["Proof", "Validated"],
              ].map(([term, detail]) => (
                <div key={term} className="bg-slate-950 p-4">
                  <dt className="text-xs uppercase tracking-wider text-slate-500">
                    {term}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-100">
                    {detail}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <div
          id="capabilities"
          aria-label="Core cloud security capabilities"
          className="mt-14 grid border border-slate-800 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4"
        >
          {[
            ["Cloud Security", "AWS and multi-cloud controls"],
            ["Infrastructure as Code", "Terraform modules and reviewable change"],
            ["DevSecOps", "Security checks within delivery workflows"],
            ["Engineering Evidence", "Architecture, validation, and documentation"],
          ].map(([capability, description]) => (
            <div key={capability} className="border-b border-slate-800 p-5 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
              <p className="text-sm font-semibold text-white">{capability}</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
