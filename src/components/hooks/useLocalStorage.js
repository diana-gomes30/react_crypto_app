import { useState } from 'react';

const useLocalStorage = () => {
  const getCoins = () =>
    localStorage.getItem('coins')
      ? JSON.parse(localStorage.getItem('coins'))
      : [];

  const [coins, setLocalCoins] = useState(getCoins());

  const setCoins = (coin) => {
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
