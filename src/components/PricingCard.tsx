import { Link } from 'react-router-dom'

interface PricingCardProps {
  tier: string;
  price: string;
  period: string;
  channels: string;
  shorts: string;
  recordingTime?: string;
  deliveryTime?: string;
  isPopular?: boolean;
  to: string;
  extras?: string[];
}

const tierColors: Record<string, string> = {
  Silver: 'text-silver',
  Gold: 'text-gold',
  Platinum: 'text-platinum',
};

const features = [
  'Professional Studio Session',
  'Clip Editing',
  'Caption Writing',
  'Hashtags',
  'Posting & Scheduling',
];

export default function PricingCard({ tier, price, period, channels, shorts, recordingTime, deliveryTime, isPopular, to, extras = [] }: PricingCardProps) {
  return (
    <Link
      to={to}
      className={`relative bg-white rounded-sm p-8 md:p-10 flex flex-col transition-all duration-300 cursor-pointer group ${isPopular ? 'ring-2 ring-accent shadow-xl hover:shadow-2xl' : 'border border-gray-200 hover:shadow-xl hover:border-accent'}`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-medium px-4 py-1.5 rounded-full uppercase tracking-wider">
          Most Popular
        </div>
      )}

      <h3 className={`font-serif text-2xl md:text-3xl mb-4 transition-colors ${tierColors[tier] || 'text-charcoal'}`}>{tier}</h3>

      <div className="mb-8">
        <span className="text-4xl md:text-5xl font-bold text-charcoal">{price}</span>
        <span className="text-gray-500 text-lg">/{period}</span>
      </div>

      <div className="border-t border-b border-gray-100 py-4 mb-8">
        <p className="text-accent font-semibold text-lg">{channels}</p>
        <p className="text-accent font-semibold text-lg">{shorts}</p>
      </div>

      {deliveryTime && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 mb-8 text-center">
          <p className="text-charcoal font-semibold">{deliveryTime} Delivery</p>
        </div>
      )}

      <ul className="space-y-4 flex-grow">
        {features.slice(0, 1).map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-gray-600">
            <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
        {recordingTime && (
          <li className="flex items-start gap-3 text-gray-600">
            <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{recordingTime} Minute Film Session</span>
          </li>
        )}
        {features.slice(1).map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-gray-600">
            <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
        {extras.map((extra) => (
          <li key={extra} className="flex items-start gap-3 text-gray-600">
            <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{extra}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 text-center">
        <span className="text-accent font-medium group-hover:underline">
          Learn More →
        </span>
      </div>
    </Link>
  );
}
