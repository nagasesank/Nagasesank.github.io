import Link from "next/link";

import { portfolioProjects, type PortfolioProject } from "./project-data";

const projectOrder = [
  "aws-zero-trust-org-lab",
  "multicloud-waf-platform",
  "hipaa-hitrust-healthcare-security",
  "az-01-azure-workload-identity-security",
  "az-02-azure-enterprise-security-architecture",
  "ai-powered-polycloud-incident-response",
];

const platformLabels: Record<string, string> = {
  "aws-zero-trust-org-lab": "AWS",
  "multicloud-waf-platform": "AWS / GCP",
  "hipaa-hitrust-healthcare-security": "AWS / GCP scope",
  "az-01-azure-workload-identity-security": "Azure",
  "az-02-azure-enterprise-security-architecture": "Azure",
  "ai-powered-polycloud-incident-response": "AI / AWS",
};

const projectDescriptions: Record<string, string> = {
  "aws-zero-trust-org-lab":
    "Builds and validates a multi-account AWS landing-zone lab with Organizations, SCPs, IAM controls, CloudTrail, GuardDuty, and Terraform.",
  "multicloud-waf-platform":
    "Deploys equivalent AWS WAF and Google Cloud Armor environments with Terraform for controlled cross-cloud security validation.",
  "hipaa-hitrust-healthcare-security":
    "Implements HIPAA/HITRUST-aligned AWS-first security controls for a synthetic healthcare workload, with Google Cloud control-equivalent scope.",
  "az-01-azure-workload-identity-security":
    "Validates an Azure workload-identity attack path and remediates it with GitHub OIDC federation and least-privilege Azure RBAC.",
  "az-02-azure-enterprise-security-architecture":
    "Assesses Azure governance, identity, private access, logging, and workload controls through controlled remediation and residual-risk review.",
  "ai-powered-polycloud-incident-response":
    "Builds an AWS-first event-driven incident-response architecture; Terraform implementation is in progress and Amazon Bedrock integration remains planned.",
};

const engineeringProjects = projectOrder
  .map((slug) => portfolioProjects.find((project) => project.slug === slug))
  .filter((project): project is PortfolioProject => project !== undefined);

export default function ProjectsGrid() {
  return (
    <section
      id="engineering-projects"
      className="border-b border-slate-800 bg-[#091521] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-16">
        <div className="border-b border-slate-700 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Engineering projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            AWS, GCP, Azure, and AI security engineering
          </h2>
        </div>

        <div className="mt-8 overflow-x-auto border border-slate-700 bg-[#0b1725]">
          <table className="w-full min-w-[1100px] border-collapse text-left">
            <thead className="border-b border-slate-700 bg-[#0d1b2a]">
              <tr>
                <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
                  Platform
                </th>
                <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
                  Project
                </th>
                <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
                  Case Study
                </th>
                <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
                  GitHub Repo
                </th>
                <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
                  What It Does
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {engineeringProjects.map((project) => (
                <tr key={project.slug} className="align-top">
                  <td className="whitespace-nowrap px-5 py-5 font-mono text-sm text-cyan-100">
                    {platformLabels[project.slug] ?? project.platforms.join(" / ")}
                  </td>
                  <td className="px-5 py-5 text-sm font-semibold leading-6 text-white">
                    {project.title}
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 text-sm">
                    <Link
                      href={`/projects/${project.slug}/`}
                      className="font-semibold text-cyan-200 underline decoration-cyan-300/50 underline-offset-4 hover:text-cyan-100"
                    >
                      Case Study
                    </Link>
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 text-sm">
                    {project.repository ? (
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-slate-200 underline decoration-slate-500 underline-offset-4 hover:text-cyan-100"
                      >
                        GitHub Repo
                      </a>
                    ) : (
                      <span className="text-slate-400">Repository pending</span>
                    )}
                  </td>
                  <td className="max-w-xl px-5 py-5 text-sm leading-7 text-slate-300">
                    {projectDescriptions[project.slug] ?? project.summary}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
