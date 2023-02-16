import { ItemTable } from './ItemTable';

export const Table = ({ data, coins, onWatchlist }) => {
  return (
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
            ?.sort((a, b) => (a.market_cap_rank > b.market_cap_rank ? 1 : -1))
            .map((coin) => (
              <ItemTable
                key={coin.id}
                coin={coin}
                isSelected={coins?.includes(coin.id)}
                onWatchlist={onWatchlist}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};
