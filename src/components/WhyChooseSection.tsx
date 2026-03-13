import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Lock, Users, Star, MapPin } from "lucide-react";

import whyPrivate from "@/assets/why-villa-private.jpg";
import whyGarden from "@/assets/why-villa-garden.jpg";
import whyView from "@/assets/why-villa-view.jpg";
import whyLounge from "@/assets/why-villa-lounge.jpg";

const bgImages = [whyPrivate, whyGarden, whyView, whyLounge];

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
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative py-28 md:py-36 overflow-hidden">
      {/* Animated background images */}
      <AnimatePresence mode="popLayout">
        <motion.img
          key={bgIndex}
          src={bgImages[bgIndex]}
          alt=""
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/85" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase font-body mb-4 text-primary/70">
            The Difference
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal italic text-primary-foreground">
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
                  className="mx-auto mb-6 w-16 h-16 rounded-full flex items-center justify-center border border-primary/20 bg-primary/10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon
                    className="w-6 h-6 text-primary"
                    strokeWidth={1.5}
                  />
                </motion.div>

                {/* Title */}
                <h3 className="font-display text-lg md:text-xl font-medium mb-3 text-primary-foreground">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm leading-relaxed text-primary-foreground/60">
                  {feature.description}
                </p>

                {/* Decorative line */}
                <motion.div
                  className="mt-6 mx-auto h-px w-0 group-hover:w-12 transition-all duration-700 bg-primary"
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
