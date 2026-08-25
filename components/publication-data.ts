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
    platform: "Medium",
    title: "Automated Threat Containment in AWS: What Building a Cloud SOAR Pipeline Taught Me",
    url: "https://sesanknagamunukutla.medium.com/automated-threat-containment-in-aws-what-building-a-cloud-soar-pipeline-taught-me-06641f5dd434",
  },
  {
    platform: "Medium",
    title: "Just-In-Time Access for EC2 Is an Architectural Decision, Not an Automation Trick",
    url: "https://sesanknagamunukutla.medium.com/just-in-time-access-for-ec2-is-an-architectural-decision-not-an-automation-trick-1ab0fd84f2e4",
  },
  {
    platform: "Medium",
    title: "Why SSH No Longer Fits Zero-Trust EC2 Access in AWS (And What to Use Instead)",
    url: "https://sesanknagamunukutla.medium.com/why-ssh-no-longer-fits-zero-trust-ec2-access-in-aws-4ee9c4b66fe8",
  },
  {
    platform: "Medium",
    title: "Eliminating SSH in AWS: Why Identity-Based Access Beats Network Trust",
    url: "https://sesanknagamunukutla.medium.com/eliminating-ssh-in-aws-why-identity-based-access-beats-network-trust-375c13d8f4f8",
  },
  {
    platform: "Medium",
    title: "Designing IAM Least Privilege for EC2: From Zero Access to Auditable Enforcement",
    url: "https://sesanknagamunukutla.medium.com/designing-iam-least-privilege-for-ec2-from-zero-access-to-auditable-enforcement-e1bd12e55b8c",
  },
  {
    platform: "Medium",
    title: "Securing SSH Access to AWS EC2: From Perimeter Controls to Detection",
    url: "https://sesanknagamunukutla.medium.com/securing-ssh-access-to-aws-ec2-from-perimeter-controls-to-detection-b313e152aa8f",
  },
  {
    platform: "Medium",
    title: "Years in Security Engineering — and I’m Still Learning Every Day",
    url: "https://sesanknagamunukutla.medium.com/years-in-security-engineering-and-im-still-learning-every-day-289f1e74966e",
  },
  {
    platform: "Medium",
    title: "Baseline Linux Server Hardening & Exposure Validation",
    url: "https://sesanknagamunukutla.medium.com/baseline-linux-server-hardening-exposure-validation-e89564b85e17",
  },
  {
    platform: "Medium",
    title: "Filename Leads to Path Traversal",
    url: "https://sesanknagamunukutla.medium.com/filename-leads-to-path-traversal-185e6193daeb",
  },
  {
    platform: "DEV",
    title: "What Building a Zero Trust Serverless Architecture on GCP Taught Me (Including the Mistakes)",
    url: "https://dev.to/sesank_naga_m_01/what-building-a-zero-trust-serverless-architecture-on-gcp-taught-me-including-the-mistakes-224d",
    publishedAt: "2026-05-29",
  },
  {
    platform: "DEV",
    title: "From Compliance to Drift: Building and Breaking ISO 27001 Controls on AWS (Hands-on Evidence)",
    url: "https://dev.to/sesank_naga_m_01/from-compliance-to-drift-building-and-breaking-iso-27001-controls-on-aws-hands-on-evidence-3p7a",
    publishedAt: "2026-04-06",
  },
  {
    platform: "DEV",
    title: "Event-Driven EC2 Isolation in AWS: Building a Minimal Cloud SOAR Without Buying One",
    url: "https://dev.to/sesank_naga_m_01/event-driven-ec2-isolation-in-aws-building-a-minimal-cloud-soar-without-buying-one-32aj",
    publishedAt: "2026-02-13",
  },
  {
    platform: "DEV",
    title: "How to Implement Just-In-Time SSH Access for AWS EC2 (Stop Leaving Port 22 Open!)",
    url: "https://dev.to/sesank_naga_m_01/how-to-implement-just-in-time-ssh-access-for-aws-ec2-stop-leaving-port-22-open-4p8m",
    publishedAt: "2026-02-11",
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
