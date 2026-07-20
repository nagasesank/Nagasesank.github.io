export default function About() {
  const highlights = [
    "Cloud Security Engineering",
    "AWS & Google Cloud",
    "Infrastructure as Code",
    "Terraform Automation",
    "Security Architecture",
    "DevSecOps Practices",
  ];

  const stats = [
    {
      value: "10+",
      label: "Years in Cybersecurity",
    },
    {
      value: "Multi",
      label: "Cloud Platforms",
    },
    {
      value: "100%",
      label: "Infrastructure as Code",
    },
    {
      value: "Enterprise",
      label: "Architecture Focus",
    },
  ];

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-screen-2xl px-8 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              About Me
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Cloud Security Engineer Building Secure Enterprise Platforms
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-300">
              I specialize in designing, implementing and validating secure
              cloud environments using AWS, Google Cloud and Terraform. My
              focus is on building production-grade security solutions backed
              by real engineering evidence, automation and modern cloud
              architecture.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Every project is developed using Infrastructure as Code,
              validated in the cloud console, documented with architecture
              diagrams and published as reusable engineering knowledge.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-5 py-4"
                >
                  <span className="text-cyan-400">✓</span>

                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">
            <h3 className="text-2xl font-semibold text-white">
              Experience Highlights
            </h3>

            <div className="mt-8 grid gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
                >
                  <div className="text-4xl font-bold text-cyan-400">
                    {stat.value}
                  </div>

                  <div className="mt-2 text-slate-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}