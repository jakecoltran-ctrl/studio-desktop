import Navbar from '../components/Navbar'
import Header from '../components/Header'
import PricingCard from '../components/PricingCard'
import ComparisonTable from '../components/ComparisonTable'
import SecondaryCard from '../components/SecondaryCard'
import Gallery from '../components/Gallery'
import StudioGallery from '../components/StudioGallery'
import HowItWorks from '../components/HowItWorks'
import EquipmentList from '../components/EquipmentList'
import ExtrasSection from '../components/ExtrasSection'
import FAQ from '../components/FAQ'
import ContactForm from '../components/ContactForm'
import SocialIcons from '../components/SocialIcons'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div id="hero">
        <Header />
      </div>

      {/* Value Proposition Section */}
      <section className="py-20 md:py-28 px-6 bg-gray-warm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Text */}
            <div>
              <p className="text-accent text-sm font-medium tracking-wider uppercase mb-4">The Real Question</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6 leading-tight">
                Is Your Social Media Working For You?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Your online presence is often the first impression you make. Inconsistent or low-quality content
                doesn't just look bad—it costs you credibility and customers.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We help businesses produce <span className="text-charcoal font-semibold">studio-quality video content</span> that
                builds trust and keeps your brand top of mind—without the hassle of doing it yourself.
              </p>
              <a
                href="#packages"
                className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
              >
                See Our Packages
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Right side - Feature list */}
            <div className="space-y-6">
              <div className="flex gap-5 bg-white p-6 rounded-2xl border border-gray-200">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Professional Studio Quality</h3>
                  <p className="text-gray-500 text-sm">Multi-camera setups and professional audio that makes you look and sound your best.</p>
                </div>
              </div>

              <div className="flex gap-5 bg-white p-6 rounded-2xl border border-gray-200">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Consistent Content</h3>
                  <p className="text-gray-500 text-sm">Regular posting schedule that keeps your audience engaged and algorithms happy.</p>
                </div>
              </div>

              <div className="flex gap-5 bg-white p-6 rounded-2xl border border-gray-200">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Save Your Time</h3>
                  <p className="text-gray-500 text-sm">Focus on running your business while we handle all the content creation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />

      <StudioGallery />

      <EquipmentList />

      {/* Main Pricing Section */}
      <section id="packages" className="py-16 md:py-24 px-6 bg-gray-warm">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-4">
            Premium Packages
          </h2>
          <p className="text-gray-500 text-center mb-12 md:mb-16 max-w-2xl mx-auto">
            Professional content creation packages designed to keep your social media presence consistent and engaging. We recommend 6 months for the best results.
          </p>

          {/* 3-column pricing grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
            <PricingCard
              tier="Silver"
              price="$500"
              period="session"
              channels="1 Social Channel"
              shorts="Up to 8 Shorts"
              recordingTime="60"
              deliveryTime="5-7 Business Days"
              to="/silver"
            />
            <PricingCard
              tier="Gold"
              price="$750"
              period="session"
              channels="Up to 2 Social Channels"
              shorts="Up to 12 Shorts"
              recordingTime="90"
              deliveryTime="3-5 Business Days"
              isPopular
              to="/gold"
              extras={['Strategy Call']}
            />
            <PricingCard
              tier="Platinum"
              price="$1,000"
              period="session"
              channels="Up to 3 Social Channels"
              shorts="Up to 20 Shorts"
              recordingTime="120"
              deliveryTime="1-3 Business Days"
              to="/platinum"
              extras={['Strategy Call']}
            />
          </div>
        </div>
      </section>

      {/* One-Time Services Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-4">
            Build Your Brand
          </h2>
          <p className="text-gray-500 text-center mb-12 md:mb-16 max-w-2xl mx-auto">
            Perfect starting points to establish your presence or make a lasting first impression.
          </p>

          {/* 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <SecondaryCard
              title="Bronze"
              price="$250"
              priceLabel="/session"
              note="Studio access only — editing & posting not included"
              features={[
                'Professional Studio Session',
                '30 Minute Film Session',
                'Audio up to 3 Mics',
                'Video up to 3 Cameras',
              ]}
              to="/bronze"
            />
            <SecondaryCard
              title="Digital Business Card"
              price="$995"
              priceLabel="one-time"
              features={[
                'Professionally produced brand video',
                'Optimized for social sharing',
                'Cinematic format',
                'Delivered as ready-to-post high-res file',
              ]}
              to="/digital-business-card"
            />
          </div>
        </div>
      </section>

      <Gallery />

      <ComparisonTable />
      <ExtrasSection />
      <FAQ />
      <ContactForm />
      <SocialIcons />

      {/* Logo Section */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex justify-center">
          <img src="/logo.png" alt="Studio at Desktop" className="h-24 md:h-32 w-auto" />
        </div>
      </section>

      <Footer />
    </div>
  )
}
