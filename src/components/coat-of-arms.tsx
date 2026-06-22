import { WAPPEN_IMAGE } from "@/lib/data";
import { cn } from "@/lib/utils";

interface CoatOfArmsProps {
  className?: string;
  /** Display height in pixels; width follows shield proportions */
  height?: number;
}

export function CoatOfArms({ className, height = 36 }: CoatOfArmsProps) {
  const width = Math.round(height * (700 / 897));

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={WAPPEN_IMAGE}
      alt=""
      width={width}
      height={height}
      decoding="async"
      className={cn("object-contain", className)}
      aria-hidden="true"
    />
  );
}