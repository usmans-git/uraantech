"use client";

import React, { useState, useEffect } from "react";

export default function ConsultationDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    captchaInput: "",
  });

  const [captcha, setCaptcha] = useState({
    num1: 3,
    num2: 4,
    expected: 7,
  });

  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 8) + 1;
    const n2 = Math.floor(Math.random() * 8) + 1;
    setCaptcha({
      num1: n1,
      num2: n2,
      expected: n1 + n2,
    });
    setFormData((prev) => ({ ...prev, captchaInput: "" }));
  };

  useEffect(() => {
    generateCaptcha();

    // Listen for custom trigger event
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    window.addEventListener("open-consultation-drawer", handleOpen);
    window.addEventListener("close-consultation-drawer", handleClose);

    // Intercept clicks on any element with .open-consultation-drawer-btn or href="#contact"
    const handleDocumentClick = (e) => {
      const target = e.target.closest(
        ".open-consultation-drawer-btn, a[href='#contact'], #openDrawerCtaBtn"
      );
      if (target) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    // Escape key listener
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("open-consultation-drawer", handleOpen);
      window.removeEventListener("close-consultation-drawer", handleClose);
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please complete all required fields (*).");
      return;
    }

    if (parseInt(formData.captchaInput, 10) !== captcha.expected) {
      setErrorMessage(
        `Incorrect security challenge. What is ${captcha.num1} + ${captcha.num2}?`
      );
      generateCaptcha();
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          service: formData.service || "General Consultation",
          message: formData.message,
          source: window.location.href,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error. Please try again or reach out via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      captchaInput: "",
    });
    setIsSubmitted(false);
    setErrorMessage("");
    generateCaptcha();
    setIsOpen(false);
  };

  return (
    <>
      {/* Backdrop Overlay */}
      <div
        className={`drawer-backdrop ${isOpen ? "is-active" : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-out Cart-like Drawer */}
      <aside
        className={`consultation-drawer ${isOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Project Consultation Form"
      >
        {/* Drawer Header */}
        <div className="drawer-header">
          <div className="drawer-header-info">
            <span className="drawer-badge">24H RESPONSE &bull; DIRECT ENGAGEMENT</span>
            <h2 className="drawer-title">Start a Project Consultation</h2>
          </div>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Close consultation drawer"
          >
            &times;
          </button>
        </div>

        {/* Drawer Scrollable Body */}
        <div className="drawer-body">
          {isSubmitted ? (
            <div className="drawer-success-state">
              <div className="success-icon">&#10003;</div>
              <h3 className="success-title">Inquiry Received!</h3>
              <p className="success-desc">
                Thank you, <strong>{formData.name}</strong>. A senior systems architect will
                review your requirements and reach out via email within 24 hours.
              </p>
              <div className="success-perks">
                <div className="perk-row">
                  <span className="perk-check">&check;</span>
                  <span>Mutual NDA protection active</span>
                </div>
                <div className="perk-row">
                  <span className="perk-check">&check;</span>
                  <span>Fixed-scope sprint timeline proposal</span>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-shimmer full-width"
                onClick={resetForm}
              >
                <span>Close Window</span>
              </button>
            </div>
          ) : (
            <>
              <p className="drawer-intro">
                Speak directly with our senior engineering leads. Fixed-scope milestones, zero junior
                outsourcing, and rapid delivery velocity.
              </p>

              {errorMessage && (
                <div className="drawer-error-alert" role="alert">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="drawer-form" noValidate>
                <div className="form-group">
                  <label htmlFor="drawer_name">
                    Full Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="drawer_name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="drawer_email">
                    Work Email <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    id="drawer_email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="drawer_phone">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    id="drawer_phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 300 1234567"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="drawer_service">
                    Primary Capability <span className="req">*</span>
                  </label>
                  <select
                    id="drawer_service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service focus</option>
                    <option value="AI & Automation">AI &amp; Automation (LLM Agents, Workflows)</option>
                    <option value="Web & Cloud Platforms">Web &amp; Cloud Platforms (Next.js, APIs)</option>
                    <option value="Mobile Apps">Mobile Apps (Flutter, React Native)</option>
                    <option value="Cybersecurity">Cybersecurity (VAPT, Cloud Audits)</option>
                    <option value="Design Systems">Design Systems &amp; Conversion UX</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="drawer_message">
                    Project Overview &amp; Goals <span className="req">*</span>
                  </label>
                  <textarea
                    id="drawer_message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe what you're building, timeline targets, or technical bottlenecks..."
                    required
                  />
                </div>

                {/* Math Captcha to prevent spam */}
                <div className="form-group captcha-group">
                  <label htmlFor="drawer_captcha">
                    Security Challenge: What is {captcha.num1} + {captcha.num2}?{" "}
                    <span className="req">*</span>
                  </label>
                  <div className="captcha-row">
                    <input
                      type="text"
                      id="drawer_captcha"
                      name="captchaInput"
                      value={formData.captchaInput}
                      onChange={handleChange}
                      placeholder="Answer"
                      required
                    />
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      className="btn-refresh"
                      title="New challenge"
                    >
                      &#8635;
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-shimmer full-width drawer-submit-btn"
                >
                  <span>
                    {isSubmitting ? "Dispatching Inquiry..." : "Schedule Technical Consultation"}
                  </span>
                  <span className="btn-arrow" aria-hidden="true">
                    &rarr;
                  </span>
                </button>

                <div className="drawer-footer-trust">
                  <span>🔒 100% Confidential &bull; Mutual NDA on Request</span>
                </div>
              </form>
            </>
          )}
        </div>
      </aside>
    </>
  );
}
