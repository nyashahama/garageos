import React from "react";

export default function HowItWorks() {
  return (
    <section className="how-section" id="how">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">
            <span className="tag">Getting Started</span>
          </div>
          <h2 className="section-title">
            Up and Running
            <br />
            in 15 Minutes
          </h2>
          <p className="section-sub">
            No IT team required. No training days. Just sign up and start.
          </p>
        </div>
        <div className="steps-row">
          <div className="step reveal">
            <div className="step-dot">
              🖊️
              <div className="step-num">1</div>
            </div>
            <div className="step-title">Sign Up</div>
            <p className="step-desc">
              Create your workshop profile in minutes. Enter your business
              details, add your team, you&apos;re ready.
            </p>
          </div>
          <div className="step reveal reveal-delay-1">
            <div className="step-dot">
              🔧
              <div className="step-num">2</div>
            </div>
            <div className="step-title">First Job Card</div>
            <p className="step-desc">
              Log your first vehicle, assign a mechanic and set the job status.
              Takes under 3 minutes.
            </p>
          </div>
          <div className="step reveal reveal-delay-2">
            <div className="step-dot">
              💬
              <div className="step-num">3</div>
            </div>
            <div className="step-title">Send a Quote</div>
            <p className="step-desc">
              Build a quote, tap Send via WhatsApp. Customer approves and you
              start work — zero back-and-forth.
            </p>
          </div>
          <div className="step reveal reveal-delay-3">
            <div className="step-dot">
              🚀
              <div className="step-num">4</div>
            </div>
            <div className="step-title">Get Paid Faster</div>
            <p className="step-desc">
              Invoice generated automatically. Customer pays. Workshop grows.
              Repeat for every job.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
