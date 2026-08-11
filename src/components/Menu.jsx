import { ChickenArt, ChickpeaArt, AyranGlassArt, DessertArt } from "./Illustrations";
import Reveal from "./Reveal";
import ScallopDivider from "./ScallopDivider";

const MENU = [
  {
    title: "Pilavlarımız",
    art: ChickenArt,
    items: [
      { name: "Tavuklu Pilav", desc: "Tavuk sote parçalarıyla, tereyağlı pirinç pilavı", price: "140 ₺" },
      { name: "Etli Pilav", desc: "Kuşbaşı etle harmanlanmış, doyurucu klasik", price: "170 ₺" },
      { name: "Nohutlu Pilav", desc: "Bol nohutlu, günlük taze pişen esnaf pilavı", price: "120 ₺" },
      { name: "Kuru Fasulyeli Pilav", desc: "Etli kuru fasulye ile birlikte pilav", price: "130 ₺" },
      { name: "Sade Tereyağlı Pilav", desc: "Klasik, hafif ve doyurucu", price: "80 ₺" },
    ],
  },
  {
    title: "Yanında İyi Gider",
    art: ChickpeaArt,
    items: [
      { name: "Cacık", desc: "Ev yapımı, yoğurtlu ve nane aromalı", price: "40 ₺" },
      { name: "Turşu Tabağı", desc: "Karışık ev yapımı turşu", price: "30 ₺" },
      { name: "Mevsim Salata", desc: "Taze doğranmış mevsim sebzeleri", price: "45 ₺" },
      { name: "Ekstra Tavuk / Nohut", desc: "Porsiyonunuza ekstra ilave", price: "35 ₺" },
    ],
  },
  {
    title: "İçecekler",
    art: AyranGlassArt,
    items: [
      { name: "Ayran", desc: "Soğuk, ev yapımı kıvamında", price: "25 ₺" },
      { name: "Şalgam", desc: "Acılı veya acısız", price: "30 ₺" },
      { name: "Soda", desc: "Buzlu servis", price: "25 ₺" },
      { name: "Kutu İçecek", desc: "Çeşitli seçenekler", price: "35 ₺" },
    ],
  },
  {
    title: "Tatlılar",
    art: DessertArt,
    items: [
      { name: "Fırın Sütlaç", desc: "Günlük taze pişen, soğuk servis", price: "60 ₺" },
      { name: "Kazandibi", desc: "Geleneksel tarif, karamelize taban", price: "65 ₺" },
      { name: "İrmik Helvası", desc: "Sıcak servis, fındıklı", price: "55 ₺" },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="relative bg-brand-cream-2 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center max-w-xl mx-auto mb-12">
          <span className="text-brand-red font-semibold tracking-[0.2em] uppercase text-xs sm:text-sm">
            Menümüz
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold mt-3 text-brand-black">
            Ocaktan Sofranıza
          </h2>
          <p className="mt-3 text-brand-black/60 text-sm">
            Fiyatlarımız güncel liste ile değişiklik gösterebilir; net fiyat için bizi arayabilirsiniz.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {MENU.map(({ title, art: Art, items }, i) => (
            <Reveal key={title} delay={i * 100} variant={i % 2 === 0 ? "left" : "right"}>
              <div className="group rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 sm:p-7 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="hover-wiggle shrink-0">
                    <Art className="w-12 h-12" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-black">{title}</h3>
                </div>
                <ul className="divide-y divide-black/5">
                  {items.map((item) => (
                    <li
                      key={item.name}
                      className="py-3 flex items-start justify-between gap-4 transition-colors duration-200 hover:bg-brand-red/5 -mx-2 px-2 rounded-lg"
                    >
                      <div>
                        <p className="font-semibold text-brand-black">{item.name}</p>
                        <p className="text-sm text-brand-black/55">{item.desc}</p>
                      </div>
                      <span className="shrink-0 font-display font-bold text-brand-red">{item.price}</span>
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
