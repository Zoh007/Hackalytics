// WeightEntry.js
import React, { useState } from 'react';

const WeightEntry = () => {
  const [weightInPounds, setWeightInPounds] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleWeightChange = (event) => {
    setWeightInPounds(event.target.value);
  };

  const handleWeightSubmit = (event) => {
    event.preventDefault();
    console.log('Entered weight in pounds:', weightInPounds);
    // You can add logic to store or process the entered weight data here
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <h2>Enter Your Weight</h2>
      <form onSubmit={handleWeightSubmit}>
        <label>
          Weight (in pounds):
          <input
            type="number"
            value={weightInPounds}
            onChange={handleWeightChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>
        <label>
          Dark Mode:
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
        </label>
      </div>
    </div>
  );
};

export default WeightEntry;
