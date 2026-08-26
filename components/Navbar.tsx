"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Projects", href: "/#engineering-projects" },
  { name: "Capabilities", href: "/#capabilities" },
  { name: "Writing", href: "/writing/" },
  { name: "Certifications", href: "/certifications/" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-700/80 bg-[#07111d]/95 backdrop-blur"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          closeMenu();
        }
      }}
    >
      <div className="mx-auto flex min-h-[4.5rem] max-w-screen-2xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-16">
        <Link
          href="/"
          className="group shrink-0 border-l-2 border-cyan-300 pl-3 text-sm font-semibold tracking-[0.18em] text-white"
        >
          SURYA
          <span className="mt-0.5 block text-[0.6rem] font-medium tracking-[0.14em] text-slate-400 group-hover:text-cyan-200">
            SECURITY ARCHITECTURE
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3 py-2 text-xs font-medium tracking-wide text-slate-300 hover:text-cyan-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <a
          href="https://github.com/nagasesank"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 border border-cyan-300/40 px-4 py-2 text-xs font-semibold text-cyan-100 hover:border-cyan-200 hover:bg-cyan-300/10 lg:inline-flex"
        >
          GitHub Profile
        </a>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-10 w-10 items-center justify-center border border-slate-600 text-slate-100 hover:border-cyan-300 hover:text-cyan-200 lg:hidden"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span aria-hidden="true" className="grid gap-1.5">
            <span className="block h-px w-5 bg-current" />
            <span className="block h-px w-5 bg-current" />
            <span className="block h-px w-5 bg-current" />
          </span>
        </button>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-slate-700 bg-[#091521] px-5 py-4 lg:hidden"
        >
          <div className="mx-auto grid max-w-screen-2xl gap-1 sm:px-3">
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
              GitHub Profile
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
