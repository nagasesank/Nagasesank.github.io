import Link from "next/link";

const navItems = [
  { name: "Projects", href: "/#engineering-projects" },
  { name: "Capabilities", href: "/#capabilities" },
  { name: "Certifications", href: "/certifications" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-800 bg-slate-950/95">
      <div className="mx-auto flex min-h-16 max-w-screen-2xl items-center justify-between gap-4 px-5 py-3 lg:px-16">
        <Link
          href="/"
          className="shrink-0 text-base font-semibold tracking-[0.16em] text-white hover:text-cyan-300"
        >
          SURYA
        </Link>

        <nav aria-label="Primary navigation" className="flex items-center gap-4 sm:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs font-medium text-slate-300 hover:text-cyan-300 sm:text-sm"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <a
          href="https://github.com/nagasesank"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 border border-slate-600 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-cyan-300 hover:text-cyan-200 lg:inline-flex"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
