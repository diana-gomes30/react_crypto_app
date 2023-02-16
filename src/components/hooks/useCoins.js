import { useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useCoins = (initialOptions) => {
  const [cryptoCurrencies, setCryptoCurrencies] = useState([]);
  const [options, setOptions] = useState(initialOptions);
  const [coins, setCoins] = useLocalStorage();

  const fetchData = async () => {
    const url =
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=' +
      (options.numPerPage || 15) +
      '&page=' +
      (options.page || 1) +
      '&sparkline=false&price_change_percentage=1h%2C24h%2C7d';

    const response = await fetch(url);
    const data = await response.json();
    setCryptoCurrencies(data);
  };

  useEffect(() => {
    fetchData();
  }, [options]);

  return { cryptoCurrencies, setOptions, coins, setCoins };
};

export default useCoins;
