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

    // ✅ Save to localStorage here only after validation passes
    localStorage.setItem('fitGoals', JSON.stringify(userData));

    navigator('/dashboard');

    // Clear form AFTER navigation
    setUserData({
      name: '',
      email: '',
      goal: 'Muscle Gain',
      weight: '',
      height: '',
      age: '',
      status: 'Working Professional'
    });
  } else {
    console.log('Form submission failed due to validation errors.');
  }
};



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
  <div className="container gym-form  d-flex justify-content-center">
  <div className="w-100" style={{ maxWidth: "600px" }}>
    <h1 className="text-center text-primary mb-4">🏋️ Set Your Fitness Goal</h1>

      <form
      onSubmit={handleSubmit}
      className="p-4 rounded shadow"
      style={{
        background: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(6px)",
        borderRadius: "12px"
      }}
    >
      {/* Name */}
      <div className="mb-3">
        <label className="form-label fw-semibold">Name</label>
        <input
          name="name"
          className="form-control"
          placeholder="Enter your name"
          type="text"
          value={userData.name}
          onChange={handleChange}
        />
        {error.name && <div className="text-danger">{error.name}</div>}
      </div>

      {/* Email */}
      <div className="mb-3">
        <label className="form-label fw-semibold">Email</label>
        <input
          name="email"
          className="form-control"
          placeholder="Enter your email"
          type="email"
          value={userData.email}
          onChange={handleChange}
        />
        {error.email && <div className="text-danger">{error.email}</div>}
      </div>

      {/* Age */}
      <div className="mb-3">
        <label className="form-label fw-semibold">Age</label>
        <input
          name="age"
          className="form-control"
          placeholder="Enter your age"
          type="number"
          value={userData.age}
          onChange={handleChange}
        />
        {error.age && <div className="text-danger">{error.age}</div>}
      </div>

      {/* Height */}
      <div className="mb-3">
        <label className="form-label fw-semibold">Height (cm)</label>
        <input
          name="height"
          className="form-control"
          placeholder="Enter your height"
          type="number"
          value={userData.height}
          onChange={handleChange}
        />
        {error.height && <div className="text-danger">{error.height}</div>}
      </div>

      {/* Weight */}
      <div className="mb-3">
        <label className="form-label fw-semibold">Weight (kg)</label>
        <input
          name="weight"
          className="form-control"
          placeholder="Enter your weight"
          type="number"
          value={userData.weight}
          onChange={handleChange}
        />
        {error.weight && <div className="text-danger">{error.weight}</div>}
      </div>

      {/* Goal */}
      <div className="mb-3">
        <label className="form-label fw-semibold">Fitness Goal</label>
        <select
          name="goal"
          className="form-select"
          value={userData.goal}
          onChange={handleChange}
        >
          <option value="Muscle Gain">Muscle Gain</option>
          <option value="Fat Loss">Fat Loss</option>
          <option value="General Fitness">General Fitness</option>
        </select>
      </div>

      {/* Status */}
      <div className="mb-4">
        <label className="form-label fw-semibold">You are a...</label>
        <select
          name="status"
          className="form-select"
          value={userData.status}
          onChange={handleChange}
        >
          <option value="Working Professional">Working Professional</option>
          <option value="Student">Student</option>
          <option value="Senior Citizen">Senior Citizen</option>
        </select>
      </div>

      <button className="btn btn-primary w-100" type="submit">
        ✅ Submit
      </button>
    </form>
  </div>
</div>

  );
};

export default FormHandling;
