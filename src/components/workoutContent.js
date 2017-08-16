import React from 'react';
import data from '../data/workouts';

const WorkoutContent = () => {
  const dataHTML = data.data.map(info => {
    return (
      <div key={info.day}>
        <div id={`day${info.day}`} />
        <h2>
          Day {info.day}
        </h2>
        {info.workouts.map(workout =>
          <div key={info.day + '' + workout.type}>
            <h4>
              {workout.type}
            </h4>
            <ul>
              {workout.routine.map((obj, index) => {
                return (
                  <li key={index}>
                    {workout.routine[index]}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  });
  return (
    <div>
      {dataHTML}
    </div>
  );
};

export default WorkoutContent;
