"use client";
import React, { useState, useEffect } from "react";
import { contactFormTranslations } from "../../translations/contactForm";

export default function ContactForm() {
  const [subject, setSubject] = useState("General Inquiry");
  const [customSubject, setCustomSubject] = useState("");
  const [lang, setLang] = useState("en");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLang = localStorage.getItem("lang") || "en";
      setLang(storedLang);
      // Listen for language changes in other tabs
      const handleStorage = (e: StorageEvent) => {
        if (e.key === "lang" && e.newValue) setLang(e.newValue);
      };
      window.addEventListener("storage", handleStorage);
      return () => window.removeEventListener("storage", handleStorage);
    }
  }, []);

  const t = contactFormTranslations[lang] || contactFormTranslations.en;

  const getFinalSubject = () =>
    subject === t.subjectOther && customSubject.trim()
      ? customSubject
      : subject;

  // Reset subject if language changes and subject is not in new language
  useEffect(() => {
    if (
      subject !== t.subjectGeneral &&
      subject !== t.subjectSupport &&
      subject !== t.subjectFeedback &&
      subject !== t.subjectOther
    ) {
      setSubject(t.subjectGeneral);
      setCustomSubject("");
    }
  }, [lang]);

  return (
    <div style={{ maxWidth: 1000, width: '100%', margin: '0 auto' }}>
      <form
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}
        onSubmit={e => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const email = (form.elements.namedItem('email') as HTMLInputElement).value;
          const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
          const finalSubject = getFinalSubject();
          const mailSubject = encodeURIComponent(finalSubject);
          const body = encodeURIComponent(`Email: ${email}\n\n${message}`);
          window.location.href = `mailto:info@geotuco.com?subject=${mailSubject}&body=${body}`;
        }}
      >
        <input
          type="email"
          name="email"
          placeholder={t.emailPlaceholder}
          required
          style={{
            padding: '0.7rem',
            borderRadius: 8,
            border: '1px solid #ccc',
            fontSize: '1rem',
            width: '100%',
          }}
        />
        <select
          name="subject"
          value={subject}
          onChange={e => setSubject(e.target.value)}
          style={{
            padding: '0.7rem',
            borderRadius: 8,
            border: '1px solid #ccc',
            fontSize: '1rem',
            width: '100%',
          }}
        >
          <option value={t.subjectGeneral}>{t.subjectGeneral}</option>
          <option value={t.subjectSupport}>{t.subjectSupport}</option>
          <option value={t.subjectFeedback}>{t.subjectFeedback}</option>
          <option value={t.subjectOther}>{t.subjectOther}</option>
        </select>
        {subject === t.subjectOther && (
          <input
            type="text"
            name="customSubject"
            placeholder={t.customSubjectPlaceholder}
            value={customSubject}
            onChange={e => setCustomSubject(e.target.value)}
            required
            style={{
              padding: '0.7rem',
              borderRadius: 8,
              border: '1px solid #ccc',
              fontSize: '1rem',
              width: '100%',
            }}
          />
        )}
        <textarea
          name="message"
          placeholder={t.messagePlaceholder}
          required
          rows={5}
          style={{
            padding: '0.7rem',
            borderRadius: 8,
            border: '1px solid #ccc',
            fontSize: '1rem',
            width: '100%',
            resize: 'vertical'
          }}
        />
        <button
          type="submit"
          style={{
            background: '#2a4d69',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '0.9rem',
            fontWeight: 700,
            fontSize: '1rem',
            cursor: 'pointer',
            width: '100%'
          }}
        >
          {t.sendButton}
        </button>
      </form>
    </div>
  );
}
