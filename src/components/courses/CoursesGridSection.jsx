"use client";
import { ArrowRight, MessageCircle } from "lucide-react";
import styles from './CoursesGridSection.module.css';

export default function CoursesGridSection() {
  return (
    <section className={styles.section}>
      {/* Background with Geometric Shapes */}
      <div className={styles.background}>
        <div className={styles.shapeSquare1} />
        <div className={styles.shapeSquare2} />
        <div className={styles.shapeSquare3} />
        <div className={styles.glowCircle1} />
        <div className={styles.glowCircle2} />
        
        <svg className={styles.triangleSvg1} viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        <svg className={styles.triangleSvg2} viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        
        <div className={styles.dotsGrid}>
          {[...Array(24)].map((_, i) => (
            <div key={i} className={styles.dot} />
          ))}
        </div>
        
        <div className={`${styles.plusSign} ${styles.plusSign1}`}>+</div>
        <div className={`${styles.plusSign} ${styles.plusSign2}`}>+</div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.mainHeading}>
            Transform Your Future with Professional Courses
          </h1>
          <p className={styles.description}>
            Join 25,000+ successful learners who advanced their careers with industry-leading courses in technology, design, and digital marketing. Expert mentorship, real projects, and guaranteed placement support.
          </p>

          <div className={styles.ctaWrapper}>
            <a href="/contact-us" className={styles.ctaButtonPrimary}>
              Enroll Now
              <ArrowRight className={styles.ctaIcon} />
            </a>
            <a
              href="https://wa.me/917827250823"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButtonSecondary}
            >
              <MessageCircle className={styles.ctaIcon} />
              Talk to Course Advisor
            </a>
          </div>

          <p className={styles.trustLine}>
            ✓ Industry-Recognized Certification  ✓ 100% Placement Assistance  ✓ Live Projects
          </p>
        </div>
      </div>
    </section>
  );
}
