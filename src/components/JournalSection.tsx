import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import journal1 from "@/assets/journal-1.jpg";
import journalGroupMural from "@/assets/journal-group-mural.jpg";
import journalBonfire from "@/assets/journal-bonfire.jpg";
import journal4 from "@/assets/journal-4.jpg";

const images = [
  { src: journal1, alt: "Grand staircase", className: "col-span-1 row-span-1" },
  { src: journalGroupMural, alt: "Group at the resort", className: "col-span-1 row-span-1" },
  { src: journalBonfire, alt: "Bonfire night", className: "col-span-1 row-span-2" },
  { src: journal4, alt: "Outdoor terrace", className: "col-span-2 row-span-1" },
];

const JournalSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 px-8 !bg-[#EAE2D7]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-[60px] md:text-[60px] italic text-foreground mb-12"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
        >
          The Journal
        </motion.h2>

        <div className="grid grid-cols-3 grid-rows-2 gap-3 md:gap-4 h-[400px] md:h-[500px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`${img.className} overflow-hidden rounded-sm group`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalSection;
