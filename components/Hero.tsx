import Image from "next/image";
import Link from "next/link";

const credentials = [
  "10+ Years Cybersecurity",
  "AWS Certified Solutions Architect - Associate",
  "ISO 27001 Lead Auditor",
  "CEH",
  "AWS Well-Architected Proficient",
];

const capabilitySignals = [
  ["Architecture", "Security architecture and governance"],
  ["Infrastructure", "Terraform and Infrastructure as Code"],
  ["Identity", "IAM and Zero Trust control design"],
  ["Response", "Detection and incident response engineering"],
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800 pt-28">
      <div className="absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(rgba(103,232,249,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.05)_1px,transparent_1px)] [background-size:3rem_3rem]" />
      <div className="mx-auto max-w-screen-2xl px-5 pb-14 sm:px-8 lg:px-16 lg:pb-20">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(19rem,0.75fr)] lg:gap-16">
          <div className="pt-4">
            <p className="inline-flex border-l-2 border-cyan-300 pl-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
              Cloud Security Engineering
            </p>
            <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Surya Naga Sesank M
            </h1>
            <p className="mt-5 text-xl font-medium text-cyan-100 sm:text-2xl">
              Security Architecture <span aria-hidden="true">/</span> DevSecOps
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Senior cloud security engineering with 10+ years in cybersecurity,
              across AWS and Google Cloud. Focused on Terraform, IAM, Zero Trust,
              detection, incident response, security automation, and governance.
            </p>
            <p className="mt-5 font-mono text-sm leading-7 text-slate-400">
              AWS <span aria-hidden="true">/</span> Google Cloud <span aria-hidden="true">/</span> Terraform
              <br />
              IAM <span aria-hidden="true">/</span> Zero Trust <span aria-hidden="true">/</span> Incident Response
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/#engineering-projects" className="inline-flex min-h-11 items-center justify-center bg-cyan-300 px-5 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200">
                View Project Records
              </Link>
              <a href="https://github.com/nagasesank" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center border border-slate-600 px-5 text-sm font-semibold text-slate-100 transition-colors hover:border-cyan-300 hover:text-cyan-100">
                GitHub Profile
              </a>
            </div>
          </div>

          <aside aria-labelledby="identity-panel-heading" className="border border-slate-700 bg-[#0b1725]/90 p-5 shadow-[0_1.5rem_4rem_rgba(0,0,0,0.2)] sm:p-7">
            <div className="flex items-center justify-between gap-4 border-b border-slate-700 pb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Professional identity</p>
              <span className="border border-cyan-300/30 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-cyan-100">Profile</span>
            </div>
            <div className="relative mt-5 aspect-[4/5] overflow-hidden border border-slate-700 bg-slate-900">
              <Image
                src="/images/surya-profile.jpg"
                alt="Surya Naga Sesank M"
                fill
                priority
                sizes="(max-width: 1023px) calc(100vw - 4rem), 32vw"
                className="object-cover object-center"
              />
            </div>
            <h2 id="identity-panel-heading" className="mt-5 text-xl font-semibold text-white">Security Architecture Console</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">Cloud security architecture, DevSecOps, and evidence-oriented engineering.</p>
          </aside>
        </div>

        <ul aria-label="Professional credentials" className="mt-12 grid border-l border-t border-slate-700 bg-[#0b1725]/80 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5">
          {credentials.map((credential, index) => <li key={credential} className="border-b border-r border-slate-700 p-4 lg:border-b-0"><p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-500">Credential {String(index + 1).padStart(2, "0")}</p><p className="mt-3 text-sm font-semibold leading-6 text-slate-100">{credential}</p></li>)}
        </ul>

        <div id="capabilities" aria-label="Core cloud security capabilities" className="mt-5 grid border border-slate-700 bg-[#0b1725]/80 sm:grid-cols-2 lg:grid-cols-4">
          {capabilitySignals.map(([capability, description], index) => <div key={capability} className="border-b border-slate-700 p-5 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"><p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-500">0{index + 1}</p><p className="mt-3 text-sm font-semibold text-white">{capability}</p><p className="mt-2 text-sm leading-6 text-slate-400">{description}</p></div>)}
        </div>
      </div>
    </section>
  );
}
