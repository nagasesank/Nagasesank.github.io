import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-screen-2xl items-center px-8 py-24 lg:px-16">
      <div className="grid w-full items-center gap-20 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Left Content */}
        <div>
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Cloud Security Engineer
          </span>

          <h1 className="mt-8 max-w-4xl text-6xl font-extrabold leading-[1.05] text-white md:text-7xl xl:text-8xl">
            Building
            <span className="block text-cyan-400">
              Production-Grade
            </span>
            Cloud Security Solutions
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            I design and build enterprise-grade Cloud Security solutions using
            AWS, Terraform, Google Cloud, Infrastructure as Code and DevSecOps
            practices with real implementation, validation, security
            architecture and engineering evidence.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:bg-cyan-400"
            >
              View Projects
            </Link>

            <Link
              href="/blogs"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
            >
              Read Articles
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {[
              "AWS",
              "Terraform",
              "Google Cloud",
              "DevSecOps",
              "Cloud Security",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-10 shadow-2xl backdrop-blur">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Featured Project
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-white">
            Enterprise Multi-Cloud Web Application Firewall Evaluation Platform
          </h2>

          <p className="mt-6 leading-8 text-slate-300">
            A production-grade Terraform platform that evaluates AWS WAF and
            Google Cloud Armor using enterprise architecture, modular
            Infrastructure as Code, validation workflows and engineering
            documentation.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-5">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Clouds
              </p>
              <h3 className="mt-2 font-semibold text-white">AWS + GCP</h3>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-5">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                IaC
              </p>
              <h3 className="mt-2 font-semibold text-white">Terraform</h3>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-5">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Architecture
              </p>
              <h3 className="mt-2 font-semibold text-white">Modular</h3>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-5">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Status
              </p>
              <h3 className="mt-2 font-semibold text-emerald-400">
                Completed
              </h3>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://github.com/nagasesank/multicloud-waf-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition duration-300 hover:bg-cyan-400"
            >
              GitHub
            </a>

            <button className="rounded-lg border border-slate-700 px-5 py-3 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400">
              Hashnode
            </button>

            <button className="rounded-lg border border-slate-700 px-5 py-3 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400">
              Medium
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}