import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryBalcony from "@/assets/gallery-balcony.jpg";
import gallerySunlight from "@/assets/gallery-sunlight.jpg";
import galleryExterior from "@/assets/gallery-exterior.jpg";
import galleryReflection from "@/assets/gallery-reflection.jpg";
import galleryGarden from "@/assets/gallery-garden.jpg";
import galleryDiningNight from "@/assets/gallery-dining-night.jpg";
import galleryBbq from "@/assets/gallery-bbq.jpg";

const glimpses = [
  { src: galleryInterior, label: "The Lounge", subtitle: "Where comfort meets the clouds" },
  { src: galleryBalcony, label: "The Terrace", subtitle: "Morning views that silence the mind" },
  { src: gallerySunlight, label: "Golden Hour", subtitle: "When the mountains paint themselves" },
  { src: galleryExterior, label: "The Villa", subtitle: "Built to belong to the hillside" },
  { src: galleryReflection, label: "Reflections", subtitle: "Every window tells a story" },
  { src: galleryGarden, label: "The Garden", subtitle: "Nature, curated but never tamed" },
  { src: galleryDiningNight, label: "Night Dining", subtitle: "Stars above, stories below" },
  { src: galleryBbq, label: "Live Grill", subtitle: "Fire, flavour, and mountain air" },
];

const GlimpseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(3);

  return (
    <section ref={ref} className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-4">
            A Journey of Senses
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-normal italic text-foreground">
            Glimpses of the Retreat
          </h2>
          <p className="mt-4 text-muted-foreground text-sm md:text-base font-body max-w-lg mx-auto">
            Every corner holds a moment worth remembering
          </p>
        </motion.div>

        {/* Expandable Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex gap-2 md:gap-3 h-[420px] md:h-[520px] lg:h-[580px]"
        >
          {glimpses.map((item, i) => {
            const isActive = i === activeIndex;
            return (
              <motion.div
                key={i}
                className="relative rounded-xl overflow-hidden cursor-pointer"
                animate={{
                  flex: isActive ? 4 : 0.6,
                }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                onClick={() => setActiveIndex(i)}
                onMouseEnter={() => setActiveIndex(i)}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: isActive
                      ? "linear-gradient(to top, hsl(220 20% 8% / 0.7) 0%, transparent 60%)"
                      : "hsl(220 20% 8% / 0.45)",
                  }}
                />

                {/* Collapsed Label (vertical) */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <span
                        className="font-display text-base md:text-lg font-normal tracking-wider whitespace-nowrap"
                        style={{
                          color: "hsl(0 0% 100% / 0.9)",
                          writingMode: "vertical-rl",
                          textOrientation: "mixed",
                        }}
                      >
                        {item.label}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
                    >
                      <h3
                        className="font-display text-2xl md:text-3xl lg:text-4xl font-normal italic"
                        style={{ color: "hsl(0 0% 100% / 0.95)" }}
                      >
                        {item.label}
                      </h3>
                      <p
                        className="mt-2 text-sm md:text-base font-body"
                        style={{ color: "hsl(0 0% 100% / 0.7)" }}
                      >
                        {item.subtitle}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default GlimpseSection;
