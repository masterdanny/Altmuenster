"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { SectionHeading } from "@/components/motion/section-heading";
import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useInquiry } from "@/context/inquiry-context";
import { cn } from "@/lib/utils";

const inquirySchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  dates: z.string().min(3, "Please share your preferred dates"),
  tripType: z.enum(["couple", "family", "solo", "friends"], {
    required_error: "Please select a trip type",
  }),
  message: z.string().min(10, "Tell us a little about your dream trip"),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

const TRIP_TYPES = [
  { value: "couple", label: "Couple" },
  { value: "family", label: "Family" },
  { value: "solo", label: "Solo" },
  { value: "friends", label: "Friends" },
] as const;

export function Inquiry() {
  const { prefill } = useInquiry();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      tripType: "couple",
      message: "",
    },
  });

  const tripType = watch("tripType");

  useEffect(() => {
    if (prefill.tripType) {
      setValue("tripType", prefill.tripType as InquiryFormData["tripType"]);
    }
    if (prefill.message) {
      setValue("message", prefill.message);
    }
  }, [prefill, setValue]);

  const onSubmit = async (data: InquiryFormData) => {
    await new Promise((r) => setTimeout(r, 1200));

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#0A3D62", "#C9A227", "#2E5A3C", "#F8F5F0"],
    });

    toast.success("Your dream trip inquiry has been sent!", {
      description: `We'll be in touch soon, ${data.name.split(" ")[0]}.`,
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    reset();
  };

  return (
    <section
      id="inquiry"
      className="section-padding bg-background"
      aria-labelledby="inquiry-heading"
    >
      <div className="container-wide max-w-2xl">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Share Your Dream Trip"
          description="Tell us about your ideal Altmünster experience — we'll help you plan every detail."
        />

        <SectionReveal>
          <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-lg sm:p-10">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center py-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  >
                    <CheckCircle2 className="h-16 w-16 text-secondary" />
                  </motion.div>
                  <h3 className="mt-6 font-serif text-3xl font-semibold">
                    Thank You!
                  </h3>
                  <p className="mt-3 max-w-sm text-muted-foreground">
                    Your inquiry has been received. Our team will craft a
                    personalised Altmünster experience just for you.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-8"
                    onClick={handleReset}
                  >
                    Send Another Inquiry
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                  noValidate
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        {...register("name")}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive" role="alert">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        {...register("email")}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive" role="alert">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dates">Preferred Dates</Label>
                    <Input
                      id="dates"
                      placeholder="e.g. July 15–22, 2026"
                      {...register("dates")}
                      aria-invalid={!!errors.dates}
                    />
                    {errors.dates && (
                      <p className="text-xs text-destructive" role="alert">
                        {errors.dates.message}
                      </p>
                    )}
                  </div>

                  <fieldset className="space-y-3">
                    <legend className="text-sm font-medium">Trip Type</legend>
                    <div className="flex flex-wrap gap-2">
                      {TRIP_TYPES.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() =>
                            setValue("tripType", type.value, {
                              shouldValidate: true,
                            })
                          }
                          className={cn(
                            "rounded-xl border px-4 py-2.5 text-sm font-medium transition-all",
                            tripType === type.value
                              ? "border-primary bg-primary text-primary-foreground shadow-md"
                              : "border-border bg-background hover:border-primary/30 hover:bg-muted"
                          )}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                    {errors.tripType && (
                      <p className="text-xs text-destructive" role="alert">
                        {errors.tripType.message}
                      </p>
                    )}
                  </fieldset>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your dream trip to Altmünster…"
                      {...register("message")}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive" role="alert">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending…" : "Send Inquiry"}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}