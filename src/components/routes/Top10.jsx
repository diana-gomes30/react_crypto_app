import useCoins from '../hooks/useCoins';
import { Table } from '../Table';

const initialOptions = {
  page: 1,
  numPerPage: 10,
};

const Top10 = () => {
  const { cryptoCurrencies, coins, setCoins } = useCoins(initialOptions);

  const handleClick = (id) => {
    setCoins(id);
  };

  return (
    <div>
      <h1>Top 10</h1>
      <Table data={cryptoCurrencies} coins={coins} onWatchlist={handleClick} />
    </div>
  );
};

export default Top10;
