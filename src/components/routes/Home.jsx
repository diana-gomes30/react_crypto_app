import { Component } from 'react';
import { Navbar } from '../Navbar';
import { CryptoTable } from '../CryptoTable';

const staticList = [
  {
    position: 1,
    coin: 'Bitcoin',
    price: 20912.68,
    hour: 0.5,
    day: -1.4,
    week: 19.9,
    dayVolume: 38520931183,
    mktCap: 403117273342,
  },
  {
    position: 2,
    coin: 'Ethereum',
    price: 1544.38,
    hour: -0.0,
    day: -1.9,
    week: 15.6,
    dayVolume: 11593467934,
    mktCap: 186248496128,
  },
];

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CryptoTable cryptoCurrencies={staticList} />
      </div>
    );
  }
}

export default Home;
