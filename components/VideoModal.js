import { motion } from 'framer-motion'

export default function VideoModal({ open, onClose, videoId }) {
  if (!open) return null
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="w-11/12 md:w-3/5 aspect-video bg-black rounded-xl" onClick={(e)=>e.stopPropagation()}>
        <iframe className="w-full h-full rounded-xl" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video" allowFullScreen></iframe>
      </motion.div>
    </motion.div>
  )
}
