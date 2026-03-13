import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

import villaAlpine from "@/assets/villa-alpine-real.jpg";
import villaPresidential from "@/assets/villa-presidential-real.jpg";
import villaHoneymoon from "@/assets/villa-honeymoon-real.jpg";
import villaPenthouse from "@/assets/villa-exterior.jpg";

import whyPrivate from "@/assets/why-villa-private.jpg";
import whyGarden from "@/assets/why-villa-garden.jpg";
import whyView from "@/assets/why-villa-view.jpg";
import whyLounge from "@/assets/why-villa-lounge.jpg";

const villas = [
  {
    title: "Alpine Family\nLodge",
    description: "Spacious 3-bedroom villa perfect for family gatherings.",
    price: "PKR 39,000",
    images: [villaAlpine, whyLounge, whyPrivate],
  },
  {
    title: "The Presidential\nSuite",
    description: "Panoramic mountain views with a private terrace and jacuzzi.",
    price: "PKR 65,000",
    images: [villaPresidential, whyView, whyGarden],
  },
  {
    title: "Honeymoon\nCottage",
    description: "An intimate retreat surrounded by blossoming gardens and fairy lights.",
    price: "PKR 45,000",
    images: [villaHoneymoon, whyGarden, whyLounge],
  },
  {
    title: "The Mountain\nPenthouse",
    description: "Contemporary luxury perched above the pine canopy with floor-to-ceiling glass.",
    price: "PKR 85,000",
    images: [villaPenthouse, whyPrivate, whyView],
  },
];

const RotatingImage = ({ images, alt, delay = 0 }: { images: string[]; alt: string; delay?: number }) => {
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length, started]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={index}
          src={images[index]}
          alt={alt}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
};

const VillaCard = ({ villa, index, isInView }: { villa: typeof villas[0]; index: number; isInView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
      className="group"
    >
      {/* Image */}
      <div className="relative h-[300px] md:h-[380px] lg:h-[420px] overflow-hidden rounded-sm">
        <RotatingImage images={villa.images} alt={villa.title} delay={index * 800} />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="pt-6 pb-8">
        <h3 className="font-display text-2xl md:text-3xl font-normal text-foreground leading-tight whitespace-pre-line">
          {villa.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mt-3 font-body max-w-[280px]">
          {villa.description}
        </p>

        {/* Price + Arrow */}
        <div className="flex items-center justify-between mt-6 pt-5 border-t border-border">
          <span className="font-display text-lg md:text-xl italic text-foreground">
            {villa.price}
          </span>
          <button className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const VillasSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="!bg-[#EAE2D7] py-24 md:py-36 overflow-hidden">
      {/* Header */}
      <div className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-normal text-foreground italic"
            >
              Our Villas
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 text-muted-foreground text-sm md:text-base font-body"
            >
              Each villa tells its own story
            </motion.p>
          </div>
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground hover:text-primary transition-colors font-body"
          >
            View All
          </motion.a>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full h-px bg-border origin-left mb-12"
        />

        {/* Villa Grid - 2 columns with proper spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-4">
          {villas.map((villa, index) => (
            <VillaCard key={villa.title} villa={villa} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VillasSection;
