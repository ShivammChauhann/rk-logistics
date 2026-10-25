import { Truck } from 'lucide-react';
import { ROUTE_STOPS } from '@/data/company';

/**
 * Route strip: location labels stay stationary; a long-trailer truck
 * animates left-to-right along the route. Road markings scroll to imply
 * forward motion. Respects prefers-reduced-motion (handled in CSS).
 */
export default function RouteStrip() {
  return (
    <section
      aria-label="Regional route corridor"
      className="relative bg-[#071533] py-10 sm:py-14 overflow-hidden border-y border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase mb-1">
          Regional Corridor
        </p>
        <h2 className="text-center text-white text-lg sm:text-xl font-semibold mb-8">
          Ghaziabad → Saharanpur → Haridwar → Dehradun
        </h2>
      </div>

      {/* Road with stationary labels + moving truck */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stationary location labels */}
        <div className="relative z-10 grid grid-cols-4 sm:grid-cols-7 gap-1 sm:gap-2 mb-6">
          {ROUTE_STOPS.map((stop, i) => (
            <div key={stop} className="flex flex-col items-center text-center">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 ring-4 ring-amber-400/20 mb-1.5" />
              <span className="text-[10px] sm:text-xs text-gray-200 font-medium leading-tight">
                {stop}
              </span>
              {i === 0 && (
                <span className="hidden sm:block text-[9px] text-amber-300/80 mt-0.5">Start</span>
              )}
              {i === ROUTE_STOPS.length - 1 && (
                <span className="hidden sm:block text-[9px] text-amber-300/80 mt-0.5">End</span>
              )}
            </div>
          ))}
        </div>

        {/* Road lane */}
        <div className="relative h-20 sm:h-24 rounded-xl bg-gradient-to-b from-[#15315c] to-[#0b1e3f] border border-white/10 overflow-hidden">
          {/* Center dashed road markings (scrolling) */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 road-markings opacity-80" />

          {/* Animated long-trailer truck moving left to right */}
          <div className="truck-traverse absolute top-1/2 -translate-y-1/2 left-0 flex items-center">
            <LongTrailerTruck />
          </div>

          {/* Subtle vignette ends */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0b1e3f] to-transparent" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0b1e3f] to-transparent" />
        </div>

        <p className="text-center text-gray-400 text-[11px] mt-4">
          Route corridor shown for illustration. Confirm active service availability with our dispatch team.
        </p>
      </div>
    </section>
  );
}

/** A stylized long-trailer truck built from CSS/SVG with spinning wheels. */
function LongTrailerTruck() {
  return (
    <div className="flex items-end gap-1 select-none" aria-hidden="true">
      {/* Cab */}
      <div className="relative">
        <div className="w-16 sm:w-20 h-9 sm:h-11 bg-gradient-to-b from-amber-400 to-amber-600 rounded-t-lg rounded-r-lg shadow-lg shadow-black/40">
          {/* Windshield */}
          <div className="absolute top-1 right-1.5 w-6 sm:w-7 h-4 sm:h-5 bg-[#0b1e3f]/80 rounded-sm" />
          {/* Headlight */}
          <div className="absolute bottom-1 right-0 w-2 h-2 bg-amber-100 rounded-full headlight-pulse shadow-[0_0_10px_4px_rgba(252,211,77,0.7)]" />
        </div>
        {/* Cab wheels */}
        <Wheel />
      </div>

      {/* Trailer gap */}
      <div className="w-3 sm:w-4 h-1 bg-gray-500/60 mb-3" />

      {/* Long trailer */}
      <div className="relative">
        <div className="w-44 sm:w-64 h-11 sm:h-14 bg-gradient-to-b from-slate-200 to-slate-400 rounded-sm shadow-lg shadow-black/40 border border-slate-500/40">
          {/* Trailer branding stripe */}
          <div className="absolute top-1.5 left-0 right-0 h-1 bg-amber-500/80" />
          <div className="absolute bottom-1.5 left-0 right-0 h-1 bg-[#071533]/70" />
          {/* Door lines */}
          <div className="absolute inset-y-2 left-1/3 w-px bg-slate-500/60" />
          <div className="absolute inset-y-2 left-2/3 w-px bg-slate-500/60" />
        </div>
        {/* Trailer wheels — tandem set */}
        <div className="flex gap-1 justify-end pr-2">
          <Wheel />
          <Wheel />
        </div>
      </div>

      {/* Truck icon overlay for extra recognition */}
      <Truck className="hidden" />
    </div>
  );
}

function Wheel() {
  return (
    <div className="relative w-5 sm:w-6 h-5 sm:h-6 -mt-1">
      <div className="absolute inset-0 rounded-full bg-[#0b1e3f] border-2 border-slate-600 wheel-spin">
        {/* Spokes */}
        <div className="absolute inset-1 rounded-full border border-slate-500/70" />
        <div className="absolute left-1/2 top-0.5 bottom-0.5 w-0.5 -translate-x-1/2 bg-slate-500/70" />
        <div className="absolute top-1/2 left-0.5 right-0.5 h-0.5 -translate-y-1/2 bg-slate-500/70" />
      </div>
    </div>
  );
}
