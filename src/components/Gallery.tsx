const videos = [
  { id: 1, category: 'Brand Video', src: '/videos/content-creation.mp4', title: 'Small Business Content Creation' },
  { id: 2, category: 'Social Content', src: '/videos/where-to-start.mp4', title: "Business Owners: Solve Your 'Where to Start' Problem" },
  { id: 3, category: 'Interview', src: '/videos/animal-personality.mp4', title: 'Unlock Your Animal Personality: Quiz & Sales Mastery' },
  { id: 4, category: 'Podcast', src: '/videos/baseball-dreams.mp4', title: "Baseball Players' Dreams: Yankees, Dodgers, and Winning Big" },
  { id: 5, category: 'Brand Video', src: '/videos/business-address.mp4', title: 'Business Address Magic: Your Main Street Office Solution' },
]

const placeholders = [
  { id: 6, category: 'Social Content' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-3">Our Work</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See examples of the professional content we create for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Actual Videos */}
          {videos.map((item) => (
            <div key={item.id}>
              <div className="rounded-xl overflow-hidden border border-gray-200 hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
                <video
                  className="w-full h-auto"
                  controls
                  preload="metadata"
                >
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="mt-2">
                <span className="inline-block bg-accent/10 text-accent text-xs font-medium px-2 py-1 rounded">
                  {item.category}
                </span>
              </div>
            </div>
          ))}

          {/* Placeholder Items */}
          {placeholders.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-video bg-gray-100 rounded-xl overflow-hidden border border-gray-200 hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                <svg
                  className="w-12 h-12 mb-3 opacity-50 group-hover:opacity-70 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm font-medium">Coming Soon</span>
              </div>

              <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <span className="inline-block bg-accent/20 text-accent text-xs font-medium px-2 py-1 rounded mb-2">
                    {item.category}
                  </span>
                  <p className="text-white text-sm">Client project coming soon</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">
            Examples being updated all the time. Ready to be featured?{' '}
            <a href="#contact" className="text-accent hover:text-accent-dark transition-colors">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
