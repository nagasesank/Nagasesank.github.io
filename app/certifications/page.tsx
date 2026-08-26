import type { Metadata } from "next";
import Link from "next/link";
import CertificateGallery from "@/components/CertificateGallery";
import FeaturedCertifications from "@/components/FeaturedCertifications";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TrainingGallery from "@/components/TrainingGallery";

export const metadata: Metadata = { title: "Certifications & Training", description: "A curated record of certifications, technical credentials, and professional training relevant to cloud security, cybersecurity, security architecture, governance, and cloud engineering.", alternates: { canonical: "/certifications/" } };

export default function CertificationsPage() { return <div className="min-h-screen bg-[#07111d] text-slate-200"><Navbar /><main className="px-5 pb-20 pt-28 sm:px-8"><div className="mx-auto max-w-screen-2xl lg:px-8"><Link href="/" className="inline-flex min-h-10 items-center text-sm font-semibold text-cyan-200 underline decoration-cyan-300/50 underline-offset-4 hover:text-cyan-100">Back to Home</Link><header className="mt-8 border-b border-slate-700 pb-9"><p className="text-xs font-semibold uppercase tracking-[.2em] text-cyan-200">Professional Credentials</p><h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Certifications &amp; Training</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">A curated record of certifications, technical credentials, and professional training relevant to cloud security, cybersecurity, security architecture, governance, and cloud engineering.</p></header><FeaturedCertifications /><CertificateGallery /><TrainingGallery /></div></main><Footer /></div>; }
