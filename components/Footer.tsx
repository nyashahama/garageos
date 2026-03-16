import React from "react";

export default function Footer() {
  return (
    <footer style={{ padding: "64px 0 40px" }}>
      <div className="container">
        <div className="footer-grid">
          {/* Brand column */}
          <div>
            <a href="#" className="nav-logo" style={{ textDecoration: "none" }}>
              <div className="nav-logo-mark" />
              <span className="nav-logo-text">
                Garage<span>OS</span>
              </span>
            </a>
            <p className="footer-brand-desc">
              The workshop operating system built for South African mechanics.
              Replace paper, WhatsApp chaos and lost invoices with one powerful
              platform.
            </p>
            <div className="footer-sa-badge">🇿🇦 Built in South Africa</div>
          </div>

          {/* Product */}
          <div>
            <div className="footer-col-title">Product</div>
            <ul className="footer-col-links">
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#how">How It Works</a>
              </li>
              <li>
                <a href="#">Changelog</a>
              </li>
              <li>
                <a href="#">Roadmap</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="footer-col-title">Resources</div>
            <ul className="footer-col-links">
              <li>
                <a href="#">Help Centre</a>
              </li>
              <li>
                <a href="#">API Docs</a>
              </li>
              <li>
                <a href="#">WhatsApp Setup Guide</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Status</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-col-links">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">POPIA Compliance</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © 2025 GarageOS (Pty) Ltd. All rights reserved. Registered in South
            Africa.
          </p>
          <ul className="footer-bottom-links">
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">POPIA</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
