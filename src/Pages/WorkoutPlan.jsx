import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutPlan = () => {
  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <h2 className="text-center text-primary mb-4">💪 Your Workout Plan</h2>

        <div className="mb-3">
          <h4 className="text-success">Push Day</h4>
          <ul>
            <li>🏋️‍♂️ Bench Press - 4 sets x 8 reps</li>
            <li>🎯 Overhead Press - 3 sets x 10 reps</li>
            <li>💥 Triceps Pushdown - 3 sets x 12 reps</li>
            <li>🔥 Lateral Raises - 3 sets x 15 reps</li>
          </ul>
        </div>

        <div className="text-center mt-4">
          <Link to="/dashboard" className="btn btn-secondary">
            🔙 Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlan;
