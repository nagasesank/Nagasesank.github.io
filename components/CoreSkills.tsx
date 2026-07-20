export default function CoreSkills() {
  const skills = [
    {
      title: "Cloud Security",
      description:
        "Designing secure cloud environments with enterprise security best practices.",
      technologies: ["AWS", "Google Cloud", "IAM", "WAF"],
    },
    {
      title: "Infrastructure as Code",
      description:
        "Building modular, reusable and production-ready infrastructure using Terraform.",
      technologies: ["Terraform", "Git", "Automation", "Modules"],
    },
    {
      title: "Security Engineering",
      description:
        "Implementing secure architectures, monitoring and engineering validation.",
      technologies: [
        "Security Architecture",
        "Cloud Security",
        "Linux",
        "Hardening",
      ],
    },
    {
      title: "DevSecOps",
      description:
        "Embedding security into deployment pipelines and engineering workflows.",
      technologies: [
        "CI/CD",
        "GitHub",
        "DevSecOps",
        "Automation",
      ],
    },
    {
      title: "Networking",
      description:
        "Enterprise networking for secure cloud deployments across multiple providers.",
      technologies: [
        "VPC",
        "Subnets",
        "Routing",
        "Load Balancer",
      ],
    },
    {
      title: "Documentation",
      description:
        "Creating engineering documentation, architecture diagrams and validation evidence.",
      technologies: [
        "Architecture",
        "Markdown",
        "Evidence",
        "README",
      ],
    },
  ];

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-screen-2xl px-8 lg:px-16">
        <div className="mb-16">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Core Expertise
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Building Secure Cloud Platforms
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            My expertise spans cloud security, Infrastructure as Code,
            security engineering, automation and enterprise architecture with
            hands-on implementation experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400"
            >
              <h3 className="text-2xl font-semibold text-white">
                {skill.title}
              </h3>

              <p className="mt-5 leading-7 text-slate-400">
                {skill.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}