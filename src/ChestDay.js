// ChestDay.js
import React, { useState } from 'react';

const ChestDay = () => {
  const [exercises, setExercises] = useState({
    BenchPress: false,
    InclineBenchPress: false,
    ChestFlies: false,

    // Add more chest exercises as needed
  });

  const handleCheckboxChange = (exercise) => {
    setExercises((prevExercises) => ({
      ...prevExercises,
      [exercise]: !prevExercises[exercise],
    }));
  };

  return (
    <div className="workout-day">
      <h3>Chest Day</h3>
      <ul>
        {Object.entries(exercises).map(([exerciseName, isChecked]) => (
          <li key={exerciseName} className="exercise-item">
            <label className="exercise-label">
              <input
                type="checkbox"
                id={`checkbox-${exerciseName}`} // Set unique ID for accessibility
                checked={isChecked}
                onChange={() => handleCheckboxChange(exerciseName)}
              />
              <span className="exercise-name" style={{ whiteSpace: 'nowrap' }}>
                {exerciseName.replace(/([a-z])([A-Z])/g, '$1 $2')}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChestDay;
