import { Component } from 'react';
import { CryptoTable } from '../CryptoTable';
import { Navbar } from '../Navbar';

class Top10 extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Top 10</h1>
        <CryptoTable isTop10Page={true} />
      </div>
    );
  }
}

export default Top10;
