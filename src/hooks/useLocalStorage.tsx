import { useState } from 'react';

const useLocalStorage = (): [
  coins: string[],
  setCoins: (coin: string) => void
] => {
  const getCoins = () =>
    localStorage.getItem('coins')
      ? JSON.parse(localStorage.getItem('coins') || '[]')
      : [];

  const [coins, setLocalCoins] = useState<string[]>(getCoins());

  const setCoins = (coin: string) => {
    if (coins?.includes(coin)) {
      const filterCoins = coins.filter((e) => e !== coin);
      localStorage.setItem('coins', JSON.stringify(filterCoins));
      setLocalCoins(filterCoins);
    } else {
      const coinsList = [...coins, coin];
      setLocalCoins(coinsList);
      localStorage.setItem('coins', JSON.stringify(coinsList));
    }
  };

  return [coins, setCoins];
};

export default useLocalStorage;
