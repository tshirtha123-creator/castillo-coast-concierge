import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const approvedReviews = [
  { name: "Thierry", rating: 5, text: "Idéal pour se reposer. Appartement avec balcon, vue sur mer, très confortable, pour pouvoir se reposer. Accueil chaleureux.", date: "2025-01", country: "France", type: "Couple" },
  { name: "Lorenzo", rating: 5, text: "Inoubliable. Le réceptionniste était très aimable et parlait un excellent anglais. J'étais fatigué après une nuit de voyage et j'ai été accueilli bien avant l'heure d'enregistrement.", date: "2026-02", country: "Italy", type: "Solo Traveler" },
  { name: "Radosław", rating: 5, text: "Hôtel très confortable. Un appartement de 3 pièces très spacieux, idéal pour un long séjour en famille. La cuisine est entièrement équipée. Le personnel est très accueillant. La réceptionniste nous a donné de nombreux conseils sur les endroits à visiter.", date: "2024-11", country: "Poland", type: "Couple" },
  { name: "Michael", rating: 5, text: "Appartement parfait !!! Un immeuble et un appartement si beaux et de si bon goût ! Le style marocain, j'ai adoré ! Un des meilleurs endroits du Maroc pour nous. Les propriétaires sont très sympathiques !", date: "2024-11", country: "Germany", type: "Group" },
];

export default function Reviews() {
  const [form, setForm] = useState({ name: "", rating: 5, message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await supabase.from("reviews").insert({
      full_name: form.name.trim(),
      rating: form.rating,
      message: form.message.trim(),
    });
    setSubmitting(false);
    if (error) {
      toast({ title: "Error", description: "Failed to submit review. Please try again.", variant: "destructive" });
      return;
    }
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
                <div className="flex items-center justify-between">
                  <p className="font-heading text-sm font-bold text-foreground">{r.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{r.country} · {r.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://www.booking.com/hotel/ma/castillo-dalilah.fr.html"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-accent hover:underline font-medium"
            >
              See more reviews on Booking.com →
            </a>
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
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground font-body font-semibold py-3 transition-all hover:shadow-gold hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Submit Review"}
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}
