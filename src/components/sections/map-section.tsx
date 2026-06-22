"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { Bike, ChevronDown, Footprints, Landmark, Leaf, Train } from "lucide-react";
import { ClientOnly } from "@/components/client-only";
import { SectionHeading } from "@/components/motion/section-heading";
import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/context/locale-context";
import type { LucideIcon } from "lucide-react";
import {
  MAP_MARKERS,
  type MapFilter,
  type MapMarker,
  type MapMarkerCategory,
} from "@/lib/data";
import { cn } from "@/lib/utils";

function MapFallback() {
  const { t } = useLocale();
  return (
    <div className="flex min-h-[68dvh] items-center justify-center bg-muted animate-pulse lg:h-[480px] lg:min-h-0 lg:rounded-2xl">
      <p className="text-muted-foreground">{t.map.loading}</p>
    </div>
  );
}

const InteractiveMap = dynamic(
  () => import("@/components/map/interactive-map").then((m) => m.InteractiveMap),
  { ssr: false, loading: MapFallback }
);

const CATEGORY_ICONS: Record<MapMarkerCategory, LucideIcon> = {
  nature: Leaf,
  culture: Landmark,
  practical: Train,
};

function MarkerListItem({
  marker,
  isActive,
  onSelect,
}: {
  marker: MapMarker;
  isActive: boolean;
  onSelect: () => void;
}) {
  const { t } = useLocale();
  const Icon = CATEGORY_ICONS[marker.category];
  const localized = t.map.markers[marker.id as keyof typeof t.map.markers];

  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "flex w-full min-h-11 items-start gap-3 rounded-xl border p-3 text-left transition-all active:scale-[0.99]",
        isActive
          ? "border-primary bg-primary/5 shadow-sm"
          : "border-border/60 bg-card hover:border-primary/30 hover:bg-muted/50"
      )}
    >
      <div
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
          marker.category === "nature" && "bg-secondary/10 text-secondary",
          marker.category === "culture" && "bg-accent/15 text-accent",
          marker.category === "practical" && "bg-primary/10 text-primary"
        )}
      >
        <Icon className="h-4 w-4" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-medium leading-tight">
          {localized?.name ?? marker.name}
        </p>
        <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          <Footprints className="h-3 w-3" aria-hidden="true" />
          {localized?.walkTime ?? marker.walkTime}
        </p>
      </div>
    </button>
  );
}

export function MapSection() {
  const { t } = useLocale();
  const [filter, setFilter] = useState<MapFilter>("all");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [showPlaces, setShowPlaces] = useState(false);

  const filters: { id: MapFilter; label: string }[] = [
    { id: "all", label: t.map.filters.all },
    { id: "nature", label: t.map.filters.nature },
    { id: "culture", label: t.map.filters.culture },
    { id: "practical", label: t.map.filters.practical },
  ];

  const legend = [
    { category: "nature" as const, label: t.map.legend.nature, color: "#2E5A3C" },
    { category: "culture" as const, label: t.map.legend.culture, color: "#C9A227" },
    { category: "practical" as const, label: t.map.legend.practical, color: "#0A3D62" },
  ];

  const visibleMarkers = useMemo(
    () =>
      filter === "all"
        ? MAP_MARKERS
        : MAP_MARKERS.filter((m) => m.category === filter),
    [filter]
  );

  const handleFilterChange = (next: MapFilter) => {
    setFilter(next);
    setActiveId(null);
  };

  const placeList = (
    <aside className="flex flex-col gap-2 lg:max-h-[480px] lg:overflow-y-auto lg:pr-1">
      <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {t.map.places} ({visibleMarkers.length})
      </p>
      {visibleMarkers.map((marker) => (
        <MarkerListItem
          key={marker.id}
          marker={marker}
          isActive={activeId === marker.id}
          onSelect={() => setActiveId(marker.id)}
        />
      ))}
    </aside>
  );

  const mapFrame = (
    <div className="map-bleed relative overflow-hidden lg:rounded-2xl lg:border lg:border-border/60 lg:shadow-lg">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[400] h-10 bg-gradient-to-b from-black/15 to-transparent lg:hidden" />
      <div className="pointer-events-none absolute bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-4 right-4 z-[400] text-center lg:hidden">
        <span className="inline-block rounded-full bg-black/40 px-3 py-1.5 text-xs text-white/95 backdrop-blur-sm">
          {t.map.hintMobile}
        </span>
      </div>
      <div className="pointer-events-none absolute bottom-3 left-3 z-[400] hidden rounded-full bg-background/90 px-3 py-1.5 text-xs text-muted-foreground shadow-sm backdrop-blur-sm lg:block">
        <Bike className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />
        {t.map.hint}
      </div>
      <ClientOnly fallback={<MapFallback />}>
        <InteractiveMap
          filter={filter}
          activeId={activeId}
          onActiveChange={setActiveId}
        />
      </ClientOnly>
    </div>
  );

  return (
    <section id="map" className="bg-background" aria-labelledby="map-heading">
      <div className="container-wide section-padding pb-5 lg:pb-0">
        <SectionHeading
          eyebrow={t.map.eyebrow}
          title={t.map.title}
          description={t.map.description}
          mobileDescription={t.map.shortDescription}
          compactMobile
        />

        <SectionReveal>
          <div className="mb-0 lg:mb-5">
            <div className="-mx-1 flex gap-2 overflow-x-auto pb-1 scrollbar-none lg:mx-0 lg:flex-wrap lg:overflow-visible">
              {filters.map((f) => (
                <Button
                  key={f.id}
                  variant={filter === f.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFilterChange(f.id)}
                  className={cn(
                    "shrink-0 rounded-full px-4 min-h-10 shadow-sm lg:shadow-none",
                    filter === f.id && "lg:shadow-md"
                  )}
                >
                  {f.label}
                </Button>
              ))}
            </div>

            <div className="mt-3 hidden flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-muted-foreground lg:flex">
              {legend.map((item) => (
                <span key={item.category} className="flex items-center gap-1.5">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                    aria-hidden="true"
                  />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>

      <SectionReveal>
        <div className="lg:container-wide lg:section-padding lg:!pt-0">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-5">
            <div className="order-2 hidden lg:order-1 lg:block">{placeList}</div>
            <div className="order-1 lg:order-2">{mapFrame}</div>
          </div>

          <div className="container-wide mt-5 px-5 pb-16 lg:hidden">
            {showPlaces && (
              <div className="mb-4 max-h-64 overflow-y-auto scrollbar-none">
                {placeList}
              </div>
            )}
            <button
              type="button"
              onClick={() => setShowPlaces((prev) => !prev)}
              aria-expanded={showPlaces}
              className="mx-auto flex min-h-11 w-full max-w-xs items-center justify-center gap-1.5 rounded-full border border-border/60 px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground active:bg-muted/50"
            >
              {showPlaces ? t.map.hidePlaces : t.map.showPlaces}
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-300",
                  showPlaces && "rotate-180"
                )}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}