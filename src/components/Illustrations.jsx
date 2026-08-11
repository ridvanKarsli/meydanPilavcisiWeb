// Marka logosuyla uyumlu, dışa bağımlı olmayan (network gerektirmeyen) el yapımı SVG illüstrasyonlar.

export function PilavBowlArt({ className = "w-full h-auto" }) {
  return (
    <svg viewBox="0 0 420 420" className={className} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="210" cy="345" rx="140" ry="22" fill="#1a1614" opacity="0.12" />

      {/* buhar */}
      <g stroke="#c8302a" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.85">
        <path className="steam-wisp" style={{ animationDelay: "0s" }} d="M150 90c-14-16-14-28 0-44" />
        <path className="steam-wisp" style={{ animationDelay: "0.5s" }} d="M195 80c-14-16-14-28 0-44" />
        <path className="steam-wisp" style={{ animationDelay: "1s" }} d="M240 90c-14-16-14-28 0-44" />
      </g>

      {/* pilav yığını */}
      <path
        d="M95 210c0-46 52-72 115-72s115 26 115 72c0 8-4 14-13 14H108c-9 0-13-6-13-14Z"
        fill="#fbf5ea"
        stroke="#1a1614"
        strokeWidth="6"
      />
      <g fill="#e7dcc0">
        <circle cx="150" cy="175" r="5" />
        <circle cx="180" cy="160" r="5" />
        <circle cx="215" cy="152" r="5" />
        <circle cx="250" cy="160" r="5" />
        <circle cx="280" cy="178" r="5" />
        <circle cx="165" cy="195" r="5" />
        <circle cx="200" cy="185" r="5" />
        <circle cx="235" cy="188" r="5" />
        <circle cx="265" cy="200" r="5" />
      </g>
      {/* garnitür noktaları */}
      <circle cx="188" cy="168" r="6" fill="#c8302a" />
      <circle cx="230" cy="172" r="6" fill="#c8302a" />
      <circle cx="205" cy="200" r="6" fill="#3f7d4a" />
      <circle cx="255" cy="188" r="6" fill="#3f7d4a" />

      {/* kase */}
      <path
        d="M70 214h280c-6 62-62 108-140 108S76 276 70 214Z"
        fill="#c8302a"
        stroke="#1a1614"
        strokeWidth="7"
        strokeLinejoin="round"
      />
      <path d="M92 232c26 14 68 22 118 22s92-8 118-22" fill="none" stroke="#9e2019" strokeWidth="6" strokeLinecap="round" />
      <path d="M70 214h280" stroke="#1a1614" strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}

export function GrainDivider({ className = "w-full h-6 text-brand-red" }) {
  return (
    <svg viewBox="0 0 400 24" preserveAspectRatio="none" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M0 12c16-10 34-10 50 0s34 10 50 0 34-10 50 0 34 10 50 0 34-10 50 0 34 10 50 0 34-10 50 0 34 10 50 0" strokeLinecap="round" />
    </svg>
  );
}

export function AyranGlassArt({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <path d="M20 14h24l-3 38a3 3 0 0 1-3 3H26a3 3 0 0 1-3-3L20 14Z" fill="#fbf5ea" stroke="#1a1614" strokeWidth="3" strokeLinejoin="round" />
      <path d="M21.4 26h21.2" stroke="#c8302a" strokeWidth="3" />
      <path d="M18 14h28" stroke="#1a1614" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function ChickpeaArt({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <circle cx="32" cy="32" r="20" fill="#fbf5ea" stroke="#1a1614" strokeWidth="3" />
      <circle cx="24" cy="28" r="4" fill="#d9a441" />
      <circle cx="36" cy="24" r="4" fill="#d9a441" />
      <circle cx="40" cy="36" r="4" fill="#c8302a" />
      <circle cx="26" cy="40" r="4" fill="#3f7d4a" />
    </svg>
  );
}

export function ChickenArt({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <path
        d="M20 40c-4-8 0-18 10-20 2-6 12-6 14 0 8 2 10 12 6 20-2 4-6 6-6 10H26c0-4-4-6-6-10Z"
        fill="#fbf5ea"
        stroke="#1a1614"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="26" cy="30" r="2.4" fill="#1a1614" />
      <circle cx="38" cy="30" r="2.4" fill="#1a1614" />
    </svg>
  );
}

export function DessertArt({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <path d="M16 26h32l-4 22a4 4 0 0 1-4 3H24a4 4 0 0 1-4-3l-4-22Z" fill="#fbf5ea" stroke="#1a1614" strokeWidth="3" strokeLinejoin="round" />
      <path d="M14 26c0-8 8-14 18-14s18 6 18 14" fill="none" stroke="#c8302a" strokeWidth="3" strokeLinecap="round" />
      <circle cx="32" cy="12" r="3" fill="#d9a441" />
    </svg>
  );
}

export function DumbbellArt({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect x="27" y="20" width="10" height="24" rx="2" fill="#fbf5ea" stroke="#1a1614" strokeWidth="3" />
      <rect x="10" y="24" width="8" height="16" rx="2" fill="#c8302a" stroke="#1a1614" strokeWidth="3" />
      <rect x="46" y="24" width="8" height="16" rx="2" fill="#c8302a" stroke="#1a1614" strokeWidth="3" />
      <path d="M18 32h9M37 32h9" stroke="#1a1614" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function WrapArt({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <path
        d="M20 14c10-4 22 2 26 12 5 12-2 24-16 30-6-10-10-22-14-32-2-5-1-8 4-10Z"
        fill="#fbf5ea"
        stroke="#1a1614"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M22 20c8 6 14 16 16 28" fill="none" stroke="#c8302a" strokeWidth="3" strokeLinecap="round" />
      <circle cx="26" cy="24" r="2" fill="#3f7d4a" />
      <circle cx="32" cy="30" r="2" fill="#d9a441" />
      <circle cx="30" cy="38" r="2" fill="#c8302a" />
    </svg>
  );
}

export function SoupBowlArt({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <path
        d="M10 30h44c-2 12-11 20-22 20S12 42 10 30Z"
        fill="#c8302a"
        stroke="#1a1614"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M10 30h44" stroke="#1a1614" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 12c-3 3-3 5 0 8M32 10c-3 3-3 5 0 8M40 12c-3 3-3 5 0 8" fill="none" stroke="#c8302a" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function ExtraArt({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <circle cx="32" cy="32" r="20" fill="#fbf5ea" stroke="#1a1614" strokeWidth="3" />
      <path d="M32 22v20M22 32h20" stroke="#c8302a" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
