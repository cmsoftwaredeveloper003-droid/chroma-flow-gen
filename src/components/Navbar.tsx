import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/himalaya-logo.png";

const navItems = ["Villas", "Experience", "Virtual Tour", "Journal", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-20 transition-all duration-500 ${
        scrolled
          ? "py-3 md:py-4 bg-foreground/95 backdrop-blur-md shadow-lg"
          : "py-6 md:py-10 bg-transparent"
      }`}
    >
      {/* Mobile hamburger */}
      <button
        className="md:hidden z-50 text-primary-foreground"
        onClick={() => setMobileOpen(!mobileOpen)}
        style={{ color: "hsl(var(--hero-text))" }}
      >
        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Desktop nav */}
      <ul className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="nav-link">
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Logo center */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1 md:top-2">
        <div className="relative flex flex-col items-center">
          <img
            src={logo}
            alt="Himalaya Villas"
            className={`object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] transition-all duration-500 ${
              scrolled ? "h-10 w-10 md:h-12 md:w-12" : "h-14 w-14 md:h-20 md:w-20"
            }`}
          />
          <span
            className={`font-display tracking-[0.25em] uppercase mt-0.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] transition-all duration-500 ${
              scrolled ? "text-[8px] md:text-[10px]" : "text-[10px] md:text-xs"
            }`}
            style={{ color: "hsl(var(--hero-text) / 0.9)" }}
          >
            Himalaya Villas
          </span>
        </div>
      </div>

      {/* Book Now */}
      <div className="ml-auto">
        <button className="px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-sm font-medium tracking-wider uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">
          Book Now
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-foreground/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 md:hidden">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-lg font-medium tracking-widest uppercase"
              style={{ color: "hsl(var(--hero-text))" }}
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
