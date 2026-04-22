import { Link } from 'react-router-dom'

interface SecondaryCardProps {
  title: string;
  price: string;
  priceLabel: string;
  features: string[];
  to: string;
  note?: string;
}

const titleColors: Record<string, string> = {
  Bronze: 'text-bronze',
  'Digital Business Card': 'text-business-card',
};

export default function SecondaryCard({ title, price, priceLabel, features, to, note }: SecondaryCardProps) {
  return (
    <Link
      to={to}
      className="bg-white rounded-sm p-8 md:p-10 border border-gray-200 hover:shadow-xl hover:border-accent transition-all duration-300 cursor-pointer group block"
    >
      <h3 className={`font-serif text-2xl md:text-3xl mb-2 transition-colors ${titleColors[title] || 'text-charcoal'}`}>{title}</h3>
      {note && (
        <p className="text-gray-500 text-sm mb-4">{note}</p>
      )}

      <div className="mb-8">
        <span className="text-3xl md:text-4xl font-bold text-charcoal">{price}</span>
        <span className="text-gray-500 ml-2">{priceLabel}</span>
      </div>

      <ul className="space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-gray-600">
            <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
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
