const extras = [
  { item: 'Zoom Guest', price: '$100' },
  { item: 'On-site B Roll', price: '$150' },
];

export default function ExtrasSection() {
  return (
    <section className="w-full py-16 md:py-20 px-6 bg-white">
      {/* Divider with label */}
      <div className="flex items-center gap-6 mb-12 max-w-4xl mx-auto">
        <div className="flex-grow h-px bg-accent" />
        <h2 className="text-accent font-serif text-xl md:text-2xl whitespace-nowrap">
          Extras & Add-Ons
        </h2>
        <div className="flex-grow h-px bg-accent" />
      </div>

      {/* A La Carte table */}
      <div className="max-w-xl mx-auto">
        <h3 className="text-lg font-medium text-charcoal mb-6 text-center tracking-wide uppercase">
          A La Carte
        </h3>
        <div className="border border-gray-200 rounded-sm overflow-hidden">
          {extras.map((extra, index) => (
            <div
              key={extra.item}
              className={`flex justify-between items-center px-6 py-5 ${index !== extras.length - 1 ? 'border-b border-gray-200' : ''} hover:bg-gray-50 transition-colors`}
            >
              <span className="text-gray-700">{extra.item}</span>
              <span className="font-semibold text-charcoal">{extra.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
