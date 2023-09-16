import { useState } from "react";

function clamp(n: number, min: number, max: number) {
  return Math.max(Math.min(n, max), min)
}

export function useNumber(options: { initial: number; min: number; max: number }) {
  const [n, setN] = useState(clamp(options.initial, options.min, options.max));

  const setNConstrained = (newValue: number) => {
    setN(clamp(newValue, options.min, options.max));
  };

  return [n, setNConstrained] as [number, typeof setNConstrained];
}
