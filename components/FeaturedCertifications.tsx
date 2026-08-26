"use client";

import Image from "next/image";
import { ShieldCheck } from "lucide-react";

const featuredCertifications = [
  {
    title: "ISO 27001 Lead Auditor",
    image:
      "/certifications/certificates/iso-27001-lead-auditor-certificate.jpg",
    type: "Lead Auditor",
    featured: true,
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    image:
      "/certifications/badges/aws-certified-solutions-architect-associate-badge.png",
    type: "AWS Certification",
  },
  {
    title: "EC-Council Certified Ethical Hacker (CEH)",
    image: "/certifications/badges/ec-council-ceh-certified-badge.png",
    type: "Cybersecurity",
  },
  {
    title: "AWS Well-Architected Proficient",
    image: "/certifications/badges/aws-well-architected-proficient.png",
    type: "AWS Well-Architected",
  },
];

export default function FeaturedCertifications() {
  return (
    <section className="mt-24">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 border-l-2 border-cyan-300 pl-3 text-sm font-medium text-cyan-200">
          <ShieldCheck className="h-4 w-4" />
          Featured Credentials
        </div>

        <h2 className="mt-6 text-4xl font-bold tracking-tight text-white">
          Featured Certifications
        </h2>

        <p className="mt-4 max-w-3xl text-lg text-slate-400">
          Selected industry certifications relevant to cloud security,
          architecture, governance, and cybersecurity.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {featuredCertifications.map((item) => (
          <div
            key={item.title}
            className="relative overflow-hidden border border-slate-700 bg-[#0b1725]"
          >
            <div className="relative flex h-full flex-col p-6">
              <div className="flex flex-1 items-center justify-center">
                <div className="relative h-56 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                    sizes="(max-width:768px) 100vw, 25vw"
                  />
                </div>
              </div>

              <div className="mt-6 border-t border-slate-700 pt-5">
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                  {item.type}
                </p>

                <h3 className="mt-3 text-lg font-semibold leading-7 text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
