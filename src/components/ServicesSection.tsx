import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import servicesImg from "@/assets/services-events-real.jpg";

const services = [
  {
    number: "01",
    title: "Destination Weddings",
    headline: "Your Wedding. The Himalayas Bearing Witness.",
    intro: "Some venues host weddings. We become part of the story.",
    description:
      "Imagine your ceremony set against cedar forests and mountain air, with every detail — from the florals to the final farewell — handled by a team that treats your wedding as the only one that has ever mattered.\n\nBecause at Himalaya Villas, it is.",
    cta: "Begin Planning",
  },
  {
    number: "02",
    title: "Dining",
    headline: "A Table With No Equal in Pakistan.",
    intro: "Altitude changes everything — including how food tastes.",
    description:
      "Whether it's a private candlelit dinner on your villa terrace or a long family lunch with the Murree hills stretching out before you, our kitchen works around your preferences, not around a fixed menu.\n\nThis is dining as it should always have been.",
    cta: "Reserve Your Table",
  },
  {
    number: "03",
    title: "Musical Evenings",
    headline: "An Evening You Will Not Find Advertised.",
    intro: "The finest performances deserve the finest setting.",
    description:
      "Our curated musical evenings bring Pakistan's most respected artists to an audience of few — intimate, unhurried, and entirely unlike anything a concert hall can offer. The mountains add a silence between notes that cannot be engineered.",
    cta: "Enquire About Upcoming Evenings",
  },
  {
    number: "04",
    title: "Celebrations",
    headline: "Because Some Moments Deserve More Than a Banquet Hall.",
    intro: "Birthdays, anniversaries, milestones — celebrated the way they were always meant to be.",
    description:
      "We don't set up a function room and hand you a package. We sit with you, understand what this occasion means, and build an experience around it — from the setting to the last toast.\n\nYour celebration. Entirely yours.",
    cta: "Tell Us What You're Celebrating",
  },
  {
    number: "05",
    title: "Activities",
    headline: "The Mountain Is Waiting. We'll Show You Where to Begin.",
    intro: "Adventure, for people who don't compromise on comfort.",
    description:
      "Forest walks at dawn. Guided trails through Bhurban's cedar groves. Stargazing sessions away from city light. Every activity at Himalaya Villas is curated — never rushed, never crowded, always on your terms.\n\nThe outdoors, without giving anything up.",
    cta: "Explore What Awaits",
  },
  {
    number: "06",
    title: "Official Meetings & Corporate Retreats",
    headline: "The Best Decisions Are Made Away From the Office.",
    intro: "Pakistan's most productive meeting rooms have no walls.",
    description:
      "When your leadership team needs to think clearly, align deeply, or simply step away from the noise — Himalaya Villas provides a setting where focus comes naturally. Private meeting spaces, seamless arrangements, and an environment that signals to your team that this matters.\n\nBecause the altitude shifts perspective. Every time.",
    cta: "Request Corporate Availability",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-36 px-8 md:px-16"
      style={{ background: "hsl(160 15% 12%)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
          className="font-display text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-2"
          style={{ color: "hsl(0 0% 95%)" }}
        >
          Services & Facilities
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-2xl md:text-3xl italic mb-6"
          style={{ color: "hsl(0 0% 95% / 0.4)" }}
        >
          The Mountain as Your Venue
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg leading-relaxed mb-20 max-w-xl"
          style={{ color: "hsl(0 0% 65%)" }}
        >
          There is no grander setting in Pakistan for the moments that matter most. We simply make sure everything else is perfect.
        </motion.p>

        {/* Services Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-0">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="w-full text-left py-6 flex items-center gap-6 group"
                  style={{
                    borderBottom: "1px solid hsl(0 0% 95% / 0.08)",
                  }}
                >
                  <span
                    className="text-xs font-mono tracking-wider shrink-0 transition-colors duration-300"
                    style={{
                      color:
                        activeIndex === index
                          ? "hsl(var(--primary))"
                          : "hsl(0 0% 40%)",
                    }}
                  >
                    {service.number}
                  </span>
                  <span
                    className="font-display text-lg md:text-xl tracking-wide transition-colors duration-300 flex-1"
                    style={{
                      color:
                        activeIndex === index
                          ? "hsl(var(--primary))"
                          : "hsl(0 0% 85%)",
                    }}
                  >
                    {service.title}
                  </span>
                  <motion.span
                    animate={{ rotate: activeIndex === index ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <ArrowRight
                      size={16}
                      style={{
                        color:
                          activeIndex === index
                            ? "hsl(var(--primary))"
                            : "hsl(0 0% 40%)",
                      }}
                    />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="py-6 pl-12 md:pl-16 space-y-4">
                        <h3
                          className="font-display text-xl md:text-2xl font-normal leading-snug"
                          style={{ color: "hsl(0 0% 95%)" }}
                        >
                          {service.headline}
                        </h3>
                        <p
                          className="text-sm md:text-base italic leading-relaxed"
                          style={{ color: "hsl(0 0% 70%)" }}
                        >
                          {service.intro}
                        </p>
                        {service.description.split("\n\n").map((para, i) => (
                          <p
                            key={i}
                            className="text-sm md:text-base leading-relaxed"
                            style={{ color: "hsl(0 0% 55%)" }}
                          >
                            {para}
                          </p>
                        ))}
                        <a
                          href="#reserve"
                          className="inline-flex items-center gap-2 mt-2 text-sm font-medium tracking-wide transition-opacity duration-300 hover:opacity-70"
                          style={{ color: "hsl(var(--primary))" }}
                        >
                          → {service.cta}
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative overflow-hidden rounded-sm sticky top-24"
          >
            <img
              src={servicesImg}
              alt="Events at Himalaya Villas"
              className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-700 hover:scale-105"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, hsl(160 15% 12% / 0.4), transparent 50%)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
