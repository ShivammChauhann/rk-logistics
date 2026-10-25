import { ArrowRight, MapPin } from 'lucide-react';
import { COMPANY, HERO_TRUCK_IMAGE } from '@/data/company';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#071533]">
      {/* Background image with ken-burns */}
      <div className="absolute inset-0">
        <img
          src={HERO_TRUCK_IMAGE}
          alt="Long-trailer goods truck traveling on a nighttime highway with illuminated headlights"
          className="w-full h-full object-cover ken-burns"
          fetchPriority="high"
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071533] via-[#071533]/85 to-[#071533]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071533] via-transparent to-[#071533]/60" />
        {/* Headlight glow */}
        <div className="absolute right-[18%] top-1/2 -translate-y-1/2 w-72 h-72 bg-amber-300/20 blur-3xl rounded-full headlight-pulse pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16 lg:pt-24">
        <div className="max-w-3xl">
          <span className="fade-up inline-flex items-center gap-2 bg-amber-500/15 text-amber-300 text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full border border-amber-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Ghaziabad · Western UP · Uttarakhand
          </span>

          <h1
            className="fade-up mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight"
            style={{ animationDelay: '0.1s' }}
          >
            Reliable Goods Transportation Across{' '}
            <span className="text-amber-400">Western Uttar Pradesh</span> &{' '}
            <span className="text-amber-400">Uttarakhand</span>
          </h1>

          <p
            className="fade-up mt-6 text-base sm:text-lg text-gray-200/90 leading-relaxed max-w-2xl"
            style={{ animationDelay: '0.2s' }}
          >
            Your trusted logistics partner for Part Truck Load and Full Truck Load transportation,
            connecting businesses across Western Uttar Pradesh and Uttarakhand with dependable
            freight movement.
          </p>

          <div className="fade-up mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4" style={{ animationDelay: '0.3s' }}>
            <a
              href="#enquiry"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#071533] font-semibold px-6 py-3.5 rounded-md shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all"
            >
              Get a Freight Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={COMPANY.trackDocketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-md border border-white/20 backdrop-blur-sm transition-all"
            >
              <MapPin className="w-5 h-5" />
              Track Your Docket
            </a>
          </div>

          {/* Campaign caption */}
          <div
            className="fade-up mt-10 lg:mt-12 border-l-2 border-amber-400 pl-4"
            style={{ animationDelay: '0.4s' }}
          >
            <p className="text-amber-400 font-bold text-sm sm:text-base tracking-[0.18em] uppercase">
              Night Fleet On Move
            </p>
            <p className="text-gray-300 text-xs sm:text-sm tracking-[0.12em] uppercase mt-0.5">
              NH-48 Corridor — Ghaziabad–Dehradun
            </p>
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
    </section>
  );
}
