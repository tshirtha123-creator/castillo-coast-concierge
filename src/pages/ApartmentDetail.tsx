import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Users, Check, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { apartments, getWhatsAppUrl } from "@/data/hotel";

export default function ApartmentDetail() {
  const { id } = useParams<{ id: string }>();
  const apartment = apartments.find((a) => a.id === id);

  if (!apartment) {
    return (
      <Layout>
        <div className="pt-32 pb-20 container mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Apartment Not Found</h1>
          <Link to="/apartments" className="font-body text-accent hover:underline">
            ← Back to Apartments
          </Link>
        </div>
      </Layout>
    );
  }

  const whatsappMsg = `Hello! I'd like to ask about the price and availability for "${apartment.title}" at Hotel Castillo Dalilah.`;

  return (
    <Layout>
      <section className="pt-24 lg:pt-28">
        <div className="container mx-auto px-4">
          <Link to="/apartments" className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Apartments
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl overflow-hidden shadow-luxury mb-8"
              >
                <img
                  src={apartment.image}
                  alt={apartment.title}
                  className="w-full aspect-[16/10] object-cover"
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">{apartment.title}</h1>
                <div className="flex items-center gap-2 mb-6">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="font-body text-sm text-muted-foreground">Max {apartment.capacity} guests</span>
                </div>
                <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
                  {apartment.description}
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Features</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                  {apartment.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 font-body text-sm text-foreground">
                      <Check className="h-4 w-4 text-accent flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {apartment.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-2 font-body text-sm text-foreground">
                      <Check className="h-4 w-4 text-accent flex-shrink-0" />
                      {a}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sticky sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <motion.div
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                  className="bg-card rounded-2xl shadow-luxury p-6 lg:p-8"
                >
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{apartment.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mb-6">
                    Contact us for pricing and availability
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between font-body text-sm">
                      <span className="text-muted-foreground">Capacity</span>
                      <span className="text-foreground font-medium">Up to {apartment.capacity} guests</span>
                    </div>
                    <div className="flex justify-between font-body text-sm">
                      <span className="text-muted-foreground">Payment</span>
                      <span className="text-foreground font-medium">Cash on arrival</span>
                    </div>
                  </div>

                  <a
                    href={getWhatsAppUrl(whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground font-body font-semibold py-3 transition-all hover:shadow-gold hover:scale-[1.02]"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Ask for Price
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pb-20" />
    </Layout>
  );
}
