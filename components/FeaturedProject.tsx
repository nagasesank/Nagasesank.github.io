import Image from "next/image";
import Link from "next/link";

export default function FeaturedProject() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-screen-2xl px-8 lg:px-16">
        <div className="mb-14">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Featured Project
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Enterprise Multi-Cloud Web Application Firewall Evaluation Platform
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            A production-grade Terraform platform designed to evaluate AWS WAF
            and Google Cloud Armor using enterprise architecture, modular
            Infrastructure as Code, validation workflows, documentation and
            real engineering evidence.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Left */}
          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-10">
            <div className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-900">
              <div className="text-center">
                <Image
                    src="/images/projects/multicloud-waf-architecture.png"
                    alt="Enterprise Multi-Cloud WAF Architecture"
                    width={1200}
                    height={675}
                    className="rounded-2xl object-cover"
                    />
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="rounded-xl border border-slate-800 p-5">
                <h3 className="font-semibold text-white">
                  Problem Statement
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Evaluate enterprise Web Application Firewall capabilities
                  across AWS and Google Cloud using a reusable Infrastructure
                  as Code platform.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 p-5">
                <h3 className="font-semibold text-white">
                  Architecture
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Modular Terraform architecture with reusable networking,
                  security, compute and WAF modules.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 p-5">
                <h3 className="font-semibold text-white">
                  Validation
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Browser validation, Terraform outputs, console verification
                  and engineering evidence collection.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 p-5">
                <h3 className="font-semibold text-white">
                  Documentation
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Enterprise README, SECURITY.md, architecture diagrams and
                  implementation documentation.
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8">
              <h3 className="text-xl font-semibold text-white">
                Technology Stack
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Terraform",
                  "AWS",
                  "Google Cloud",
                  "AWS WAF",
                  "Cloud Armor",
                  "GitHub",
                  "IAM",
                  "Networking",
                  "Nginx",
                  "Linux",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8">
              <h3 className="text-xl font-semibold text-white">
                Project Highlights
              </h3>

              <div className="mt-6 space-y-5">
                <div className="flex justify-between">
                  <span className="text-slate-400">Cloud Providers</span>
                  <span className="font-semibold text-white">
                    AWS + GCP
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">Infrastructure</span>
                  <span className="font-semibold text-white">
                    Terraform
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">Status</span>
                  <span className="font-semibold text-emerald-400">
                    Completed
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">Documentation</span>
                  <span className="font-semibold text-white">
                    Complete
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8">
              <div className="flex flex-col gap-4">
                <a
                  href="https://github.com/nagasesank/multicloud-waf-platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-cyan-500 px-6 py-4 text-center font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  View GitHub Repository
                </a>

                <button className="rounded-xl border border-slate-700 px-6 py-4 text-white transition hover:border-cyan-400 hover:text-cyan-400">
                  Read Hashnode Article
                </button>

                <button className="rounded-xl border border-slate-700 px-6 py-4 text-white transition hover:border-cyan-400 hover:text-cyan-400">
                  Read Medium Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}