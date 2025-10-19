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
    title: 'Money Rules The World',
    thumbnail: '/streetart.jpg',
    full: '/streetart.jpg',
    comingSoon: true,
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

  const handleClick = (item) => {
    if (item.comingSoon) return
    setSelected(item)
  }

  const handleKey = (e, item) => {
    if (item.comingSoon) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setSelected(item)
    }
  }

  return (
    <main className="pt-24 min-h-screen px-6 pb-24">
      <section className="max-w-6xl mx-auto py-12">
        <h1 className="text-4xl font-bold mb-6">Selected Work</h1>
        <p className="text-gray-300 mb-8">My latest and upcoming projects!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {WORK_ITEMS.map(item => (
            <article
              key={item.id}
              role="button"
              aria-disabled={!!item.comingSoon}
              tabIndex={item.comingSoon ? -1 : 0}
              onClick={() => handleClick(item)}
              onKeyDown={(e) => handleKey(e, item)}
              className={`project-card select-none ${item.comingSoon ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'}`}
            >
              {/* thumbnail as background */}
              <div className="project-thumb rounded-md overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  onError={(e)=>{e.target.style.display='none'}}
                />
              </div>

              {/* Coming soon tag placed at card root so it's top-right */}
              {item.comingSoon && (
                <div className="coming-tag">Coming Soon</div>
              )}

              {/* overlayed content (title + button). removed type line */}
              <div className="project-info">
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>

                <div>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); handleClick(item) }}
                    onKeyDown={(e) => { e.stopPropagation(); handleKey(e, item) }}
                    disabled={item.comingSoon}
                    className={`btn-outline ${item.comingSoon ? 'opacity-60 cursor-not-allowed' : ''}`}
                  >
                    {item.comingSoon ? 'Coming Soon' : 'View project'}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Video Modal */}
      {selected?.type === 'video' && (
        <VideoModal
          open={!!selected}
          onClose={() => setSelected(null)}
          videoId={selected.id}
        />
      )}

      {/* Image Modal */}
      {selected?.type === 'image' && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected.full}
            alt={selected.title}
            className="max-h-[92vh] max-w-[92vw] rounded-2xl shadow-2xl object-contain"
          />
        </div>
      )}
    </main>
  )
}
