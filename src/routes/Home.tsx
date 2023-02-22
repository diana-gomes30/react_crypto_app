import { useState } from 'react';
import useCoins from '../hooks/useCoins';
import { Table } from '../components/Table';
import { TableOptions } from '../components/TableOptions';
import { ChangeEvent } from 'react';
import { Options } from '../interfaces/coins';

const initialOptions: Options = {
  page: 1,
  numPerPage: 15,
  valueToSearch: '',
};

const Home = () => {
  const [search, setSearch] = useState('');
  const { cryptoCurrencies, setOptions, coins, setCoins } = useCoins({
    initialOptions,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleClick = (id: string) => {
    setCoins(id);
  };

  const changeNumPerPage = (event: ChangeEvent<HTMLSelectElement>) => {
    setOptions((prevValue) => ({
      ...prevValue,
      numPerPage: +event.target.value,
    }));
  };

  const searchByValue = () => {
    setOptions((prevValue) => ({
      ...prevValue,
      valueToSearch: search,
    }));
  };

  return (
    <div>
      <TableOptions
        onChangeInput={handleChange}
        onChangeSelect={changeNumPerPage}
        onSearchClick={searchByValue}
        value={search}
      />
      <Table data={cryptoCurrencies} coins={coins} onWatchlist={handleClick} />
    </div>
  );
};

export default Home;
