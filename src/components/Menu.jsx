import { ChickenArt, AyranGlassArt, DessertArt, DumbbellArt, WrapArt, SoupBowlArt, ExtraArt } from "./Illustrations";
import Reveal from "./Reveal";
import ScallopDivider from "./ScallopDivider";

// Gerçek, güncel fiyat listesine göre (esnaf menü panosundan alınmıştır)
const PILAVLAR = [
  { name: "Tavuklu", sizes: [125, 160, 220] },
  { name: "Tavuk Ciğerli", sizes: [125, 160, 220] },
  { name: "Karışık", sizes: [125, 160, 220] },
  { name: "Sade", sizes: [80, 110, 140] },
  { name: "Mısırlı", sizes: [125, 160, 220] },
  { name: "Kuru Fasulye", sizes: [125, 160, 220] },
  { name: "Tavuk Sote", sizes: [150, 180, 220] },
  { name: "Köri Soslu Tavuk", sizes: [180, 225, 275] },
  { name: "Kavurmalı", sizes: [300, 350, 400] },
];

const OTHER_MENU = [
  {
    title: "Sporcu Menü",
    art: DumbbellArt,
    items: [
      { name: "Definasyon", desc: "250 gram pilav, 150 gram tavuk", price: "225 ₺" },
      { name: "Bulk", desc: "400 gram pilav, 250 gram tavuk", price: "300 ₺" },
    ],
  },
  {
    title: "Çiğköfteler",
    art: WrapArt,
    items: [
      { name: "Dürüm Çiğköfte", desc: "", price: "75 ₺" },
      { name: "Doritoslu", desc: "", price: "100 ₺" },
      { name: "Porsiyon (250gr)", desc: "", price: "150 ₺" },
      { name: "Kilogram", desc: "", price: "500 ₺" },
    ],
  },
  {
    title: "Çorba",
    art: SoupBowlArt,
    items: [
      { name: "Pilav Yanında Çorba", desc: "", price: "75 ₺" },
      { name: "Çorba (Tek)", desc: "", price: "100 ₺" },
    ],
  },
  {
    title: "İçecekler",
    art: AyranGlassArt,
    items: [
      { name: "Su", desc: "", price: "20 ₺" },
      { name: "Soda", desc: "", price: "20 ₺" },
      { name: "Ayran", desc: "", price: "30 ₺" },
      { name: "Niğde Gazoz", desc: "", price: "40 ₺" },
      { name: "Kutu İçecekler", desc: "", price: "60 ₺" },
    ],
  },
  {
    title: "Tatlılar",
    art: DessertArt,
    items: [
      { name: "Puding", desc: "", price: "30 ₺" },
      { name: "Sütlaç", desc: "", price: "30 ₺" },
      { name: "Kazandibi", desc: "", price: "30 ₺" },
    ],
  },
  {
    title: "Ekstralar",
    art: ExtraArt,
    items: [
      { name: "Tavuk (50gr)", desc: "", price: "40 ₺" },
      { name: "Mısır", desc: "", price: "40 ₺" },
      { name: "Garnitür", desc: "", price: "20 ₺" },
    ],
  },
];

const COMBOS = [
  { name: "Tavuk Pilav + Ayran", price: "125 ₺" },
  { name: "Pilavın Yanında Çorba", price: "75 ₺" },
];

export default function Menu() {
  return (
    <section id="menu" className="relative bg-brand-cream-2 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center max-w-xl mx-auto mb-8">
          <span className="text-brand-red font-semibold tracking-[0.2em] uppercase text-xs sm:text-sm">
            Menümüz
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold mt-3 text-brand-black">
            Ocaktan Sofranıza
          </h2>
          <p className="mt-3 text-brand-black/60 text-sm">
            Güncel fiyat listemizdir; kampanya ve fiyatlarımız zaman zaman değişiklik gösterebilir.
          </p>
        </Reveal>

        <Reveal delay={80} className="flex flex-wrap justify-center gap-3 mb-12">
          {COMBOS.map((c) => (
            <span
              key={c.name}
              className="inline-flex items-center gap-2 rounded-full bg-brand-red text-white text-sm font-semibold px-5 py-2.5 shadow-md shadow-brand-red/20"
            >
              {c.name}
              <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-bold">{c.price}</span>
            </span>
          ))}
        </Reveal>

        {/* Pilavlar — boy seçenekli fiyat tablosu */}
        <Reveal className="mb-6 sm:mb-8">
          <div className="rounded-2xl bg-white border border-black/5 shadow-sm p-6 sm:p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="shrink-0">
                <ChickenArt className="w-12 h-12" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-brand-black">Pilavlarımız</h3>
                <p className="text-xs text-brand-black/45">Küçük · Orta · Büyük boy seçenekleriyle</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[420px]">
                <thead>
                  <tr className="text-brand-black/40 text-[11px] uppercase tracking-wide">
                    <th className="text-left font-semibold pb-2">Pilav</th>
                    <th className="text-right font-semibold pb-2 w-20">Küçük</th>
                    <th className="text-right font-semibold pb-2 w-20">Orta</th>
                    <th className="text-right font-semibold pb-2 w-20">Büyük</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  {PILAVLAR.map((item) => (
                    <tr key={item.name} className="hover:bg-brand-red/5 transition-colors duration-200">
                      <td className="py-2.5 font-semibold text-brand-black">{item.name}</td>
                      <td className="py-2.5 text-right text-brand-black/60">{item.sizes[0]} ₺</td>
                      <td className="py-2.5 text-right text-brand-black/60">{item.sizes[1]} ₺</td>
                      <td className="py-2.5 text-right font-bold text-brand-red">{item.sizes[2]} ₺</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* Diğer kategoriler */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {OTHER_MENU.map(({ title, art: Art, items }, i) => (
            <Reveal key={title} delay={i * 80} variant={i % 2 === 0 ? "left" : "right"}>
              <div className="group rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="hover-wiggle shrink-0">
                    <Art className="w-11 h-11" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-brand-black">{title}</h3>
                </div>
                <ul className="divide-y divide-black/5">
                  {items.map((item) => (
                    <li
                      key={item.name}
                      className="py-2.5 flex items-start justify-between gap-4 transition-colors duration-200 hover:bg-brand-red/5 -mx-2 px-2 rounded-lg"
                    >
                      <div>
                        <p className="font-semibold text-sm text-brand-black">{item.name}</p>
                        {item.desc && <p className="text-xs text-brand-black/50">{item.desc}</p>}
                      </div>
                      <span className="shrink-0 font-display font-bold text-brand-red text-sm">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <ScallopDivider color="#fbf5ea" />
      </div>
    </section>
  );
}
