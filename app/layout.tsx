import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nagasesank.github.io"),
  title: { default: "Surya Naga Sesank M | Cloud Security Engineering", template: "%s | Surya Naga Sesank M" },
  description: "Cloud security engineering across AWS and Google Cloud, with Terraform, IAM and Zero Trust, DevSecOps, incident response, and security architecture.",
  openGraph: { type: "website", siteName: "Surya Naga Sesank M" },
  twitter: { card: "summary" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
