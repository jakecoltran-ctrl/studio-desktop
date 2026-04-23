const equipmentCategories = [
  {
    title: 'Cameras',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    items: [
      'Cinema-quality cameras',
      'Multi-camera setup (up to 3)',
      '1080p 30fps recording',
    ],
  },
  {
    title: 'Audio',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    items: [
      'RODE microphones',
      'Multiple mic setup (up to 3)',
      'RODE mixing equipment',
    ],
  },
  {
    title: 'Lighting',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    items: [
      'Professional LED lighting',
      'Soft diffused key lights',
      'Customizable accent lighting',
    ],
  },
  {
    title: 'Studio',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    items: [
      'Soundproofed recording space',
      'Professional backdrop options',
      'Teleprompter available',
    ],
  },
]

export default function EquipmentList() {
  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-24 px-6 bg-charcoal">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent text-sm font-medium tracking-wider uppercase text-center mb-3">
          Professional Setup
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-4">
          Our Equipment
        </h2>
        <p className="text-white/60 text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          Industry-standard gear to make you look and sound your best.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipmentCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center text-accent mb-4">
                {category.icon}
              </div>
              <h3 className="font-semibold text-white text-lg mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-white/70 text-sm">
                    <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
