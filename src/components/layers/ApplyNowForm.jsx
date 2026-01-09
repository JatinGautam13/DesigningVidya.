import { useState } from "react";
import styles from "./HeroSection.module.css";
import { X } from "lucide-react";

export default function ApplyNowForm({ show, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    center: "",
  });

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.7)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#18181b",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          padding: "2rem",
          maxWidth: "400px",
          width: "100%",
          position: "relative",
        }}
      >
        <div className={styles.formHeader}>
          <h3 className={styles.formTitle}>Apply Now</h3>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close"
            style={{ position: "absolute", top: 16, right: 16 }}
          >
            <X size={20} />
          </button>
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            // handle submit logic here
            onClose();
          }}
          className={styles.form}
        >
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            className={styles.input}
            required
          />
          <input
            type="tel"
            placeholder="Phone No."
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
            className={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            className={styles.input}
            required
          />
          <select
            value={formData.center}
            onChange={e => setFormData({ ...formData, center: e.target.value })}
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
  );
}
