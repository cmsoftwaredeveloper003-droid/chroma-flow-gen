import heroVideo from "@/assets/hero-video.mp4";
import Navbar from "./Navbar";
import BookingWidget from "./BookingWidget";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0 z-10" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-end h-full pb-16 md:pb-24 px-8 md:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 opacity-0 animate-fade-up"
              style={{ color: "hsl(var(--hero-text) / 0.6)" }}
            >
              Only 6 Villas. No Exceptions.
            </p>
            <h1
              className="font-display text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.1] opacity-0 animate-fade-up"
              style={{ color: "hsl(var(--hero-text))" }}
            >
              Bhurban's Most
              <br />
              Sought-After
              <br />
              Mountain Escape
            </h1>
            <p
              className="mt-6 text-base md:text-lg font-light max-w-md opacity-0 animate-fade-up-delay"
              style={{ color: "hsl(var(--hero-text) / 0.85)" }}
            >
              Private, personal, and entirely yours.
            </p>
            <a
              href="#reserve"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium tracking-wider uppercase opacity-0 animate-fade-up-delay-2 transition-colors duration-300 hover:opacity-80"
              style={{ color: "hsl(var(--primary))" }}
            >
              Check Availability →
            </a>
          </div>

          <div className="opacity-0 animate-fade-up-delay-2">
            <BookingWidget />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
