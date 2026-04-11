import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About me" },
    { to: "/book", label: "Book a session" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[72px] bg-background/80 backdrop-blur-md border-b border-surface-border">
      <nav className="container-narrow h-full flex items-center justify-between">
        <Link to="/" className="font-display text-2xl tracking-wider text-foreground">
          AQ
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`font-body text-sm tracking-wide transition-colors duration-300 ${
                  location.pathname === link.to ? "text-foreground" : "text-warm-grey hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
          <span className={`block w-6 h-px bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 top-[72px] bg-background z-40 flex flex-col items-center justify-center gap-12">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl text-foreground hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
