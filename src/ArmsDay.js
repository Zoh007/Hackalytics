// ArmsDay.js
import React, { useState } from 'react';

const ArmsDay = () => {
  const [exercises, setExercises] = useState({
    bicepsCurls: false,
    tricepPulldown: false,
    hammerCurls: false,
    spiderCurls: false,
    // Add more arm exercises as needed
  });

  const handleCheckboxChange = (exercise) => {
    setExercises((prevExercises) => ({
      ...prevExercises,
      [exercise]: !prevExercises[exercise],
    }));
  };

  return (
    <div className="workout-day">
      <h3>Arms Day</h3>
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
              <span className="exercise-name">{exerciseName}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArmsDay;
