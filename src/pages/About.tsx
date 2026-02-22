import { motion } from "framer-motion";
import { Star, Waves, Users, Award, Coffee } from "lucide-react";
import hotelAbout from "@/assets/hotel-about.jpg";
import heroImage from "@/assets/hero-hotel.jpg";
import Layout from "@/components/Layout";

const stats = [
  { icon: Star, label: "Years of Excellence", value: "5+" },
  { icon: Users, label: "Happy Guests", value: "2,000+" },
  { icon: Award, label: "Guest Rating", value: "4.8/5" },
  { icon: Coffee, label: "Apartments", value: "6" },
];

const values = [
  { title: "Warm Hospitality", description: "We treat every guest like family, ensuring personalized attention and care throughout your stay." },
  { title: "Coastal Living", description: "Our beachfront location offers the perfect blend of relaxation and adventure on Morocco's Atlantic coast." },
  { title: "Family First", description: "Everything is designed with families in mind — from spacious apartments to child-friendly facilities." },
  { title: "Authentic Morocco", description: "Experience genuine Moroccan culture, cuisine, and warmth in a modern luxury setting." },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <img src={heroImage} alt="Hotel Castillo Dalilah" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="font-body text-sm uppercase tracking-[0.3em] text-accent mb-4"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
          >
            Hotel Castillo Dalilah
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="font-body text-lg text-primary-foreground/80 max-w-2xl mx-auto"
          >
            A luxury coastal retreat where Moroccan tradition meets modern comfort on the shores of El Ouatia.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <s.icon className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="font-heading text-3xl font-bold text-foreground">{s.value}</p>
                <p className="font-body text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.img
              src={hotelAbout}
              alt="Hotel pool and exterior"
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="rounded-2xl shadow-luxury w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="font-body text-sm uppercase tracking-[0.2em] text-accent font-medium mb-3">Our Story</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Where the Ocean Meets Home
              </h2>
              <div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed">
                <p>
                  Hotel Castillo Dalilah was born from a dream to create the perfect family beach destination on Morocco's
                  beautiful Atlantic coast. Located in El Ouatia, Tan-Tan, our property combines stunning natural beauty
                  with luxurious modern comfort.
                </p>
                <p>
                  Each of our six carefully designed apartments offers panoramic ocean views, premium furnishings, and all
                  the amenities you need for an unforgettable stay. Whether you're watching the sunset from your private
                  balcony or exploring the local markets, every moment is a treasure.
                </p>
                <p>
                  We believe in creating more than just a place to stay — we create experiences that bring families together
                  and build memories that last a lifetime.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-gradient-sand">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-accent font-medium mb-3">Our Values</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">What Drives Us</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-8 bg-card rounded-2xl shadow-luxury"
              >
                <Waves className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
