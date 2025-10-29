import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Check } from 'lucide-react';
import { API_ENDPOINTS, apiRequest } from '../config/api';

/**
 * ContactForm - 2-Spalten Kontaktformular
 * Features:
 * - Links: Formular mit Name, Email, Telefon, Projektart, Nachricht
 * - Rechts: Kontaktinformationen
 * - Jelly Design System Styles
 * - Validation & Error Handling
 * - Loading States & Success Animation
 */
const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  // UI state
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [errors, setErrors] = useState({});

  // Projektarten für Dropdown
  const projectTypes = [
    'Schulkleidung',
    'Arbeitstextilien',
    'Medizintextilien',
    'Sportbekleidung',
    'Corporate Fashion',
    'Sonstiges',
  ];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name ist erforderlich';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name muss mindestens 2 Zeichen lang sein';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail ein';
    }

    // Phone ist optional, aber wenn vorhanden, validieren
    if (formData.phone.trim() && !/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = 'Bitte geben Sie eine gültige Telefonnummer ein';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Bitte wählen Sie eine Projektart';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Nachricht ist erforderlich';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Nachricht muss mindestens 10 Zeichen lang sein';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await apiRequest(API_ENDPOINTS.contact, formData);

      setStatus({
        type: 'success',
        message: response.message || 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: '',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section bg-candyWhite">
      <div className="container-custom">
        {/* Überschrift */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-semibold text-nightBlue mb-4">
            Lass uns sprechen
          </h2>
          <p className="text-lg text-nightBlue/70 font-sans max-w-2xl mx-auto">
            Kontaktiere uns für ein unverbindliches Angebot
          </p>
        </motion.div>

        {/* 2-Spalten Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Linke Spalte - Formular */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-nightBlue mb-2"
                >
                  Name <span className="text-gummyRed">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`input-jelly ${errors.name ? 'input-error' : ''}`}
                  placeholder="Max Mustermann"
                  disabled={loading}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-gummyRed">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-nightBlue mb-2"
                >
                  E-Mail <span className="text-gummyRed">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input-jelly ${errors.email ? 'input-error' : ''}`}
                  placeholder="max@example.com"
                  disabled={loading}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-gummyRed">{errors.email}</p>
                )}
              </div>

              {/* Telefon (optional) */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-nightBlue mb-2"
                >
                  Telefon (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`input-jelly ${errors.phone ? 'input-error' : ''}`}
                  placeholder="+43 123 456 789"
                  disabled={loading}
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-gummyRed">{errors.phone}</p>
                )}
              </div>

              {/* Projektart Dropdown */}
              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-nightBlue mb-2"
                >
                  Projektart <span className="text-gummyRed">*</span>
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={`select-jelly ${errors.projectType ? 'input-error' : ''}`}
                  disabled={loading}
                >
                  <option value="">Bitte wählen...</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <p className="mt-2 text-sm text-gummyRed">{errors.projectType}</p>
                )}
              </div>

              {/* Nachricht */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-nightBlue mb-2"
                >
                  Nachricht <span className="text-gummyRed">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`textarea-jelly ${errors.message ? 'input-error' : ''}`}
                  placeholder="Erzähle uns von deinem Projekt..."
                  disabled={loading}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-gummyRed">{errors.message}</p>
                )}
              </div>

              {/* Status Messages */}
              <AnimatePresence>
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-2xl flex items-start gap-3 ${
                      status.type === 'success'
                        ? 'bg-gummyGreen/10 border-2 border-gummyGreen'
                        : 'bg-gummyRed/10 border-2 border-gummyRed'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <Check className="text-gummyGreen flex-shrink-0 mt-0.5" size={20} />
                    ) : (
                      <span className="text-gummyRed text-xl flex-shrink-0">⚠</span>
                    )}
                    <p className={`text-sm font-sans ${status.type === 'success' ? 'text-gummyGreen' : 'text-gummyRed'}`}>
                      {status.message}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="btn-jelly btn-primary w-full"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                {loading ? (
                  <>
                    <span className="spinner-jelly mr-2" />
                    <span>Wird gesendet...</span>
                  </>
                ) : (
                  <>
                    <span>Jetzt senden 🍬</span>
                  </>
                )}
              </motion.button>

              <p className="text-xs text-nightBlue/50 text-center">
                <span className="text-gummyRed">*</span> Pflichtfelder
              </p>
            </form>
          </motion.div>

          {/* Rechte Spalte - Kontaktinfos */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Info Karte */}
            <div className="card-glass space-y-8">
              <div>
                <h3 className="font-heading font-semibold text-2xl text-nightBlue mb-6">
                  Kontaktinformationen
                </h3>
              </div>

              {/* Adresse */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gummyRed flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-nightBlue mb-1">
                    Adresse
                  </h4>
                  <p className="font-sans text-nightBlue/70">
                    Musterstraße 123<br />
                    1010 Wien<br />
                    Österreich
                  </p>
                </div>
              </div>

              {/* E-Mail */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gummyBlue flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-nightBlue mb-1">
                    E-Mail
                  </h4>
                  <a
                    href="mailto:kontakt@bearshop.at"
                    className="font-sans text-gummyBlue hover:text-gummyRed transition-colors"
                  >
                    kontakt@bearshop.at
                  </a>
                </div>
              </div>

              {/* Telefon */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gummyGreen flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-nightBlue mb-1">
                    Telefon
                  </h4>
                  <a
                    href="tel:+43123456789"
                    className="font-sans text-gummyBlue hover:text-gummyRed transition-colors"
                  >
                    +43 123 456 789
                  </a>
                </div>
              </div>

              {/* Öffnungszeiten */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gummyYellow flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-nightBlue mb-1">
                    Öffnungszeiten
                  </h4>
                  <p className="font-sans text-nightBlue/70">
                    Mo-Fr: 09:00 - 18:00 Uhr<br />
                    Sa: 10:00 - 14:00 Uhr<br />
                    So: Geschlossen
                  </p>
                </div>
              </div>
            </div>

            {/* Zusätzliche Info */}
            <div className="bg-gradient-to-br from-gummyRed to-gummyOrange rounded-3xl p-8 text-white">
              <h4 className="font-heading font-semibold text-xl mb-3">
                Schnelle Rückmeldung garantiert
              </h4>
              <p className="font-sans leading-relaxed">
                Wir melden uns innerhalb von 24 Stunden bei dir. Deine Zufriedenheit ist uns wichtig!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
