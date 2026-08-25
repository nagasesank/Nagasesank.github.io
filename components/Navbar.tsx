"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Projects", href: "/#engineering-projects" },
  { name: "Capabilities", href: "/#capabilities" },
  { name: "Certifications", href: "/certifications" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header
      className="fixed top-0 left-0 z-50 w-full border-b border-slate-800 bg-slate-950/95"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          closeMenu();
        }
      }}
    >
      <div className="mx-auto flex min-h-16 max-w-screen-2xl items-center justify-between gap-4 px-5 py-3 lg:px-16">
        <Link
          href="/"
          className="shrink-0 text-base font-semibold tracking-[0.16em] text-white hover:text-cyan-300"
        >
          SURYA
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-4 md:flex lg:gap-6"
        >
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

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-10 w-10 items-center justify-center border border-slate-600 text-slate-100 hover:border-cyan-300 hover:text-cyan-200 md:hidden"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span aria-hidden="true" className="grid gap-1.5">
            <span className="block h-px w-5 bg-current" />
            <span className="block h-px w-5 bg-current" />
            <span className="block h-px w-5 bg-current" />
          </span>
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-slate-800 bg-slate-950 px-5 py-4 md:hidden"
        >
          <div className="mx-auto grid max-w-screen-2xl gap-1 lg:px-11">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="border-b border-slate-800 py-3 text-sm font-medium text-slate-200 hover:text-cyan-200"
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://github.com/nagasesank"
              target="_blank"
              rel="noopener noreferrer"
              className="pt-3 text-sm font-semibold text-cyan-200 hover:text-cyan-100"
              onClick={closeMenu}
            >
              GitHub
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
