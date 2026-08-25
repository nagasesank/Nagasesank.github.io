export type Publication = {
  platform: "Hashnode" | "Medium" | "DEV" | "LinkedIn";
  title: string;
  url: string;
  projectSlug?: string;
  series?: string;
  part?: number;
  publishedAt?: string;
};

export const publications: Publication[] = [
  {
    platform: "Medium",
    title: "Designing a Zero-Trust AWS Governance Architecture Using AWS Organisations, SCPs, and CloudTrail",
    url: "https://sesanknagamunukutla.medium.com/designing-a-zero-trust-aws-governance-architecture-using-aws-organisations-scps-and-cloudtrail-afbbd470ab34",
    projectSlug: "aws-zero-trust-org-lab",
  },
  {
    platform: "DEV",
    title: "Built a Multi-Account Zero-Trust Governance Architecture in AWS using Terraform, AWS Organisations, SCPs, and CloudTrail.",
    url: "https://dev.to/sesank_naga_m_01/built-a-multi-account-zero-trust-governance-architecture-in-aws-using-terraform-aws-organisations-57go",
    projectSlug: "aws-zero-trust-org-lab",
  },
  {
    platform: "DEV",
    title: "Enterprise Multi-Cloud WAF Evaluation with Terraform",
    url: "https://dev.to/sesank_naga_m_01/enterprise-multi-cloud-waf-evaluation-with-terraform-43hd",
    projectSlug: "multicloud-waf-platform",
    publishedAt: "2026-07-21",
  },
];
