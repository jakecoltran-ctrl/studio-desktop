// Stripe Payment Links Configuration
// Replace these placeholder URLs with your actual Stripe Payment Links
// Create them at: https://dashboard.stripe.com/payment-links

export const stripeLinks = {
  // Premium Packages (per session)
  silver: {
    name: 'Silver',
    price: '$500/session',
    type: 'one-time' as const,
  },
  gold: {
    name: 'Gold',
    price: '$750/session',
    type: 'one-time' as const,
  },
  platinum: {
    name: 'Platinum',
    price: '$1,000/session',
    type: 'one-time' as const,
  },

  // Build Your Brand
  bronze: {
    name: 'Bronze',
    price: '$250/session',
    type: 'one-time' as const,
  },
  digitalBusinessCard: {
    name: 'Digital Business Card',
    price: '$995',
    type: 'one-time' as const,
  },
} as const;

export type PackageKey = keyof typeof stripeLinks;
