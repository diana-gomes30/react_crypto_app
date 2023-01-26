import { Component } from 'react';
import { CryptoTable } from '../CryptoTable';
import { Navbar } from '../Navbar';

class Watchlist extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>WatchList</h1>
        <CryptoTable isWatchlistPage={true} />
      </div>
    );
  }
}

export default Watchlist;
