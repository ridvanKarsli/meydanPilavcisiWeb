import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { MenuIcon, CloseIcon } from "./Icons";

const LINKS = [
  { href: "#anasayfa", label: "Anasayfa" },
  { href: "#neden-biz", label: "Neden Biz" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#menu", label: "Menü" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-brand-black/95 shadow-lg shadow-black/20" : "bg-brand-black/70"
      } backdrop-blur`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#anasayfa" className="flex items-center gap-3 shrink-0 group">
            <img
              src={logo}
              alt="Küçük Park Meydan Pilavcısı logosu"
              className="h-11 sm:h-14 w-auto drop-shadow transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105"
            />
            <span className="hidden sm:block font-display leading-tight">
              <span className="block text-brand-cream font-bold text-lg tracking-wide">MEYDAN PİLAVCISI</span>
              <span className="block text-brand-gold text-[11px] tracking-[0.2em] uppercase">Küçük Park</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm font-medium text-brand-cream/90 hover:text-brand-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#siparis"
              className="ml-3 rounded-full bg-brand-red hover:bg-brand-red-dark text-white text-sm font-semibold px-5 py-2.5 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md shadow-black/30"
            >
              Sipariş Ver
            </a>
          </nav>

          <button
            className="md:hidden text-brand-cream p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menüyü aç/kapat"
          >
            {open ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-brand-black border-t border-white/10">
          <div className="px-4 py-3 flex flex-col">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-brand-cream/90 border-b border-white/5 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#siparis"
              onClick={() => setOpen(false)}
              className="mt-3 mb-1 text-center rounded-full bg-brand-red text-white font-semibold px-5 py-3"
            >
              Sipariş Ver
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
