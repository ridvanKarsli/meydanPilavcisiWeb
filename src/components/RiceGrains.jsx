// Havada usulca yükselen pirinç taneleri — sabit (rastgele olmayan)
// değerlerle tanımlı, sadece transform/opacity animasyonu kullanır.
const GRAINS = [
  { left: "6%", delay: "0s", dur: "7.5s", size: 10 },
  { left: "16%", delay: "1.4s", dur: "8.5s", size: 7 },
  { left: "27%", delay: "0.6s", dur: "6.8s", size: 9 },
  { left: "40%", delay: "2.2s", dur: "9s", size: 6 },
  { left: "55%", delay: "0.3s", dur: "7.8s", size: 8 },
  { left: "68%", delay: "1.8s", dur: "8.2s", size: 7 },
  { left: "80%", delay: "1s", dur: "7s", size: 9 },
  { left: "91%", delay: "2.6s", dur: "6.4s", size: 6 },
];

export default function RiceGrains({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {GRAINS.map((g, i) => (
        <span
          key={i}
          className="grain-float absolute bottom-0 rounded-full bg-brand-cream/70"
          style={{
            left: g.left,
            width: g.size,
            height: g.size * 0.55,
            animationDelay: g.delay,
            animationDuration: g.dur,
          }}
        />
      ))}
    </div>
  );
}
