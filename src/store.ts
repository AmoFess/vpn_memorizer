import type { VpnLocation } from "./types";

/**
 * Демо-хранилище: localStorage вместо CSV.
 * Структура записи один в один повторяет строку data/vpn_locations.csv
 * во Flask-версии (см. flask-app/csv_store.py).
 */
const KEY = "vpn-registry:v1";

/** Демо-данные при первом запуске */
export function seedLocations(): VpnLocation[] {
  return [
    {
      id: 1,
      host_name: "Aeza",
      login_url: "https://aeza.net/login",
      login: "d.ivanov@gmail.com",
      host_password: "",
      login_method: "Google",
      vpn_system: "Remnawave panel",
      country_name: "Нидерланды",
      country_flag: "🇳🇱",
      domain: "nl1.aeza-vpn.example",
      ip: "185.174.101.24",
      server_login: "root",
      server_password: "Zx9!mK2pQ7",
      payment_period: "ежемесячно",
      payment_cost: 5.6,
      payment_currency: "USD",
      payment_day: 12,
    },
    {
      id: 2,
      host_name: "Timeweb Cloud",
      login_url: "https://timeweb.cloud/login",
      login: "ivanov@corp.ru",
      host_password: "",
      login_method: "",
      vpn_system: "3x-ui",
      country_name: "Германия",
      country_flag: "🇩🇪",
      domain: "de.tw-vpn.example",
      ip: "92.53.120.77",
      server_login: "root",
      server_password: "Tb4#kL0s",
      payment_period: "ежемесячно",
      payment_cost: 2.5,
      payment_currency: "EUR",
      payment_day: 3,
    },
    {
      id: 3,
      host_name: "VDSina",
      login_url: "https://vdsina.ru/login",
      login: "ivanov_d",
      host_password: "",
      login_method: "ВКонтакте",
      vpn_system: "Wireguard",
      country_name: "Россия",
      country_flag: "🇷🇺",
      domain: "",
      ip: "91.243.60.11",
      server_login: "admin",
      server_password: "Vd5$plQw2",
      payment_period: "ежемесячно",
      payment_cost: 320,
      payment_currency: "RUB",
      payment_day: 27,
    },
    {
      id: 4,
      host_name: "FirstVDS",
      login_url: "https://firstvds.ru/login",
      login: "",
      host_password: "",
      login_method: "Телеграм",
      vpn_system: "Remnawave node",
      country_name: "Финляндия",
      country_flag: "🇫🇮",
      domain: "fi.remnw.example",
      ip: "45.147.196.8",
      server_login: "root",
      server_password: "Fn7@rtYe1",
      payment_period: "ежемесячно",
      payment_cost: 190,
      payment_currency: "RUB",
      payment_day: 8,
    },
    {
      id: 5,
      host_name: "Hetzner",
      login_url: "https://accounts.hetzner.com/login",
      login: "d.ivanov@gmail.com",
      host_password: "",
      login_method: "Google",
      vpn_system: "Amnezia",
      country_name: "Германия",
      country_flag: "🇩🇪",
      domain: "amnez.hetz.example",
      ip: "116.203.88.140",
      server_login: "root",
      server_password: "Hz2&vcBn9",
      payment_period: "ежеквартально",
      payment_cost: 11.7,
      payment_currency: "EUR",
      payment_day: 15,
    },
    {
      id: 6,
      host_name: "DigitalOcean",
      login_url: "https://cloud.digitalocean.com/login",
      login: "ivanov.dev@proton.me",
      host_password: "",
      login_method: "Google",
      vpn_system: "3x-ui pro",
      country_name: "США",
      country_flag: "🇺🇸",
      domain: "us.do-vpn.example",
      ip: "143.198.52.210",
      server_login: "root",
      server_password: "Do8!zxTr4",
      payment_period: "ежемесячно",
      payment_cost: 6,
      payment_currency: "USD",
      payment_day: 1,
    },
  ];
}

export function loadLocations(): VpnLocation[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) {
      const seed = seedLocations();
      localStorage.setItem(KEY, JSON.stringify(seed));
      return seed;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed as VpnLocation[];
    return seedLocations();
  } catch {
    return seedLocations();
  }
}

export function saveLocations(list: VpnLocation[]): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    /* приватный режим — просто не сохраняем */
  }
}

export function nextId(list: VpnLocation[]): number {
  return list.reduce((max, r) => Math.max(max, r.id), 0) + 1;
}
