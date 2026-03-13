import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import villaExterior from "@/assets/villa-exterior.jpg";
import galleryExterior from "@/assets/gallery-exterior.jpg";
import galleryBalcony from "@/assets/gallery-balcony.jpg";
import gallerySunlight from "@/assets/gallery-sunlight.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import philosophyInterior from "@/assets/philosophy-interior.jpg";

const philosophyImages = [villaExterior, galleryExterior, galleryBalcony, gallerySunlight, galleryInterior, philosophyInterior];

const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % philosophyImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

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
            We Built This For People
            <br />
            Who Have <span className="italic text-primary">Stayed Everywhere Else</span>
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
            Himalaya Villas exists for guests who no longer need to be impressed — they need to be restored.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-lg"
          >
            Set among the cedar forests of Bhurban, every villa was designed with a single intention: to give you back something the city took. Stillness. Space. The rare feeling that time belongs to you again.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-lg italic"
          >
            We don't offer packages. We learn what you need and build your stay around it.
          </motion.p>
        </div>

        {/* Right: Rotating Images */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.95 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative"
        >
          <div className="overflow-hidden rounded-sm shadow-2xl relative h-[500px] md:h-[600px] lg:h-[650px]">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={imgIndex}
                src={philosophyImages[imgIndex]}
                alt="Himalaya Villas luxury experience"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </AnimatePresence>
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
