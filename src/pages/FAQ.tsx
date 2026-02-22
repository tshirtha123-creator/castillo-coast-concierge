import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Where is Castillo Dalilah located?",
    answer: "Hotel Castillo Dalilah is located in El Ouatia, Tan-Tan, on Morocco's beautiful Atlantic coast. The property is just steps from the beach, offering stunning ocean views and easy access to local attractions.",
  },
  {
    question: "What types of accommodations are available?",
    answer: "We offer six uniquely designed apartments ranging from cozy studios to spacious panoramic suites. Each apartment features ocean views, modern amenities, and Moroccan-inspired decor. All apartments can accommodate up to 2-4 guests.",
  },
  {
    question: "Is there Wi-Fi at the property?",
    answer: "Yes! Complimentary high-speed Wi-Fi is available throughout the property, including all apartments, common areas, and outdoor spaces.",
  },
  {
    question: "Is parking available on-site?",
    answer: "Yes, we offer free on-site parking for all our guests. The parking area is secure and conveniently located near the main entrance.",
  },
  {
    question: "Does the hotel have a swimming pool?",
    answer: "Yes, we have a beautiful outdoor swimming pool overlooking the Atlantic Ocean. The pool area includes comfortable sun loungers and is available to all guests during daylight hours.",
  },
  {
    question: "What is the payment method?",
    answer: "We accept cash on arrival. No online payment is required. Simply book through WhatsApp and pay when you check in.",
  },
  {
    question: "How do I book an apartment?",
    answer: "Booking is easy! Click the 'Book Now' or 'Ask for Price' button on any page. This will open a WhatsApp chat with our team where you can discuss availability, pricing, and finalize your reservation.",
  },
  {
    question: "Is the hotel family-friendly?",
    answer: "Absolutely! Hotel Castillo Dalilah is designed with families in mind. Our spacious apartments, safe environment, and beach access make it the perfect destination for a family holiday.",
  },
];

export default function FAQ() {
  return (
    <Layout>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-body text-sm uppercase tracking-[0.3em] text-accent mb-4">
            Help Center
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Frequently Asked Questions
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="font-body text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Find answers to common questions about your stay at Castillo Dalilah.
          </motion.p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <AccordionItem value={`faq-${i}`} className="border border-border rounded-2xl px-6 overflow-hidden">
                  <AccordionTrigger className="font-heading text-lg font-bold text-foreground hover:text-accent transition-colors py-5 [&[data-state=open]]:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-base text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
}
