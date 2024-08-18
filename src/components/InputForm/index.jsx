import React, { useState } from 'react';
import './index.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const InputForm = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    name: '',
    email: '',
    address: '',
    organization: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    // Add validation checks
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Valid email is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.organization) newErrors.organization = 'Organization is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit data to backend
    axios.post('http://localhost:3000/api/customers', formData)
      .then(response => {
        toast.success('Data submitted successfully');
        setFormData({
          phoneNumber: '',
          name: '',
          email: '',
          address: '',
          organization: '',
        });
        setErrors({});
        navigate('/customers')
      })
      .catch(error => {
        toast.error('Error submitting data');
        console.error('Error submitting data:', error);
      });
  };

  return (
    <>
      <h1>Customer Data Form</h1>
      <form className="input-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="organization">Current Organization:</label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            />
          {errors.organization && <p className="error">{errors.organization}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default InputForm;
