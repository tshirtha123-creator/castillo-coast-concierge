import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { HOTEL_EMAIL, HOTEL_ADDRESS, getWhatsAppUrl } from "@/data/hotel";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app this would send to backend
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-body text-sm uppercase tracking-[0.3em] text-accent mb-4">
            Get in Touch
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Contact Us
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="font-body text-lg text-primary-foreground/80 max-w-xl mx-auto">
            We'd love to hear from you. Reach out with any questions about your stay.
          </motion.p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Contact Information</h2>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-foreground mb-1">Address</h3>
                    <p className="font-body text-sm text-muted-foreground">{HOTEL_ADDRESS}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-foreground mb-1">Email</h3>
                    <a href={`mailto:${HOTEL_EMAIL}`} className="font-body text-sm text-accent hover:underline">{HOTEL_EMAIL}</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-foreground mb-1">WhatsApp</h3>
                    <a
                      href={getWhatsAppUrl("Hello! I have a question about Hotel Castillo Dalilah.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-body text-sm text-accent hover:underline"
                    >
                      <MessageCircle className="h-4 w-4" /> Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-luxury">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13000!2d-10.0667!3d28.6024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb6790c2b636e67%3A0x60e3b5bfe45d2f7c!2sEl+Ouatia!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Hotel location"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Send a Message</h2>

              {submitted ? (
                <div className="bg-card rounded-2xl shadow-luxury p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                  <p className="font-body text-muted-foreground">We've received your message and will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      required
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:border-accent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea
                      required
                      maxLength={1000}
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground font-body font-semibold py-3 transition-all hover:shadow-gold hover:scale-[1.02]"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
