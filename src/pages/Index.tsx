import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, MapPin, Shield, Waves, Sun, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import heroImage from "@/assets/hero-hotel.jpg";
import hotelAbout from "@/assets/hotel-about.jpg";
import placeBeach from "@/assets/place-beach.jpg";
import placeSouk from "@/assets/place-souk.jpg";
import placeDesert from "@/assets/place-desert.jpg";

import Layout from "@/components/Layout";
import BookingBanner from "@/components/BookingBanner";
import ApartmentCard from "@/components/ApartmentCard";
import { apartments, getWhatsAppUrl } from "@/data/hotel";

const testimonials = [
  { name: "Sarah M.", rating: 5, text: "An absolute gem! The views are breathtaking and the apartments are incredibly well-maintained. Our family had the best vacation ever.", country: "France" },
  { name: "Ahmed K.", rating: 5, text: "The perfect coastal escape. The staff were warm and welcoming, and the location is unbeatable. We'll definitely be coming back!", country: "Morocco" },
  { name: "Elena R.", rating: 4, text: "Beautiful property with stunning ocean views. The rooms are spacious and clean. Highly recommend for families looking for a peaceful getaway.", country: "Spain" },
  { name: "James W.", rating: 5, text: "Castillo Dalilah exceeded all our expectations. The sunsets from our balcony were magical. A true hidden paradise.", country: "UK" },
];

const benefits = [
  { icon: Waves, title: "Beachfront Location", description: "Steps away from pristine Atlantic beaches with crystal-clear waters." },
  { icon: Shield, title: "Family Friendly", description: "Safe, welcoming environment perfect for families with children of all ages." },
  { icon: Sun, title: "Year-Round Sunshine", description: "Enjoy 300+ days of sunshine in Morocco's beautiful southern coast." },
  { icon: Heart, title: "Personal Service", description: "Dedicated staff ensuring every detail of your stay is perfect." },
];

const places = [
  { name: "El Ouatia Beach", image: placeBeach, description: "Golden sands and turquoise waters just steps from the hotel.", mapUrl: "https://maps.google.com/?q=28.6024,-10.0667" },
  { name: "Tan-Tan Souk", image: placeSouk, description: "Vibrant local market with spices, crafts, and authentic Moroccan culture.", mapUrl: "https://maps.google.com/?q=28.4380,-11.1031" },
  { name: "Desert & Coast", image: placeDesert, description: "Where the Sahara meets the Atlantic — dramatic cliffs and dunes.", mapUrl: "https://maps.google.com/?q=28.55,-10.5" },
];

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <div className="container mx-auto px-4">
        <BookingBanner />
      </div>
      <FeaturedApartments />
      <AboutPreview />
      <TestimonialsSection />
      <WhyBookSection />
      <PlacesToVisit />
      <MapSection />
    </Layout>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Hotel Castillo Dalilah oceanfront view"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-primary/70" />

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-sm uppercase tracking-[0.3em] text-accent mb-4"
        >
          Luxury Coastal Retreat
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
        >
          Hotel Castillo Dalilah
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl mx-auto"
        >
          Your perfect family escape on Morocco's stunning Atlantic coast — El Ouatia, Tan-Tan
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={getWhatsAppUrl("Hello! I'd like to book a stay at Hotel Castillo Dalilah.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground font-body font-semibold px-8 py-3.5 text-base transition-all hover:shadow-gold hover:scale-105"
          >
            Book Now
          </a>
          <Link
            to="/apartments"
            className="inline-flex items-center justify-center rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-body font-semibold px-8 py-3.5 text-base transition-all hover:bg-primary-foreground/10"
          >
            Explore Apartments
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-1"
      >
        <div className="w-1.5 h-3 bg-accent rounded-full" />
      </motion.div>
    </section>
  );
}

function FeaturedApartments() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-sand">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-accent font-medium mb-3">
            Our Accommodations
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Featured Apartments
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {apartments.map((apt, i) => (
            <ApartmentCard key={apt.id} apartment={apt} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={hotelAbout}
              alt="Hotel Castillo Dalilah pool and exterior"
              className="w-full rounded-2xl shadow-luxury object-cover aspect-[4/3]"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-accent font-medium mb-3">
              About Our Hotel
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Coastal Paradise Awaits
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
              Nestled along the pristine shores of El Ouatia in Tan-Tan, Hotel Castillo Dalilah
              offers a unique blend of Moroccan hospitality and modern luxury. Our beachfront property
              is the perfect destination for families seeking an unforgettable coastal holiday.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
              With stunning ocean views, spacious apartments, and warm personal service, every moment
              at Castillo Dalilah is designed to create lasting memories.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground font-body font-semibold px-6 py-3 transition-all hover:shadow-luxury hover:scale-[1.02]"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-accent font-medium mb-3">
            Guest Reviews
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
            What People Say About Us
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="text-center px-4"
          >
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="font-body text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-6 italic">
              "{testimonials[current].text}"
            </p>
            <p className="font-heading text-lg font-bold text-accent">
              {testimonials[current].name}
            </p>
            <p className="font-body text-sm text-primary-foreground/60">
              {testimonials[current].country}
            </p>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((p) => (p === 0 ? testimonials.length - 1 : p - 1))}
              className="p-2 rounded-full border border-primary-foreground/20 text-primary-foreground/60 hover:text-accent hover:border-accent transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-accent w-6" : "bg-primary-foreground/30"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((p) => (p === testimonials.length - 1 ? 0 : p + 1))}
              className="p-2 rounded-full border border-primary-foreground/20 text-primary-foreground/60 hover:text-accent hover:border-accent transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.booking.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-accent hover:underline"
            >
              See more reviews on Booking.com →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyBookSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-accent font-medium mb-3">
            Why Choose Us
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Why Book With Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-card shadow-luxury hover:shadow-gold transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center">
                <b.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{b.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlacesToVisit() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-sand">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-accent font-medium mb-3">
            Explore
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Places to Visit in the Region
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {places.map((place, i) => (
            <motion.a
              key={place.name}
              href={place.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-luxury cursor-pointer"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span className="font-body text-xs uppercase tracking-wider text-accent">Open in Maps</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-primary-foreground mb-1">{place.name}</h3>
                <p className="font-body text-sm text-primary-foreground/80">{place.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-accent font-medium mb-3">
            Find Us
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Our Location
          </h2>
        </motion.div>

        <div className="rounded-2xl overflow-hidden shadow-luxury">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-11.3315049!3d28.5022681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc4a90e8b82c821b%3A0x7741e18357d4403c!2sCastillo+Dalilah!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hotel Castillo Dalilah location"
          />
        </div>
      </div>
    </section>
  );
}
