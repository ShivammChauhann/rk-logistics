import { ArrowRight, Package, Truck, Building2, Route as RouteIcon, Headset } from 'lucide-react';
import {
  PTL_CARGO_IMAGE,
  FTL_TRUCK_IMAGE,
  B2B_IMAGE,
  REGIONAL_FREIGHT_IMAGE,
  DISPATCH_IMAGE,
} from '@/data/company';

type Service = {
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: typeof Package;
  highlight?: boolean;
  caption?: string;
};

const SERVICES: Service[] = [
  {
    title: 'Part Load (PTL)',
    description:
      'Cost-conscious freight transportation for consignments that do not require an entire truck, subject to route availability, cargo compatibility, and operational requirements.',
    image: PTL_CARGO_IMAGE,
    alt: 'Consolidated palletized commercial goods in a warehouse',
    icon: Package,
  },
  {
    title: 'Full Truck Load (FTL)',
    description:
      'Dedicated truck transportation for larger consignments requiring a vehicle allocated to a single shipment.',
    image: FTL_TRUCK_IMAGE,
    alt: 'Long-trailer truck traveling on a nighttime highway with illuminated headlights',
    icon: Truck,
    highlight: true,
    caption: 'Night Fleet On Move · NH-48 Corridor — Ghaziabad–Dehradun',
  },
  {
    title: 'B2B Goods Transportation',
    description:
      'Business-to-business transportation of commercial consignments between industrial and trading locations across our regional coverage.',
    image: B2B_IMAGE,
    alt: 'Warehouse worker moving consolidated commercial goods with a pallet jack',
    icon: Building2,
  },
  {
    title: 'Regional Freight Movement',
    description:
      'Freight coordination across Western Uttar Pradesh and Uttarakhand routes, connecting regional hubs with dependable dispatch support.',
    image: REGIONAL_FREIGHT_IMAGE,
    alt: 'Heavy cargo trucks traveling on a highway in Uttar Pradesh, India',
    icon: RouteIcon,
  },
  {
    title: 'Commercial Consignment Transport',
    description:
      'Transportation of commercial goods and consignments along our serviced corridors, handled with operational care and regional route knowledge.',
    image: DISPATCH_IMAGE,
    alt: 'Stacked cardboard boxes organized in a logistics warehouse',
    icon: Package,
  },
  {
    title: 'Freight Coordination & Dispatch Support',
    description:
      'Our dispatch team coordinates pickups, deliveries, and freight status updates so businesses can plan around dependable communication.',
    image: '',
    alt: '',
    icon: Headset,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-amber-600 text-xs font-semibold tracking-[0.2em] uppercase">
            Core Logistics Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#071533] leading-tight tracking-tight">
            Freight services built for regional businesses
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Part Truck Load and Full Truck Load transportation, plus freight coordination across
            Western Uttar Pradesh and Uttarakhand — tailored to the routes we actually serve.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article
      className={`group flex flex-col rounded-2xl overflow-hidden border transition-all hover:-translate-y-1 ${
        service.highlight
          ? 'border-amber-300 shadow-lg shadow-amber-500/10 ring-1 ring-amber-200'
          : 'border-gray-200 shadow-sm hover:shadow-md'
      }`}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        {service.image ? (
          <img
            src={service.image}
            alt={service.alt}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full grid place-items-center bg-gradient-to-br from-[#071533] to-[#15315c]">
            <service.icon className="w-12 h-12 text-amber-400" strokeWidth={1.8} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071533]/70 via-transparent to-transparent" />
        <span className="absolute top-3 left-3 grid place-items-center w-9 h-9 rounded-lg bg-white/90 text-[#071533] shadow-sm">
          <service.icon className="w-5 h-5" strokeWidth={2.2} />
        </span>
        {service.highlight && (
          <span className="absolute top-3 right-3 bg-amber-500 text-[#071533] text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
            Featured
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-bold text-[#071533] text-lg">{service.title}</h3>
        {service.caption && (
          <p className="mt-1.5 text-amber-600 text-[11px] font-semibold tracking-wide uppercase">
            {service.caption}
          </p>
        )}
        <p className="mt-2.5 text-sm text-gray-600 leading-relaxed flex-1">{service.description}</p>
        <a
          href="#enquiry"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#071533] hover:text-amber-600 transition-colors group/link"
        >
          Request a Quote
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </article>
  );
}
