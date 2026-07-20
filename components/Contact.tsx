export default function Contact() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-5xl px-8 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Contact
        </span>

        <h2 className="mt-4 text-5xl font-bold text-white">
          Let's Build Secure Cloud Solutions Together
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          I'm always interested in discussing Cloud Security, Security
          Architecture, DevSecOps and Infrastructure as Code opportunities.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="nagasesank@gmail.com"
            className="rounded-xl bg-cyan-500 px-6 py-4 font-semibold text-slate-950 hover:bg-cyan-400"
          >
            Email Me
          </a>

          <a
            href="https://github.com/nagasesank"
            target="_blank"
            className="rounded-xl border border-slate-700 px-6 py-4 text-white hover:border-cyan-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/suryasesank/"
            target="_blank"
            className="rounded-xl border border-slate-700 px-6 py-4 text-white hover:border-cyan-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}