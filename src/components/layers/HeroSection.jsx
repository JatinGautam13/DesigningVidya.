"use client";
import { useState, useEffect } from "react";

import { ArrowRight, MessageCircle } from "lucide-react";
import styles from "./HeroSection.module.css";
import ApplyNowForm from "./ApplyNowForm";


export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    center: "",
  });
  const [showMobileForm, setShowMobileForm] = useState(false);
  const [showPopupForm, setShowPopupForm] = useState(false);

  // Show popup automatically after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopupForm(true);
    }, 30000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowPopupForm(false); // Close popup on submit
    setShowMobileForm(false); // Optionally close mobile form on submit
  };

  // Remove CallbackForm, use ApplyNowForm instead

  return (
    <section className={styles.section}>
      {/* Pure Black Background with Geometric Shapes */}
      <div className={styles.background}>
        {/* Purple/Magenta Geometric Shapes */}
        <div className={styles.shapeSquare1} />
        <div className={styles.shapeSquare2} />
        <div className={styles.shapeSquare3} />
        <div className={styles.glowCircle1} />
        <div className={styles.glowCircle2} />
        {/* Triangle shapes */}
        <svg className={styles.triangleSvg1} viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        <svg className={styles.triangleSvg2} viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        {/* Dots pattern */}
        <div className={styles.dotsGrid}>
          {[...Array(24)].map((_, i) => (
            <div key={i} className={styles.dot} />
          ))}
        </div>
        {/* Cross/Plus shapes */}
        <div className={`${styles.plusSign} ${styles.plusSign1}`}>+</div>
        <div className={`${styles.plusSign} ${styles.plusSign2}`}>+</div>
      </div>

      {/* Popup Modal for ApplyNowForm */}
      <ApplyNowForm show={showPopupForm} onClose={() => setShowPopupForm(false)} />

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Content */}
          <div className={styles.leftContent}>
            {/* Main Heading */}
            <h1 className={styles.mainHeading}>
              Build a Career in Creative, Media & Technology — Not Just Skills
            </h1>
            <p className={styles.description}>
              Trusted by 25,000+ aspiring creators. We don&apos;t just teach software. We mentor you through real
              projects, portfolios, and career paths that actually get you hired.
            </p>

            {/* CTA Button */}
            <div className={styles.ctaWrapper}>
              <button
                className={styles.ctaButtonPrimary}
                onClick={() => setShowPopupForm(true)}
              >
                Get Free Career Guidance
                <ArrowRight className={styles.ctaIcon} />
              </button>
              <a
                href="https://wa.me/917827250823"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButtonSecondary}
              >
                <MessageCircle className={styles.ctaIcon} />
                Talk to a Career Expert
              </a>
            </div>

            <p className={styles.trustLine}>Trusted by 25,000+ aspiring creators</p>
          </div>

          {/* Right - Callback Form (Always Visible) */}
          <div className={styles.rightContent}>
            <div className={styles.mobileFormToggle}>
              <button
                type="button"
                className={styles.mobileFormButton}
                onClick={() => setShowMobileForm((prev) => !prev)}
              >
                Request Call Back
                <ArrowRight
                  className={`${styles.ctaIcon} ${showMobileForm ? styles.iconOpen : styles.iconClosed}`}
                />
              </button>
            </div>

            <div
              className={`${styles.formCard} ${showMobileForm ? styles.expanded : styles.collapsed}`}
            >
              {/* Always show the form in the right section */}
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}></h3>
              </div>
              <form onSubmit={handleSubmit} className={styles.form}>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={styles.input}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone No."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={styles.input}
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={styles.input}
                  required
                />
                <select
                  value={formData.center}
                  onChange={(e) => setFormData({ ...formData, center: e.target.value })}
                  className={styles.select}
                  required
                >
                  <option value="" className={styles.selectOption}>Preferred Course</option>
                  <option value="graphic-design" className={styles.selectOption}>Graphic Design</option>
                  <option value="animation" className={styles.selectOption}>Animation</option>
                  <option value="vfx" className={styles.selectOption}>VFX</option>
                  <option value="ui-ux" className={styles.selectOption}>UI/UX Design</option>
                  <option value="game-design" className={styles.selectOption}>Game Design</option>
                </select>
                <p className={styles.disclaimer}>
                  By clicking on &quot;Submit&quot;, I allow the company to call me and send program information on email/sms/phone.
                </p>
                <button type="submit" className={styles.submitBtn}>
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
