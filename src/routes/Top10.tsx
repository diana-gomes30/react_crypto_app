import useCoins from '../hooks/useCoins';
import { Table } from '../components/Table';
import { Options } from '../interfaces/coins';

const initialOptions: Options = {
  page: 1,
  numPerPage: 10,
};

const Top10 = () => {
  const { cryptoCurrencies, coins, setCoins } = useCoins({ initialOptions });

  const handleClick = (id: string) => {
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
