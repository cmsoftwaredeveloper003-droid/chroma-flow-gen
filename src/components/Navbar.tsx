import logo from "@/assets/himalaya-logo.png";

const navItems = ["Villas", "Experience", "Virtual Tour", "Journal", "Contact"];

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-10 md:px-20 py-8 md:py-10">
      <ul className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="absolute left-1/2 -translate-x-1/2 top-3">
        <div className="relative flex flex-col items-center">
          <img src={logo} alt="Himalaya Villas" className="h-16 w-16 md:h-20 md:w-20 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]" />
          <span className="text-[10px] md:text-xs font-display tracking-[0.25em] uppercase mt-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]" style={{ color: "hsl(var(--hero-text) / 0.9)" }}>Himalaya Villas</span>
        </div>
      </div>

      <div className="ml-auto">
        <button className="px-6 py-2.5 text-sm font-medium tracking-wider uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">Book Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
