import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ApartmentCard from "@/components/ApartmentCard";
import { apartments } from "@/data/hotel";

export default function Apartments() {
  return (
    <Layout>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="font-body text-sm uppercase tracking-[0.3em] text-accent mb-4"
          >
            Accommodations
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4"
          >
            Our Apartments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="font-body text-lg text-primary-foreground/80 max-w-xl mx-auto"
          >
            Six uniquely designed apartments, each offering comfort, elegance, and breathtaking ocean views.
          </motion.p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {apartments.map((apt, i) => (
              <ApartmentCard key={apt.id} apartment={apt} index={i} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
