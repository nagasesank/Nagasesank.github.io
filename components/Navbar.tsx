export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
        <a
          href="/"
          className="text-xl font-bold tracking-wide text-white"
        >
          Surya
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <a href="/" className="transition hover:text-cyan-400">
            Home
          </a>

          <a href="/projects" className="transition hover:text-cyan-400">
            Projects
          </a>

          <a href="/blogs" className="transition hover:text-cyan-400">
            Blogs
          </a>

          <a href="/about" className="transition hover:text-cyan-400">
            About
          </a>

          <a href="/resume" className="transition hover:text-cyan-400">
            Resume
          </a>

          <a href="/contact" className="transition hover:text-cyan-400">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}