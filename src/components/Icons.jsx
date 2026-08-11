// Basit, hafif çizgi ikonlar (dış servislere bağımlı değil)

const base = "w-6 h-6";

export function ClockIcon({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M12 7.5V12l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LeafIcon({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path
        d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 18c3-4 6-7 12-11" strokeLinecap="round" />
    </svg>
  );
}

export function HandHeartIcon({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path
        d="M12 9.5c-1-2-4-2.2-4.6.3-.5 2 1.6 3.7 4.6 5.8 3-2.1 5.1-3.8 4.6-5.8-.6-2.5-3.6-2.3-4.6-.3Z"
        strokeLinejoin="round"
      />
      <path d="M3.5 18c1.5-1.3 2.7-1.8 4.3-1.8h3.4c1 0 1 1.4 0 1.4H8.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.5 15.2 6 14v5.3l-2.5-1Z" strokeLinejoin="round" />
    </svg>
  );
}

export function TagIcon({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path
        d="M11.5 4H6a2 2 0 0 0-2 2v5.5a2 2 0 0 0 .6 1.4l8 8a2 2 0 0 0 2.8 0l5.5-5.5a2 2 0 0 0 0-2.8l-8-8a2 2 0 0 0-1.4-.6Z"
        strokeLinejoin="round"
      />
      <circle cx="8.2" cy="8.2" r="1.2" />
    </svg>
  );
}

export function ShieldIcon({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path d="M12 3.5 19 6v5.5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-2.5Z" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MapPinIcon({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

export function PhoneIcon({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path
        d="M5.5 4.5h3l1.5 4-2 1.5a11.5 11.5 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2C10.5 19.7 4.3 13.5 3.5 6.7A2 2 0 0 1 5.5 4.5Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 6.5 8 6.5 8-6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function InstagramIcon({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path d="M14 21v-7h2.5l.5-3H14V9c0-.9.3-1.5 1.7-1.5H17V4.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V11H8.5v3H11v7h3Z" strokeLinejoin="round" />
    </svg>
  );
}

export function WhatsappIcon({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path
        d="M6 18.5 4 20l1.5-3.9A7.5 7.5 0 1 1 11.5 19c-1.1 0-2.1-.3-3-.7L6 18.5Z"
        strokeLinejoin="round"
      />
      <path d="M8.7 9.7c.3 2 2.3 4 4.3 4.3.7.1 1.2-.5 1-1.1l-.3-.7a.7.7 0 0 0-.8-.4l-.7.2a4.2 4.2 0 0 1-1.9-1.9l.2-.7a.7.7 0 0 0-.4-.8l-.7-.3c-.6-.2-1.2.3-1.1 1Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SparkleIcon({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 3c.6 3.8 2.2 5.4 6 6-3.8.6-5.4 2.2-6 6-.6-3.8-2.2-5.4-6-6 3.8-.6 5.4-2.2 6-6Z" />
      <path d="M19 15c.3 1.6.9 2.2 2.5 2.5-1.6.3-2.2.9-2.5 2.5-.3-1.6-.9-2.2-2.5-2.5 1.6-.3 2.2-.9 2.5-2.5Z" />
    </svg>
  );
}

export function ChevronDownIcon({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className = base }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}
