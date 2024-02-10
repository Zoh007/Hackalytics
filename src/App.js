// App.js
import React from 'react';
import WeightEntry from './weightEntry.js';
import myDataset from './datasets/myDataset.csv';
import './App.css';



const App = () => {
  return (
    <div>
      {/* Other components */}
      <WeightEntry />
    </div>
  );
};

export default App;

