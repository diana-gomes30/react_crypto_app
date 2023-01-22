import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

export const CryptoTable = () => {
  let options = {
    page: 1,
    numPerPage: 15,
  };

  const [cryptoCurrencies, setCryptoCurrencies] = useState([]);
  const [search, setSearch] = useState('');

  const fetchData = async () => {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=' +
        options.numPerPage +
        '&page=' +
        options.page +
        '&price_change_percentage=1h%2C24h%2C7d'
    );
    const data = await response.json();
    return setCryptoCurrencies(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const data = cryptoCurrencies.filter((cryptoCurrency) =>
    cryptoCurrency.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const changePage = (event) => {
    options.page = event.target.value;
    fetchData();
  };

  const changeNumPerPage = (event) => {
    options.numPerPage = event.target.value;
    fetchData();
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
    <div>
      <div className="table-options">
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

        <div className="num-per-page">
          <select
            onChange={changeNumPerPage}
            name="num-per-page"
            id="num-per-page"
            defaultValue={'15'}
          >
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="150">150</option>
          </select>
        </div>
      </div>

      <div className="table-coins">
        <table data={data}>
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

            {data
              .sort((a, b) => (a.market_cap_rank > b.market_cap_rank ? 1 : -1))
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
                  <td className="r-align">
                    {formatToMoney(coin.current_price)}
                  </td>
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
                  <td className="r-align">
                    {formatToMoney(coin.total_volume)}
                  </td>
                  <td className="r-align">{formatToMoney(coin.market_cap)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
