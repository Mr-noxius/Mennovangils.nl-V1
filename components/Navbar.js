import Link from 'next/link'

export default function Navbar({ theme, setTheme }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur bg-black/20 dark:bg-black/60 border-b border-transparent dark:border-neutral-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <Link href="/" className="flex items-center gap-4">
            <img src="/logo.png" alt="Menno logo" className="h-12" onError={(e)=>{e.target.style.display='none'}}/>
            <span className="text-sm font-medium tracking-tight hidden sm:inline text-brand">mvg_studi0</span>
          </Link>
          <nav className="flex items-center gap-4 text-sm font-medium">
            <Link href="/" className="hover:opacity-80">Home</Link>
            <Link href="/work" className="hover:opacity-80">Work</Link>
            <Link href="/about" className="hover:opacity-80">About</Link>
            <Link href="/contact" className="hover:opacity-80">Contact</Link>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="ml-2 px-3 py-1 rounded-full border text-xs bg-black/5 dark:bg-white/5">
              {theme === 'light' ? 'Dark' : 'Light'}
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
