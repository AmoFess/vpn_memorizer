import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base: P = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const LogoMark = (p: P) => (
  <svg viewBox="0 0 32 32" fill="none" {...p}>
    <circle cx="16" cy="16" r="11" stroke="#3ecfb2" strokeWidth="2" />
    <ellipse cx="16" cy="16" rx="5" ry="11" stroke="#3ecfb2" strokeWidth="1.2" opacity=".6" />
    <path d="M5 16h22" stroke="#3ecfb2" strokeWidth="1.2" opacity=".6" />
    <circle cx="16" cy="5" r="2.6" fill="#ffb454" />
    <circle cx="26.5" cy="20" r="2.1" fill="#6fb3ff" />
    <circle cx="6.5" cy="22" r="1.8" fill="#ff6f61" />
  </svg>
);

export const IconPlus = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const IconPencil = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 20l4.5-1 11-11a2.12 2.12 0 0 0-3-3l-11 11L4 20Z" />
    <path d="M13.5 6.5l3 3" />
  </svg>
);

export const IconTrash = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 7h16" />
    <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    <path d="M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12" />
    <path d="M10 11v6M14 11v6" />
  </svg>
);

export const IconCopy = (p: P) => (
  <svg {...base} {...p}>
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M5 15V5a2 2 0 0 1 2-2h10" />
  </svg>
);

export const IconCheck = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 13l4 4L19 7" />
  </svg>
);

export const IconExternal = (p: P) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

export const IconSearch = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-3.2-3.2" />
  </svg>
);

export const IconChevronUp = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 15l6-6 6 6" />
  </svg>
);

export const IconChevronDown = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const IconSortNeutral = (p: P) => (
  <svg {...base} {...p}>
    <path d="M8 5v14M5 8l3-3 3 3" />
    <path d="M16 19V5M13 16l3 3 3-3" />
  </svg>
);

export const IconX = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const IconEye = (p: P) => (
  <svg {...base} {...p}>
    <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z" />
    <circle cx="12" cy="12" r="2.6" />
  </svg>
);

export const IconEyeOff = (p: P) => (
  <svg {...base} {...p}>
    <path d="M2 12s3.5-6.5 10-6.5c2 0 3.7.6 5.1 1.4M22 12s-3.5 6.5-10 6.5c-2 0-3.7-.6-5.1-1.4" />
    <path d="M4 4l16 16" />
  </svg>
);

export const IconServer = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="4" width="18" height="7" rx="2" />
    <rect x="3" y="13" width="18" height="7" rx="2" />
    <circle cx="7" cy="7.5" r="0.9" fill="currentColor" stroke="none" />
    <circle cx="7" cy="16.5" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const IconCode = (p: P) => (
  <svg {...base} {...p}>
    <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" />
  </svg>
);

export const IconTerminal = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M7 9l3 3-3 3M12.5 15H17" />
  </svg>
);

export const IconBook = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 6.5C10.5 5 8.5 4.5 3.5 4.5v14c5 0 7 .5 8.5 2 1.5-1.5 3.5-2 8.5-2v-14c-5 0-7 .5-8.5 2v14" />
  </svg>
);

export const IconCoins = (p: P) => (
  <svg {...base} {...p}>
    <ellipse cx="12" cy="6" rx="7" ry="3" />
    <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
    <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
  </svg>
);

export const IconCalendar = (p: P) => (
  <svg {...base} {...p}>
    <rect x="4" y="5" width="16" height="16" rx="2" />
    <path d="M4 10h16M8 3v4M16 3v4" />
    <circle cx="9" cy="15" r="0.9" fill="currentColor" stroke="none" />
    <circle cx="13" cy="15" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const IconGlobe = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <ellipse cx="12" cy="12" rx="4" ry="9" />
    <path d="M3 12h18" />
  </svg>
);

export const IconLayers = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3l9 5-9 5-9-5 9-5Z" />
    <path d="M3 13l9 5 9-5" />
    <path d="M3 17.5l9 5 9-5" opacity=".5" />
  </svg>
);

export const IconShield = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3l7 3v5.2c0 4.4-3 8-7 9.3-4-1.3-7-4.9-7-9.3V6l7-3Z" />
    <circle cx="12" cy="11" r="1.6" />
    <path d="M12 12.6v2.6" />
  </svg>
);

export const IconDatabase = (p: P) => (
  <svg {...base} {...p}>
    <ellipse cx="12" cy="5.5" rx="7.5" ry="3" />
    <path d="M4.5 5.5v13c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-13" />
    <path d="M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" />
  </svg>
);
