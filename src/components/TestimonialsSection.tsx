import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "The perfect escape from the city. The private villas offer unmatched tranquility.",
    author: "Sarah Mitchell",
    location: "New Delhi",
  },
  {
    quote: "An extraordinary experience surrounded by the majestic Himalayas. Truly unforgettable.",
    author: "Rajesh Kapoor",
    location: "Mumbai",
  },
  {
    quote: "World-class hospitality with breathtaking views. We'll be returning every season.",
    author: "Emily & James",
    location: "London",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-8 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-display text-xl md:text-2xl lg:text-3xl italic leading-relaxed text-foreground/90">
              "{testimonials[current].quote}"
            </p>
            <p className="mt-6 text-xs tracking-[0.3em] uppercase text-muted-foreground font-body">
              {testimonials[current].author} — {testimonials[current].location}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-foreground scale-125"
                  : "bg-foreground/25 hover:bg-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
