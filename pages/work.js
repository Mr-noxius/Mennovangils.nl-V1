import { useState } from 'react'
import VideoModal from '../components/VideoModal'

// Auto thumbnail generator
function getThumbnail(item) {
  if (item.thumbnail) return item.thumbnail

  if (item.videoUrl?.includes('youtube') || item.videoUrl?.includes('youtu.be')) {
    let id = ''

    if (item.videoUrl.includes('v=')) {
      id = item.videoUrl.split('v=')[1].split('&')[0]
    } else {
      id = item.videoUrl.split('/').pop()
    }

    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
  }

  return '/fallback.jpg'
}

const WORK_ITEMS = [
  {
    type: 'video',
    title: 'Sample Aftermovie',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    type: 'video',
    title: 'Promo Teaser',
    videoUrl: 'https://www.youtube.com/watch?v=mU6anWqZJcc',
  },
  {
    type: 'video',
    title: 'Frame.io Project',
    videoUrl: 'https://share.frame.io/YOUR-LINK-HERE',
    thumbnail: '/frame-thumb.jpg' // Frame.io heeft geen auto thumbs
  },
  {
    type: 'image',
    title: 'Money Rules The World',
    thumbnail: '/streetart.jpg',
    full: '/streetart.jpg',
    comingSoon: true,
  },
  {
    type: 'image',
    title: 'Event Poster',
    thumbnail: '/images/event-poster.jpg',
    full: '/images/event-poster.jpg',
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
          {WORK_ITEMS.map((item, index) => (
            <article
              key={index}
              role="button"
              aria-disabled={!!item.comingSoon}
              tabIndex={item.comingSoon ? -1 : 0}
              onClick={() => handleClick(item)}
              onKeyDown={(e) => handleKey(e, item)}
              className={`project-card select-none ${item.comingSoon ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'}`}
            >
              <div className="project-thumb rounded-md overflow-hidden">
                <img
                  src={getThumbnail(item)}
                  alt={item.title}
                  onError={(e)=>{e.target.style.display='none'}}
                />
              </div>

              {item.comingSoon && (
                <div className="coming-tag">Coming Soon</div>
              )}

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
          videoUrl={selected.videoUrl}
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