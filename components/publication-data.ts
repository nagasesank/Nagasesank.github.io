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
    platform: "Hashnode",
    title: "Enterprise Multi-Cloud Web Application Firewall Evaluation Platform",
    url: "https://gcppro.hashnode.dev/enterprise-multi-cloud-web-application-firewall-evaluation-platform",
    projectSlug: "multicloud-waf-platform",
    publishedAt: "2026-07-21",
  },
  {
    platform: "Hashnode",
    title:
      "Building a Zero Trust Serverless Security Architecture on GCP using Terraform, Cloud Run, Cloud Armor, and Global Load Balancing",
    url: "https://gcppro.hashnode.dev/building-a-zero-trust-serverless-security-architecture-on-gcp-using-terraform-cloud-run-cloud-armor-and-global-load-balancing",
    publishedAt: "2026-05-29",
  },
  {
    platform: "Hashnode",
    title:
      "Building a Multi-Account Zero-Trust Governance Architecture in AWS Using Terraform, SCPs, and CloudTrail",
    url: "https://fridaysecurity.hashnode.dev/building-a-multi-account-zero-trust-governance-architecture-in-aws-using-terraform-scps-and-cloudtrail",
    projectSlug: "aws-zero-trust-org-lab",
    publishedAt: "2026-05-10",
  },
  {
    platform: "Hashnode",
    title:
      "🔐Project 7: Automated Threat Containment in AWS – Building a Cloud-Native SOAR Workflow",
    url: "https://fridaysecurity.hashnode.dev/project-7-automated-threat-containment-in-aws-building-a-cloud-native-soar-workflow",
    series: "Friday Security Projects",
    part: 7,
    publishedAt: "2026-02-13",
  },
  {
    platform: "Hashnode",
    title: "🔐 Project 6: Implementing Just-In-Time (JIT) SSH Access for EC2 on AWS",
    url: "https://fridaysecurity.hashnode.dev/project-6-implementing-just-in-time-jit-ssh-access-for-ec2-on-aws",
    series: "Friday Security Projects",
    part: 6,
    publishedAt: "2026-02-10",
  },
  {
    platform: "Hashnode",
    title: "🔐 Project 5: Zero-Trust EC2 Access in AWS Using IAM, SSM, CloudTrail, and GuardDuty",
    url: "https://fridaysecurity.hashnode.dev/project-5-zero-trust-ec2-access-in-aws-using-iam-ssm-cloudtrail-and-guardduty",
    series: "Friday Security Projects",
    part: 5,
    publishedAt: "2026-02-01",
  },
  {
    platform: "Hashnode",
    title:
      "🔐 Project 4: Eliminating SSH with AWS Systems Manager — IAM-Controlled, Auditable EC2 Access",
    url: "https://fridaysecurity.hashnode.dev/project-4-eliminating-ssh-with-aws-systems-manager-iam-controlled-auditable-ec2-access",
    series: "Friday Security Projects",
    part: 4,
    publishedAt: "2026-01-24",
  },
  {
    platform: "Hashnode",
    title: "🔐 Project 3: Implementing and Testing Security Controls in a Real Cloud Environment",
    url: "https://fridaysecurity.hashnode.dev/project-3-implementing-and-testing-security-controls-in-a-real-cloud-environment",
    series: "Friday Security Projects",
    part: 3,
    publishedAt: "2026-01-18",
  },
  {
    platform: "Hashnode",
    title: "🔐 Project 2: Security Design Trade-offs in AWS (Where Convenience Starts to Win)",
    url: "https://fridaysecurity.hashnode.dev/project-2-security-design-trade-offs-in-aws-where-convenience-starts-to-win",
    series: "Friday Security Projects",
    part: 2,
    publishedAt: "2026-01-14",
  },
  {
    platform: "Hashnode",
    title: "🔐 Project 1: Building a Secure Cloud Baseline in AWS (Before Things Break)",
    url: "https://fridaysecurity.hashnode.dev/project-1-building-a-secure-cloud-baseline-in-aws-before-things-break",
    series: "Friday Security Projects",
    part: 1,
    publishedAt: "2026-01-10",
  },
  {
    platform: "LinkedIn",
    title: "Building an AI-Assisted AWS Security Incident Triage Pipeline",
    url: "https://www.linkedin.com/pulse/building-ai-assisted-aws-security-incident-triage-pipeline-m-haiuc/",
  },
  {
    platform: "LinkedIn",
    title: "Building a Zero Trust Serverless Security Architecture on GCP",
    url: "https://www.linkedin.com/pulse/building-zero-trust-serverless-security-architecture-gcp-m-dskrc/",
  },
  {
    platform: "LinkedIn",
    title:
      "Most People Study Cloud Wrong — Lessons from Google Cloud Architect Training (and Why AWS vs GCP Thinking Is Broken)",
    url: "https://www.linkedin.com/pulse/most-people-study-cloud-wrong-lessons-from-google-architect-m-zinbc/",
  },
  {
    platform: "LinkedIn",
    title: "From ISO 27001 Theory to Real-Time Compliance: A Hands-on AWS Implementation",
    url: "https://www.linkedin.com/pulse/from-iso-27001-theory-real-time-compliance-hands-on-aws-m-o4wcc/",
  },
  {
    platform: "LinkedIn",
    title: "🚨 Common Mistakes in Cloud SOAR Implementations (That Most Engineers Overlook)",
    url: "https://www.linkedin.com/pulse/common-mistakes-cloud-soar-implementations-most-engineers-m-ldqvc/",
  },
  {
    platform: "LinkedIn",
    title: "Akamai WAF Isn’t About Better Security — It’s About Not Paying for Attacks",
    url: "https://www.linkedin.com/pulse/akamai-waf-isnt-better-security-its-paying-attacks-m-i8dpc/",
  },
  {
    platform: "LinkedIn",
    title: "I Stopped Using SSH on EC2 — Here’s Why",
    url: "https://www.linkedin.com/pulse/i-stopped-using-ssh-ec2-heres-why-sree-surya-naga-sesank-m-661qc/",
  },
  {
    platform: "LinkedIn",
    title: "Cloud Security Isn’t About Firewalls Anymore",
    url: "https://www.linkedin.com/pulse/cloud-security-isnt-firewalls-anymore-sree-surya-naga-sesank-m-lflac/",
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
