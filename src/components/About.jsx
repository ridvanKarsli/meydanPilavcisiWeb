import logo from "../assets/logo.png";
import { GrainDivider } from "./Illustrations";
import ScallopDivider from "./ScallopDivider";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="hakkimizda" className="bg-brand-black text-brand-cream py-16 sm:py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 pattern-dots text-brand-cream/5" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-center">
        <Reveal variant="left" className="flex justify-center">
          <div className="rounded-full bg-brand-cream p-6 sm:p-8 shadow-2xl transition-transform duration-500 hover:rotate-3 hover:scale-105">
            <img src={logo} alt="Küçük Park Meydan Pilavcısı" className="w-32 sm:w-44 h-auto" />
          </div>
        </Reveal>

        <Reveal variant="right" delay={100} className="text-center md:text-left">
          <span className="text-brand-gold font-semibold tracking-[0.2em] uppercase text-xs sm:text-sm">
            Hakkımızda
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold mt-3">
            Küçük Park'tan Herkese Sıcacık Bir Tabak
          </h2>
          <div className="w-28 mx-auto md:mx-0 mt-5 mb-6">
            <GrainDivider className="w-full h-5 text-brand-red" />
          </div>
          <p className="text-brand-cream/80 leading-relaxed">
            Meydan Pilavcısı, Küçük Park'ın tam kalbinde, mahalle esnafının ve buradan geçen herkesin uğrak
            durağı olarak kuruldu. Amacımız basit: günlük taze pişen, doyurucu ve gerçek lezzette pilavı,
            uygun fiyatla ve güler yüzle sofranıza ulaştırmak.
          </p>
          <p className="mt-4 text-brand-cream/80 leading-relaxed">
            Tavuklu, nohutlu, etli ve sebzeli pilav çeşitlerimizi her sabah ocakta hazırlıyor; yanına
            ayranı, turşusu ve tatlısıyla eksiksiz bir öğün sunuyoruz. İster işe giderken hızlıca uğrayın,
            ister ailenizle birlikte gelin — Meydan Pilavcısı'nda herkese yer var.
          </p>
          <p className="mt-4 text-brand-cream/80 leading-relaxed">
            Küçük bir dükkan, büyük bir lezzet tutkusu. Küçük Park'a geldiğinizde bizi bulmanız hiç zor
            olmayacak — kokusuna göre gelin yeter!
          </p>
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <ScallopDivider color="#f4ead7" />
      </div>
    </section>
  );
}
