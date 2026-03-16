import React from "react";

export default function Problem() {
  return (
    <section className="problem-section" id="problem">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">
            <span className="tag">The Problem</span>
          </div>
          <h2 className="section-title">
            Most Workshops Are
            <br />
            Still Living In 1994
          </h2>
          <p className="section-sub">
            Paper job cards get lost. WhatsApp quotes disappear. Invoice books
            run out. Sound familiar?
          </p>
        </div>
        <div className="versus-grid reveal">
          <div className="versus-card versus-old">
            <div className="versus-header">
              <div className="versus-icon">📋</div>
              <div className="versus-header-title">The Old Way</div>
            </div>
            <ul className="versus-list">
              <li className="versus-item">
                <div className="versus-item-icon">✕</div>
                Paper job cards get lost or damaged in the workshop
              </li>
              <li className="versus-item">
                <div className="versus-item-icon">✕</div>
                Quotes on WhatsApp or in a notebook — no record kept
              </li>
              <li className="versus-item">
                <div className="versus-item-icon">✕</div>
                Mechanics use parts without logging — inventory disappears
              </li>
              <li className="versus-item">
                <div className="versus-item-icon">✕</div>
                No service history — every returning customer starts from zero
              </li>
              <li className="versus-item">
                <div className="versus-item-icon">✕</div>
                Invoices handwritten or in Excel, slow and error-prone
              </li>
              <li className="versus-item">
                <div className="versus-item-icon">✕</div>
                Customers never reminded to come back — revenue lost forever
              </li>
            </ul>
          </div>
          <div className="vs-divider">
            <div className="vs-badge">VS</div>
          </div>
          <div className="versus-card versus-new">
            <div className="versus-header">
              <div className="versus-icon">⚡</div>
              <div className="versus-header-title">The GarageOS Way</div>
            </div>
            <ul className="versus-list">
              <li className="versus-item">
                <div className="versus-item-icon">✓</div>
                Digital job cards created in under 3 minutes, always accessible
              </li>
              <li className="versus-item">
                <div className="versus-item-icon">✓</div>
                Professional quotes sent via WhatsApp with one tap, auto-saved
              </li>
              <li className="versus-item">
                <div className="versus-item-icon">✓</div>
                Every part logged automatically — low stock alerts protect
                revenue
              </li>
              <li className="versus-item">
                <div className="versus-item-icon">✓</div>
                Full vehicle history at a glance — instant context every visit
              </li>
              <li className="versus-item">
                <div className="versus-item-icon">✓</div>
                Invoices generated in seconds, PDF-ready, VAT-compliant
              </li>
              <li className="versus-item">
                <div className="versus-item-icon">✓</div>
                Automated SMS/WhatsApp reminders bring customers back
                automatically
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
