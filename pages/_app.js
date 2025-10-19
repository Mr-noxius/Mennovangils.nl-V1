import '../styles/globals.css'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '../components/Navbar'

export default function MyApp({ Component, pageProps, router }) {
  // Always enable dark mode by adding the `dark` class once on mount.
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div key={router.route} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  )
}
