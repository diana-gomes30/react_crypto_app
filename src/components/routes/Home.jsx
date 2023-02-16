import { useState } from 'react';
import useCoins from '../hooks/useCoins';
import { Table } from '../Table';
import { TableOptions } from '../TableOptions';

const initialOptions = {
  page: 1,
  numPerPage: 15,
};

const Home = () => {
  const [search, setSearch] = useState('');
  const { cryptoCurrencies, setOptions, coins, setCoins } =
    useCoins(initialOptions);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleClick = (id) => {
    setCoins(id);
  };

  const changeNumPerPage = (event) => {
    setOptions((prevValue) => ({
      ...prevValue,
      numPerPage: +event.target.value,
    }));
  };

  /*const data = props.isWatchlistPage
    ? []
    : cryptoCurrencies.filter((cryptoCurrency) =>
        cryptoCurrency.name.toLowerCase().includes(search.toLowerCase())
      );*/

  return (
    <div>
      <TableOptions
        onChangeInput={handleChange}
        onChangeSelect={changeNumPerPage}
        value={search}
      />
      <Table data={cryptoCurrencies} coins={coins} onWatchlist={handleClick} />
    </div>
  );
};

export default Home;
