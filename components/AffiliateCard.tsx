import { Tour } from '@/types';

interface AffiliateCardProps {
  tour: Tour;
}

export default function AffiliateCard({ tour }: AffiliateCardProps) {
  const platformColor =
    tour.platform === 'viator' ? 'bg-blue-600' : 'bg-green-600';

  return (
    <div className="overflow-hidden rounded-lg border border-sacred-green/20 bg-white p-6 transition-shadow hover:shadow-lg">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h4 className="mb-2 font-serif font-bold text-sacred-green">
            {tour.name}
          </h4>
          {tour.duration && (
            <p className="text-sm text-gray-600">{tour.duration}</p>
          )}
        </div>
        {tour.rating && (
          <div className="ml-4 rounded-lg bg-deep-gold/10 px-2 py-1">
            <span className="font-semibold text-deep-gold">★ {tour.rating}</span>
          </div>
        )}
      </div>

      <div className="mb-4 flex items-baseline justify-between">
        <div>
          <span className="text-3xl font-bold text-sacred-green">
            ${tour.price}
          </span>
          <span className="ml-1 text-gray-600">{tour.currency}</span>
        </div>
      </div>

      <a
        href={tour.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full rounded-lg py-3 text-center font-semibold text-white transition-transform hover:scale-105 ${platformColor}`}
      >
        Book Now on{' '}
        {tour.platform === 'viator' ? 'Viator' : 'GetYourGuide'}
      </a>

      <p className="mt-3 text-xs text-gray-500">
        Affiliate link - you support ONSAI at no extra cost
      </p>
    </div>
  );
}
