import { useState } from 'react'
import { Link } from 'react-router-dom'

const features = [
  { title: 'Up to 2 Social Channels', desc: 'Expand your reach across multiple platforms - Instagram & TikTok, YouTube & LinkedIn, or your preferred combination', icon: '📱' },
  { title: 'Professional Studio Session', desc: 'Access to our fully-equipped recording studio with professional lighting and sound', icon: '🎬' },
  { title: '90 Minutes Recording', desc: 'Extended session time to capture more content in one visit', icon: '⏱️' },
  { title: 'Clip Editing', desc: 'We transform your raw footage into polished, engaging short-form content', icon: '✂️' },
  { title: 'Caption Writing', desc: 'Platform-optimized captions crafted for each channel', icon: '✍️' },
  { title: 'Hashtag Research', desc: 'Strategic hashtags tailored to each platform for maximum reach', icon: '#️⃣' },
  { title: 'Posting & Scheduling', desc: 'We handle the posting schedule for optimal engagement on both platforms', icon: '📅' },
  { title: 'Thumbnails', desc: 'Custom thumbnails designed to grab attention and drive clicks', icon: '🖼️' },
  { title: 'Intro/Outro Video', desc: 'Professional branded intro and outro for your content', icon: '🎞️' },
  { title: 'Strategy Call', desc: 'One-on-one strategy session to plan your content direction', icon: '📞' },
  { title: 'Up to 12 Shorts', desc: 'Twelve pieces of short-form content delivered per session', icon: '🎥' },
];

const addOns = [
  { id: 'zoom-guest', name: 'Zoom Guest', price: 100 },
  { id: 'onsite-broll', name: 'On-site B Roll', price: 150 },
];

const BASE_PRICE = 750;

export default function GoldPage() {
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
    if (hasZoom && hasBroll) return 'gold-both'
    if (hasZoom) return 'gold-zoom-guest'
    if (hasBroll) return 'gold-onsite-broll'
    return 'gold'
  }

  return (
    <div className="min-h-screen bg-gray-warm">
      {/* Hero Header */}
      <div className="relative bg-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(196, 92, 38, 0.4) 0%, transparent 50%),
                              radial-gradient(circle at 80% 50%, rgba(196, 92, 38, 0.3) 0%, transparent 50%)`
          }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-gold text-sm uppercase tracking-wide mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Pricing
          </Link>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/20 text-gold text-sm font-medium tracking-wider uppercase mb-4 px-4 py-2 rounded-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Most Popular
              </div>
              <h1 className="font-serif text-5xl md:text-7xl text-gold mb-4">Gold</h1>
              <p className="text-white/60 text-lg max-w-xl">Our most popular package for growing businesses ready to dominate multiple platforms.</p>
            </div>
            <div className="text-left md:text-right">
              <div className="text-5xl md:text-6xl font-bold text-white">$750</div>
              <div className="text-white/50 text-lg">per month</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendation Notice */}
      <div className="bg-charcoal/5 border-y border-charcoal/10">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <p className="text-center text-charcoal/70 text-sm">
            <span className="font-semibold">Pro Tip:</span> We recommend 6 months to see consistent results for your brand.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Intro */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Double your reach, double your impact</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            The Gold package is our most popular choice for a reason. With coverage across two social channels and 12 pieces of content per session, you'll maintain a strong, consistent presence where your audience actually spends their time.
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
          <h3 className="font-semibold text-charcoal text-lg mb-2">Customize Your Package</h3>
          <p className="text-gray-600 mb-6">Add extras to enhance your content.</p>

          <div className="space-y-3">
            {addOns.map((addon) => (
              <label
                key={addon.id}
                className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedAddOns.includes(addon.id)
                    ? 'border-gold bg-gold/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedAddOns.includes(addon.id)}
                    onChange={() => toggleAddOn(addon.id)}
                    className="w-5 h-5 rounded border-gray-300 text-gold focus:ring-gold"
                  />
                  <span className="text-charcoal font-medium">{addon.name}</span>
                </div>
                <span className="text-gray-600 font-semibold">+${addon.price}</span>
              </label>
            ))}
          </div>

          {selectedAddOns.length > 0 && (
            <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
              <span className="text-gray-600">Package + Add-ons</span>
              <span className="text-xl font-bold text-charcoal">${totalPrice}</span>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-charcoal rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative">
            {!showCalendar ? (
              <>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">Ready to grow your presence?</h3>
                <p className="text-white/60 mb-8 max-w-lg mx-auto">
                  Join the businesses already seeing results with our Gold package.
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
                  Choose an available time slot for your Gold package session.
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
    </div>
  )
}
