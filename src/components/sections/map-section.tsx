"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { Bike, Footprints, Landmark, Leaf, Train } from "lucide-react";
import { ClientOnly } from "@/components/client-only";
import { SectionHeading } from "@/components/motion/section-heading";
import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";
import {
  MAP_LEGEND,
  MAP_MARKERS,
  type MapFilter,
  type MapMarkerCategory,
} from "@/lib/data";
import { cn } from "@/lib/utils";

const MapFallback = () => (
  <div className="flex h-[380px] items-center justify-center rounded-2xl bg-muted animate-pulse sm:h-[480px]">
    <p className="text-muted-foreground">Loading map…</p>
  </div>
);

const InteractiveMap = dynamic(
  () => import("@/components/map/interactive-map").then((m) => m.InteractiveMap),
  { ssr: false, loading: MapFallback }
);

const FILTERS: { id: MapFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "nature", label: "Nature" },
  { id: "culture", label: "Culture" },
  { id: "practical", label: "Practical" },
];

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
  marker: (typeof MAP_MARKERS)[number];
  isActive: boolean;
  onSelect: () => void;
}) {
  const Icon = CATEGORY_ICONS[marker.category];

  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "flex w-full items-start gap-3 rounded-xl border p-3 text-left transition-all",
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
        <p className="font-medium leading-tight">{marker.name}</p>
        <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          <Footprints className="h-3 w-3" aria-hidden="true" />
          {marker.walkTime}
        </p>
      </div>
    </button>
  );
}

export function MapSection() {
  const [filter, setFilter] = useState<MapFilter>("all");
  const [activeId, setActiveId] = useState<string | null>(null);

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

  return (
    <section
      id="map"
      className="section-padding bg-background"
      aria-labelledby="map-heading"
    >
      <div className="container-wide">
        <SectionHeading
          eyebrow="Orientation"
          title="Explore the Map"
          description="Browse places on the list or map — hover to zoom, click a marker for photos and directions."
        />

        <SectionReveal>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <Button
                  key={f.id}
                  variant={filter === f.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFilterChange(f.id)}
                  className={cn("rounded-full", filter === f.id && "shadow-md")}
                >
                  {f.label}
                </Button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              {MAP_LEGEND.map((item) => (
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

          <div className="grid gap-5 lg:grid-cols-[minmax(0,280px)_1fr]">
            <aside className="flex flex-col gap-2 lg:max-h-[480px] lg:overflow-y-auto lg:pr-1">
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Places ({visibleMarkers.length})
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

            <div className="relative overflow-hidden rounded-2xl border border-border/60 shadow-lg">
              <div className="pointer-events-none absolute bottom-3 left-3 z-[400] hidden rounded-full bg-background/90 px-3 py-1.5 text-xs text-muted-foreground shadow-sm backdrop-blur-sm sm:block">
                <Bike className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />
                Hover map to zoom · Click markers for details
              </div>
              <ClientOnly fallback={<MapFallback />}>
                <InteractiveMap
                  filter={filter}
                  activeId={activeId}
                  onActiveChange={setActiveId}
                />
              </ClientOnly>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}