"use client";

import { useEffect, useRef, useState } from "react";

interface UseAnimatedCounterOptions {
  duration?: number;
  decimals?: number;
}

export function useAnimatedCounter(
  target: number,
  inView: boolean,
  options: UseAnimatedCounterOptions = {}
) {
  const { duration = 1800, decimals = 0 } = options;
  const [value, setValue] = useState(target);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    setValue(0);
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };

    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString();
}