import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import villaImage from "@/assets/villa-exterior.jpg";

const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-background py-24 md:py-36 px-8 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left: Text Content */}
        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.3em] uppercase text-primary"
          >
            Our Philosophy
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.15] text-foreground"
          >
            A Sanctuary Crafted
            <br />
            for <span className="italic text-primary">Elegance & Escape</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-20 h-[2px] bg-primary origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-lg"
          >
            Nestled in the pristine heights of Bhurban, Himalaya Villas offers an
            escape into nature without compromising on modern luxury. Whether
            you are here for a romantic getaway, a corporate retreat, or a grand
            celebration, our bespoke services ensure your stay is nothing short of
            extraordinary.
          </motion.p>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.95 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative"
        >
          <div className="overflow-hidden rounded-sm shadow-2xl">
            <motion.img
              src={villaImage}
              alt="Himalaya Villas luxury exterior with spiral staircase and pine trees"
              className="w-full h-[500px] md:h-[600px] lg:h-[650px] object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6 }}
            />
          </div>
          {/* Decorative accent */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-sm -z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
