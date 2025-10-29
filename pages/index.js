import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <><head>
      <link rel="icon" type="image/png" href="/logo.png" />
    </head>
    <main className="pt-24">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <img src="/hero.jpg" alt="Hero background" className="absolute inset-0 w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none' } } />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center px-6">
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-white mb-4">Menno van Gils</h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">18-year-old videographer in the Netherlands — aftermovies, social reels, and short films that feel cinematic.</p>
            <div className="flex gap-4 justify-center">
              <Link href="/work" className="btn-brand">See Work</Link>
              <Link href="/about" className="btn-outline">About</Link>
            </div>
          </div>
        </section>

        <section className="bg-bg-light dark:bg-bg-dark py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-8 bg-white/90 dark:bg-black/60 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Aftermovies</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">High-energy event recaps designed for socials and festivals.</p>
              </div>
              <div className="p-8 bg-white/90 dark:bg-black/60 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Social Reels</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Short vertical videos for TikTok & Instagram.</p>
              </div>
              <div className="p-8 bg-white/90 dark:bg-black/60 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Short Films</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Narrative shorts and documentaries.</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center py-10 text-gray-500">© {new Date().getFullYear()} Menno van Gils Studio</footer>
      </main></>
  )
}
