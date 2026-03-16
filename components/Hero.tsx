import React from "react";

export default function Hero() {
  return (
    <section className="hero mesh-bg">
      <div className="grid-bg" />
      <div className="hero-glow" />
      <div className="hero-glow-2" />
      <div className="hero-inner container">
        <div className="hero-left">
          <div className="hero-tag">
            <span className="tag">Now Live in South Africa</span>
          </div>
          <h1 className="hero-headline">
            Run Your
            <br />
            <span className="line-orange">Workshop</span>
            <br />
            <span
              className="gradient-text"
              style={{ display: "inline-block" }}
            >
              Smarter
            </span>
          </h1>
          <p className="hero-sub">
            GarageOS replaces your paper job cards, WhatsApp quotes, and
            notebook invoices with one powerful workshop operating system built
            for South African mechanics.
          </p>
          <div className="hero-actions">
            <a href="#" className="btn btn-primary btn-lg">
              Start Free — No Card Needed
            </a>
            <a href="#" className="btn btn-ghost btn-lg">
              See a Demo →
            </a>
          </div>

          {/* Stats row */}
          <div className="hero-stats-row">
            <div className="hero-stat-item">
              <div className="hero-stat-num">
                400<span className="orange">+</span>
              </div>
              <div className="hero-stat-lab">Active Workshops</div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-item">
              <div className="hero-stat-num">
                R12<span className="orange">M+</span>
              </div>
              <div className="hero-stat-lab">Revenue Tracked / Mo</div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-item">
              <div className="hero-stat-num">
                98<span className="orange">%</span>
              </div>
              <div className="hero-stat-lab">Customer Satisfaction</div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-item">
              <div className="hero-stat-num">
                3<span className="orange">min</span>
              </div>
              <div className="hero-stat-lab">Job Card Creation</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div
            className="hero-badge hero-badge-1"
            style={{ background: "var(--bg-3)" }}
          >
            <div className="badge-icon">⚡</div>
            <div className="badge-info">
              <div className="badge-val">+34%</div>
              <div className="badge-lab">Revenue / month</div>
            </div>
          </div>

          <div className="hero-mockup">
            <div className="mockup-bar">
              <div className="mockup-dot" />
              <div className="mockup-dot" />
              <div className="mockup-dot" />
              <div className="mockup-url">app.garageos.co.za/dashboard</div>
            </div>
            <div className="mockup-inner">
              {/* Sidebar */}
              <div className="mockup-sidebar">
                <div className="mockup-sidebar-dot active" />
                <div className="mockup-sidebar-dot s2" />
                <div className="mockup-sidebar-dot" />
                <div className="mockup-sidebar-dot" />
                <div className="mockup-sidebar-dot" />
              </div>
              {/* Main area */}
              <div className="mockup-main">
                <div className="mockup-body">
                  {/* Revenue chart */}
                  <div className="mockup-chart">
                    <div className="mockup-chart-label">
                      Weekly Revenue — R41.2k ↑
                    </div>
                    <div className="mockup-chart-bars">
                      <div
                        className="chart-bar"
                        style={{ height: "55%" }}
                      />
                      <div
                        className="chart-bar"
                        style={{ height: "70%" }}
                      />
                      <div
                        className="chart-bar"
                        style={{ height: "45%" }}
                      />
                      <div
                        className="chart-bar"
                        style={{ height: "80%" }}
                      />
                      <div
                        className="chart-bar"
                        style={{ height: "60%" }}
                      />
                      <div
                        className="chart-bar active"
                        style={{ height: "90%" }}
                      />
                      <div
                        className="chart-bar"
                        style={{ height: "65%" }}
                      />
                    </div>
                  </div>

                  {/* Stat row */}
                  <div className="mockup-stats">
                    <div className="mockup-stat">
                      <div className="mockup-stat-label">Active Jobs</div>
                      <div className="mockup-stat-value orange">14</div>
                    </div>
                    <div className="mockup-stat">
                      <div className="mockup-stat-label">Today&apos;s Rev</div>
                      <div className="mockup-stat-value green">R8.4k</div>
                    </div>
                    <div className="mockup-stat">
                      <div className="mockup-stat-label">Parts Pending</div>
                      <div className="mockup-stat-value yellow">3</div>
                    </div>
                  </div>

                  {/* Job list */}
                  <div className="mockup-jobs">
                    <div className="mockup-job">
                      <div className="job-status-dot status-progress" />
                      <div className="job-info">
                        <div className="job-vehicle">
                          Toyota Corolla — ABC 123 GP
                        </div>
                        <div className="job-desc">
                          Brake pads + disc replacement
                        </div>
                      </div>
                      <div className="job-price">R1,200</div>
                    </div>
                    <div className="mockup-job">
                      <div className="job-status-dot status-waiting" />
                      <div className="job-info">
                        <div className="job-vehicle">VW Polo — KZN 456 N</div>
                        <div className="job-desc">Engine diagnostics</div>
                      </div>
                      <div className="job-price">R850</div>
                    </div>
                    <div className="mockup-job">
                      <div className="job-status-dot status-parts" />
                      <div className="job-info">
                        <div className="job-vehicle">
                          Ford Ranger — WC 789 C
                        </div>
                        <div className="job-desc">Waiting for clutch kit</div>
                      </div>
                      <div className="job-price">R3,400</div>
                    </div>
                    <div className="mockup-job">
                      <div className="job-status-dot status-done" />
                      <div className="job-info">
                        <div className="job-vehicle">
                          BMW 3 Series — GP 012 D
                        </div>
                        <div className="job-desc">Oil service + filter</div>
                      </div>
                      <div className="job-price">R680</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="hero-badge hero-badge-2"
            style={{ background: "var(--bg-3)" }}
          >
            <div className="badge-icon">📱</div>
            <div className="badge-info">
              <div className="badge-val">WhatsApp</div>
              <div className="badge-lab">Quotes in seconds</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
