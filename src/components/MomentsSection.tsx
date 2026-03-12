import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import momentsVideo from "@/assets/moments-video.mp4";

const MomentsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={momentsVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, hsl(220 20% 10% / 0.3) 0%, hsl(220 20% 10% / 0.5) 50%, hsl(220 20% 10% / 0.6) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-8">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="font-display text-4xl md:text-6xl lg:text-8xl font-normal italic leading-tight"
            style={{ color: "hsl(0 0% 100% / 0.95)" }}
          >
            Moments Elevated
            <br />
            by Nature
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <button className="btn-outline-hero">
              Explore Experiences
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MomentsSection;
