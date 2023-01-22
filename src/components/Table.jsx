import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const Table = (props) => {
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
    <div className="table-coins">
      <table data={props.data}>
        <tbody>
          <tr className="header-table">
            <th></th>
            <th className="l-align">#</th>
            <th className="l-align">Coin</th>
            <th className="r-align">Price</th>
            <th className="r-align">1h</th>
            <th className="r-align">24h</th>
            <th className="r-align">7d</th>
            <th className="r-align">24h Volume</th>
            <th className="r-align">Mkt Cap</th>
          </tr>

          {props.data
            ?.sort((a, b) => (a.market_cap_rank > b.market_cap_rank ? 1 : -1))
            .map((coin, index) => (
              <tr key={index} className="data-table">
                <td>
                  <FontAwesomeIcon icon={faStar} className="favorite-icon" />
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
                    color: getColor(
                      coin.price_change_percentage_1h_in_currency
                    ),
                  }}
                >
                  {roundNumber(coin.price_change_percentage_1h_in_currency)}%
                </td>
                <td
                  className="r-align"
                  style={{
                    color: getColor(
                      coin.price_change_percentage_24h_in_currency
                    ),
                  }}
                >
                  {roundNumber(coin.price_change_percentage_24h_in_currency)}%
                </td>
                <td
                  className="r-align"
                  style={{
                    color: getColor(
                      coin.price_change_percentage_7d_in_currency
                    ),
                  }}
                >
                  {roundNumber(coin.price_change_percentage_7d_in_currency)}%
                </td>
                <td className="r-align">{formatToMoney(coin.total_volume)}</td>
                <td className="r-align">{formatToMoney(coin.market_cap)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
