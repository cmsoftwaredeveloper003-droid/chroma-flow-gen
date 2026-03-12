import logo from "@/assets/himalaya-logo.png";

const navItems = ["Villas", "Experience", "Dining", "Journal", "Contact"];

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

      <div className="absolute left-1/2 -translate-x-1/2 top-4">
        <img src={logo} alt="Himalaya Villas" className="h-20 w-20 object-contain" />
      </div>

      <div className="ml-auto">
        <button className="px-6 py-2.5 text-sm font-medium tracking-wider uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">Book Stay</button>
      </div>
    </nav>
  );
};

export default Navbar;
