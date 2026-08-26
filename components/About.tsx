const engineeringFocus = [
  "Cloud Security Architecture",
  "AWS and Google Cloud",
  "Terraform and Infrastructure as Code",
  "IAM and Zero Trust",
  "Detection and Incident Response",
  "DevSecOps and Security Automation",
];

const experienceAreas = [
  {
    label: "Experience",
    value: "10+ years in cybersecurity",
  },
  {
    label: "Cloud",
    value: "AWS and Google Cloud",
  },
  {
    label: "Engineering",
    value: "Terraform, DevSecOps, and automation",
  },
  {
    label: "Security domains",
    value: "IAM, Zero Trust, detection, and governance",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-slate-950 py-20 sm:py-24">
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              About
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Cloud Security Engineering Across Architecture, Automation, and
              Assurance
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              With 10+ years in cybersecurity, I focus on cloud security
              engineering and architecture across AWS and Google Cloud. My work
              brings together Terraform, IAM and Zero Trust, detection and
              incident response, DevSecOps, and security automation.
            </p>
            <p className="mt-5 max-w-3xl leading-7 text-slate-300">
              The portfolio emphasizes reviewable engineering evidence:
              infrastructure definitions, validation steps, investigations,
              remediation, and documented outcomes. Framework familiarity
              informs work across NIST, ISO 27001, HIPAA/HITRUST-aligned
              engineering, PCI DSS, and SOC 2 without representing compliance
              certification or attestation.
            </p>

            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {engineeringFocus.map((item) => (
                <li
                  key={item}
                  className="border border-slate-800 bg-slate-900/40 px-4 py-3 text-sm text-slate-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="border border-slate-800 bg-slate-900/40 p-5 sm:p-7">
            <h3 className="text-xl font-semibold text-white">Engineering profile</h3>
            <dl className="mt-6 divide-y divide-slate-800 border-y border-slate-800">
              {experienceAreas.map((area) => (
                <div key={area.label} className="py-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    {area.label}
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-200">
                    {area.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
