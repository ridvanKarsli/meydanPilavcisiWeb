import { PilavBowlArt } from "./Illustrations";
import { ChevronDownIcon, SparkleIcon } from "./Icons";
import RiceGrains from "./RiceGrains";
import ScallopDivider from "./ScallopDivider";
import Reveal from "./Reveal";
import useInView from "../hooks/useInView";

export default function Hero() {
  // Bölüm ekran dışına çıktığında (ör. kullanıcı aşağı kaydırınca)
  // animasyonları duraklatarak gereksiz GPU/CPU kullanımını önlüyoruz.
  const [sceneRef, sceneInView] = useInView({ threshold: 0.05, once: false });

  return (
    <section
      id="anasayfa"
      className="relative overflow-hidden bg-brand-black text-brand-cream pt-28 pb-16 sm:pt-36 sm:pb-20"
    >
      <div
        ref={sceneRef}
        className={`pointer-events-none absolute inset-0 ${sceneInView ? "" : "pause-anim"}`}
      >
        <div className="absolute inset-0 pattern-dots text-brand-cream/10" />
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-brand-red/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 w-80 h-80 rounded-full bg-brand-gold/10 blur-3xl" />
        <RiceGrains />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 text-brand-gold text-xs sm:text-sm tracking-[0.2em] uppercase px-4 py-1.5 mb-5">
              <SparkleIcon className="w-3.5 h-3.5 animate-twinkle" />
              Küçük Park Meydanı'nda
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Meydan <span className="text-brand-red">Pilavcısı</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 text-brand-cream/80 text-base sm:text-lg max-w-md mx-auto md:mx-0">
              Günlük pişen tavuklu, nohutlu ve etli pilavlarımız; sıcacık, doyurucu ve gerçek esnaf lezzetiyle
              sofranızda. Küçük Park'ın simgesi, mahallenin gözdesi.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#menu"
                className="rounded-full bg-brand-red hover:bg-brand-red-dark transition-all duration-300 hover:scale-105 active:scale-95 text-white font-semibold px-7 py-3.5 shadow-lg shadow-brand-red/30"
              >
                Menüyü İncele
              </a>
              <a
                href="#siparis"
                className="rounded-full border border-brand-cream/30 hover:border-brand-gold hover:text-brand-gold transition-all duration-300 hover:scale-105 active:scale-95 font-semibold px-7 py-3.5"
              >
                Online Sipariş
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={120} className="relative mx-auto w-64 sm:w-80 md:w-full max-w-sm">
          <div className={`animate-bob ${sceneInView ? "" : "pause-anim"}`}>
            <PilavBowlArt className="w-full h-auto drop-shadow-2xl" />
          </div>
        </Reveal>
      </div>

      <a
        href="#neden-biz"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-cream/50 hover:text-brand-gold animate-bounce"
        aria-label="Aşağı kaydır"
      >
        <ChevronDownIcon className="w-7 h-7" />
      </a>

      <div className="absolute bottom-0 left-0 right-0">
        <ScallopDivider color="#fbf5ea" />
      </div>
    </section>
  );
}
