/** Запись о VPN-локации — зеркалирует колонки data/vpn_locations.csv */
export interface VpnLocation {
  id: number;
  host_name: string;
  login_url: string;
  login: string;
  login_method: string;
  login_password: string;
  vpn_system: string;
  country_name: string;
  country_flag: string;
  domain: string;
  ip: string;
  server_login: string;
  server_password: string;
  payment_period: string;
  payment_cost: number | null;
  payment_currency: string;
  payment_day: number | null;
}

export type SortField =
  | "id"
  | "host_name"
  | "country_name"
  | "vpn_system"
  | "payment_cost"
  | "payment_day";

export type SortDir = "asc" | "desc";

export interface SortState {
  field: SortField;
  dir: SortDir;
}

export interface ToastMsg {
  id: number;
  text: string;
  tone: "success" | "info" | "danger";
}
