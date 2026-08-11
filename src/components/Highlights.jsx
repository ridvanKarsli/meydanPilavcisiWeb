import { ClockIcon, LeafIcon, HandHeartIcon, TagIcon, ShieldIcon, SparkleIcon } from "./Icons";
import Reveal from "./Reveal";
import ScallopDivider from "./ScallopDivider";

const ITEMS = [
  {
    icon: LeafIcon,
    title: "Günlük Taze Pilav",
    text: "Pilavımız her gün ocaktan taze pişer; bekletilmiş, ısıtılmış yemek yok.",
  },
  {
    icon: HandHeartIcon,
    title: "El Emeği Tarifler",
    text: "Yıllardır aynı ustalıkla, geleneksel tariflerle, evdeki lezzeti sokağa taşıyoruz.",
  },
  {
    icon: ClockIcon,
    title: "Hızlı Servis",
    text: "Yoğun mesai ve öğle aralarına uygun, bekletmeden sıcak servis.",
  },
  {
    icon: TagIcon,
    title: "Cebe Uygun Fiyat",
    text: "Esnaf lokantası anlayışıyla kaliteli lezzeti uygun fiyata sunuyoruz.",
  },
  {
    icon: ShieldIcon,
    title: "Temiz & Hijyenik",
    text: "Hijyen standartlarına tam uyumlu mutfak ve servis alanı.",
  },
  {
    icon: SparkleIcon,
    title: "Küçük Park'ın Simgesi",
    text: "Mahallenin tanıdık, güvenilir ve sevilen adresi — herkes bizi bilir.",
  },
];

export default function Highlights() {
  return (
    <section id="neden-biz" className="relative bg-brand-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center max-w-xl mx-auto mb-12" as="div">
          <span className="text-brand-red font-semibold tracking-[0.2em] uppercase text-xs sm:text-sm">
            Neden Meydan Pilavcısı
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold mt-3 text-brand-black">
            Mahallenin Gözde Pilavcısı
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {ITEMS.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 90} variant="up">
              <div className="group rounded-2xl bg-white p-6 shadow-sm border border-black/5 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 h-full">
                <div className="hover-wiggle w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-4 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-brand-black">{title}</h3>
                <p className="mt-2 text-sm text-brand-black/65 leading-relaxed">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <ScallopDivider color="#1a1614" />
      </div>
    </section>
  );
}
