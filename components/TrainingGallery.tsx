"use client";

import Image from "next/image";
import { ExternalLink, GraduationCap } from "lucide-react";

const trainingPrograms = [
  {
    title: "Google Cloud Professional Cloud Architect Training",
    provider: "Google Cloud",
    image:
      "/certifications/training/gcp-professional-cloud-architect-training-certificate.jpg",
  },
  {
    title: "Palo Alto PCNSE Training",
    provider: "Palo Alto Networks",
    image:
      "/certifications/training/palo-alto-pcnse-training-certificate.png",
  },
  {
    title: "AWS CSPM Training",
    provider: "LinkedIn Learning",
    image:
      "/certifications/training/linkedin-learning-aws-cspm-certificate.png",
  },
  {
    title: "Azure CSPM Training",
    provider: "LinkedIn Learning",
    image:
      "/certifications/training/linkedin-learning-azure-cspm-certificate.png",
  },
];

export default function TrainingGallery() {
  return (
    <section className="mt-28 pb-24">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 border-l-2 border-cyan-300 pl-3 text-sm font-medium text-cyan-200">
          <GraduationCap className="h-4 w-4" />
          Professional Development
        </div>

        <h2 className="mt-6 text-4xl font-bold tracking-tight text-white">
          Professional Training
        </h2>

        <p className="mt-4 max-w-3xl text-lg text-slate-400">
          Continuous learning through vendor training programs focused on Cloud
          Security, Enterprise Architecture, Network Security and Security
          Operations.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {trainingPrograms.map((training) => (
          <a
            key={training.title}
            href={training.image}
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden border border-slate-700 bg-[#0b1725]"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
              <Image
                src={training.image}
                alt={training.title}
                fill
                className="object-contain p-4"
                sizes="(max-width:768px) 100vw, 50vw"
              />

            </div>

            <div className="flex items-center justify-between border-t border-slate-700 p-5">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                  {training.provider}
                </p>

                <h3 className="mt-3 text-lg font-semibold text-white">
                  {training.title}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Click to view full certificate
                </p>
              </div>

              <ExternalLink className="h-5 w-5 text-cyan-300" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
