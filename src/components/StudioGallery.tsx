const studioImages = [
  { src: '/studio-1.png', alt: 'Studio setup with professional lighting and equipment' },
  { src: '/studio-4.png', alt: 'Clean studio setup with wood panel backdrop' },
  { src: '/studio-3.png', alt: 'Podcast table with professional microphones' },
  { src: '/studio-2.png', alt: 'Recording area with multiple camera angles' },
];

export default function StudioGallery() {
  return (
    <section className="py-16 md:py-24 px-6 bg-charcoal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-3">Our Space</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">The Studio</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A professional recording environment designed to make you look and sound your best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {studioImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg aspect-[4/3]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
