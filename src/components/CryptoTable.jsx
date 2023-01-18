import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const CryptoTable = () => {
  const cryptoCurrencies = [
    {
      position: 1,
      coin: 'Bitcoin',
      price: 20912.68,
      hour: 0.5,
      day: -1.4,
      week: 19.9,
      dayVolume: 38520931183,
      mktCap: 403117273342,
    },
    {
      position: 2,
      coin: 'Ethereum',
      price: 1544.38,
      hour: -0.0,
      day: -1.9,
      week: 15.6,
      dayVolume: 11593467934,
      mktCap: 186248496128,
    },
  ];

  return (
    <div className="table-coins">
      <table>
        <tbody>
          <tr className="header-table">
            <th></th>
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>1h</th>
            <th>24h</th>
            <th>7d</th>
            <th>24h Volume</th>
            <th>Mkt Cap</th>
          </tr>

          {cryptoCurrencies.map((cryptoCurrency, index) => (
            <tr key={index} className="data-table">
              <td>
                <FontAwesomeIcon icon={faStar} className="favorite-icon" />
              </td>
              <td>{cryptoCurrency.position}</td>
              <td>{cryptoCurrency.coin}</td>
              <td>{cryptoCurrency.price}</td>
              <td>{cryptoCurrency.hour}</td>
              <td>{cryptoCurrency.day}</td>
              <td>{cryptoCurrency.week}</td>
              <td>{cryptoCurrency.dayVolume}</td>
              <td>{cryptoCurrency.mktCap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
