// CalorieDisplay.js
import React from 'react';

const CalorieDisplay = ({ calorieIntake }) => {
  return (
    <div className="calorie-display-container">
      <h2>Daily Calorie Intake</h2>
      <p>Your estimated daily calorie intake is: {calorieIntake} calories</p>
    </div>
  );
};

export default CalorieDisplay;
