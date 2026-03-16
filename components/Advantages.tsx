"use client";

import { useState } from "react";

const advantages = [
  {
    id: "wa",
    num: "01",
    title: "WhatsApp-First Workflow",
    body: "Garages run on WhatsApp. GarageOS sends quotes, invoices, job updates and reminders directly through WhatsApp — no app install required for your customers.",
  },
  {
    id: "voice",
    num: "02",
    title: "Voice Notes → Job Cards",
    body: 'Mechanics can speak a voice note — "Toyota Corolla, brake shimmy, customer says it pulls left" — and the system converts it to a structured job card automatically. No typing.',
  },
  {
    id: "mechanic",
    num: "03",
    title: "Mechanic-First Design",
    body: "Big buttons. Few screens. Built for people with oily hands on a workshop floor. Mechanics log jobs, times and parts without ever needing training.",
  },
  {
    id: "photo",
    num: "04",
    title: "Before & After Photos",
    body: "Mechanics snap photos before and after repairs, attached directly to the job card. Customers receive proof of work. No disputes. No comebacks.",
  },
  {
    id: "offline",
    num: "05",
    title: "Works Offline",
    body: "Load-shedding won't stop your workshop. GarageOS works offline and syncs automatically when your connection returns. Built for South African infrastructure realities.",
  },
];

export default function Advantages() {
  const [activeId, setActiveId] = useState("wa");

  const toggle = (id: string) => {
    setActiveId((prev) => (prev === id ? "" : id));
  };

  return (
    <section className="advantages-section" id="advantages">
      <div className="container">
        <div className="advantages-grid">
          <div className="advantages-left">
            <div className="reveal">
              <span className="tag">Built Different</span>
            </div>
            <h2
              className="section-title reveal"
              style={{ textAlign: "left", marginTop: "20px" }}
            >
              Why Garages
              <br />
              Choose Us
            </h2>
            <p
              className="section-sub reveal"
              style={{ textAlign: "left", margin: "16px 0 0 0" }}
            >
              We didn&apos;t copy enterprise software. We built for South
              African mechanics, in the language they work in.
            </p>
            <ul className="advantages-list reveal">
              {advantages.map((adv) => (
                <li
                  key={adv.id}
                  className={`adv-item${activeId === adv.id ? " active" : ""}`}
                  onClick={() => toggle(adv.id)}
                >
                  <div className="adv-header">
                    <span className="adv-num">{adv.num}</span>
                    <span className="adv-title">{adv.title}</span>
                    <span className="adv-arrow">▶</span>
                  </div>
                  <div className="adv-body">
                    <div className="adv-body-inner">{adv.body}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="advantages-right reveal">
            <div className="adv-visual">
              <div className="adv-visual-header">
                <div className="adv-visual-title">📱 WhatsApp Integration</div>
                <div
                  className="tag"
                  style={{ fontSize: "9px", padding: "4px 10px" }}
                >
                  Live
                </div>
              </div>
              <div className="wa-bubble-container">
                <div
                  className="wa-bubble system"
                  style={{ animationDelay: "0.2s" }}
                >
                  GARAGEOS — JOB CARD #1042 UPDATE
                </div>
                <div
                  className="wa-bubble received"
                  style={{ animationDelay: "0.4s" }}
                >
                  Hi Sipho 👋 Your Toyota Corolla is ready. Here&apos;s your
                  invoice:
                  <br />
                  <br />
                  <strong>Brake Pads:</strong> R650
                  <br />
                  <strong>Labour:</strong> R350
                  <br />
                  <strong>Total: R1,000 incl. VAT</strong>
                  <br />
                  <br />
                  Payment methods: EFT / Cash / SnapScan
                  <span className="wa-time">09:42 ✓✓</span>
                </div>
                <div
                  className="wa-bubble sent"
                  style={{ animationDelay: "0.6s" }}
                >
                  Thank you! I&apos;ll be there by 12. Please send the PDF
                  invoice for my records.
                  <span className="wa-time">09:45 ✓✓</span>
                </div>
                <div
                  className="wa-bubble received"
                  style={{ animationDelay: "0.8s" }}
                >
                  Done! Invoice PDF sent. See you at 12 🔧
                  <span className="wa-time">09:46 ✓✓</span>
                </div>
                <div
                  className="wa-bubble system"
                  style={{ animationDelay: "1s" }}
                >
                  REMINDER SENT: Next Service Due in 10,000 km
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
