import { useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useWatchlist = () => {
  const [cryptoCurrencies, setCryptoCurrencies] = useState([]);
  const [coins, setCoins] = useLocalStorage();

  const fetchData = async () => {
    const coinsData = await Promise.all(
      coins.map(async (e) => {
        const url =
          'https://api.coingecko.com/api/v3/coins/' +
          e +
          '?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false';
        const response = await fetch(url);
        const data = await response.json();

        let coin = {
          id: data.id,
          market_cap_rank: data.market_data.market_cap_rank,
          image: data.image.large,
          name: data.name,
          current_price: data.market_data.current_price.usd,
          price_change_percentage_1h_in_currency:
            data.market_data.price_change_percentage_1h_in_currency.usd,
          price_change_percentage_24h_in_currency:
            data.market_data.price_change_percentage_24h_in_currency.usd,
          price_change_percentage_7d_in_currency:
            data.market_data.price_change_percentage_7d_in_currency.usd,
          total_volume: data.market_data.total_volume.usd,
          market_cap: data.market_data.market_cap.usd,
        };

        return coin;
      })
    );

    setCryptoCurrencies(coinsData);
  };

  useEffect(() => {
    fetchData();
  }, [coins]);

  return { cryptoCurrencies, coins, setCoins };
};

export default useWatchlist;
