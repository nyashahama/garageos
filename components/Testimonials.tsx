import React from "react";

const testimonials = [
  {
    quote:
      "We cut our invoicing time from 20 minutes to under 2 minutes per job. The WhatsApp integration alone paid for itself in the first week. I don't know how we ran this place without it.",
    name: "Themba Mokoena",
    role: "Owner",
    workshop: "Mokoena Auto Workshop",
    city: "Johannesburg, GP",
    rating: 5,
    avatar: "T",
    color: "#ff6b00",
    cardClass: "testimonial-card-1",
  },
  {
    quote:
      "My mechanics barely needed any training — the system is that simple to use. Customers love getting their quotes and invoices on WhatsApp. Our approval rate went through the roof within the first month.",
    name: "Deon van der Berg",
    role: "Workshop Manager",
    workshop: "Van der Berg Motors",
    city: "Cape Town, WC",
    rating: 5,
    avatar: "D",
    color: "#4ade80",
    cardClass: "testimonial-card-2",
  },
  {
    quote:
      "Load-shedding was killing our operations — we'd lose half a day's work every time the power went. GarageOS works offline and syncs everything back. We haven't missed a single job card since switching.",
    name: "Precious Nkosi",
    role: "Workshop Owner",
    workshop: "Nkosi Auto Repairs",
    city: "Durban, KZN",
    rating: 5,
    avatar: "P",
    color: "#818cf8",
    cardClass: "testimonial-card-3",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">
            <span className="tag">Real Workshops. Real Results.</span>
          </div>
          <h2 className="section-title">
            Trusted by Mechanics
            <br />
            Across South Africa
          </h2>
          <p className="section-sub">
            From single-bay shops in Durban to multi-bay operations in Gauteng —
            workshops of every size are running smarter on GarageOS.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`testimonial-card ${t.cardClass} reveal`}
            >
              {/* Stars */}
              <div className="testimonial-stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="testimonial-star">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="testimonial-quote">{t.quote}</p>

              {/* Footer */}
              <div className="testimonial-footer">
                <div
                  className="testimonial-avatar"
                  style={{ background: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-workshop">
                    {t.workshop} · {t.city}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
