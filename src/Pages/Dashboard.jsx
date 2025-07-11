import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const [goal,setGoal] = useState(null);

    useEffect(()=>{
        const savedGoal = localStorage.getItem('fitGoals');

        if(savedGoal){
            setGoal(JSON.parse(savedGoal));
        }
    },[]);
     if (!goal) {
    return <div className="container mt-5">No goal found. Please set one first.</div>;
  }
  return (
    <div className='container mt-5'>
        <h2 className='mb-4'>🎯 Your Fitness Goal</h2>
        <h4><strong>Name:</strong> {goal.name}</h4>
        <p><strong>Goal Type:</strong> {goal.goalType}</p>
        <p><strong>Target Duration:</strong> {goal.duration} days</p>
        <p><strong>Target Weight:</strong> {goal.targetWeight} kg</p>

    </div>
  )
}

export default Dashboard