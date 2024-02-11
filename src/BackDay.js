// BackDay.js
import React, { useState } from 'react';

const BackDay = () => {
  const [exercises, setExercises] = useState({
    PullUps: false,
    LatPulldown: false,
    Rows: false,
    // Add more back exercises as needed
  });

  const handleCheckboxChange = (exercise) => {
    setExercises((prevExercises) => ({
      ...prevExercises,
      [exercise]: !prevExercises[exercise],
    }));
  };

  return (
    <div className="workout-day">
      <h3>Back Day</h3>
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

export default BackDay;
