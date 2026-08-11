import logo from "../assets/logo.png";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-charcoal text-brand-cream/70 py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Meydan Pilavcısı" className="h-9 w-auto" />
          <span className="text-sm">Meydan Pilavcısı — Küçük Park</span>
        </div>
        <p className="text-xs text-brand-cream/40">
          © {year} Meydan Pilavcısı. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
