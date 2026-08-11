import Reveal from "./Reveal";
import ScallopDivider from "./ScallopDivider";

const PLATFORMS = [
  {
    name: "Getir",
    desc: "Getir üzerinden hızlı teslimat",
    href: "https://getir.com",
    bg: "bg-[#5D3EBC]",
  },
  {
    name: "Yemeksepeti",
    desc: "Yemeksepeti'nden sipariş verin",
    href: "https://www.yemeksepeti.com",
    bg: "bg-[#FA0050]",
  },
  {
    name: "Trendyol Yemek",
    desc: "Trendyol Yemek'ten sipariş verin",
    href: "https://yemek.trendyol.com",
    bg: "bg-[#F27A1A]",
  },
];

export default function OrderPlatforms() {
  return (
    <section id="siparis" className="relative bg-brand-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center max-w-xl mx-auto mb-12">
          <span className="text-brand-red font-semibold tracking-[0.2em] uppercase text-xs sm:text-sm">
            Online Sipariş
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold mt-3 text-brand-black">
            Evinizden Çıkmadan Sipariş Verin
          </h2>
          <p className="mt-3 text-brand-black/60 text-sm">
            Anlaşmalı olduğumuz platformlardan dilediğinizi seçip birkaç tıkla sipariş verebilirsiniz.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-5">
          {PLATFORMS.map((p, i) => (
            <Reveal key={p.name} delay={i * 100} variant="scale">
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 p-6 flex items-center gap-4"
              >
                <span
                  className={`hover-wiggle w-14 h-14 rounded-xl ${p.bg} shrink-0 flex items-center justify-center text-white font-display font-extrabold text-lg`}
                >
                  {p.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-display font-bold text-brand-black">{p.name}</span>
                  <span className="block text-sm text-brand-black/55">{p.desc}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <p className="text-center text-xs text-brand-black/40 mt-6">
          Platform bağlantıları güncellendiğinde işletmenize özel sipariş linkleriyle değiştirilecektir.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <ScallopDivider color="#1a1614" />
      </div>
    </section>
  );
}
