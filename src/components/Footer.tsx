import { Phone, MessageCircle, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '@/data/company';

const SERVICE_LINKS = [
  'Part Load (PTL)',
  'Full Truck Load (FTL)',
  'B2B Goods Transportation',
  'Regional Freight Movement',
  'Freight Coordination & Dispatch',
];

const COVERAGE_LINKS = ['Western Uttar Pradesh', 'Uttarakhand', 'Ghaziabad–Dehradun Corridor'];

const WA_INTRO = encodeURIComponent(
  'Hello RK Logistics, I would like to enquire about your freight services.'
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#071533] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={COMPANY.logoUrl}
                alt="RK Logistics Solution Private Limited logo"
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="leading-tight">
                <span className="block text-white font-bold">RK Logistics</span>
                <span className="block text-amber-400 text-[10px] tracking-wide uppercase">
                  Solution Pvt. Ltd.
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              A regional goods transportation and logistics company serving Western Uttar Pradesh
              and Uttarakhand, with dispatch coordination from Ghaziabad.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services + Coverage */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Services & Coverage
            </h4>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
              {COVERAGE_LINKS.map((c) => (
                <li key={c}>
                  <a
                    href="#coverage"
                    className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${COMPANY.phoneTel}`}
                  className="flex items-start gap-2.5 text-sm text-gray-400 hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{COMPANY.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}?text=${WA_INTRO}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-gray-400 hover:text-amber-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>WhatsApp: {COMPANY.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-2.5 text-sm text-gray-400 hover:text-amber-400 transition-colors break-all"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{COMPANY.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">
                  <strong className="text-gray-300 font-medium">Registered Office:</strong>{' '}
                  {COMPANY.address}
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">
                  <strong className="text-gray-300 font-medium">Ghaziabad HUB:</strong>{' '}
                  {COMPANY.hubAddress}
                </span>
              </li>
              <li>
                <a
                  href={COMPANY.trackDocketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  Track Docket
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400 text-center sm:text-left">
            © {year} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Serving Western Uttar Pradesh & Uttarakhand · Dispatch from Ghaziabad
          </p>
        </div>
      </div>
    </footer>
  );
}
