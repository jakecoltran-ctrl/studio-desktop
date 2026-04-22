import { Link } from 'react-router-dom'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-warm">
      {/* Header */}
      <div className="bg-charcoal py-16 md:py-20 px-6">
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
          <h1 className="font-serif text-4xl md:text-5xl text-white">Terms of Service</h1>
          <p className="text-white/60 mt-4">Last updated: April 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-gray max-w-none">
          <section className="mb-10">
            <h2 className="font-serif text-2xl text-charcoal mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using Studio at Desktop's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-serif text-2xl text-charcoal mb-4">2. Services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Studio at Desktop provides professional video content creation services including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Studio recording sessions</li>
              <li>Video editing and post-production</li>
              <li>Social media content creation and scheduling</li>
              <li>Digital business card production</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-serif text-2xl text-charcoal mb-4">3. Booking and Payment</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              All bookings require payment at the time of scheduling. Payments are processed securely through Stripe. By making a payment, you authorize us to charge the selected payment method for the total amount.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For premium packages, we recommend a 6-month commitment to see consistent results, though this is not required.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-serif text-2xl text-charcoal mb-4">4. Cancellation, Rescheduling, and Refunds</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>All bookings are final.</strong> Self-service cancellation and rescheduling are not available. If you need to cancel or reschedule your session, you must contact us directly at <a href="mailto:studioatdesktop@gmail.com" className="text-accent hover:text-accent-dark">studioatdesktop@gmail.com</a>.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cancellation and rescheduling requests made at least 48 hours before the scheduled session are eligible for a full refund or rescheduling at no additional charge. Requests made less than 48 hours before the session may be subject to a cancellation fee of up to 50% of the session price.
            </p>
            <p className="text-gray-600 leading-relaxed">
              No-shows and late cancellations (less than 24 hours notice) are non-refundable. We reserve the right to refuse future bookings from clients with repeated no-shows or late cancellations.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-serif text-2xl text-charcoal mb-4">5. Content Ownership and Usage Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Upon full payment, you retain ownership of the final delivered content and may use it for your personal and business purposes.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Studio Usage Rights:</strong> By using our services, you grant Studio at Desktop a perpetual, royalty-free license to use, reproduce, and display the content we create for you (including video footage, images, and edited materials) for our own promotional and marketing purposes. This includes but is not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Portfolio displays on our website and social media</li>
              <li>Marketing materials and advertisements</li>
              <li>Case studies and client showcases</li>
              <li>Demo reels and promotional videos</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              If you prefer that we do not use your content for promotional purposes, please notify us in writing prior to your session, and we will accommodate your request.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-serif text-2xl text-charcoal mb-4">6. Client Responsibilities</h2>
            <p className="text-gray-600 leading-relaxed">
              Clients are responsible for arriving on time for scheduled sessions, providing any necessary materials or information, and ensuring all content shared does not infringe on third-party rights.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-serif text-2xl text-charcoal mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              Studio at Desktop shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service in question.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-serif text-2xl text-charcoal mb-4">8. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of our services constitutes acceptance of the updated terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-serif text-2xl text-charcoal mb-4">9. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-gray-600 mt-4">
              <strong>Studio at Desktop</strong><br />
              3070 North Main Street NW<br />
              Kennesaw, GA 30144<br />
              <a href="mailto:studioatdesktop@gmail.com" className="text-accent hover:text-accent-dark">studioatdesktop@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
