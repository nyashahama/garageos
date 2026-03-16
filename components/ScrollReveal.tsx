"use client";

import { useEffect } from "react";

/**
 * Drop this component anywhere in the page tree (e.g. inside layout or page).
 * It registers the IntersectionObserver that drives `.reveal → .visible` animations.
 * Because it renders nothing visible, it won't affect layout.
 */
export default function ScrollReveal() {
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

  return null;
}
