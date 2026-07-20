"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, ShieldCheck } from "lucide-react";

const featuredCertifications = [
  {
    title: "ISO 27001 Lead Auditor",
    image: "/certifications/certificates/iso-27001-lead-auditor-certificate.jpg",
    type: "Lead Auditor",
    featured: true,
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    image: "/certifications/badges/aws-certified-solutions-architect-associate-badge.png",
    type: "AWS Certification",
  },
  {
    title: "EC-Council Certified Ethical Hacker (CEH)",
    image: "/certifications/badges/ec-council-ceh-certified-badge.png",
    type: "Security Certification",
  },
  {
    title: "AWS Well-Architected Proficient",
    image: "/certifications/badges/aws-well-architected-proficient.png",
    type: "AWS Specialty Badge",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="border-t border-white/10 bg-gradient-to-b from-slate-950 via-slate-950 to-black py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            <ShieldCheck className="h-4 w-4" />
            Professional Credentials
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Certifications & Credentials
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Industry-recognized certifications validating expertise across Cloud
            Security, Cybersecurity, Architecture, Governance and Enterprise
            Security Practices.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {featuredCertifications.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
              </div>

              {/* Featured Label */}
              {item.featured && (
                <div className="absolute left-4 top-4 z-20">
                  <div className="flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                    <Award className="h-3.5 w-3.5" />
                    Featured
                  </div>
                </div>
              )}

              <div className="relative flex h-full flex-col p-8">
                <div className="flex flex-1 items-center justify-center">
                  <div className="relative flex h-52 w-full items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain transition duration-500 group-hover:scale-105"
                      sizes="(max-width:768px) 100vw, 25vw"
                    />
                  </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <span className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                    {item.type}
                  </span>

                  <h3 className="mt-3 text-lg font-semibold leading-7 text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/certifications"
            className="group inline-flex items-center gap-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-7 py-4 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
          >
            View All Certifications

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}