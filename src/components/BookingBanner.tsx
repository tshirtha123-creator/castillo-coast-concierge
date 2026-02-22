import { useState } from "react";
import { CalendarDays, Users, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/data/hotel";

export default function BookingBanner() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const handleBooking = () => {
    const message = `Hello! I'd like to book at Hotel Castillo Dalilah.\n\nCheck-in: ${checkIn || "Not selected"}\nCheck-out: ${checkOut || "Not selected"}\nGuests: ${guests}`;
    window.open(getWhatsAppUrl(message), "_blank");
  };

  return (
    <div className="bg-primary/95 backdrop-blur-lg rounded-2xl p-6 lg:p-8 shadow-luxury max-w-4xl mx-auto -mt-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div>
          <label className="block font-body text-xs font-medium text-primary-foreground/70 mb-2 uppercase tracking-wider">
            Check-in
          </label>
          <div className="relative">
            <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-accent" />
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full pl-10 pr-3 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground font-body text-sm focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block font-body text-xs font-medium text-primary-foreground/70 mb-2 uppercase tracking-wider">
            Check-out
          </label>
          <div className="relative">
            <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-accent" />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full pl-10 pr-3 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground font-body text-sm focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block font-body text-xs font-medium text-primary-foreground/70 mb-2 uppercase tracking-wider">
            Guests
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-accent" />
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full pl-10 pr-3 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground font-body text-sm focus:outline-none focus:border-accent transition-colors appearance-none"
            >
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={n} className="text-foreground">
                  {n} {n === 1 ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleBooking}
          className="flex items-center justify-center gap-2 bg-accent text-accent-foreground font-body font-semibold text-sm py-3 px-6 rounded-xl transition-all hover:shadow-gold hover:scale-[1.02] active:scale-[0.98]"
        >
          Book Now
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
