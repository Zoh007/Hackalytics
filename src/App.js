// App.js
import React from 'react';
import WeightEntry from './weightEntry.js';
import myDataset from './datasets/myDataset.csv';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>IgniteFit</h1>
        <p>Unleash the Power Within You</p>
      </header>

      <div className="content-container">
        {/* Other components */}
        <WeightEntry />
      </div>

      <footer className="app-footer">
        <p>Keep the Flame Burning! 🔥</p>
      </footer>
    </div>
  );
};

export default App;
