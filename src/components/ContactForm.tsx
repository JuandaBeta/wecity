"use client";
import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = "form.error.name";
    if (!form.email.trim()) errs.email = "form.error.email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "form.error.email_valid";
    if (!form.message.trim()) errs.message = "form.error.message";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setStatus("submitting");

    // Simulación de envío
    await new Promise(res => setTimeout(res, 1500));
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="cf">
      {status === "success" ? (
        <div className="cf__success">
          <div className="cf__success-icon">✓</div>
          <p className="cf__success-title" data-i18n="form.success.title">Message Sent!</p>
          <p className="cf__success-sub" data-i18n="form.success.sub">We'll get back to you as soon as possible.</p>
          <button className="cf__btn" onClick={() => setStatus("idle")} data-i18n="form.btn.another">
            Send Another
          </button>
        </div>
      ) : (
        <div className="cf__form">
          {/* Name */}
          <div className="cf__field">
            <label className="cf__label" htmlFor="name" data-i18n="form.name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className={`cf__input ${errors.name ? "cf__input--error" : ""}`}
              placeholder="Your name"
              data-i18n-placeholder="form.name.placeholder"
              value={form.name}
              onChange={handleChange}
              disabled={status === "submitting"}
            />
            {errors.name && <span className="cf__error" data-i18n={errors.name}>Name is required.</span>}
          </div>

          {/* Email */}
          <div className="cf__field">
            <label className="cf__label" htmlFor="email" data-i18n="form.email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className={`cf__input ${errors.email ? "cf__input--error" : ""}`}
              placeholder="your@email.com"
              data-i18n-placeholder="form.email.placeholder"
              value={form.email}
              onChange={handleChange}
              disabled={status === "submitting"}
            />
            {errors.email && <span className="cf__error" data-i18n={errors.email}>Email is required.</span>}
          </div>

          {/* Message */}
          <div className="cf__field">
            <label className="cf__label" htmlFor="message" data-i18n="form.message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className={`cf__input cf__textarea ${errors.message ? "cf__input--error" : ""}`}
              placeholder="How can we transform your city together?"
              data-i18n-placeholder="form.message.placeholder"
              value={form.message}
              onChange={handleChange}
              disabled={status === "submitting"}
            />
            {errors.message && <span className="cf__error" data-i18n={errors.message}>Message is required.</span>}
          </div>

          <button
            className="cf__btn"
            onClick={handleSubmit}
            disabled={status === "submitting"}
            data-i18n="form.btn"
          >
            {status === "submitting" ? (
              <span className="cf__spinner"></span>
            ) : (
              "Send Message →"
            )}
          </button>
        </div>
      )}

      <style>{`
        .cf { width: 100%; }
        .cf__form { display: flex; flex-direction: column; gap: 1.25rem; }
        .cf__field { display: flex; flex-direction: column; gap: 0.4rem; }
        .cf__label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #8A8A7A;
        }
        .cf__input {
          background: #0F100E;
          border: 1px solid #1F211C;
          border-radius: 8px;
          color: #E8E4D8;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          padding: 0.85rem 1rem;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          resize: none;
          width: 100%;
        }
        .cf__input::placeholder { color: #3A3D34; }
        .cf__input:focus {
          border-color: #A6E03A;
          box-shadow: 0 0 0 3px rgba(166,224,58,0.12);
        }
        .cf__input--error { border-color: #E05A3A; }
        .cf__input:disabled { opacity: 0.5; cursor: not-allowed; }
        .cf__error { font-size: 0.78rem; color: #E05A3A; }
        .cf__btn {
          align-self: flex-start;
          padding: 0.85rem 1.75rem;
          background: #A6E03A;
          color: #080907;
          border: none;
          border-radius: 999px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          min-width: 160px;
          justify-content: center;
        }
        .cf__btn:hover:not(:disabled) {
          background: #bdf04d;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(166,224,58,0.3);
        }
        .cf__btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .cf__spinner {
          width: 18px; height: 18px;
          border: 2px solid rgba(8,9,7,0.3);
          border-top-color: #080907;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          display: inline-block;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .cf__success {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 2rem 0;
        }
        .cf__success-icon {
          width: 56px; height: 56px;
          border-radius: 50%;
          background: rgba(166,224,58,0.15);
          border: 2px solid #A6E03A;
          color: #A6E03A;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cf__success-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: #F5F2EA;
        }
        .cf__success-sub { color: #8A8A7A; font-size: 0.95rem; }
      `}</style>
    </div>
  );
}