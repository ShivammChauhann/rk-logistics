import { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Copy, Check } from 'lucide-react';
import { COMPANY } from '@/data/company';

const WA_INTRO = encodeURIComponent(
  'Hello RK Logistics, I would like to enquire about your freight services.'
);

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(COMPANY.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard may be unavailable; ignore
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-amber-600 text-xs font-semibold tracking-[0.2em] uppercase">
            Contact & Dispatch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#071533] leading-tight tracking-tight">
            Talk to our dispatch team
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Reach us by phone, WhatsApp, or email for freight enquiries, dispatch coordination, and
            route availability.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <ContactCard
            icon={Phone}
            label="Dispatch / Mobile"
            value={COMPANY.phone}
            href={`tel:${COMPANY.phoneTel}`}
            cta="Call now"
          />
          <ContactCard
            icon={MessageCircle}
            label="WhatsApp"
            value={COMPANY.whatsappDisplay}
            href={`https://wa.me/${COMPANY.whatsapp}?text=${WA_INTRO}`}
            external
            cta="Chat on WhatsApp"
          />
          <ContactCard
            icon={Mail}
            label="Email"
            value={COMPANY.email}
            href={`mailto:${COMPANY.email}`}
            cta="Send email"
          />
        </div>

        {/* Address card */}
        <div className="mt-6 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            <span className="grid place-items-center w-12 h-12 rounded-lg bg-[#071533] text-amber-400 flex-shrink-0">
              <MapPin className="w-6 h-6" strokeWidth={2.2} />
            </span>
            <div className="flex-1">
              <h3 className="font-bold text-[#071533] text-lg">Registered Office</h3>
              <p className="mt-1.5 text-gray-600 leading-relaxed text-sm sm:text-base">
                {COMPANY.name}
                <br />
                {COMPANY.address}
              </p>
              <button
                type="button"
                onClick={copyAddress}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#071533] hover:text-amber-600 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    Address copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy address
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  cta,
  external,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href: string;
  cta: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:-translate-y-1 hover:shadow-md transition-all"
    >
      <span className="grid place-items-center w-12 h-12 rounded-lg bg-[#071533] text-amber-400 mb-4 group-hover:scale-105 transition-transform">
        <Icon className="w-6 h-6" strokeWidth={2.2} />
      </span>
      <p className="text-xs font-semibold tracking-wider uppercase text-gray-500">{label}</p>
      <p className="mt-1 text-[#071533] font-semibold text-base sm:text-lg break-words">{value}</p>
      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-amber-600">
        {cta}
      </span>
    </a>
  );
}
