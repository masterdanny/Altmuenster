"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import confetti from "canvas-confetti";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useInquiry } from "@/context/inquiry-context";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  dates: z.string().min(3, "Please share your preferred dates"),
  tripType: z.enum(["couple", "family", "solo", "friends"]),
  message: z.string().min(10, "Tell us about your trip"),
});

type FormData = z.infer<typeof schema>;

const TRIP_TYPES = [
  { value: "couple", label: "Couple" },
  { value: "family", label: "Family" },
  { value: "solo", label: "Solo" },
  { value: "friends", label: "Friends" },
] as const;

export function InquiryModal() {
  const { isOpen, prefill, closeInquiry } = useInquiry();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { tripType: "couple", message: "" },
  });

  const tripType = watch("tripType");

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      reset({ tripType: "couple", message: prefill.message ?? "" });
      if (prefill.tripType) {
        setValue("tripType", prefill.tripType as FormData["tripType"]);
      }
    }
  }, [isOpen, prefill, reset, setValue]);

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    confetti({
      particleCount: 60,
      spread: 50,
      origin: { y: 0.6 },
      colors: ["#0A3D62", "#C9A227", "#2E5A3C"],
    });
    toast.success("Inquiry sent!", {
      description: `We'll reach out soon, ${data.name.split(" ")[0]}.`,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeInquiry()}>
      <DialogContent className="max-w-md">
        {submitted ? (
          <div className="flex flex-col items-center py-6 text-center">
            <CheckCircle2 className="h-12 w-12 text-secondary" />
            <DialogTitle className="mt-4">Thank You!</DialogTitle>
            <DialogDescription className="mt-2">
              We&apos;ll be in touch with personalised recommendations for your
              Altmuenster trip.
            </DialogDescription>
            <Button className="mt-6" onClick={closeInquiry}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Plan Your Visit</DialogTitle>
              <DialogDescription>
                Share a few details and we&apos;ll help craft your perfect
                Altmuenster experience.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
              <div className="space-y-2">
                <Label htmlFor="modal-name">Name</Label>
                <Input id="modal-name" {...register("name")} />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="modal-email">Email</Label>
                <Input id="modal-email" type="email" {...register("email")} />
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="modal-dates">Preferred Dates</Label>
                <Input id="modal-dates" {...register("dates")} />
                {errors.dates && (
                  <p className="text-xs text-destructive">{errors.dates.message}</p>
                )}
              </div>
              <fieldset className="space-y-2">
                <legend className="text-sm font-medium">Trip Type</legend>
                <div className="flex flex-wrap gap-2">
                  {TRIP_TYPES.map((t) => (
                    <button
                      key={t.value}
                      type="button"
                      onClick={() => setValue("tripType", t.value)}
                      className={cn(
                        "rounded-lg border px-3 py-1.5 text-xs font-medium transition-all",
                        tripType === t.value
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:bg-muted"
                      )}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </fieldset>
              <div className="space-y-2">
                <Label htmlFor="modal-message">Message</Label>
                <Textarea id="modal-message" {...register("message")} />
                {errors.message && (
                  <p className="text-xs text-destructive">{errors.message.message}</p>
                )}
              </div>
              <Button type="submit" variant="gold" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending…" : "Send Inquiry"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}