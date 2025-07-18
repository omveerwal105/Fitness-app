import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [goal, setGoal] = useState(null);

  useEffect(() => {
    const savedGoal = localStorage.getItem('fitGoals');
    if (savedGoal) {
      setGoal(JSON.parse(savedGoal));
    }
  }, []);

  if (!goal) {
    return <div className="container mt-5">No goal found. Please set one first.</div>;
  }

  return (
    <div className='container mt-5'>
      <h2 className='mb-4'>🎯 Your Fitness Goal</h2>
      <h4><strong>Name:</strong> {goal.name}</h4>
      <p><strong>Email:</strong> {goal.email}</p>
      <p><strong>Goal:</strong> {goal.goal}</p>
      <p><strong>Status:</strong> {goal.status}</p>
      <p><strong>Age:</strong> {goal.age} years</p>
      <p><strong>Height:</strong> {goal.height} cm</p>
      <p><strong>Weight:</strong> {goal.weight} kg</p>

      <div className='mt-4'>
        <Link to="/workout-plan" className="btn btn-outline-primary">
          View Workout Plan
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
