import Link from "next/link";

const projects = [
  {
    title: "Enterprise Multi-Cloud WAF Evaluation Platform",
    description:
      "Production-grade Terraform platform comparing AWS WAF and Google Cloud Armor with enterprise architecture and validation.",
    technologies: ["AWS", "Google Cloud", "Terraform", "WAF"],
    status: "Completed",
    link: "/projects",
  },
  {
    title: "AI-Powered AWS Security Incident Response",
    description:
      "AI-assisted security incident triage and response using AWS serverless services and Amazon Bedrock.",
    technologies: ["AWS", "Lambda", "Bedrock", "Step Functions"],
    status: "In Progress",
    link: "#",
  },
  {
    title: "Just-In-Time Access for EC2",
    description:
      "Temporary privileged access solution using IAM and automation following least privilege principles.",
    technologies: ["AWS IAM", "Lambda", "Terraform"],
    status: "Planned",
    link: "#",
  },
  {
    title: "Identity Threat Detection & Response",
    description:
      "Detecting and responding to identity-based attacks across enterprise cloud environments.",
    technologies: ["IAM", "CloudTrail", "Security Hub"],
    status: "Planned",
    link: "#",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-screen-2xl px-8 lg:px-16">
        <div className="mb-16">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Projects
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Engineering Portfolio
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            A growing collection of production-focused cloud security projects
            built using real cloud platforms, Infrastructure as Code and
            enterprise security practices.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    project.status === "Completed"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : project.status === "In Progress"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-slate-700 text-slate-300"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="mt-5 leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href={project.link}
                className="mt-8 inline-flex items-center font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                View Project →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}