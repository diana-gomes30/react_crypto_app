export interface Coin {
  id: string;
  market_cap_rank: number;
  image: string;
  name: string;
  current_price: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
  total_volume: number;
  market_cap: number;
}

export interface Options {
  page: number;
  numPerPage: number;
  valueToSearch?: string;
}
