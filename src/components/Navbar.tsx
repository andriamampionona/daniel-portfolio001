"use client";

import { useActiveSection } from "../../hooks/useActiveSection";


const navItems = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#experiences", label: "Expériences" },
  { href: "#competance", label: "Compétences" },
  { href: "#service", label: "Services" },
  { href: "#projet", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const activeSection = useActiveSection(navItems.map((item) => item.href.replace("#", "")));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow px-4 py-3">
      <div className="flex space-x-4 justify-center">
        {navItems.map(({ href, label }) => {
          const id = href.replace("#", "");
          const isActive = activeSection === id;
          return (
            <a
              key={href}
              href={href}
              className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600 hover:border-b hover:border-blue-300"
              }`}
            >
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
