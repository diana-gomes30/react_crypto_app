import { Component } from 'react';
import { Navbar } from '../Navbar';
import { SearchInput } from '../SearchInput';
import { CryptoTable } from '../CryptoTable';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SearchInput />
        <CryptoTable />
      </div>
    );
  }
}

export default Home;
