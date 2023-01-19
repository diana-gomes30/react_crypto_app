import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const CryptoTable = ({ cryptoCurrencies }) => {
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const data = cryptoCurrencies.filter((cryptoCurrency) =>
    cryptoCurrency.coin.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="search-area">
        <input
          type="text"
          placeholder="Search..."
          onChange={handleChange}
          value={search}
        />
        <i>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </i>
      </div>

      <div className="table-coins">
        <table data={data}>
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

            {data.map((cryptoCurrency, index) => (
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
    </div>
  );
};
