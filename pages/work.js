// /pages/Work.jsx
import { useState } from 'react'
import VideoModal from '../components/VideoModal'

const WORK_ITEMS = [
  {
    id: 'dQw4w9WgXcQ',
    type: 'video',
    title: 'Sample Aftermovie',
    thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg`,
  },
  {
    id: 'image-1',
    type: 'image',
    title: 'Behind the Scenes',
    thumbnail: '/images/streetart.png',
    full: '/images/streetart.png',
  },
  {
    id: 'image-2',
    type: 'image',
    title: 'Event Poster',
    thumbnail: '/images/event-poster.jpg',
    full: '/images/event-poster.jpg',
  },
  {
    id: 'mU6anWqZJcc',
    type: 'video',
    title: 'Promo Teaser',
    thumbnail: `https://img.youtube.com/vi/mU6anWqZJcc/hqdefault.jpg`,
  },
]

export default function Work() {
  const [selected, setSelected] = useState(null)

  return (
    <main className="pt-24 min-h-screen px-6 pb-24">
      <section className="max-w-6xl mx-auto py-12">
        <h1 className="text-4xl font-bold mb-6">Selected Work</h1>
        <p className="text-gray-600 mb-8">Click a thumbnail to open.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {WORK_ITEMS.map(item => (
            <div key={item.id} className="group cursor-pointer" onClick={() => setSelected(item)}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition"
                />
                <div className="absolute inset-0 flex items-end p-4">
                  <div className="bg-gradient-to-t from-black/70 to-transparent rounded p-3 w-full">
                    <h3 className="text-white font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video or Image Modal */}
      {selected?.type === 'video' && (
        <VideoModal
          open={!!selected}
          onClose={() => setSelected(null)}
          videoId={selected.id}
        />
      )}

      {selected?.type === 'image' && (
        <div
          className={`fixed inset-0 bg-black/80 flex items-center justify-center z-50`}
          onClick={() => setSelected(null)}
        >
          <img
            src={selected.full}
            alt={selected.title}
            className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </main>
  )
}

