import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, InstagramIcon, YoutubeIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="iletisim" className="bg-brand-black text-brand-cream py-16 sm:py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 pattern-dots text-brand-cream/5" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center max-w-xl mx-auto mb-12">
          <span className="text-brand-gold font-semibold tracking-[0.2em] uppercase text-xs sm:text-sm">
            İletişim
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold mt-3">Bize Ulaşın</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Reveal variant="left" className="space-y-5">
            <div className="flex items-start gap-4 rounded-2xl bg-white/5 p-5 transition-colors duration-300 hover:bg-white/10">
              <MapPinIcon className="w-6 h-6 text-brand-red shrink-0 mt-0.5" />
              <div>
                <p className="font-display font-bold">Küçük Park Meydanı</p>
                <p className="text-sm text-brand-cream/60 mt-1 italic">Açık adres bilgisi eklenecek</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white/5 p-5 transition-colors duration-300 hover:bg-white/10">
              <PhoneIcon className="w-6 h-6 text-brand-red shrink-0 mt-0.5" />
              <div>
                <p className="font-display font-bold">Telefon</p>
                <p className="text-sm text-brand-cream/60 mt-1 italic">Telefon numarası eklenecek</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white/5 p-5 transition-colors duration-300 hover:bg-white/10">
              <MailIcon className="w-6 h-6 text-brand-red shrink-0 mt-0.5" />
              <div>
                <p className="font-display font-bold">E-posta</p>
                <p className="text-sm text-brand-cream/60 mt-1">info@meydanpilavcisi.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-white/5 p-5 transition-colors duration-300 hover:bg-white/10">
              <ClockIcon className="w-6 h-6 text-brand-red shrink-0 mt-0.5" />
              <div>
                <p className="font-display font-bold">Çalışma Saatleri</p>
                <p className="text-sm text-brand-cream/60 mt-1">Her gün 10:45 – 02:00</p>
              </div>
            </div>

            <div className="pt-2">
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/meydanpilavcisi35?igsh=MWhqbzZrYTBxdDBxMQ%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-full bg-white/5 hover:bg-brand-red flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/@meydanpilavcisibornova"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-11 h-11 rounded-full bg-white/5 hover:bg-brand-red flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <YoutubeIcon className="w-5 h-5" />
                </a>
              </div>
              <p className="text-xs text-brand-cream/50 mt-3">
                YouTube'da eğlenceli videolarımızı, Instagram'da güncel paylaşımlarımızı kaçırmayın!
              </p>
            </div>
          </Reveal>

          <Reveal
            variant="right"
            delay={120}
            className="rounded-2xl overflow-hidden border border-white/10 h-72 md:h-full min-h-[280px] bg-white/5 flex items-center justify-center text-center p-6"
          >
            <div>
              <MapPinIcon className="w-10 h-10 text-brand-red mx-auto mb-3" />
              <p className="text-brand-cream/70 text-sm max-w-xs">
                Konum haritası, tam adres bilgisi eklendiğinde buraya yerleştirilecektir.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
