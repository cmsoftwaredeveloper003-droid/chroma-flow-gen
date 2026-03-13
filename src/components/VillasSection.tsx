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
    images: [villaAlpine, whyPrivate, whyLounge],
  },
  {
    title: "The Presidential\nSuite",
    description: "Panoramic mountain views with a private terrace and jacuzzi.",
    price: "PKR 65,000",
    images: [villaPresidential, whyGarden, whyView],
  },
  {
    title: "Honeymoon\nCottage",
    description: "An intimate retreat surrounded by blossoming gardens and fairy lights.",
    price: "PKR 45,000",
    images: [villaHoneymoon, whyLounge, whyPrivate],
  },
  {
    title: "The Mountain\nPenthouse",
    description: "Contemporary luxury perched above the pine canopy with floor-to-ceiling glass.",
    price: "PKR 85,000",
    images: [villaPenthouse, whyView, whyGarden],
  },
];

const RotatingImage = ({ images, alt }: { images: string[]; alt: string }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[350px] md:h-[450px] lg:h-[520px] overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={index}
          src={images[index]}
          alt={alt}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
};

const VillasSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="!bg-[#EAE2D7] py-24 md:py-36 overflow-hidden">
      {/* Header */}
      <div className="px-8 md:px-16 lg:px-24 max-w-[1600px] mx-auto">
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
          className="w-full h-px bg-border origin-left mb-0"
        />
      </div>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
        className="px-8 md:px-16 lg:px-24 max-w-[1600px] mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {villas.map((villa, index) => (
            <div key={villa.title} className="grid grid-cols-1 sm:grid-cols-2">
              {/* Image */}
              <div className="overflow-hidden relative group">
                <RotatingImage images={villa.images} alt={villa.title} />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-between px-6 md:px-10 py-8 md:py-10 border-b border-border">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-normal text-foreground leading-tight whitespace-pre-line">
                    {villa.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-4 font-body">
                    {villa.description}
                  </p>
                </div>

                {/* Price + Arrow */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                  <span className="font-display text-lg md:text-xl italic text-foreground">
                    {villa.price}
                  </span>
                  <button className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default VillasSection;
