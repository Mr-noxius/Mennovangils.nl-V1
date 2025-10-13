import '../styles/globals.css'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '../components/Navbar'

export default function MyApp({ Component, pageProps, router }) {
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [theme])

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <AnimatePresence mode="wait">
        <motion.div key={router.route} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  )
}
