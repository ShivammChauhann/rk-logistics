import { MapPin, Info } from 'lucide-react';
import CoverageMap from './CoverageMap';
import {
  WESTERN_UP_LOCATIONS,
  UTTARAKHAND_LOCATIONS,
} from '@/data/company';

export default function Coverage() {
  return (
    <section id="coverage" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-amber-600 text-xs font-semibold tracking-[0.2em] uppercase">
            Regional Coverage
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#071533] leading-tight tracking-tight">
            Where we operate
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our coverage is focused on Western Uttar Pradesh and Uttarakhand. The locations below
            are candidate service points — please confirm active route availability with our
            dispatch team for your specific consignment.
          </p>
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm">
          <span className="inline-flex items-center gap-2 text-gray-700">
            <span className="w-4 h-4 rounded-full bg-amber-500 border-2 border-white shadow" />
            Registered Office
          </span>
          <span className="inline-flex items-center gap-2 text-gray-700">
            <span className="w-4 h-4 rounded-full bg-[#0b1e3f] border-2 border-white shadow" />
            Candidate Service Location
          </span>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <div>
            <CoverageMap
              id="map-up"
              title="Western Uttar Pradesh Coverage"
              points={WESTERN_UP_LOCATIONS}
              center={[28.6692, 77.4538]}
              zoom={8}
            />
            <LocationList
              title="Western Uttar Pradesh — candidate locations"
              points={WESTERN_UP_LOCATIONS}
            />
          </div>
          <div>
            <CoverageMap
              id="map-uk"
              title="Uttarakhand Coverage"
              points={UTTARAKHAND_LOCATIONS}
              center={[30.0869, 78.2676]}
              zoom={9}
            />
            <LocationList
              title="Uttarakhand — candidate locations"
              points={UTTARAKHAND_LOCATIONS}
            />
          </div>
        </div>

        <div className="mt-8 max-w-3xl mx-auto flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg p-4">
          <Info className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-600 leading-relaxed">
            The Ghaziabad–Dehradun corridor is highlighted as a key regional route. Every town
            shown is a candidate location; please verify with our team before treating any town as
            an active operating hub. We do not provide nationwide service.
          </p>
        </div>
      </div>
    </section>
  );
}

function LocationList({
  title,
  points,
}: {
  title: string;
  points: typeof WESTERN_UP_LOCATIONS;
}) {
  return (
    <div className="mt-4 bg-white rounded-xl border border-gray-200 p-4">
      <h4 className="text-xs font-semibold tracking-wider uppercase text-gray-500 mb-3">
        {title}
      </h4>
      <ul className="flex flex-wrap gap-2">
        {points.map((p) => (
          <li key={p.city}>
            <span
              className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md font-medium ${
                p.type === 'registered'
                  ? 'bg-amber-100 text-amber-800 border border-amber-200'
                  : 'bg-gray-100 text-gray-700 border border-gray-200'
              }`}
            >
              <MapPin className="w-3 h-3" />
              {p.city}
              {p.type === 'registered' && (
                <span className="text-[10px] font-bold uppercase tracking-wide">HQ</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
