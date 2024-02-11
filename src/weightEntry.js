// WeightEntry.js
import React, { useState } from 'react';
import CalorieDisplay from './calorieDisplay';
import ChestDay from './ChestDay';
import BackDay from './BackDay';
import LegDay from './LegDay';
import ShoulderDay from './ShoulderDay';
import ArmsDay from './ArmsDay';
import './weightEntry.css';

const WeightEntry = () => {
  const [weightInPounds, setWeightInPounds] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [heightInInches, setHeightInInches] = useState('');
  const [calorieIntake, setCalorieIntake] = useState(null);
  const [activityLevel, setActivityLevel] = useState('');
  const [weightLossGoal, setWeightLossGoal] = useState('');
  const [showWorkoutInfo, setShowWorkoutInfo] = useState(false);

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

  const handleActivityLevelChange = (event) => {
    setActivityLevel(event.target.value);
  };

  const handleWeightLossGoalChange = (event) => {
    setWeightLossGoal(event.target.value);
  };

  const handleCalculateCalories = () => {
    const basicCalorieIntake =
      66 + 6.23 * weightInPounds + 12.7 * heightInInches - 6.8 * age + (gender === 'male' ? 5 : -161);

    let activityMultiplier = 1.2; // Default to sedentary

    switch (activityLevel) {
      case 'sedentary':
        activityMultiplier = 1.2;
        break;
      case 'lightlyActive':
        activityMultiplier = 1.375;
        break;
      case 'moderatelyActive':
        activityMultiplier = 1.55;
        break;
      case 'veryActive':
        activityMultiplier = 1.725;
        break;
      case 'extremelyActive':
        activityMultiplier = 1.9;
        break;
      default:
        break;
    }

    const totalCalorieIntake = basicCalorieIntake * activityMultiplier;

    // Calculate adjusted calorie intake based on weight loss goal
    const weightLossCaloriesAdjustment = 500 * weightLossGoal;
    const adjustedCalorieIntake = totalCalorieIntake - weightLossCaloriesAdjustment;

    setCalorieIntake(adjustedCalorieIntake);
    setShowWorkoutInfo(true);
  };

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
            <option value="" disabled>
              Select Age
            </option>
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
        <label>
          Activity Level:
          <select value={activityLevel} onChange={handleActivityLevelChange} required>
            <option value="">Select Activity Level</option>
            <option value="sedentary">Sedentary (little or no exercise)</option>
            <option value="lightlyActive">Lightly active (1-3 days/week)</option>
            <option value="moderatelyActive">Moderately active (3-5 days/week)</option>
            <option value="veryActive">Very active (6-7 days/week)</option>
            <option value="extremelyActive">Extremely active (2x training)</option>
          </select>
        </label>
        <label>
          Weight Loss Goal (in pounds):
          <select value={weightLossGoal} onChange={handleWeightLossGoalChange} required>
            <option value="" disabled>
              Select Weight Loss Goal
            </option>
            <option value="0">Maintain Weight</option>
            <option value="0.5">Lose 0.5 pounds per week</option>
            <option value="1">Lose 1 pound per week</option>
            <option value="1.5">Lose 1.5 pounds per week</option>
            {/* Add more options as needed */}
          </select>
        </label>
        <button type="button" onClick={handleCalculateCalories}>
          Calculate Calories
        </button>
      </form>

      {calorieIntake !== null && <CalorieDisplay calorieIntake={calorieIntake} />}

      {showWorkoutInfo && (
        <div className="workout-splits">
          <ChestDay />
          <BackDay />
          <LegDay />
          <ShoulderDay />
          <ArmsDay />
        </div>
      )}
    </div>
  );
};

export default WeightEntry;
