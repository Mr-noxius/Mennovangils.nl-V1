import { motion } from 'framer-motion'

function extractYouTubeId(url) {
  if (!url) return null
  try {
    if (url.includes('v=')) return url.split('v=')[1].split('&')[0]
    return url.split('/').pop()
  } catch (e) {
    return null
  }
}

export default function VideoModal({ open, onClose, videoUrl }) {
  if (!open) return null

  const isYouTube = videoUrl && (videoUrl.includes('youtube') || videoUrl.includes('youtu.be'))
  const videoId = isYouTube ? extractYouTubeId(videoUrl) : null
  const src = isYouTube ? `https://www.youtube.com/embed/${videoId}` : videoUrl

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="w-11/12 md:w-3/5 aspect-video bg-black rounded-xl" onClick={(e)=>e.stopPropagation()}>
        <iframe className="w-full h-full rounded-xl" src={src} title="Video" allowFullScreen></iframe>
      </motion.div>
    </motion.div>
  )
}
