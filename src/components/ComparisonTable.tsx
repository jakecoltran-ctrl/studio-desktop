import { Link } from 'react-router-dom'

const features = [
  { name: 'Social Channels', silver: '1', gold: '2', platinum: '3' },
  { name: 'Shorts Per Session', silver: '8', gold: '12', platinum: '20' },
  { name: 'Studio Session', silver: true, gold: true, platinum: true },
  { name: 'Film Session', silver: '60 min', gold: '90 min', platinum: '120 min' },
  { name: 'Clip Editing', silver: true, gold: true, platinum: true },
  { name: 'Caption Writing', silver: true, gold: true, platinum: true },
  { name: 'Hashtag Research', silver: true, gold: true, platinum: true },
  { name: 'Posting & Scheduling', silver: true, gold: true, platinum: true },
  { name: 'Thumbnails', silver: true, gold: true, platinum: true },
  { name: 'Intro/Outro Video', silver: false, gold: true, platinum: true },
  { name: 'Strategy Call', silver: false, gold: true, platinum: true },
  { name: 'Delivery Time', silver: '5-7 days', gold: '3-5 days', platinum: '1-3 days' },
]

const CheckIcon = ({ color = 'text-accent' }: { color?: string }) => (
  <svg className={`w-5 h-5 ${color} mx-auto`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const planColors: Record<string, string> = {
  Silver: 'text-silver',
  Gold: 'text-gold',
  Platinum: 'text-platinum',
};

export default function ComparisonTable() {
  return (
    <section className="py-16 md:py-24 bg-gray-warm">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-3">Compare Packages</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">Find Your Perfect Fit</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            All premium packages include professional studio access, editing, and posting services.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden rounded-xl border border-gray-200 bg-white">
          <table className="w-full">
            <thead>
              <tr className="bg-charcoal text-white">
                <th className="text-left py-4 px-6 font-medium">Features</th>
                <th className="text-center py-4 px-6">
                  <div className="font-serif text-xl text-silver">Silver</div>
                  <div className="text-white/60 text-sm">$500/session</div>
                </th>
                <th className="text-center py-4 px-6 bg-gold/20">
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-serif text-xl text-gold">Gold</span>
                  </div>
                  <div className="text-white/80 text-sm">$750/session</div>
                </th>
                <th className="text-center py-4 px-6">
                  <div className="font-serif text-xl text-platinum">Platinum</div>
                  <div className="text-white/60 text-sm">$1,000/session</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={feature.name} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-4 px-6 text-charcoal font-medium">{feature.name}</td>
                  <td className="py-4 px-6 text-center">
                    {feature.silver === true ? (
                      <CheckIcon color="text-silver" />
                    ) : feature.silver === false ? (
                      <span className="text-gray-300">—</span>
                    ) : (
                      <span className="text-silver font-semibold">{feature.silver}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center bg-gold/5">
                    {feature.gold === true ? (
                      <CheckIcon color="text-gold" />
                    ) : feature.gold === false ? (
                      <span className="text-gray-300">—</span>
                    ) : (
                      <span className="text-gold font-semibold">{feature.gold}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {feature.platinum === true ? (
                      <CheckIcon color="text-platinum" />
                    ) : feature.platinum === false ? (
                      <span className="text-gray-300">—</span>
                    ) : (
                      <span className="text-platinum font-semibold">{feature.platinum}</span>
                    )}
                  </td>
                </tr>
              ))}
              <tr className="border-t border-gray-200">
                <td className="py-4 px-6"></td>
                <td className="py-4 px-6 text-center">
                  <Link
                    to="/silver"
                    className="text-silver hover:opacity-80 font-medium text-sm transition-colors"
                  >
                    Learn More
                  </Link>
                </td>
                <td className="py-4 px-6 text-center bg-gold/5">
                  <Link
                    to="/gold"
                    className="text-gold hover:opacity-80 font-medium text-sm transition-colors"
                  >
                    Learn More
                  </Link>
                </td>
                <td className="py-4 px-6 text-center">
                  <Link
                    to="/platinum"
                    className="text-platinum hover:opacity-80 font-medium text-sm transition-colors"
                  >
                    Learn More
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {[
            { name: 'Silver', price: '$500', channels: '1', shorts: '8', path: '/silver' },
            { name: 'Gold', price: '$750', channels: '2', shorts: '12', path: '/gold', popular: true },
            { name: 'Platinum', price: '$1,000', channels: '3', shorts: '20', path: '/platinum' },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-xl p-6 border ${
                plan.popular ? 'border-gold shadow-lg' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="flex items-center gap-1 text-gold text-xs font-medium mb-2">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Most Popular
                </div>
              )}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className={`font-serif text-2xl ${planColors[plan.name] || 'text-charcoal'}`}>{plan.name}</h3>
                  <p className="text-gray-500 text-sm">per session</p>
                </div>
                <div className="text-2xl font-bold text-charcoal">{plan.price}</div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Social Channels</span>
                  <span className="font-semibold text-charcoal">{plan.channels}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shorts Per Session</span>
                  <span className="font-semibold text-charcoal">{plan.shorts}</span>
                </div>
              </div>
              <Link
                to={plan.path}
                className="block text-center text-accent hover:text-accent-dark font-medium text-sm transition-colors"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
