const profileLinks = [
  ["GitHub", "https://github.com/nagasesank"],
  ["LinkedIn", "https://www.linkedin.com/in/suryasesank/"],
  ["Hashnode", "https://hashnode.com/@nagasesank"],
  ["Medium", "https://sesanknagamunukutla.medium.com/"],
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-[#07111d]">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-6 px-5 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        <div>
          <p className="text-sm font-semibold tracking-[0.12em] text-white">SURYA NAGAMUNUKUTLA</p>
          <p className="mt-2 text-sm text-slate-400">Cloud Security Engineering Portfolio</p>
        </div>
        <nav aria-label="Professional profiles" className="flex flex-wrap gap-x-5 gap-y-3">
          {profileLinks.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 underline decoration-slate-600 underline-offset-4 hover:text-cyan-100">{label}</a>)}
        </nav>
        <p className="font-mono text-xs text-slate-500">{new Date().getFullYear()} / ARCHITECTURE + EVIDENCE</p>
      </div>
    </footer>
  );
}
