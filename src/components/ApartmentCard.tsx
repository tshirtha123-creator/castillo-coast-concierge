import { Link } from "react-router-dom";
import { Users } from "lucide-react";
import { motion } from "framer-motion";
import { type Apartment, getWhatsAppUrl } from "@/data/hotel";

interface ApartmentCardProps {
  apartment: Apartment;
  index?: number;
}

export default function ApartmentCard({ apartment, index = 0 }: ApartmentCardProps) {
  const whatsappMsg = `Hello, I'd like to ask about the price for "${apartment.title}" at Hotel Castillo Dalilah.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-luxury hover:shadow-gold transition-all duration-500 hover:-translate-y-1"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={apartment.image}
          alt={apartment.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-primary/80 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-body font-medium">
          <Users className="h-3 w-3" />
          Max {apartment.capacity}
        </div>
      </div>

      <div className="p-5 lg:p-6">
        <h3 className="font-heading text-xl font-bold text-foreground mb-2">{apartment.title}</h3>
        <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
          {apartment.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {apartment.features.slice(0, 3).map((f) => (
            <span
              key={f}
              className="text-xs font-body font-medium bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full"
            >
              {f}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={getWhatsAppUrl(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center rounded-xl bg-accent text-accent-foreground font-body text-sm font-semibold py-2.5 transition-all hover:shadow-gold hover:scale-[1.02]"
          >
            Ask for Price
          </a>
          <Link
            to={`/apartments/${apartment.id}`}
            className="flex-1 text-center rounded-xl border-2 border-primary text-primary font-body text-sm font-semibold py-2.5 transition-all hover:bg-primary hover:text-primary-foreground"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
