import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lock, Users, Star, MapPin } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "100% Private Villas",
    description: "Your villa is yours alone. No shared lobbies. No strangers.",
  },
  {
    icon: Users,
    title: "Dedicated Villa Host",
    description: "One point of contact from booking to checkout. Always available.",
  },
  {
    icon: Star,
    title: "Curated Guest List",
    description: "We host few guests intentionally. Your experience is never diluted.",
  },
  {
    icon: MapPin,
    title: "Bhurban's Most Sought Address",
    description: "Positioned at the finest elevation in Murree Hills.",
  },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-foreground">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p
            className="text-xs tracking-[0.3em] uppercase font-body mb-4"
            style={{ color: "hsl(var(--booking-text) / 0.5)" }}
          >
            The Difference
          </p>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-normal italic"
            style={{ color: "hsl(var(--booking-text))" }}
          >
            Why Guests Choose
            <br />
            Himalaya Villas
          </h2>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                className="group text-center px-4"
              >
                {/* Icon */}
                <motion.div
                  className="mx-auto mb-6 w-16 h-16 rounded-full flex items-center justify-center border transition-colors duration-500"
                  style={{
                    borderColor: "hsl(var(--booking-text) / 0.15)",
                    backgroundColor: "hsl(var(--booking-text) / 0.05)",
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon
                    className="w-6 h-6 transition-colors duration-500"
                    style={{ color: "hsl(var(--primary))" }}
                    strokeWidth={1.5}
                  />
                </motion.div>

                {/* Title */}
                <h3
                  className="font-display text-lg md:text-xl font-medium mb-3"
                  style={{ color: "hsl(var(--booking-text))" }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "hsl(var(--booking-text) / 0.6)" }}
                >
                  {feature.description}
                </p>

                {/* Decorative line */}
                <motion.div
                  className="mt-6 mx-auto h-px w-0 group-hover:w-12 transition-all duration-700"
                  style={{ backgroundColor: "hsl(var(--primary))" }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
