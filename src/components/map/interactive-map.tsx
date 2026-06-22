"use client";

import { useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { ExternalLink, Footprints, Minus, Plus } from "lucide-react";
import { useTheme } from "next-themes";
import L from "leaflet";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/context/locale-context";
import {
  MAP_CENTER,
  MAP_MARKERS,
  type MapFilter,
  type MapMarker,
} from "@/lib/data";
import { cn } from "@/lib/utils";

const TILES = {
  light:
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
  dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
};

const MARKER_ICONS: Record<MapMarker["category"], string> = {
  nature: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-8"/><path d="M8 14l4-8 4 8"/><path d="M2 22h20"/></svg>`,
  culture: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 18v-7"/><path d="M11.5 9.5 9 3"/><path d="M14 18v-7"/><path d="M12.5 9.5 15 3"/><path d="M3 21h18"/><path d="M6 18h12"/></svg>`,
  practical: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 2"/><path d="m16 19 2 2"/></svg>`,
};

const MARKER_COLORS: Record<MapMarker["category"], string> = {
  nature: "#2E5A3C",
  culture: "#C9A227",
  practical: "#0A3D62",
};

function createIcon(marker: MapMarker, isActive: boolean) {
  const color = MARKER_COLORS[marker.category];

  return L.divIcon({
    className: "map-pin-icon",
    html: `<div class="map-pin ${isActive ? "map-pin--active" : ""}" style="--pin-color:${color}">
      <span class="map-pin__icon">${MARKER_ICONS[marker.category]}</span>
    </div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 32],
    popupAnchor: [0, -30],
  });
}

function directionsUrl(marker: MapMarker) {
  return `https://www.google.com/maps/dir/?api=1&destination=${marker.lat},${marker.lng}`;
}

function MapPopup({ marker }: { marker: MapMarker }) {
  const { t } = useLocale();
  const localized = t.map.markers[marker.id as keyof typeof t.map.markers];

  return (
    <div className="map-popup">
      <div className="relative h-28 w-full overflow-hidden rounded-lg">
        <Image
          src={marker.image}
          alt={localized?.imageAlt ?? marker.imageAlt}
          fill
          className="object-cover"
          sizes="280px"
        />
      </div>
      <span className="map-popup__badge">{t.map.categories[marker.category]}</span>
      <h3 className="map-popup__title">{localized?.name ?? marker.name}</h3>
      <p className="map-popup__desc">{localized?.description ?? marker.description}</p>
      <p className="map-popup__walk">
        <Footprints className="h-3.5 w-3.5" aria-hidden="true" />
        {localized?.walkTime ?? marker.walkTime}
      </p>
      <a
        href={directionsUrl(marker)}
        target="_blank"
        rel="noopener noreferrer"
        className="map-popup__link"
      >
        {t.map.getDirections}
        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </div>
  );
}

function ThemeTileLayer() {
  const map = useMap();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    map.invalidateSize();
  }, [map, isDark]);

  return (
    <TileLayer
      key={isDark ? "dark" : "light"}
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
      url={isDark ? TILES.dark : TILES.light}
    />
  );
}

function ScrollWheelZoomOnHover() {
  const map = useMap();

  useEffect(() => {
    map.scrollWheelZoom.disable();

    const container = map.getContainer();
    const enable = () => map.scrollWheelZoom.enable();
    const disable = () => map.scrollWheelZoom.disable();

    container.addEventListener("mouseenter", enable);
    container.addEventListener("mouseleave", disable);

    return () => {
      container.removeEventListener("mouseenter", enable);
      container.removeEventListener("mouseleave", disable);
      map.scrollWheelZoom.disable();
    };
  }, [map]);

  return null;
}

function MapZoomControls() {
  const map = useMap();
  const { t } = useLocale();

  const zoomBy = (delta: number) => {
    const center = map.getCenter();
    const next = Math.max(
      map.getMinZoom(),
      Math.min(map.getMaxZoom(), map.getZoom() + delta)
    );
    map.flyTo(center, next, { duration: 0.5, easeLinearity: 0.25 });
  };

  return (
    <div className="leaflet-bottom leaflet-right !bottom-3 !right-3 z-[400]">
      <div className="flex flex-col gap-1.5">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="map-zoom-btn"
          onClick={() => zoomBy(1)}
          aria-label={t.map.zoomIn}
        >
          <Plus className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="map-zoom-btn"
          onClick={() => zoomBy(-1)}
          aria-label={t.map.zoomOut}
        >
          <Minus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

function MapController({
  filter,
  activeId,
  markerRefs,
}: {
  filter: MapFilter;
  activeId: string | null;
  markerRefs: React.MutableRefObject<Map<string, L.Marker>>;
}) {
  const map = useMap();
  const prevFilter = useRef<MapFilter | null>(null);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? MAP_MARKERS
        : MAP_MARKERS.filter((m) => m.category === filter),
    [filter]
  );

  useEffect(() => {
    if (filtered.length === 0) return;

    const bounds = L.latLngBounds(filtered.map((m) => [m.lat, m.lng]));
    const isInitial = prevFilter.current === null;
    const filterChanged = prevFilter.current !== filter;
    prevFilter.current = filter;

    if (isInitial || filterChanged) {
      map.flyToBounds(bounds, {
        padding: [48, 48],
        maxZoom: 15,
        duration: isInitial ? 0.85 : 0.9,
        easeLinearity: 0.25,
      });
    }
  }, [map, filter, filtered]);

  useEffect(() => {
    if (!activeId) return;

    const marker = MAP_MARKERS.find((m) => m.id === activeId);
    if (!marker) return;

    map.flyTo([marker.lat, marker.lng], 16, {
      duration: 0.85,
      easeLinearity: 0.25,
    });

    const leafletMarker = markerRefs.current.get(activeId);
    if (leafletMarker) {
      window.setTimeout(() => leafletMarker.openPopup(), 400);
    }
  }, [map, activeId, markerRefs]);

  return null;
}

interface InteractiveMapProps {
  filter: MapFilter;
  activeId: string | null;
  onActiveChange: (id: string) => void;
}

export function InteractiveMap({
  filter,
  activeId,
  onActiveChange,
}: InteractiveMapProps) {
  const { t } = useLocale();
  const markerRefs = useRef<Map<string, L.Marker>>(new Map());

  const filtered = useMemo(
    () =>
      filter === "all"
        ? MAP_MARKERS
        : MAP_MARKERS.filter((m) => m.category === filter),
    [filter]
  );

  return (
    <MapContainer
      center={MAP_CENTER}
      zoom={14}
      minZoom={11}
      maxZoom={18}
      scrollWheelZoom={false}
      className={cn("alt-map h-[380px] w-full sm:h-[480px]")}
      aria-label={t.map.ariaLabel}
    >
      <ThemeTileLayer />
      <ScrollWheelZoomOnHover />
      <MapController
        filter={filter}
        activeId={activeId}
        markerRefs={markerRefs}
      />
      <MapZoomControls />
      {filtered.map((marker) => (
        <Marker
          key={marker.id}
          position={[marker.lat, marker.lng]}
          icon={createIcon(marker, activeId === marker.id)}
          ref={(ref) => {
            if (ref) markerRefs.current.set(marker.id, ref);
            else markerRefs.current.delete(marker.id);
          }}
          eventHandlers={{
            click: () => onActiveChange(marker.id),
          }}
        >
          <Popup className="map-leaflet-popup" maxWidth={300} minWidth={240}>
            <MapPopup marker={marker} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}