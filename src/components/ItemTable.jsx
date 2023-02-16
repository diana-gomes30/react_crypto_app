import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const ItemTable = ({ coin, isSelected, onWatchlist }) => {
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
    <tr key={coin.id} className="data-table">
      <td>
        <FontAwesomeIcon
          onClick={() => onWatchlist(coin.id)}
          icon={faStar}
          className="favorite-icon"
          style={{ color: isSelected ? 'yellow' : '' }}
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
