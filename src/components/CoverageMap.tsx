import { useEffect, useRef } from 'react';
import L from 'leaflet';
import type { CoveragePoint } from '@/data/company';

type Props = {
  points: CoveragePoint[];
  center: [number, number];
  zoom: number;
  title: string;
  id: string;
};

const registeredIcon = L.divIcon({
  className: 'rk-marker',
  html: '<div class="rk-marker" style="background:#f59e0b;"><span>HQ</span></div>',
  iconSize: [28, 28],
  iconAnchor: [14, 28],
  popupAnchor: [0, -28],
});

const regionalIcon = L.divIcon({
  className: 'rk-marker',
  html: '<div class="rk-marker" style="background:#0b1e3f;"><span>•</span></div>',
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24],
});

export default function CoverageMap({ points, center, zoom, title, id }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center,
      zoom,
      scrollWheelZoom: false,
      zoomControl: true,
    });
    mapRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    const group = L.featureGroup();

    points.forEach((p) => {
      const icon = p.type === 'registered' ? registeredIcon : regionalIcon;
      const marker = L.marker([p.lat, p.lng], { icon }).addTo(group);
      const badge = p.type === 'registered' ? 'Registered Office' : 'Service Location';
      marker.bindPopup(
        `<strong>${p.city}</strong><br/>${badge}${p.note ? `<br/><span style="color:#666">${p.note}</span>` : ''}`
      );
    });

    group.addTo(map);
    map.fitBounds(group.getBounds().pad(0.15));

    // Ensure correct rendering after mount
    setTimeout(() => map.invalidateSize(), 200);

    return () => {
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative z-0 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <h3 className="font-semibold text-[#071533]">{title}</h3>
      </div>
      <div
        ref={containerRef}
        id={id}
        role="region"
        aria-label={`${title} map`}
        className="h-[360px] sm:h-[440px] w-full"
      />
    </div>
  );
}
