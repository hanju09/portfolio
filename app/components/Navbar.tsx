"use client";

import { useEffect, useState } from "react";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      // 1. Toggle background blur
      setScrolled(window.scrollY > 20);

      // 2. Find which section is currently at the top of the screen (just below the navbar)
      let current = "";
      for (const link of links) {
        const id = link.href.replace("#", "");
        const element = document.getElementById(id);
        
        if (element) {
          const rect = element.getBoundingClientRect();
          
          // If the top of the section is above the 200px mark, 
          // AND the bottom of the section is below the 200px mark, 
          // then it is the section currently being read.
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = link.href;
            break;
          }
        }
      }

      // 3. Force 'Contact' to highlight if scrolled to the very bottom
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 20) {
        current = "#contact";
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-lg font-bold tracking-tight text-gray-900"
        >
          Hamza<span className="text-indigo-600">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`relative cursor-pointer transition-colors ${
                    isActive
                      ? "text-indigo-600 font-medium"
                      : "text-gray-600 hover:text-indigo-600"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 right-0 -bottom-1 h-0.5 rounded-full bg-indigo-600 transition-all duration-300 ${
                      isActive
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-900 transition-transform duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-900 transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-900 transition-transform duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-6 text-gray-600">
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`block py-2 cursor-pointer transition-colors ${
                    isActive
                      ? "text-indigo-600 font-medium"
                      : "hover:text-indigo-600"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}