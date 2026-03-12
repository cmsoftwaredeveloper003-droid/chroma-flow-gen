import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import servicesImg from "@/assets/services-events-real.jpg";

const services = [
  {
    title: "Destination Weddings",
    description: "Celebrate your special day surrounded by breathtaking mountain vistas and luxury amenities.",
  },
  {
    title: "Dining",
    description: "Savor exquisite cuisine crafted by world-class chefs using locally sourced ingredients.",
  },
  {
    title: "Events",
    description: "Host unforgettable gatherings in our elegant indoor and outdoor event spaces.",
  },
  {
    title: "Celebrations",
    description: "From birthdays to anniversaries, create memories that last a lifetime.",
  },
  {
    title: "Fun Activities",
    description: "Build confidence, trust, and connection through multi-day adventures at Himalaya Villas.",
  },
  {
    title: "Meetings",
    description: "State-of-the-art conference facilities for productive corporate retreats.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 px-8 md:px-16"
      style={{ background: "hsl(160 15% 12%)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.3em] uppercase mb-4"
          style={{ color: "hsl(var(--primary))" }}
        >
          Services & Facilities
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-2"
          style={{ color: "hsl(0 0% 95%)" }}
        >
          Services & Facilities
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-2xl md:text-3xl italic mb-16"
          style={{ color: "hsl(0 0% 95% / 0.4)" }}
        >
          A Journey of Senses.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Services List */}
          <div className="space-y-0">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full text-left py-5 flex items-center justify-between group"
                  style={{
                    borderBottom: "1px solid hsl(0 0% 95% / 0.1)",
                  }}
                >
                  <span
                    className="font-display text-lg md:text-xl tracking-wide transition-colors duration-300"
                    style={{
                      color: activeIndex === index ? "hsl(var(--primary))" : "hsl(0 0% 85%)",
                    }}
                  >
                    {service.title}
                  </span>
                  <motion.span
                    animate={{ rotate: activeIndex === index ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight
                      size={16}
                      style={{
                        color: activeIndex === index ? "hsl(var(--primary))" : "hsl(0 0% 50%)",
                      }}
                    />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p
                        className="py-3 text-sm font-body leading-relaxed"
                        style={{ color: "hsl(0 0% 55%)" }}
                      >
                        {service.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative overflow-hidden rounded-sm"
          >
            <img
              src={servicesImg}
              alt="Events at Himalaya Villas"
              className="w-full h-[400px] md:h-[520px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
