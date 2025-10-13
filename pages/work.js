import { useState } from 'react'
import VideoModal from '../components/VideoModal'

const VIDEOS = [
  { id: 'dQw4w9WgXcQ', title: 'Sample Aftermovie' },
]

export default function Work() {
  const [openId, setOpenId] = useState(null)
  return (
    <main className="pt-24 min-h-screen px-6 pb-24">
      <section className="max-w-6xl mx-auto py-12">
        <h1 className="text-4xl font-bold mb-6">Selected Work</h1>
        <p className="text-gray-600 mb-8">Click a thumbnail to open the video overlay.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {VIDEOS.map(v => (
            <div key={v.id} className="group cursor-pointer" onClick={()=>setOpenId(v.id)}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`} alt={v.title} className="w-full h-64 object-cover transform group-hover:scale-105 transition" />
                <div className="absolute inset-0 flex items-end p-4">
                  <div className="bg-gradient-to-t from-black/70 to-transparent rounded p-3 w-full">
                    <h3 className="text-white font-semibold">{v.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <VideoModal open={!!openId} onClose={()=>setOpenId(null)} videoId={openId} />
    </main>
  )
}
