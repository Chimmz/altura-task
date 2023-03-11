import React from 'react';
import Home from './pages/home/Home';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/globals.css';
import './css/utils.css';
import './css/components.css';

function App() {
  return (
    <main className="main">
      {/* <nav className="container">NFT</nav> */}
      <Home />
    </main>
  );
}

export default App;
