import { Component } from 'react';
import { CryptoTable } from '../CryptoTable';
import Navbar from '../Navbar';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CryptoTable />
      </div>
    );
  }
}

export default Home;
