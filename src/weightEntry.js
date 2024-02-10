// WeightEntry.js
import React, { useState } from 'react';
import CalorieDisplay from './calorieDisplay';
import './weightEntry.css'; // Import additional styles

const WeightEntry = () => {
  const [weightInPounds, setWeightInPounds] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState(''); // You can use a dropdown or radio buttons for gender
  const [heightInInches, setHeightInInches] = useState('');
  const [calorieIntake, setCalorieIntake] = useState(null);

  const handleWeightChange = (event) => {
    setWeightInPounds(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeightInInches(event.target.value);
  };

  const handleCalculateCalories = () => {
    // Implement your calorie calculation logic here based on entered information
    // For simplicity, let's use a basic formula (this is just an example, not accurate)
    const basicCalorieIntake = 10 * weightInPounds + 6.25 * heightInInches - 5 * age + (gender === 'male' ? 5 : -161);
    setCalorieIntake(basicCalorieIntake);
  };

  // Generate options for the age dropdown (e.g., from 18 to 99)
  const ageOptions = Array.from({ length: 82 }, (_, index) => 18 + index);

  return (
    <div className="weight-entry-container">
      <h2>Calculate Daily Calorie Intake</h2>
      <form>
        <label>
          Weight (in pounds):
          <input
            type="number"
            value={weightInPounds}
            onChange={handleWeightChange}
            placeholder="e.g., 150"
            required
          />
        </label>
        <label>
          Age:
          <select value={age} onChange={handleAgeChange} required>
            <option value="" disabled>Select Age</option>
            {ageOptions.map((ageOption) => (
              <option key={ageOption} value={ageOption}>
                {ageOption}
              </option>
            ))}
          </select>
        </label>
        <label>
          Gender:
          <select value={gender} onChange={handleGenderChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label>
          Height (in inches):
          <input
            type="number"
            value={heightInInches}
            onChange={handleHeightChange}
            placeholder="e.g., 65"
            required
          />
        </label>
        <button type="button" onClick={handleCalculateCalories}>
          Calculate Calories
        </button>
      </form>
      {calorieIntake !== null && <CalorieDisplay calorieIntake={calorieIntake} />}
    </div>
  );
};

export default WeightEntry;
