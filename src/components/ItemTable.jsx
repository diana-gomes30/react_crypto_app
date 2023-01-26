import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export const ItemTable = (props) => {
  var [coinsListStorage, setCoinsListStorage] = useState([]);

  const coin = props.coin;

  useEffect(() => {
    setCoinsListStorage(JSON.parse(localStorage.getItem('coins')));
  }, []);

  const getCoins = () => {
    return localStorage.getItem('coins')
      ? JSON.parse(localStorage.getItem('coins'))
      : [];
  };

  const handleClick = () => {
    if (coinsListStorage.includes(coin.id)) {
      let coins = getCoins().filter((e) => e !== coin.id);
      localStorage.setItem('coins', JSON.stringify(coins));
      setCoinsListStorage(JSON.parse(localStorage.getItem('coins')));
    } else {
      let coins = getCoins();
      coins = [...coins, coin.id];
      localStorage.setItem('coins', JSON.stringify(coins));
      setCoinsListStorage(JSON.parse(localStorage.getItem('coins')));
    }
  };

  const roundNumber = (number) => {
    return Math.round(number * 10) / 10;
  };

  const formatToMoney = (number) => {
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  const getColor = (number) => {
    return roundNumber(number) < 0 ? '#e15241' : '#4eaf0a';
  };

  return (
    <tr key={coin.id.toString()} className="data-table">
      <td>
        <FontAwesomeIcon
          onClick={handleClick}
          icon={faStar}
          className="favorite-icon"
          style={{ color: coinsListStorage.includes(coin.id) && 'yellow' }}
        />
      </td>
      <td className="l-align">{coin.market_cap_rank}</td>
      <td className="name-image">
        <img alt="Coin Icon" src={coin.image} />
        {coin.name}
      </td>
      <td className="r-align">{formatToMoney(coin.current_price)}</td>
      <td
        className="r-align"
        style={{
          color: getColor(coin.price_change_percentage_1h_in_currency),
        }}
      >
        {roundNumber(coin.price_change_percentage_1h_in_currency)}%
      </td>
      <td
        className="r-align"
        style={{
          color: getColor(coin.price_change_percentage_24h_in_currency),
        }}
      >
        {roundNumber(coin.price_change_percentage_24h_in_currency)}%
      </td>
      <td
        className="r-align"
        style={{
          color: getColor(coin.price_change_percentage_7d_in_currency),
        }}
      >
        {roundNumber(coin.price_change_percentage_7d_in_currency)}%
      </td>
      <td className="r-align">{formatToMoney(coin.total_volume)}</td>
      <td className="r-align">{formatToMoney(coin.market_cap)}</td>
    </tr>
  );
};
