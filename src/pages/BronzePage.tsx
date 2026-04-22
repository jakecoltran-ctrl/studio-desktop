import { useState } from 'react'
import { Link } from 'react-router-dom'

const features = [
  { title: 'Professional Studio Session', desc: 'Full access to our state-of-the-art recording studio with premium equipment', icon: '🎬' },
  { title: '60 Minutes Recording', desc: 'A full hour to capture your content, interviews, or podcast episodes', icon: '⏱️' },
  { title: 'Audio up to 3 Mics', desc: 'Professional-grade audio capture for up to 3 participants - perfect for interviews or panel discussions', icon: '🎙️' },
  { title: 'Video up to 3 Cameras', desc: 'Multi-angle video recording for dynamic, professional-looking content', icon: '📹' },
];

const addOns = [
  { id: 'zoom-guest', name: 'Zoom Guest', price: 100 },
  { id: 'onsite-broll', name: 'On-site B Roll', price: 150 },
];

const BASE_PRICE = 250;

export default function BronzePage() {
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])

  const toggleAddOn = (id: string) => {
    setSelectedAddOns(prev =>
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    )
  }

  const totalPrice = BASE_PRICE + addOns
    .filter(addon => selectedAddOns.includes(addon.id))
    .reduce((sum, addon) => sum + addon.price, 0)

  const getCalendlySlug = () => {
    const hasZoom = selectedAddOns.includes('zoom-guest')
    const hasBroll = selectedAddOns.includes('onsite-broll')
    if (hasZoom && hasBroll) return 'bronze-both'
    if (hasZoom) return 'bronze-zoom-guest'
    if (hasBroll) return 'bronze-onsite-broll'
    return 'bronze'
  }

  return (
    <div className="min-h-screen bg-gray-warm">
      {/* Hero Header */}
      <div className="relative bg-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(196, 92, 38, 0.3) 0%, transparent 50%)`
          }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-bronze text-sm uppercase tracking-wide mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Pricing
          </Link>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-bronze text-sm font-medium tracking-wider uppercase mb-3">Studio Session</p>
              <h1 className="font-serif text-5xl md:text-7xl text-bronze mb-4">Bronze</h1>
              <p className="text-white/60 text-lg max-w-xl">Professional studio access for creators who handle their own editing.</p>
            </div>
            <div className="text-left md:text-right">
              <div className="text-5xl md:text-6xl font-bold text-white">$250</div>
              <div className="text-white/50 text-lg">per session</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Intro */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Your content, our studio</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            The Bronze package gives you access to our professional recording studio without the full-service treatment. Perfect for podcasters, experienced creators, or anyone who prefers to handle their own editing but wants that professional studio quality.
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

        {/* Add-Ons Section */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 mb-16">
          <h3 className="font-semibold text-charcoal text-lg mb-2">Customize Your Session</h3>
          <p className="text-gray-600 mb-6">Add extras to enhance your studio experience.</p>

          <div className="space-y-3">
            {addOns.map((addon) => (
              <label
                key={addon.id}
                className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedAddOns.includes(addon.id)
                    ? 'border-bronze bg-bronze/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedAddOns.includes(addon.id)}
                    onChange={() => toggleAddOn(addon.id)}
                    className="w-5 h-5 rounded border-gray-300 text-bronze focus:ring-bronze"
                  />
                  <span className="text-charcoal font-medium">{addon.name}</span>
                </div>
                <span className="text-gray-600 font-semibold">+${addon.price}</span>
              </label>
            ))}
          </div>

          {selectedAddOns.length > 0 && (
            <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
              <span className="text-gray-600">Session + Add-ons</span>
              <span className="text-xl font-bold text-charcoal">${totalPrice}</span>
            </div>
          )}
        </div>

        {/* Upsell */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 mb-16">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <h3 className="font-semibold text-charcoal text-lg mb-2">Want the full-service experience?</h3>
              <p className="text-gray-600">
                Upgrade to a premium package and we'll handle everything from recording to posting.
              </p>
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-bronze hover:text-bronze font-medium whitespace-nowrap"
            >
              View packages
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-charcoal rounded-2xl p-8 md:p-12 text-center">
          {!showCalendar ? (
            <>
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">Book your session</h3>
              <p className="text-white/60 mb-8 max-w-lg mx-auto">
                Ready to record? Let's get you scheduled in our studio.
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
                Choose an available time slot for your Bronze session.
              </p>

              <div className="bg-white rounded-lg overflow-hidden mb-6" style={{ minHeight: '700px' }}>
                <iframe
                  src={`https://calendly.com/studioatdesktop/${getCalendlySlug()}?hide_gdpr_banner=1`}
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
  )
}
