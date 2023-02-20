import { useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useCoins = (initialOptions) => {
  const [cryptoCurrencies, setCryptoCurrencies] = useState([]);
  const [options, setOptions] = useState(initialOptions);
  const [coins, setCoins] = useLocalStorage();

  const fetchData = async () => {
    if (options.valueToSearch !== '') {
      const urlToSearchId =
        'https://api.coingecko.com/api/v3/search?query=' +
        options.valueToSearch;
      const response = await fetch(urlToSearchId);
      const data = await response.json();

      const coinsId = data.coins.map((e) => e.id);
      const coinsData = await Promise.all(
        coinsId.map(async (e) => {
          console.log('Coin Id: ' + e);
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
    } else {
      const url =
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=' +
        (options.numPerPage || 15) +
        '&page=' +
        (options.page || 1) +
        '&sparkline=false&price_change_percentage=1h%2C24h%2C7d';

      const response = await fetch(url);
      const data = await response.json();
      setCryptoCurrencies(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, [options]);

  return { cryptoCurrencies, setOptions, coins, setCoins };
};

export default useCoins;
