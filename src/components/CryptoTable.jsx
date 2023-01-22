import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

export const CryptoTable = () => {
  const [cryptoCurrencies, setCryptoCurrencies] = useState([]);
  const [search, setSearch] = useState('');

  const fetchData = async () => {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur'
    );
    const data = await response.json();
    return setCryptoCurrencies(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const data = cryptoCurrencies.filter((cryptoCurrency) =>
    cryptoCurrency.name.toLowerCase().includes(search.toLowerCase())
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
              <th className="l-align">#</th>
              <th className="l-align">Coin</th>
              <th className="r-align">Price</th>
              <th className="r-align">24h</th>
              <th className="r-align">24h Volume</th>
              <th className="r-align">Mkt Cap</th>
            </tr>

            {data
              .sort((a, b) => (a.market_cap_rank > b.market_cap_rank ? 1 : -1))
              .map((cryptoCurrency, index) => (
                <tr key={index} className="data-table">
                  <td>
                    <FontAwesomeIcon icon={faStar} className="favorite-icon" />
                  </td>
                  <td className="l-align">{cryptoCurrency.market_cap_rank}</td>
                  <td className="name-image">
                    <img src={cryptoCurrency.image} />
                    {cryptoCurrency.name}
                  </td>
                  <td className="r-align">{cryptoCurrency.current_price}</td>
                  <td className="r-align">
                    {cryptoCurrency.price_change_percentage_24h}
                  </td>
                  <td className="r-align">{cryptoCurrency.total_volume}</td>
                  <td className="r-align">{cryptoCurrency.market_cap}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
