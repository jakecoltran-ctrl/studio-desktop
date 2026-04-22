import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-warm">
      {/* Header */}
      <div className="bg-charcoal py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-accent text-sm uppercase tracking-wide mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-3">Our Story</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">About Studio at Desktop</h1>
          <p className="text-white/60 text-lg">Why we built this studio and what drives us every day.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        {/* Main Story */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The Problem We Saw</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We noticed something frustrating: talented business owners with incredible stories to tell were being held back by inconsistent, low-quality social media content. They knew they needed to show up online, but between running their business and trying to figure out lighting, editing, and posting schedules, their content suffered.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Meanwhile, the businesses that were winning on social media? They had one thing in common: professional, consistent content that made them look as good as they actually are.
          </p>
        </div>

        {/* The Solution */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Our Solution</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Studio at Desktop was built to bridge that gap. We created a space where business owners can walk in, record one session, and walk out knowing they have a full month of professional content handled.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            No more scrambling for content ideas at 10 PM. No more blurry phone videos with bad audio. No more posting inconsistently and hoping for the best. Just show up, be yourself, and let us handle the rest.
          </p>
        </div>

        {/* What We Believe */}
        <div className="bg-white rounded-xl p-8 md:p-10 border border-gray-200 mb-16">
          <h2 className="font-serif text-2xl text-charcoal mb-6">What We Believe</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-1">Quality builds trust</h3>
                <p className="text-gray-500">Professional content signals to your audience that you take your business seriously.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-1">Consistency wins</h3>
                <p className="text-gray-500">Showing up regularly matters more than going viral once. We help you stay visible.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-1">Your time is valuable</h3>
                <p className="text-gray-500">You should focus on what you do best. Let us handle the content creation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-serif text-2xl text-charcoal mb-4">Ready to elevate your content?</h2>
          <p className="text-gray-600 mb-8">
            Let's talk about how we can help your business stand out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#packages"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-medium px-8 py-4 rounded-lg transition-colors"
            >
              View Our Packages
            </Link>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-charcoal/90 text-white font-medium px-8 py-4 rounded-lg transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
