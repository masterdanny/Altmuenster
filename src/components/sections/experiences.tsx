"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Clock } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/motion/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ACTIVITIES, ACTIVITY_CATEGORIES } from "@/lib/data";

export function Experiences() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? ACTIVITIES
      : ACTIVITIES.filter((a) => a.category === activeTab);

  return (
    <section
      id="experiences"
      className="section-padding bg-muted/30"
      aria-labelledby="experiences-heading"
    >
      <div className="container-wide">
        <SectionHeading
          eyebrow="Activities"
          title="Things to Do & Experiences"
          description="Whether you seek adventure on the water, solace on forest trails, or cultural treasures — Altmuenster has something for every traveller."
        />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-8 w-full justify-start overflow-x-auto">
            {ACTIVITY_CATEGORIES.map((cat) => (
              <TabsTrigger key={cat.id} value={cat.id}>
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {ACTIVITY_CATEGORIES.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="mt-0">
              <motion.div
                layout
                className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
              >
                <AnimatePresence mode="popLayout">
                  {filtered.map((activity, i) => (
                    <motion.article
                      key={activity.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      whileHover={{ y: -4 }}
                      className="group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-shadow hover:shadow-lg"
                    >
                      <div className="image-hover-zoom relative h-44">
                        <Image
                          src={activity.image}
                          alt={activity.imageAlt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/10" />
                      </div>
                      <div className="p-5">
                        <h3 className="font-serif text-xl font-semibold">
                          {activity.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {activity.description}
                        </p>
                        <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                          {activity.duration}
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}