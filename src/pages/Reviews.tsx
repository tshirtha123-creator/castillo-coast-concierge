import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Send } from "lucide-react";
import Layout from "@/components/Layout";

const approvedReviews = [
  { name: "Sarah M.", rating: 5, text: "An absolute gem! The views are breathtaking and the apartments are incredibly well-maintained. Our family had the best vacation ever.", date: "2025-12" },
  { name: "Ahmed K.", rating: 5, text: "The perfect coastal escape. The staff were warm and welcoming, and the location is unbeatable. We'll definitely be coming back!", date: "2025-11" },
  { name: "Elena R.", rating: 4, text: "Beautiful property with stunning ocean views. The rooms are spacious and clean. Highly recommend for families looking for a peaceful getaway.", date: "2025-10" },
  { name: "James W.", rating: 5, text: "Castillo Dalilah exceeded all our expectations. The sunsets from our balcony were magical. A true hidden paradise.", date: "2025-09" },
  { name: "Fatima B.", rating: 5, text: "We loved every moment of our stay. The pool, the beach, the rooms — everything was wonderful. Can't wait to return!", date: "2025-08" },
  { name: "Marco P.", rating: 4, text: "Great location and comfortable apartments. The family-friendly atmosphere made it easy to relax and enjoy. Would recommend to anyone.", date: "2025-07" },
];

export default function Reviews() {
  const [form, setForm] = useState({ name: "", rating: 5, message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-body text-sm uppercase tracking-[0.3em] text-accent mb-4">
            Guest Feedback
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Guest Reviews
          </motion.h1>
        </div>
      </section>

      {/* Approved reviews */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-10 text-center">What People Say About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approvedReviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-2xl p-6 shadow-luxury"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                  {Array.from({ length: 5 - r.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-border" />
                  ))}
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 italic">"{r.text}"</p>
                <p className="font-heading text-sm font-bold text-foreground">{r.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit review */}
      <section className="py-20 lg:py-28 bg-gradient-sand">
        <div className="container mx-auto px-4 max-w-lg">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">Leave a Review</h2>

          {submitted ? (
            <div className="bg-card rounded-2xl shadow-luxury p-8 text-center">
              <Send className="h-10 w-10 text-accent mx-auto mb-4" />
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Thank You!</h3>
              <p className="font-body text-muted-foreground">Your review has been submitted and is awaiting approval.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-luxury p-8 space-y-6">
              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:border-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-2">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setForm((p) => ({ ...p, rating: n }))}
                      className="transition-transform hover:scale-110"
                    >
                      <Star className={`h-7 w-7 ${n <= form.rating ? "fill-accent text-accent" : "text-border"}`} />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-2">Your Review</label>
                <textarea
                  required
                  maxLength={500}
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:border-accent resize-none"
                  placeholder="Tell us about your experience..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground font-body font-semibold py-3 transition-all hover:shadow-gold hover:scale-[1.02]"
              >
                Submit Review
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}
