export type PortfolioProject = {
  title: string;
  category: string;
  objective: string;
  platforms: string[];
  controls: string[];
  delivery: string;
  evidence: string;
  status: "Validated" | "In Progress" | "Active Engineering";
  repository: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Enterprise Multi-Cloud WAF Evaluation Platform",
    category: "Web application protection",
    objective:
      "Compare equivalent AWS WAF and Google Cloud Armor deployments through reusable Terraform.",
    platforms: ["AWS", "Google Cloud"],
    controls: ["AWS WAF", "Cloud Armor", "IAM", "Network security"],
    delivery: "Modular Terraform with environment configuration",
    evidence: "Deployment, validation, and lifecycle documentation",
    status: "Validated",
    repository: "https://github.com/nagasesank/multicloud-waf-platform",
  },
  {
    title: "AI-Powered Polycloud Security Incident Response Platform",
    category: "Incident response automation",
    objective:
      "Prepare an AWS-first, AI-assisted incident response architecture for reviewable Terraform delivery.",
    platforms: ["AWS"],
    controls: ["CloudTrail", "EventBridge", "IAM", "Human review"],
    delivery: "Terraform-first repository and reusable module design",
    evidence: "Phase documentation and evidence mapping",
    status: "In Progress",
    repository:
      "https://github.com/nagasesank/AI-Powered-Polycloud-Security-Incident-Response-Platform",
  },
  {
    title: "AWS Multi-Account Zero-Trust Architecture Lab",
    category: "Cloud governance",
    objective:
      "Design and validate a secure multi-account AWS landing zone with preventative and detective controls.",
    platforms: ["AWS", "AWS Organizations"],
    controls: ["SCPs", "CloudTrail", "GuardDuty", "Permission boundaries"],
    delivery: "Terraform-managed organizations and policies",
    evidence: "AWS CLI tests, CloudTrail logs, and drift checks",
    status: "Active Engineering",
    repository: "https://github.com/nagasesank/aws-zero-trust-org-lab",
  },
  {
    title: "HIPAA/HITRUST-Aligned Healthcare Security Engineering Platform",
    category: "Healthcare security engineering",
    objective:
      "Implement security controls for a synthetic healthcare workload aligned to selected HIPAA and HITRUST control objectives.",
    platforms: ["AWS", "Google Cloud"],
    controls: ["Network segmentation", "Least privilege", "VPC Flow Logs", "CloudWatch"],
    delivery: "Terraform with AWS CLI and console validation",
    evidence: "Validation, remediation, and teardown records",
    status: "In Progress",
    repository:
      "https://github.com/nagasesank/hipaa-hitrust-healthcare-security-project",
  },
];
