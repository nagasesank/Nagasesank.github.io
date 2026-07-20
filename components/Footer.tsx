export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-6 px-8 text-slate-400 md:flex-row">
        <div>
          <h3 className="text-lg font-semibold text-white">
            Nagasesank
          </h3>

          <p className="mt-2 text-sm">
            Cloud Security Engineer
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href="https://github.com/nagasesank"
            target="_blank"
            className="hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-cyan-400"
          >
            LinkedIn
          </a>

          <a
            href="#"
            className="hover:text-cyan-400"
          >
            Hashnode
          </a>

          <a
            href="#"
            className="hover:text-cyan-400"
          >
            Medium
          </a>
        </div>

        <p className="text-sm">
          © 2026 Nagasesank. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}