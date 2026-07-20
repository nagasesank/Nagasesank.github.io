"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "ISO 27001 Lead Auditor",
    image:
      "/certifications/certificates/iso-27001-lead-auditor-certificate.jpg",
  },
  {
    title: "ArcX FTIA",
    image: "/certifications/certificates/arcx-ftia-certificate.png",
  },
  {
    title: "AWS Well-Architected Foundations",
    image:
      "/certifications/certificates/aws-well-architected-foundations-certificate.png",
  },
  {
    title: "TCM Practical Web Application Security",
    image:
      "/certifications/certificates/tcm-practical-web-application-security-certificate.png",
  },
  {
    title: "TCM Linux Privilege Escalation",
    image:
      "/certifications/certificates/tcm-linux-privilege-escalation-certificate.png",
  },
  {
    title: "TCM Windows Privilege Escalation",
    image:
      "/certifications/certificates/tcm-windows-privilege-escalation-certificate.png",
  },
];

export default function CertificateGallery() {
  return (
    <section className="mt-28">
      <div className="mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-white">
          Professional Certificates
        </h2>

        <p className="mt-4 max-w-3xl text-lg text-slate-400">
          Professional certifications and completion certificates validating
          practical expertise across cybersecurity, cloud security,
          infrastructure, and enterprise architecture.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {certificates.map((certificate) => (
          <a
            key={certificate.title}
            href={certificate.image}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
              <Image
                src={certificate.image}
                alt={certificate.title}
                fill
                className="object-contain p-4 transition duration-500 group-hover:scale-105"
                sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            </div>

            <div className="flex items-center justify-between border-t border-white/10 p-6">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {certificate.title}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Click to view full certificate
                </p>
              </div>

              <ExternalLink className="h-5 w-5 text-cyan-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}