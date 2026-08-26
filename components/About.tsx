const engineeringMethod = [
  ["01", "Model", "Define the control objective, cloud boundary, and assumptions before implementation."],
  ["02", "Implement", "Use infrastructure-as-code and versioned artifacts where the project supports them."],
  ["03", "Validate", "Test controls, record results, and distinguish confirmed evidence from planned work."],
  ["04", "Explain", "Document architecture, limitations, and remediation paths so the work can be reviewed."],
];

const seniorCapabilities = [
  "AWS and Google Cloud",
  "Terraform / Infrastructure as Code",
  "IAM / Zero Trust",
  "Detection / Incident Response",
  "DevSecOps / Security Automation",
  "Governance / Security Assurance",
];

export default function About() {
  return (
    <section id="about" className="border-b border-slate-800 bg-[#091521] py-16 sm:py-20">
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Engineering evidence</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Senior cloud security engineering, designed to be reviewed.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">With 10+ years in cybersecurity, the work centers on cloud security architecture, infrastructure automation, identity, governance, detection, and incident-response engineering. Supporting records emphasize practical controls, validation, and clear limits.</p>
            <div className="mt-6 border-y border-slate-700 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Engineering scope</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {seniorCapabilities.map((capability) => (
                  <li key={capability} className="border-l border-cyan-300/70 pl-3 text-sm leading-6 text-slate-200">
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-5 max-w-xl leading-7 text-slate-400">Framework familiarity includes NIST, ISO 27001, HIPAA/HITRUST-aligned engineering, PCI DSS, and SOC 2. This familiarity describes engineering context only and does not imply certification, compliance, or attestation.</p>
          </div>

          <div className="border border-slate-700 bg-[#0b1725]">
            <div className="border-b border-slate-700 p-5 sm:p-6">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-400">Evidence-oriented method</p>
            </div>
            <ol className="divide-y divide-slate-700">
              {engineeringMethod.map(([number, title, description]) => (
                <li key={number} className="grid gap-3 p-5 sm:grid-cols-[3.5rem_1fr] sm:p-6">
                  <p className="font-mono text-sm text-cyan-200">{number}</p>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-2 leading-7 text-slate-300">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
