const capabilityStack = [
  { domain: "Cloud Platforms", detail: "Cloud security engineering across AWS and Google Cloud.", practices: ["AWS", "Google Cloud"] },
  { domain: "Infrastructure Engineering", detail: "Reviewable infrastructure delivery and automation practices.", practices: ["Terraform", "Infrastructure as Code", "Git workflows"] },
  { domain: "Identity & Zero Trust", detail: "Identity-centered access control and accountable cloud boundaries.", practices: ["IAM", "Permission boundaries", "SCPs", "Zero Trust"] },
  { domain: "Detection & Incident Response", detail: "Detection requirements and response architecture with human review where needed.", practices: ["CloudTrail", "GuardDuty", "EventBridge", "Investigation"] },
  { domain: "Application & Edge Security", detail: "Layer 7 protection and network security controls across cloud environments.", practices: ["AWS WAF", "Google Cloud Armor", "Network security"] },
  { domain: "Security Architecture & Governance", detail: "Control boundaries, multi-account architecture, and framework-aware engineering context.", practices: ["Governance controls", "NIST", "ISO 27001", "HIPAA/HITRUST-aligned engineering", "PCI DSS", "SOC 2"] },
  { domain: "Engineering Practice", detail: "Evidence-oriented delivery that distinguishes implementation, validation, and current state.", practices: ["DevSecOps", "Automation", "Controlled validation", "Remediation", "Revalidation", "Documentation"] },
];

export default function CoreSkills() {
  return (
    <section id="capability-stack" aria-labelledby="capability-stack-heading" className="border-b border-slate-800 bg-[#091521] py-16 sm:py-20">
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-16">
        <div className="grid gap-8 border-b border-slate-700 pb-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Core security capabilities</p>
            <h2 id="capability-stack-heading" className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Cloud security capability stack.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">A senior engineering stack organized around architecture, control implementation, and evidence-oriented practice rather than generic technology keywords.</p>
        </div>

        <div className="mt-8 grid border-l border-t border-slate-700 sm:grid-cols-2 xl:grid-cols-3">
          {capabilityStack.map((capability, index) => (
            <article key={capability.domain} className="border-b border-r border-slate-700 bg-[#0b1725]/70 p-5 sm:p-6">
              <p className="font-mono text-xs text-cyan-200">STACK-{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{capability.domain}</h3>
              <p className="mt-3 leading-7 text-slate-300">{capability.detail}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${capability.domain} practices`}>
                {capability.practices.map((practice) => <li key={practice} className="border border-slate-600 px-2.5 py-1 text-xs leading-5 text-slate-300">{practice}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
