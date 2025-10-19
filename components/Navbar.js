import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="navbar-elevated backdrop-blur-lg bg-white/8 border border-white/20 rounded-2xl shadow-2xl">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-5 md:p-6">
          <Link href="/" className="flex items-center gap-4">
            <span className="brand-title text-lg md:text-2xl font-semibold tracking-tight text-gray-200">
              Menno van Gils
            </span>
          </Link>

          <nav className="flex items-center gap-4 text-sm md:text-base font-medium">
            <Link href="/" className="hover:opacity-90 text-gray-200">Home</Link>
            <Link href="/work" className="hover:opacity-90 text-gray-200">Work</Link>
            <Link href="/about" className="hover:opacity-90 text-gray-200">About</Link>
            <Link href="/contact" className="hover:opacity-90 text-gray-200">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
