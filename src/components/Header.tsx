import { useEffect, useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '@/data/company';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[1100] transition-all duration-300 ${
        scrolled
          ? 'bg-[#071533]/95 backdrop-blur shadow-lg shadow-black/20'
          : 'bg-[#071533]/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group min-w-0" onClick={close}>
            <img
              src="/Image_49299C7B-6993-469A-A624-09C34908F6DE.jpeg"
              alt="RK Logistics Solution Private Limited logo"
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover shadow-lg shadow-black/20 group-hover:scale-105 transition-transform flex-shrink-0"
            />
            <span className="block leading-tight min-w-0 max-w-[118px] sm:max-w-none">
              <span className="block text-white font-bold text-xs sm:text-base lg:text-lg tracking-tight truncate">
                RK Logistics
              </span>
              <span className="block text-amber-400 text-[9px] sm:text-[10px] lg:text-xs font-medium tracking-wide uppercase truncate">
                Solution Pvt. Ltd.
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-200 hover:text-amber-400 transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 hover:after:w-full after:bg-amber-400 after:transition-all"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={COMPANY.trackDocketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap flex-shrink-0 bg-amber-500 hover:bg-amber-400 text-[#071533] font-semibold text-sm px-3.5 py-2.5 rounded-md shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all"
            >
              <MapPin className="w-4 h-4" strokeWidth={2.4} />
              Track Docket
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-white hover:bg-white/10 transition-colors"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 bg-[#071533] border-t border-white/10 ${
          open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 sm:px-6 py-4 flex flex-col gap-1" aria-label="Mobile">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="text-gray-200 hover:text-amber-400 hover:bg-white/5 px-3 py-2.5 rounded-md text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
