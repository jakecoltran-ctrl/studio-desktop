import { useState } from 'react'
import { Link } from 'react-router-dom'

const features = [
  { title: 'Professionally Produced Brand Video', desc: "A polished, compelling video that captures your brand's essence and tells your story", icon: '🎬' },
  { title: 'Optimized for Social Sharing', desc: 'Formatted and sized perfectly for all major social platforms - Instagram, LinkedIn, Facebook, and more', icon: '📱' },
  { title: 'Cinematic Format', desc: 'High-production value with professional lighting, sound, and editing techniques', icon: '🎥' },
  { title: 'Ready-to-Post High-Res File', desc: 'Delivered in multiple formats so you can use it anywhere - no additional editing needed', icon: '✨' },
];

const useCases = [
  'Entrepreneurs introducing their brand',
  'Professionals updating their LinkedIn presence',
  'Speakers and consultants building credibility',
  'Real estate agents showcasing their personality',
  'Anyone who wants to stand out from the competition',
];

export default function DigitalBusinessCardPage() {
  const [showCalendar, setShowCalendar] = useState(false)

  return (
    <div className="min-h-screen bg-gray-warm">
      {/* Hero Header */}
      <div className="relative bg-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 70% 30%, rgba(196, 92, 38, 0.4) 0%, transparent 50%),
                              radial-gradient(circle at 20% 70%, rgba(196, 92, 38, 0.2) 0%, transparent 40%)`
          }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-business-card text-sm uppercase tracking-wide mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Pricing
          </Link>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-business-card text-sm font-medium tracking-wider uppercase mb-3">Brand Video</p>
              <h1 className="font-serif text-4xl md:text-6xl text-business-card mb-4">Digital Business Card</h1>
              <p className="text-white/60 text-lg max-w-xl">Make a lasting first impression with a cinematic introduction to your brand.</p>
            </div>
            <div className="text-left md:text-right">
              <div className="text-5xl md:text-6xl font-bold text-white">$995</div>
              <div className="text-white/50 text-lg">one-time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Intro */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Your brand, professionally captured</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            In a world of text-based profiles, stand out with a professionally produced video that introduces you and your business. Your Digital Business Card is a cinematic first impression that works 24/7 - on your website, social profiles, email signatures, and everywhere you want to make an impact.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl">{feature.icon}</span>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 mb-16">
          <h3 className="font-semibold text-charcoal text-lg mb-6">Perfect for:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {useCases.map((useCase) => (
              <div key={useCase} className="flex items-center gap-3">
                <svg className="w-5 h-5 text-business-card flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">{useCase}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-charcoal rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-business-card/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative">
            {!showCalendar ? (
              <>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">Ready to make an impression?</h3>
                <p className="text-white/60 mb-8 max-w-lg mx-auto">
                  Let's create a video that captures who you are and what makes your brand special.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setShowCalendar(true)}
                    className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-dark text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book Now
                  </button>
                  <a
                    href="mailto:studioatdesktop@gmail.com"
                    className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Us
                  </a>
                </div>
                <p className="text-white/40 mt-4 text-sm">studioatdesktop@gmail.com</p>
              </>
            ) : (
              <>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">Select your date</h3>
                <p className="text-white/60 mb-8 max-w-lg mx-auto">
                  Choose an available time slot for your Digital Business Card session.
                </p>

                <div className="bg-white rounded-lg overflow-hidden mb-6" style={{ minHeight: '700px' }}>
                  <iframe
                    src="https://calendly.com/studioatdesktop/digital-business-card?hide_gdpr_banner=1"
                    width="100%"
                    height="700"
                    frameBorder="0"
                    title="Schedule a session"
                  />
                </div>

                <button
                  onClick={() => setShowCalendar(false)}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
