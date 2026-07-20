import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-16 lg:px-12">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Cloud Security Engineer
        </p>

        <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
          Building Production-Grade
          <br />
          Cloud Security Solutions
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
          I design and build enterprise Cloud Security projects using AWS,
          Terraform, Google Cloud and DevSecOps practices with a strong focus
          on real-world implementation, security architecture and engineering
          evidence.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
            View Projects
          </button>

          <button className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-cyan-400">
            Read Articles
          </button>
        </div>
      </section>
    </main>
  );
}