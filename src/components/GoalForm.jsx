import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormHandling = () => {
    const navigator = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    goal: 'Muscle Gain',
    age: '',
    height: '',
    weight: '',
    status: 'Working Professional'
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = formValidate(userData);
    setError(newError);

    if (Object.keys(newError).length === 0) {
      console.log('Form submitted successfully!');
      alert('✅ Goal Saved!');
      setUserData({
        name: '',
        email: '',
        goal: 'Muscle Gain',
        weight: '',
        height: '',
        age: '',
        status: 'Working Professional'
      });
      navigator('/dashboard');
    } else {
      console.log('Form submission failed due to validation errors.');
    }
  };

  useEffect(() => {
    localStorage.setItem('fitGoals', JSON.stringify(userData));
  }, [userData]);

  const formValidate = (data) => {
    const errors = {};
    if (data.name.trim() === '') errors.name = 'Name is required';
    if (data.email.trim() === '') errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = 'Invalid email';
    if (data.age.trim() === '') errors.age = 'Age is required';
    if (data.height.trim() === '') errors.height = 'Height is required';
    if (data.weight.trim() === '') errors.weight = 'Weight is required';
    return errors;
  };

  return (
    <div className="container py-4">
      <h1 className="text-center text-primary">User Form</h1>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="card p-2 my-2">
          <input
            name="name"
            className="form-control"
            placeholder="Enter Your Name..."
            type="text"
            value={userData.name}
            onChange={handleChange}
          />
          {error.name && <span className="text-danger">{error.name}</span>}
        </div>

        {/* Email */}
        <div className="card p-2 my-2">
          <input
            name="email"
            className="form-control"
            placeholder="Enter Your Email..."
            type="email"
            value={userData.email}
            onChange={handleChange}
          />
          {error.email && <span className="text-danger">{error.email}</span>}
        </div>

        {/* Age */}
        <div className="card p-2 my-2">
          <input
            name="age"
            className="form-control"
            placeholder="Enter Your Age..."
            type="number"
            value={userData.age}
            onChange={handleChange}
          />
          {error.age && <span className="text-danger">{error.age}</span>}
        </div>

        {/* Height */}
        <div className="card p-2 my-2">
          <input
            name="height"
            className="form-control"
            placeholder="Enter Your Height...(cm)"
            type="number"
            value={userData.height}
            onChange={handleChange}
          />
          {error.height && <span className="text-danger">{error.height}</span>}
        </div>

        {/* Weight */}
        <div className="card p-2 my-2">
          <input
            name="weight"
            className="form-control"
            placeholder="Enter Your Weight...(kg)"
            type="number"
            value={userData.weight}
            onChange={handleChange}
          />
          {error.weight && <span className="text-danger">{error.weight}</span>}
        </div>

        {/* Goal */}
        <div className="card p-2 my-2">
          <select
            name="goal"
            className="form-control"
            value={userData.goal}
            onChange={handleChange}
          >
            <option value="Muscle Gain">Muscle Gain</option>
            <option value="Fat Loss">Fat Loss</option>
            <option value="General Fitness">General Fitness</option>
          </select>
        </div>

        {/* Status */}
        <div className="card p-2 my-2">
          <select
            name="status"
            className="form-control"
            value={userData.status}
            onChange={handleChange}
          >
            <option value="Working Professional">Working Professional</option>
            <option value="Student">Student</option>
            <option value="Senior Citizen">Senior Citizen</option>
          </select>
        </div>

        <button className="btn btn-primary w-100 mt-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormHandling;
