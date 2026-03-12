import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import villaAlpine from "@/assets/villa-alpine-real.jpg";
import villaPresidential from "@/assets/villa-presidential-real.jpg";
import villaHoneymoon from "@/assets/villa-honeymoon-real.jpg";
import villaPenthouse from "@/assets/villa-exterior.jpg";

const villas = [
  {
    title: "Alpine Family\nLodge",
    description: "Spacious 3-bedroom villa perfect for family gatherings.",
    price: "PKR 39,000",
    image: villaAlpine,
  },
  {
    title: "The Presidential\nSuite",
    description: "Panoramic mountain views with a private terrace and jacuzzi.",
    price: "PKR 65,000",
    image: villaPresidential,
  },
  {
    title: "Honeymoon\nCottage",
    description: "An intimate retreat surrounded by blossoming gardens and fairy lights.",
    price: "PKR 45,000",
    image: villaHoneymoon,
  },
  {
    title: "The Mountain\nPenthouse",
    description: "Contemporary luxury perched above the pine canopy with floor-to-ceiling glass.",
    price: "PKR 85,000",
    image: villaPenthouse,
  },
];

const VillasSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

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
              Swipe to explore our accommodations
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

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
        className="px-8 md:px-16 lg:px-24 max-w-[1600px] mx-auto"
      >
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {villas.map((villa, index) => (
              <div
                key={villa.title}
                className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
                  {/* Image */}
                  <div className="overflow-hidden relative group">
                    <motion.img
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.15 }}
                      src={villa.image}
                      alt={villa.title}
                      className="w-full h-[350px] md:h-[450px] lg:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
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
              </div>
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default VillasSection;
