import useWatchlist from '../hooks/useWatchlist';
import { Table } from '../Table';

const Watchlist = () => {
  const { cryptoCurrencies, coins, setCoins } = useWatchlist();

  const handleClick = (id) => {
    setCoins(id);
  };

  return (
    <div>
      <h1>WatchList</h1>
      <Table data={cryptoCurrencies} coins={coins} onWatchlist={handleClick} />
    </div>
  );
};

export default Watchlist;
