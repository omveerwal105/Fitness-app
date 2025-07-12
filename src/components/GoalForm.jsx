import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const GoalForm = () => {
    const [goalData, setGoalData] = useState({
        name: '',
        goalType: '',
        duration: '',
        targetWeight: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGoalData({
            ...goalData,
            [name]: value,
        });

    };
    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem('fitGoals', JSON.stringify(goalData));

        setTimeout(()=>{
            navigate('/dashboard');

        },100);
        



        console.log('Saved to local Storage', goalData);

        setGoalData({
            name: '',
            goalType: '',
            duration: '',
            targetWeight: ''
        });

    }
    return (
        <div className='container'>
            <form className='p-4 border rounded shadow ' onSubmit={handleSubmit}>
                <h2 className='mb-3'>Set Your Fitness Goal</h2>

                <input
                    className='form-control mb-3'
                    type='text'
                    name='name'
                    placeholder='Enter Your Name'
                    value={goalData.name}
                    onChange={handleChange}
                />

                <select
                    className='form-control mb-3'
                    name='goalType'
                    value={goalData.goalType}
                    onChange={handleChange}
                >
                    <option value="">Select Goal</option>
                    <option value="lose">Lose Weight</option>
                    <option value="gain">Gain Muscle</option>
                    <option value="maintain">Stay Fit</option>
                </select>

                <input
                    className='form-control mb-3'
                    name='duration'
                    type='number'
                    placeholder='Duration (in days)'
                    value={goalData.duration}
                    onChange={handleChange}
                />

                <input
                    className='form-control mb-3'
                    name='targetWeight'
                    type='number'
                    placeholder='Weight (in kg)'
                    value={goalData.targetWeight}
                    onChange={handleChange}
                />
                <button className='btn btn-primary' type='submit'>Save Goal</button>

            </form>
        </div>
    )
}

export default GoalForm