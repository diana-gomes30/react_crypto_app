import { Component } from 'react';
import { Navbar } from '../Navbar';
import { CryptoTable } from '../CryptoTable';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CryptoTable isTop10Page={false} />
      </div>
    );
  }
}

export default Home;
