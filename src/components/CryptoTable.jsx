import { useState, useEffect } from 'react';
import { TableOptions } from './TableOptions';
import { Table } from './Table';

export const CryptoTable = (props) => {
  let options = {
    page: 1,
    numPerPage: 15,
  };

  const [cryptoCurrencies, setCryptoCurrencies] = useState([]);
  const [search, setSearch] = useState('');

  const fetchData = async () => {
    let url = '';

    url = props.isTop10Page
      ? 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1&price_change_percentage=1h%2C24h%2C7d'
      : 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=' +
        options.numPerPage +
        '&page=' +
        options.page +
        '&price_change_percentage=1h%2C24h%2C7d';

    const response = await fetch(url);
    const data = await response.json();
    setCryptoCurrencies(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const data = props.isWatchlistPage
    ? []
    : cryptoCurrencies.filter((cryptoCurrency) =>
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

  const handleClickStarBtn = () => {};

  return (
    <div>
      {!props.isWatchlistPage && (
        <TableOptions
          isTop10Page={props.isTop10Page}
          onChangeInput={handleChange}
          onChangeSelect={changeNumPerPage}
          value={search}
        />
      )}
      <Table data={data} onAddRemoveWatchist={handleClickStarBtn} />
    </div>
  );
};
