export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  objective: string;
  platforms: string[];
  controls: string[];
  delivery: string;
  evidence: string;
  status: "Validated" | "In Progress" | "Active Engineering";
  repository: string;
  summary: string;
  architecture: string;
  implementation: string;
  validation: string;
  limitations: string;
  lifecycle: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "multicloud-waf-platform",
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
    summary: "A Terraform-led comparison of AWS WAF and Google Cloud Armor using equivalent cloud environments.",
    architecture: "Equivalent AWS and Google Cloud environments combine networking, compute, load balancing, identity, logging, and Layer 7 protection.",
    implementation: "Reusable Terraform modules and environment configuration support a consistent infrastructure lifecycle.",
    validation: "Terraform checks, console verification, browser testing, security validation, and phase-based evidence collection.",
    limitations: "The repository documents a comparison platform; it does not present a production service offering.",
    lifecycle: ["Design", "Implement", "Deploy", "Validate", "Document evidence", "Destroy"],
  },
  {
    slug: "ai-powered-polycloud-incident-response",
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
    summary: "An AWS-first incident response architecture moving from repository design into Terraform implementation.",
    architecture: "An event-driven, serverless-first architecture designed to remain vendor-neutral as future integrations are considered.",
    implementation: "Terraform-first repository design with reusable modules; the current implementation focus is IAM.",
    validation: "Phase documentation, detection requirements, and evidence mapping are maintained as implementation progresses.",
    limitations: "Terraform implementation is in progress; Amazon Bedrock integration and attack simulation are planned rather than represented as complete.",
    lifecycle: ["Define", "Model threats", "Design", "Implement", "Document evidence"],
  },
  {
    slug: "aws-zero-trust-org-lab",
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
    summary: "A multi-account AWS landing-zone lab focused on governance, isolation, audit logging, and validation.",
    architecture: "AWS Organizations separates security, log archive, production, and development accounts to limit blast radius.",
    implementation: "Terraform manages Organizations, SCPs, CloudTrail, IAM, and GuardDuty delegation.",
    validation: "Terraform outputs, console verification, AWS CLI attack simulations, CloudTrail evidence, and drift checks.",
    limitations: "The repository describes a controlled engineering lab, not a production landing zone.",
    lifecycle: ["Design", "Implement", "Deploy", "Validate", "Test controls", "Destroy", "Document evidence"],
  },
  {
    slug: "hipaa-hitrust-healthcare-security",
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
    summary: "In-progress HIPAA/HITRUST-aligned security engineering for a synthetic healthcare workload.",
    architecture: "AWS is the primary implementation platform; Google Cloud is scoped for control-equivalent objectives.",
    implementation: "Terraform-managed network segmentation, security groups, VPC Flow Logs, CloudWatch logging, and least-privilege IAM work.",
    validation: "AWS CLI and console validation with controlled failures, investigation, remediation, revalidation, teardown, and evidence records.",
    limitations: "This is a technical engineering exercise using synthetic healthcare data. It is not a compliance claim, certification, attestation, or production healthcare system.",
    lifecycle: ["Design", "Implement", "Deploy", "Validate", "Inject controlled failure", "Investigate", "Remediate", "Revalidate", "Destroy", "Document evidence"],
  },
];
