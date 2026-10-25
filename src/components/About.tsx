import { ShieldCheck, MapPinned, Truck, Clock3, CheckCircle2 } from 'lucide-react';

const PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Dependable Operations',
    text: 'Consistent dispatch coordination from our registered office in Ghaziabad, supporting businesses that need freight to move on schedule.',
  },
  {
    icon: MapPinned,
    title: 'Regional Specialization',
    text: 'Focused coverage across Western Uttar Pradesh and Uttarakhand — we know the routes, the regulations, and the corridors that matter.',
  },
  {
    icon: Truck,
    title: 'PTL & FTL Capability',
    text: 'Part Truck Load for consolidated consignments and Full Truck Load for dedicated vehicle allocation, subject to route availability.',
  },
  {
    icon: Clock3,
    title: 'Responsive Dispatch',
    text: 'Direct access to our dispatch team by phone, WhatsApp, and email for status updates and freight coordination.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="text-amber-600 text-xs font-semibold tracking-[0.2em] uppercase">
              About Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#071533] leading-tight tracking-tight">
              A regional logistics company built on reliability
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              RK Logistics Solution Private Limited is a goods transportation and logistics company
              registered in Ghaziabad, Uttar Pradesh. We primarily serve businesses across Western
              Uttar Pradesh and Uttarakhand, coordinating Part Truck Load and Full Truck Load
              freight movement through a dispatch team that knows the region.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We work with commercial consignments across regional routes — connecting industrial
              and trading hubs with dependable freight coordination rather than presenting
              ourselves as a nationwide provider.
            </p>

            <ul className="mt-6 space-y-2.5">
              {[
                'Registered office in Ghaziabad, Uttar Pradesh',
                'PTL and FTL freight coordination',
                'Direct dispatch contact via phone, WhatsApp, and email',
                'Coverage focused on Western UP and Uttarakhand',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <span className="grid place-items-center w-11 h-11 rounded-lg bg-[#071533] text-amber-400 mb-4">
                  <p.icon className="w-5 h-5" strokeWidth={2.2} />
                </span>
                <h3 className="font-semibold text-[#071533] text-base">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
