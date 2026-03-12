import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import reserveVideo from "@/assets/reserve-video.mp4";

const ReserveSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={reserveVideo} type="video/mp4" />
      </video>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, hsl(220 20% 10% / 0.6) 0%, hsl(220 20% 10% / 0.3) 50%, hsl(220 20% 10% / 0.15) 100%)",
        }}
      />

      <div className="relative z-10 flex items-end h-full pb-16 md:pb-24 px-8 md:px-16">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-normal italic leading-tight"
            style={{ color: "hsl(0 0% 100% / 0.95)" }}
          >
            Reserve Your Escape
            <br />
            <span className="italic">to the Hills</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8"
          >
            <button className="btn-outline-hero">
              Book Now via WhatsApp
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReserveSection;
