import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import amenitiesImg from "@/assets/amenities-interior-real.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import gallerySunlight from "@/assets/gallery-sunlight.jpg";
import galleryDining from "@/assets/gallery-dining-night.jpg";
import galleryBalcony from "@/assets/gallery-balcony.jpg";
import philosophyInterior from "@/assets/philosophy-interior.jpg";

const amenityImages = [amenitiesImg, galleryInterior, gallerySunlight, galleryDining, galleryBalcony, philosophyInterior];

const amenities = [
  "Mountain Views",
  "Luxury Interiors",
  "Fine Dining",
  "Outdoor Celebrations",
  "Corporate Meetings",
];

const AmenitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % amenityImages.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 px-8 md:px-16 !bg-[#EAE2D7]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-[60px] md:text-[60px] italic text-foreground mb-16"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
        >
          Refined Amenities
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Image - rotating */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 relative overflow-hidden border border-border p-3"
          >
            <div className="overflow-hidden relative h-[350px] md:h-[450px]">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={imgIndex}
                  src={amenityImages[imgIndex]}
                  alt="Luxury amenities"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Amenity List */}
          <div className="lg:col-span-2 space-y-0">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                className="group cursor-default"
              >
                <div className="flex items-center justify-end py-5 transition-colors duration-300 border-b border-border">
                  <span className="font-body text-lg md:text-xl tracking-wide text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-right">
                    {amenity}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
