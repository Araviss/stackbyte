import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { NavLink } from "../../types";

interface Props {
  links: NavLink[];
}

export default function MobileNav({ links }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <div className="relative z-[9999] md:hidden">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="relative z-[10000] bg-[#fbfbfa] p-2 border border-brand-black/20 hover:border-brand-red hover:text-brand-red transition-colors duration-200"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[9998] min-h-dvh bg-[#fbfbfa] opacity-100 pt-20 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col p-6 gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="font-black text-2xl py-4 border-b border-brand-black/10 hover:text-brand-red transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="p-6 mt-auto">
            <a
              href="/contact"
              onClick={close}
              className="block w-full text-center bg-brand-black text-brand-white font-bold px-6 py-4 hover:bg-brand-red transition-colors duration-200 text-lg"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
