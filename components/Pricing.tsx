"use client";

import { useState } from "react";

const plans = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 299,
    annualPrice: 249,
    tagline: "For 1–3 mechanics going digital",
    roi: "Save 5+ admin hours weekly",
    badge: null,
    isFeatured: false,
    cta: "Get Started Free",
    ctaClass: "btn-outline-orange",
    features: [
      "Up to 50 job cards / month",
      "Digital quotes & invoices",
      "Basic parts inventory",
      "WhatsApp quote sending",
      "Vehicle service history",
      "Email support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 599,
    annualPrice: 499,
    tagline: "For growing workshops, up to 10 mechanics",
    roi: "Recover R10,000+ monthly in lost revenue",
    badge: "Most Popular",
    isFeatured: true,
    cta: "Start Free Trial →",
    ctaClass: "btn-primary btn-primary-full",
    features: [
      "Unlimited job cards",
      "Everything in Starter",
      "Customer reminders (SMS + WhatsApp)",
      "Voice-to-job card AI",
      "Before & after photo uploads",
      "Full mechanic dashboards",
      "Priority support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthlyPrice: 999,
    annualPrice: 833,
    tagline: "Multi-branch, dealerships, 20+ mechanics",
    roi: "Full visibility — zero revenue leakage",
    badge: null,
    isFeatured: false,
    cta: "Contact Sales",
    ctaClass: "btn-outline-orange",
    features: [
      "Everything in Pro",
      "Multi-branch support",
      "Advanced analytics & reports",
      "Accounting integrations",
      "Supplier integrations",
      "Dedicated onboarding",
      "24/7 phone support",
    ],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">
            <span className="tag">Pricing</span>
          </div>
          <h2 className="section-title">
            One Investment.
            <br />
            <span className="gradient-text">Unlimited Returns.</span>
          </h2>
          <p className="section-sub">
            Most workshops using GarageOS recover their monthly subscription
            within the first week of invoices.
          </p>

          {/* ROI banner */}
          <div className="pricing-roi-banner">
            <div className="pricing-roi-icon">💡</div>
            <p className="pricing-roi-text">
              At <strong>R599/month</strong>, GarageOS costs less than one
              missed service appointment.{" "}
              <strong>
                Pro workshops report recovering R8,000–R15,000 in monthly
                revenue leakage within 30 days.
              </strong>{" "}
              No more lost job cards. No more uninvoiced parts. No more
              customers who never came back.
            </p>
          </div>

          {/* Annual / Monthly toggle */}
          <div className="pricing-toggle-wrap">
            <span
              className={`pricing-toggle-label${!annual ? " active" : ""}`}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </span>
            <button
              className={`pricing-toggle-btn${annual ? " annual" : ""}`}
              onClick={() => setAnnual(!annual)}
              aria-label="Toggle annual billing"
            >
              <div className="pricing-toggle-knob" />
            </button>
            <span
              className={`pricing-toggle-label${annual ? " active" : ""}`}
              onClick={() => setAnnual(true)}
            >
              Annual
            </span>
            {annual && (
              <span className="pricing-save-badge">Save 20%</span>
            )}
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card reveal${plan.isFeatured ? " featured" : ""}`}
            >
              {plan.badge && (
                <div className="pricing-badge">{plan.badge}</div>
              )}
              <div className="pricing-head">
                <div className="pricing-plan">{plan.name}</div>
                <div className="pricing-price">
                  <span className="pricing-currency">R</span>
                  <span className="pricing-amount">
                    {annual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="pricing-period">/month</span>
                </div>
                {annual && (
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "#4ade80",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginBottom: "6px",
                    }}
                  >
                    Billed R{plan.annualPrice * 12}/year
                  </p>
                )}
                <p className="pricing-tagline">{plan.tagline}</p>
                <div className="pricing-roi-tag">{plan.roi}</div>
              </div>

              <ul className="pricing-features">
                {plan.features.map((f) => (
                  <li key={f} className="pricing-feature">
                    <div className="pf-check">✓</div>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="pricing-cta">
                <a href="#" className={`btn ${plan.ctaClass}`}>
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="pricing-trust-bar reveal">
          <div className="pricing-trust-item">
            <span className="pricing-trust-icon">🛡️</span>
            14-day free trial
          </div>
          <div className="pricing-trust-item">
            <span className="pricing-trust-icon">✕</span>
            No lock-in contracts
          </div>
          <div className="pricing-trust-item">
            <span className="pricing-trust-icon">🇿🇦</span>
            SA-based support team
          </div>
          <div className="pricing-trust-item">
            <span className="pricing-trust-icon">↩</span>
            Cancel anytime
          </div>
          <div className="pricing-trust-item">
            <span className="pricing-trust-icon">⚡</span>
            Setup in 15 minutes
          </div>
        </div>
      </div>
    </section>
  );
}
