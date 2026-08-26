const capabilityMatrix = [
  {
    domain: "Architecture",
    detail: "Cloud security design, control boundaries, and reviewable implementation decisions.",
    practices: ["AWS", "Google Cloud", "Network isolation"],
  },
  {
    domain: "Identity and Access",
    detail: "IAM governance and Zero Trust patterns for accountable access decisions.",
    practices: ["IAM", "Permission boundaries", "Zero Trust"],
  },
  {
    domain: "Infrastructure Delivery",
    detail: "Terraform-managed infrastructure and versioned delivery workflows.",
    practices: ["Terraform", "Modules", "Git workflows"],
  },
  {
    domain: "Detection and Response",
    detail: "Detection requirements and incident response architecture with human review where needed.",
    practices: ["CloudTrail", "EventBridge", "Investigation"],
  },
  {
    domain: "Validation",
    detail: "Control testing, drift checks, controlled failures, and remediation records where supported.",
    practices: ["Validation", "Drift checks", "Remediation"],
  },
  {
    domain: "Engineering Evidence",
    detail: "Architecture, lifecycle, validation, and writing records that make the work reviewable.",
    practices: ["Documentation", "Case studies", "Engineering writing"],
  },
];

export default function CoreSkills() {
  return (
    <section className="border-b border-slate-800 bg-[#091521] py-16 sm:py-20">
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-16">
        <div className="grid gap-8 border-b border-slate-700 pb-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Capability matrix
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Security engineering, expressed as working systems.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            The portfolio is organized around engineering capabilities and the
            evidence used to assess them, rather than a generic technology list.
          </p>
        </div>

        <div className="grid border-l border-t border-slate-700 sm:grid-cols-2 xl:grid-cols-3">
          {capabilityMatrix.map((capability, index) => (
            <article
              key={capability.domain}
              className="border-b border-r border-slate-700 bg-[#0b1725]/70 p-5 sm:p-6"
            >
              <p className="font-mono text-xs text-cyan-200">CAP-{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{capability.domain}</h3>
              <p className="mt-3 leading-7 text-slate-300">{capability.detail}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${capability.domain} practices`}>
                {capability.practices.map((practice) => (
                  <li key={practice} className="border border-slate-600 px-2.5 py-1 text-xs text-slate-300">
                    {practice}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
