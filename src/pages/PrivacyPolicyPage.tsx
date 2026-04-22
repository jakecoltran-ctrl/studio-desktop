import { Link } from 'react-router-dom'

export default function PrivacyPolicyPage() {
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
          <h1 className="font-serif text-4xl md:text-5xl text-white">Privacy Policy</h1>
          <p className="text-white/60 mt-4">Last updated: April 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-gray max-w-none">
          <section className="mb-10">
            <h2 className="font-serif text-2xl text-charcoal mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We collect information you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Name and contact information (email, phone number)</li>
              <li>Billing and payment information (processed securely through Stripe)</li>
              <li>Booking and scheduling preferences</li>
              <li>Communications you send to us</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-serif text-2xl text-charcoal mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Schedule and manage your appointments</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about services, offers, and promotions</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-serif text-2xl text-charcoal mb-4">3. Information Sharing</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Service providers who assist in our operations (Stripe for payments, Calendly for scheduling)</li>
              <li>Professional advisors such as lawyers and accountants</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-serif text-2xl text-charcoal mb-4">4. Payment Security</h2>
            <p className="text-gray-600 leading-relaxed">
              All payment transactions are processed through Stripe, a PCI-compliant payment processor. We do not store your full credit card information on our servers. Stripe's privacy policy governs the collection and use of your payment information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-serif text-2xl text-charcoal mb-4">5. Cookies and Tracking</h2>
            <p className="text-gray-600 leading-relaxed">
              Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookies through your browser settings. Third-party services like Calendly and Stripe may also use cookies when you interact with their embedded features on our site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-serif text-2xl text-charcoal mb-4">6. Data Retention</h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. We may also retain certain information as required by law or for legitimate business purposes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-serif text-2xl text-charcoal mb-4">7. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              To exercise these rights, please contact us at studioatdesktop@gmail.com.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-serif text-2xl text-charcoal mb-4">8. Children's Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-serif text-2xl text-charcoal mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-serif text-2xl text-charcoal mb-4">10. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
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
