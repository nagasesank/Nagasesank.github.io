export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  domain: "AWS" | "Azure" | "AI";
  objective: string;
  platforms: string[];
  controls: string[];
  delivery: string;
  evidence: string;
  status: "Validated" | "In Progress" | "Active Engineering";
  repository?: string;
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
    domain: "AWS",
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
    domain: "AI",
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
    domain: "AWS",
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
    domain: "AWS",
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
  {
    slug: "az-01-azure-workload-identity-security",
    title: "AZ-01 — Azure Workload Identity Attack & Secretless Federation Lab",
    category: "Cloud identity security",
    domain: "Azure",
    objective: "Validate a bounded workload identity attack path and remediate credential and authorization risks using secretless federation and reduced Azure RBAC scope.",
    platforms: ["Microsoft Azure", "Microsoft Entra ID", "GitHub Actions"],
    controls: ["Microsoft Entra ID", "Azure RBAC", "GitHub OIDC", "Workload Identity Federation", "Terraform", "Least privilege"],
    delivery: "Terraform, controlled Azure CLI validation, and GitHub Actions static security CI",
    evidence: "Sanitized baseline, attack, federation, post-remediation, teardown, and CI validation records",
    status: "Validated",
    repository: "https://github.com/nagasesank/AZ-01-azure-workload-identity-security-lab",
    summary: "A validated Azure lab tracing a deliberately vulnerable long-lived workload credential and excessive RBAC through controlled attack validation, secretless federation remediation, revalidation, and verified teardown.",
    architecture: "A Microsoft Entra workload identity accesses synthetic Azure Storage targets, with a separate project-owned negative control. A later validation deployment uses GitHub OIDC federation and container-scoped Storage Blob Data Reader access.",
    implementation: "Terraform defines the vulnerable identity baseline and later GitHub OIDC + Microsoft Entra workload identity federation remediation. Least-privilege Azure RBAC reduction limits the intended read path to one synthetic-data container. DevSecOps hardening adds Terraform static validation, IaC scanning, and current-content secret scanning without Azure authentication.",
    validation: "Bounded Azure RBAC attack-path tests use synthetic data and project-owned targets only. Positive post-remediation tests validate OIDC authentication and intended blob reads; negative tests record explicit denials for tested management-plane actions, writes, negative-control access, and account-level container listing. Terraform destroy and bounded cleanup verification document teardown; controlled CI failure validation checks the formatting gate.",
    limitations: "Results apply only to tested actions and known project-owned targets. Baseline and remediated deployments used separate validation windows; the retired credential was not replayed in place. The Azure environment is destroyed. This lab does not establish universal least privilege, penetration-test coverage, production suitability, or broader Azure security assurance.",
    lifecycle: ["Design", "Deploy", "Validate vulnerable baseline", "Controlled attack validation", "Capture evidence", "Remediate", "Revalidate", "Capture remediation evidence", "Destroy", "Verify cleanup", "Harden CI"],
  },
  {
    slug: "az-02-azure-enterprise-security-architecture",
    title: "AZ-02 — Azure Cloud Security Architecture Review & Controlled Remediation Lab",
    category: "Azure security architecture",
    domain: "Azure",
    objective: "Assess an intentionally imperfect Azure environment, identify architecture and control gaps, implement selected remediations, validate outcomes, reassess residual risk, and complete controlled teardown.",
    platforms: ["Microsoft Azure", "Microsoft Entra ID"],
    controls: ["Azure Policy", "Azure RBAC", "Managed Identity", "Azure Firewall", "Private Endpoint", "Private DNS", "Azure Key Vault", "Azure Storage", "Log Analytics", "Microsoft Defender for Cloud", "Container Apps Authentication"],
    delivery: "Evidence-driven assessment, controlled remediation, validation, residual-risk analysis, and documented teardown",
    evidence: "Architecture review, risk register, controlled validation, remediation evidence, residual-risk assessment, cleanup verification, MCSB traceability, and multicloud architectural mapping",
    status: "Validated",
    repository: "https://github.com/nagasesank/AZ-02-azure-enterprise-security-architecture",
    summary: "A bounded Azure cloud-security architecture assessment and controlled remediation lab covering governance, identity, network and private access, logging, workload authentication, residual risk, secure teardown, MCSB traceability, and multicloud architecture mapping.",
    architecture: "Hub/spoke Azure lab with Azure Firewall, Container Apps, Storage, Key Vault, Azure Policy, Microsoft Entra identity, Azure RBAC, Private Endpoint/Private DNS, Log Analytics, and Defender for Cloud posture capabilities.",
    implementation: "Selected remediations included resource-group Azure Policy guardrails, managed-identity privilege reduction, Storage and Key Vault private access, Key Vault audit logging, workload authentication, and documented network segmentation/inspection configuration.",
    validation: "Evidence included controlled policy denial, authenticated/unauthenticated access checks, private-path reachability, audit-log queries, current-state revalidation, residual-risk reassessment, and scoped teardown verification.",
    limitations: "Runtime Azure Firewall traversal and effective packet-path behavior were not proven. R-003 remains Open with residual risk Not assessed; R-010 remains Open at 9 — Medium. No successful Key Vault secret retrieval or Storage Blob data operation was proven; Storage private endpoint coverage was Blob only. Inherited permissions were not exhaustively assessed, granular application authorization was not implemented, and foundational CSPM did not represent full Defender workload protection. Project completion does not imply production readiness or compliance.",
    lifecycle: ["Assessment", "Architecture Review", "Risk Identification", "Control Gap Analysis", "Target-State Design", "Implement", "Validate", "Controlled Failure", "Investigate", "Remediate", "Revalidate", "Residual Risk", "Roadmap", "Cleanup", "DevSecOps Design", "MCSB Mapping", "Multicloud Mapping", "Closeout"],
  },
];
