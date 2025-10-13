export default function About() {
  return (
    <main className="pt-24 min-h-screen px-6 pb-24">
      <section className="relative py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Menno</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6">I’m Menno van Gils — 18 years old, based in The Netherlands. I make aftermovies, vertical content, and short films. I focus on strong visuals, pacing, and emotion.</p>
          <div className="flex gap-4 justify-center">
            <a href="/MennoVanGils_CV.pdf" className="btn-outline">Download CV</a>
            <a href="https://www.instagram.com/mvg_studi0" target="_blank" rel="noreferrer" className="btn-brand">Instagram</a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Process</h2>
          <p className="text-gray-300">I work closely with clients from idea to delivery: planning, shooting, and editing depending on the project.</p>
        </div>
      </section>
    </main>
  )
}
