"use client";

import { useEffect, useRef } from "react";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

interface CounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
}

function Counter({ target, prefix = "", suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const observed = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !observed.current) {
            observed.current = true;
            const duration = 1800;
            const start = performance.now();

            const tick = (now: number) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              el.textContent = String(Math.round(eased * target));
              if (progress < 1) requestAnimationFrame(tick);
            };

            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="stat-number">
      {prefix}
      <span ref={ref}>0</span>
      <span className="unit">{suffix}</span>
    </div>
  );
}

export default function Stats() {
  useScrollReveal();

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item reveal">
            <Counter target={400} suffix="+" />
            <div className="stat-label">Active Workshops</div>
          </div>
          <div className="stat-item reveal reveal-delay-1">
            <Counter target={12} prefix="R" suffix="M+" />
            <div className="stat-label">Revenue Tracked Monthly</div>
          </div>
          <div className="stat-item reveal reveal-delay-2">
            <Counter target={98} suffix="%" />
            <div className="stat-label">Customer Satisfaction</div>
          </div>
          <div className="stat-item reveal reveal-delay-3">
            <Counter target={3} suffix="min" />
            <div className="stat-label">Avg. Job Card Creation</div>
          </div>
        </div>
      </div>
    </section>
  );
}
