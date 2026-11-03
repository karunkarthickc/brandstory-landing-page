import { useEffect, useState } from "react";
import useInView from "@/hooks/useInView";

export default function Counter({ value, suffix = "", duration = 1200 }) {
  const [ref, seen] = useInView();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    let raf; const start = performance.now();
    const tick = (t) => {
      const p = Math.min((t - start) / duration, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, value, duration]);
  return <span ref={ref}>{n}{suffix}</span>;
}
