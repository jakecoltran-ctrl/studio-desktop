const steps = [
  {
    number: '01',
    title: 'Book Your Session',
    description: 'Choose a package that fits your needs and select a time that works for you.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Record in Our Studio',
    description: 'Show up and share your expertise. We handle all the technical details.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'We Edit & Optimize',
    description: 'Our team transforms your footage into polished, platform-ready content.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Content Goes Live',
    description: 'We post and schedule your content for maximum engagement.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3l14 9-14 9V3z" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section className="py-10 md:py-14 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent text-sm font-medium tracking-wider uppercase text-center mb-2">
          Simple Process
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-3">
          How It Works
        </h2>
        <p className="text-gray-400 text-sm text-center mb-10">
          Premium Packages process. Build Your Brand packages have a simplified flow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gray-200" />
              )}

              <div className="text-center">
                {/* Number badge */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                  <span className="absolute -top-1 -right-1 w-6 h-6 bg-charcoal text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-semibold text-charcoal text-base mb-1">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
