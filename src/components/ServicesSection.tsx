import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Heart, UtensilsCrossed, Music, PartyPopper, Mountain, Briefcase } from "lucide-react";
import servicesImg from "@/assets/services-events-real.jpg";
import galleryDiningNight from "@/assets/gallery-dining-night.jpg";
import galleryBbq from "@/assets/gallery-bbq.jpg";
import galleryGarden from "@/assets/gallery-garden.jpg";
import gallerySunlight from "@/assets/gallery-sunlight.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";

const services = [
  {
    number: "01",
    title: "Destination Weddings",
    headline: "Your Wedding. The Himalayas Bearing Witness.",
    description: "Imagine your ceremony set against cedar forests and mountain air, with every detail handled by a team that treats your wedding as the only one that has ever mattered.",
    icon: Heart,
    images: [servicesImg, galleryGarden, gallerySunlight],
  },
  {
    number: "02",
    title: "Dining",
    headline: "A Table With No Equal in Pakistan.",
    description: "Whether it's a private candlelit dinner on your villa terrace or a long family lunch with the Murree hills stretching out before you — dining as it should always have been.",
    icon: UtensilsCrossed,
    images: [galleryDiningNight, galleryBbq, galleryInterior],
  },
  {
    number: "03",
    title: "Musical Evenings",
    headline: "An Evening You Will Not Find Advertised.",
    description: "Curated musical evenings bring Pakistan's most respected artists to an audience of few — intimate, unhurried, and entirely unlike anything a concert hall can offer.",
    icon: Music,
    images: [galleryInterior, gallerySunlight, servicesImg],
  },
  {
    number: "04",
    title: "Celebrations",
    headline: "Some Moments Deserve More Than a Banquet Hall.",
    description: "We sit with you, understand what this occasion means, and build an experience around it — from the setting to the last toast. Entirely yours.",
    icon: PartyPopper,
    images: [galleryGarden, servicesImg, galleryDiningNight],
  },
  {
    number: "05",
    title: "Activities",
    headline: "The Mountain Is Waiting.",
    description: "Forest walks at dawn. Guided trails through cedar groves. Stargazing sessions away from city light. Every activity curated — never rushed, always on your terms.",
    icon: Mountain,
    images: [gallerySunlight, galleryGarden, galleryBbq],
  },
  {
    number: "06",
    title: "Corporate Retreats",
    headline: "The Best Decisions Are Made Away From the Office.",
    description: "When your leadership team needs to think clearly — Himalaya Villas provides a setting where focus comes naturally. Because the altitude shifts perspective.",
    icon: Briefcase,
    images: [galleryInterior, galleryDiningNight, gallerySunlight],
  },
];

const ServiceCard = ({ service, index, isInView }: { service: typeof services[0]; index: number; isInView: boolean }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const Icon = service.icon;

  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % service.images.length);
    }, 2800 + index * 400);
    return () => clearInterval(timer);
  }, [service.images.length, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
      className="group relative rounded-xl overflow-hidden"
      style={{ background: "hsl(160 15% 15%)" }}
    >
      {/* Rotating Image */}
      <div className="relative h-52 md:h-56 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={imgIndex}
            src={service.images[imgIndex]}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, hsl(160 15% 12% / 0.9) 0%, hsl(160 15% 12% / 0.2) 60%, transparent 100%)" }}
        />
        {/* Number badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span
            className="text-xs font-mono tracking-widest px-3 py-1.5 rounded-full backdrop-blur-sm"
            style={{ background: "hsl(var(--primary) / 0.15)", color: "hsl(var(--primary))", border: "1px solid hsl(var(--primary) / 0.3)" }}
          >
            {service.number}
          </span>
        </div>
        {/* Icon */}
        <motion.div
          className="absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-sm"
          style={{ background: "hsl(0 0% 100% / 0.08)", color: "hsl(0 0% 95%)" }}
          whileHover={{ scale: 1.15, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon size={18} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <h3
          className="font-display text-xl md:text-2xl font-normal leading-snug transition-colors duration-300 group-hover:text-primary"
          style={{ color: "hsl(0 0% 92%)" }}
        >
          {service.headline}
        </h3>
        <p
          className="text-sm leading-relaxed line-clamp-3"
          style={{ color: "hsl(0 0% 55%)" }}
        >
          {service.description}
        </p>
        <motion.a
          href="#reserve"
          className="inline-flex items-center gap-2 text-sm font-medium tracking-wide pt-2"
          style={{ color: "hsl(var(--primary))" }}
          whileHover={{ x: 6 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Learn More →
        </motion.a>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-36 px-8 md:px-16"
      style={{ background: "hsl(160 15% 12%)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-[0.3em] uppercase mb-4"
            style={{ color: "hsl(var(--primary))" }}
          >
            Services & Facilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-3"
            style={{ color: "hsl(0 0% 95%)" }}
          >
            The Mountain as <span className="italic" style={{ color: "hsl(var(--primary))" }}>Your Venue</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-16 h-[2px] mx-auto mb-6"
            style={{ background: "hsl(var(--primary))" }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "hsl(0 0% 60%)" }}
          >
            There is no grander setting in Pakistan for the moments that matter most. We simply make sure everything else is perfect.
          </motion.p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
