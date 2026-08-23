/** Справочники — те же, что хардкодятся в flask-app/app.py */

export interface Country {
  ru: string;
  en: string;
  flag: string;
}

export const COUNTRIES: Country[] = [
  { ru: "Россия", en: "Russia", flag: "🇷🇺" },
  { ru: "Германия", en: "Germany", flag: "🇩🇪" },
  { ru: "Нидерланды", en: "Netherlands", flag: "🇳🇱" },
  { ru: "США", en: "United States", flag: "🇺🇸" },
  { ru: "Великобритания", en: "United Kingdom", flag: "🇬🇧" },
  { ru: "Франция", en: "France", flag: "🇫🇷" },
  { ru: "Финляндия", en: "Finland", flag: "🇫🇮" },
  { ru: "Швеция", en: "Sweden", flag: "🇸🇪" },
  { ru: "Польша", en: "Poland", flag: "🇵🇱" },
  { ru: "Латвия", en: "Latvia", flag: "🇱🇻" },
  { ru: "Молдова", en: "Moldova", flag: "🇲🇩" },
  { ru: "Украина", en: "Ukraine", flag: "🇺🇦" },
  { ru: "Казахстан", en: "Kazakhstan", flag: "🇰🇿" },
  { ru: "Узбекистан", en: "Uzbekistan", flag: "🇺🇿" },
  { ru: "Грузия", en: "Georgia", flag: "🇬🇪" },
  { ru: "Турция", en: "Turkey", flag: "🇹🇷" },
  { ru: "ОАЭ", en: "United Arab Emirates", flag: "🇦🇪" },
  { ru: "Сингапур", en: "Singapore", flag: "🇸🇬" },
  { ru: "Япония", en: "Japan", flag: "🇯🇵" },
  { ru: "Канада", en: "Canada", flag: "🇨🇦" },
];

export const VPN_SYSTEMS = [
  "Remnawave panel",
  "Remnawave node",
  "3x-ui",
  "3x-ui pro",
  "Amnezia",
  "Wireguard",
];

export const LOGIN_METHODS = ["Google", "ВКонтакте", "Телеграм"];

export const PAYMENT_PERIODS = [
  "ежемесячно",
  "ежеквартально",
  "раз в полгода",
  "ежегодно",
];

export const CURRENCIES = [
  "RUB",
  "USD",
  "EUR",
  "UAH",
  "BYN",
  "KZT",
  "UZS",
  "TRY",
  "AED",
  "THB",
  "CNY",
  "GBP",
];

/** Сколько месяцев длится один период оплаты (для оценки «в месяц») */
export const PERIOD_MONTHS: Record<string, number> = {
  ежемесячно: 1,
  ежеквартально: 3,
  "раз в полгода": 6,
  ежегодно: 12,
};

/** Цвет точки у чипа VPN-системы */
export const SYSTEM_DOT: Record<string, string> = {
  "Remnawave panel": "bg-sea-400",
  "Remnawave node": "bg-ember-400",
  "3x-ui": "bg-glacier-400",
  "3x-ui pro": "bg-coral-400",
  Amnezia: "bg-sea-300",
  Wireguard: "bg-mist-300",
};

export function countryFlag(name: string): string {
  return COUNTRIES.find((c) => c.ru === name)?.flag ?? "";
}
