import Link from 'next/link'

export default function About() {
  return (
    <main className="relative min-h-screen pt-24">
      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-8 md:grid-cols-3">
        {/* Bio (large card) */}
        <div className="md:col-span-2">
          <article className="service-card">
            <h2 className="display-font text-2xl md:text-3xl mb-4">Who I am</h2>
            <p className="text-gray-300 mb-4">
              Hi — I’m Menno, an 18-year-old filmmaker focused on capturing moments that feel cinematic.
              I work with festivals, brands and musicians to create dynamic event recaps, social-first content and short narrative pieces.
            </p>

            <p className="text-gray-300 mb-4">
              I handle production end-to-end: planning, shooting, color grading and editing. My work favours strong storytelling
              and punchy pacing that performs well on social platforms while still feeling cinematic on a larger screen.
            </p>

            <div className="flex gap-4 mt-4">
              <Link href="/work" className="btn-outline">See Work</Link>
            </div>
          </article>
        </div>

        {/* Quick services / skills (stack of small cards) */}
        <div className="flex flex-col gap-6">
          <div className="service-card">
            <h3 className="display-font text-lg mb-2">Aftermovies</h3>
            <p className="text-gray-300">High-energy event recaps optimised for socials and festival screens.</p>
          </div>

          <div className="service-card">
            <h3 className="display-font text-lg mb-2">Social Reels</h3>
            <p className="text-gray-300">Short vertical videos for TikTok & Instagram with strong visual hooks.</p>
          </div>

          <div className="service-card">
            <h3 className="display-font text-lg mb-2">Short Films</h3>
            <p className="text-gray-300">Narrative shorts and documentary pieces — cinematic framing and mood.</p>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="service-card text-center">
          <h3 className="display-font text-2xl mb-3">Work together</h3>
          <p className="text-gray-300 mb-6">If you have a project or want to collaborate — let's talk. Available for commissions and festival work.</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="btn-brand">Get in touch</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
