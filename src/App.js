import React, {Component} from 'react';
import './App.css';
import CryptoGridLayout from './CryptoGridLayout';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Crypto Dash</h1>
        </header>

        <CryptoGridLayout></CryptoGridLayout>

      </div>

    );
  }
}

export default App;
