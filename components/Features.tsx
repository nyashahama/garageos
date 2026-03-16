import React from "react";

export default function Features() {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">
            <span className="tag">Core Features</span>
          </div>
          <h2 className="section-title">
            Everything Your Workshop
            <br />
            Actually Needs
          </h2>
          <p className="section-sub">
            Six essential tools, one platform. No bloat, no complexity — just
            the features that make workshops more money.
          </p>
        </div>

        <div className="bento-grid">
          {/* Hero card: Job Cards */}
          <div className="bento-card bento-card-hero reveal">
            <div className="bento-glow bento-glow-orange" />
            <div className="bento-tag">01 — Core Feature</div>
            <div className="bento-icon">🔧</div>
            <div className="bento-title">Digital Job Cards</div>
            <p className="bento-desc">
              Create, assign and track every vehicle job from arrival to pickup.
              Every mechanic sees exactly what needs to be done, in real time.
              No lost paper. No confusion. No missed work.
            </p>

            {/* Mini job board */}
            <div className="bento-mini-board">
              <div className="bento-board-header">
                <span className="bento-board-title">Live Job Board</span>
                <span className="bento-board-live">Live</span>
              </div>
              <div className="bento-board-row">
                <div className="board-status board-status-orange" />
                <div className="board-vehicle">Toyota Corolla — ABC 123 GP</div>
                <div className="board-job">In Progress</div>
                <div className="board-price">R1,200</div>
              </div>
              <div className="bento-board-row">
                <div className="board-status board-status-yellow" />
                <div className="board-vehicle">VW Polo — KZN 456 N</div>
                <div className="board-job">Awaiting Parts</div>
                <div className="board-price">R850</div>
              </div>
              <div className="bento-board-row">
                <div className="board-status board-status-purple" />
                <div className="board-vehicle">Ford Ranger — WC 789 C</div>
                <div className="board-job">Diagnosing</div>
                <div className="board-price">R3,400</div>
              </div>
              <div className="bento-board-row">
                <div className="board-status board-status-green" />
                <div className="board-vehicle">BMW 3 Series — GP 012 D</div>
                <div className="board-job">Ready for Pickup</div>
                <div className="board-price">R680</div>
              </div>
            </div>

            <ul className="bento-bullets" style={{ marginTop: "16px" }}>
              <li>Waiting · In Progress · Ready for Pickup</li>
              <li>Assign to specific mechanics</li>
              <li>Attach photos and notes</li>
              <li>Real-time status updates</li>
            </ul>
          </div>

          {/* Quotes & Estimates */}
          <div className="bento-card reveal reveal-delay-1">
            <div className="bento-glow bento-glow-green" />
            <div className="bento-tag">02 — Core Feature</div>
            <div className="bento-icon">💬</div>
            <div className="bento-title">Quotes & Estimates</div>
            <p className="bento-desc">
              Build professional quotes in seconds. Send via WhatsApp. Customer
              approves before work starts — auto-saved, every time.
            </p>
            <ul className="bento-bullets">
              <li>Parts + Labour line items</li>
              <li>One-tap WhatsApp send</li>
              <li>Customer approval tracking</li>
              <li>Convert to invoice instantly</li>
            </ul>
          </div>

          {/* Invoicing */}
          <div className="bento-card reveal reveal-delay-1">
            <div className="bento-tag">03 — Core Feature</div>
            <div className="bento-icon">🧾</div>
            <div className="bento-title">Invoicing</div>
            <p className="bento-desc">
              Auto-generated VAT-compliant invoices from approved quotes. PDF
              export, email delivery, print-ready in seconds.
            </p>
            <ul className="bento-bullets">
              <li>VAT compliant for SARS</li>
              <li>PDF / email / print ready</li>
              <li>Full payment tracking</li>
            </ul>
          </div>

          {/* Parts Inventory */}
          <div className="bento-card reveal">
            <div className="bento-tag">04 — Core Feature</div>
            <div className="bento-icon">📦</div>
            <div className="bento-title">Parts Inventory</div>
            <p className="bento-desc">
              Track every bolt, filter and pad. Get low-stock alerts before you
              run out. Know your margins at a glance.
            </p>
            <ul className="bento-bullets">
              <li>Stock levels & pricing</li>
              <li>Low stock alerts</li>
              <li>Usage per job card</li>
            </ul>
          </div>

          {/* Vehicle History */}
          <div className="bento-card reveal reveal-delay-1">
            <div className="bento-tag">05 — Core Feature</div>
            <div className="bento-icon">🚗</div>
            <div className="bento-title">Vehicle History</div>
            <p className="bento-desc">
              Every car gets a profile. Full repair history, parts replaced,
              mileage records — automatically built over time.
            </p>
            <ul className="bento-bullets">
              <li>Full repair timeline</li>
              <li>Mileage history</li>
              <li>Instant lookup on arrival</li>
            </ul>
          </div>

          {/* Customer Reminders */}
          <div className="bento-card reveal reveal-delay-2">
            <div className="bento-glow bento-glow-orange" />
            <div className="bento-tag">06 — Core Feature</div>
            <div className="bento-icon">🔔</div>
            <div className="bento-title">Customer Reminders</div>
            <p className="bento-desc">
              Automatically remind customers when their next service is due.
              Keep your bays full without lifting a finger. More return visits,
              more revenue.
            </p>
            <ul className="bento-bullets">
              <li>Service due reminders</li>
              <li>WhatsApp & SMS delivery</li>
              <li>Custom scheduling rules</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
