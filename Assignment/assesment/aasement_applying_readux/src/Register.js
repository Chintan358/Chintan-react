import React, { useState } from 'react';
import './Register.css'
import { Navigate } from 'react-router-dom';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    gender: '',
    password: '',
    confirmPassword: '',
    hobbies: '',
    phoneNumber: '',
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = 'Enter valide name';
    if (!formData.city) errors.city = 'Enter valide';
    if (!formData.gender) errors.gender = 'Gender is required';
    if (!formData.password) errors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.phoneNumber) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Phone number is invalid';
    }
    if (!formData.image) errors.image = 'Image is required';
    return errors;
  };

  const handleSub= (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form data submitted:', formData);
    Navigate('/Login');
    }else{
      console.log("validtion error:",validationErrors);
    }
  };

  return (
    <form onSubmit={handleSub}>
      <div>
        <h3>SignUpForm</h3>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>City</label>
        <select name="city" value={formData.city} onChange={handleChange}>
          <option value="">--Select City --</option>
          <option value="suart">surat</option>
          <option value="baroda">baroda</option>
          <option value="bhavnger">bhavnger</option>
        </select>
        {errors.city && <p>{errors.city}</p>}
      </div>
      <div>
        <label>Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.gender && <p>{errors.gender}</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
      </div>
      <div>
      <label>Hobbies</label>

            <label>
              <input
                type="checkbox"
                name="hobbies"
                value="reading"
                checked={formData.hobbies.includes('reading')}
                onChange={handleChange}
              />
              Reading
            </label>
            <label>
              <input
                type="checkbox"
                name="hobbies"
                value="sports"
                checked={formData.hobbies.includes('sports')}
                onChange={handleChange}
              />
              Sports
            </label>
          </div>
      
           
         
      <div>
        <label>Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
      </div>
      <div>
        <label>Image Upload</label>
        <input type="file" name="image" onChange={handleImageChange} />
        {errors.image && <p>{errors.image}</p>}
        {preview && <img src={preview} alt="Preview" width="100" />}
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
