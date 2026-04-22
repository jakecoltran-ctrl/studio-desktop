import { useState } from 'react'

const faqs = [
  {
    question: 'What should I wear to my session?',
    answer: 'We recommend wearing solid colors that complement your brand. Avoid busy patterns or logos (unless they\'re your own). Bring 2-3 outfit options so we can choose what looks best on camera.',
  },
  {
    question: 'How soon will my content be ready?',
    answer: 'For premium packages, you\'ll receive your edited content within 5-7 business days after your recording session. We\'ll then schedule posts according to optimal engagement times for your platforms.',
  },
  {
    question: 'Can I cancel or reschedule my session?',
    answer: 'All bookings are final. To cancel or reschedule, you must contact us at studioatdesktop@gmail.com. Requests made at least 48 hours before your session can be rescheduled at no additional charge. Late cancellations (less than 24 hours) and no-shows are non-refundable.',
  },
  {
    question: 'What platforms do you post to?',
    answer: 'We support all major social platforms including Instagram, TikTok, YouTube, LinkedIn, Facebook, and X (Twitter). Your package determines how many platforms we\'ll manage for you.',
  },
  {
    question: 'Do I need to bring anything to the studio?',
    answer: 'Just yourself and your outfit options! We provide all professional equipment, lighting, and sound. If you have specific props or products you\'d like to feature, feel free to bring those along.',
  },
  {
    question: 'What if I\'m not happy with the content?',
    answer: 'Your satisfaction is our priority. Each package includes one round of revisions. We\'ll work with you until the content matches your vision and brand standards.',
  },
  {
    question: 'How many sessions do I need?',
    answer: 'Each session is a one-time purchase. We strongly recommend committing to at least 6 months of sessions to see consistent results for your brand. You can book sessions as needed or schedule multiple in advance.',
  },
  {
    question: 'What\'s the difference between Premium and Build Your Brand packages?',
    answer: 'Premium Packages (Silver, Gold, Platinum) include the full process: recording, editing, captions, hashtags, and posting to your social channels. Build Your Brand packages are more focused—Bronze gives you studio access only (you handle editing and posting), while the Digital Business Card is a one-time professionally produced brand video.',
  },
  {
    question: 'Can you use my content to promote your business?',
    answer: 'Yes, by using our services you grant us permission to use the content we create for our own promotional purposes, such as portfolio displays and social media. If you prefer we don\'t use your content this way, just let us know before your session.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-warm">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-3">Questions?</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Everything you need to know before your session.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-charcoal">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">
            Still have questions?{' '}
            <a href="#contact" className="text-accent hover:text-accent-dark transition-colors">
              Contact us
            </a>{' '}
            or email us at{' '}
            <a href="mailto:studioatdesktop@gmail.com" className="text-accent hover:text-accent-dark transition-colors">
              studioatdesktop@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
