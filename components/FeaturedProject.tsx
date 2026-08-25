import Image from "next/image";
import Link from "next/link";

const engineeringFlow = [
  {
    label: "Problem",
    detail:
      "Compare cloud-native web application firewall controls across AWS and Google Cloud from a repeatable baseline.",
  },
  {
    label: "Architecture",
    detail:
      "Equivalent cloud environments combine networking, compute, load balancing, identity, logging, and Layer 7 protection.",
  },
  {
    label: "Implementation",
    detail:
      "Reusable Terraform modules and environment configuration support a consistent infrastructure lifecycle.",
  },
  {
    label: "Validation",
    detail:
      "Terraform checks, cloud console verification, browser testing, and security validation are documented by phase.",
  },
  {
    label: "Evidence",
    detail:
      "Architecture, deployment, validation, comparison, and cleanup materials are maintained in the repository.",
  },
];

export default function FeaturedProject() {
  return (
    <section
      aria-labelledby="featured-project-heading"
      className="bg-slate-950 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-16">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Featured engineering project
          </p>
          <h2
            id="featured-project-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Enterprise Multi-Cloud WAF Evaluation Platform
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            A Terraform-led comparison of AWS WAF and Google Cloud Armor,
            structured around equivalent cloud environments and phase-based
            validation evidence.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(19rem,0.8fr)] lg:gap-10">
          <div className="min-w-0 border border-slate-800 bg-slate-900/40 p-4 sm:p-6">
            <Image
              src="/images/projects/multicloud-waf-architecture.png"
              alt="Architecture diagram for the multi-cloud WAF evaluation platform"
              width={1200}
              height={675}
              className="h-auto w-full border border-slate-800"
              priority
            />

            <ol className="mt-6 divide-y divide-slate-800 border-y border-slate-800">
              {engineeringFlow.map((step, index) => (
                <li
                  key={step.label}
                  className="grid gap-2 py-4 sm:grid-cols-[2rem_minmax(0,1fr)] sm:gap-4"
                >
                  <span className="text-sm font-semibold text-cyan-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{step.label}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      {step.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="border border-slate-800 bg-slate-900/40 p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-white">Project record</h3>
            <dl className="mt-6 divide-y divide-slate-800 border-y border-slate-800">
              <div className="py-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Cloud scope
                </dt>
                <dd className="mt-2 text-sm text-slate-200">AWS and Google Cloud</dd>
              </div>
              <div className="py-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Controls
                </dt>
                <dd className="mt-2 text-sm leading-6 text-slate-200">
                  AWS WAF, Google Cloud Armor, IAM, network security, and logging
                </dd>
              </div>
              <div className="py-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Delivery
                </dt>
                <dd className="mt-2 text-sm text-slate-200">Modular Terraform</dd>
              </div>
              <div className="py-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Status
                </dt>
                <dd className="mt-2 text-sm font-semibold text-cyan-100">Validated</dd>
              </div>
            </dl>
            <Link href="/projects/multicloud-waf-platform/" className="mt-6 inline-flex w-full items-center justify-center bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300">
              View Case Study
            </Link>
            <a
              href="https://github.com/nagasesank/multicloud-waf-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 hover:border-cyan-300 hover:text-cyan-100"
            >
              GitHub Repository
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
