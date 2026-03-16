import React from "react";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-bg" />
      <div className="container">
        <div className="cta-box reveal">
          <div className="cta-box-gradient" />
          <div
            className="section-tag"
            style={{
              marginBottom: "28px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <span className="tag">Ready to Upgrade?</span>
          </div>
          <h2 className="cta-headline">
            Stop Running Your
            <br />
            Workshop in{" "}
            <span className="gradient-text" style={{ display: "inline-block" }}>
              Reverse
            </span>
          </h2>
          <p className="cta-sub">
            Join 400+ South African workshops already using GarageOS to work
            faster, earn more, and keep every customer coming back.
          </p>
          <div className="cta-actions">
            <a href="#" className="btn btn-primary btn-lg">
              Start Free — No Card Required
            </a>
            <a href="#" className="btn btn-ghost btn-lg">
              Book a 15-min Demo
            </a>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "24px",
              marginTop: "28px",
              flexWrap: "wrap",
            }}
          >
            <span className="cta-guarantee">
              🛡️ <strong>14-day free trial</strong>
            </span>
            <span
              className="cta-guarantee"
              style={{
                color: "var(--border)",
                fontSize: "18px",
                margin: "0 -8px",
              }}
            >
              ·
            </span>
            <span className="cta-guarantee">
              ✕ <strong>No lock-in</strong>
            </span>
            <span
              className="cta-guarantee"
              style={{
                color: "var(--border)",
                fontSize: "18px",
                margin: "0 -8px",
              }}
            >
              ·
            </span>
            <span className="cta-guarantee">
              🇿🇦 <strong>South African support team</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
