import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import FeaturedCertifications from "../../components/FeaturedCertifications";
import CertificateGallery from "../../components/CertificateGallery";
import TrainingGallery from "../../components/TrainingGallery";

export const metadata = {
  title: "Certifications | Naga Sesank",
  description:
    "Professional certifications, cloud credentials and cybersecurity training completed by Naga Sesank.",
};

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Hero */}
        <section className="mt-16 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Professional Credentials
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
            Certifications & Training
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            A curated collection of industry certifications, technical
            credentials, and professional training demonstrating expertise in
            Cloud Security, Cybersecurity, Security Architecture, Governance,
            Infrastructure Security, and Enterprise Cloud Platforms.
          </p>
        </section>

        {/* Featured Certifications */}
        <FeaturedCertifications />

        {/* Professional Certificates */}
        <CertificateGallery />

        {/* Professional Training */}
        <TrainingGallery />
      </div>
    </main>
  );
}