import React, { useState } from 'react';
import './AddNewPatientComponent.css';
import axios from 'axios';

const AddNewPatientComponent = () => {
  const [patientInfo, setPatienInfo] = useState({
    patientName: '',
    patientEmail: '',
    dateOfBirth: '',
  });

  const patientNameHandler = (event) => {
    setPatienInfo({
      ...patientInfo,
      patientName: event.target.value,
    });
  };

  const patientEmailHandler = (event) => {
    setPatienInfo({
      ...patientInfo,
      patientEmail: event.target.value,
    });
  };


  const dateOfBirthHandler = (event) => {
    setPatienInfo({
      ...patientInfo,
      dateOfBirth: event.target.value,
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:8082/api/v1/patient/`,patientInfo)
      .then(response => {
        if (response.status == 200)
        {
          alert(`Data of ${patientInfo.patientName} is added successfully`)
          window.location.href='/'
        }
      })
      .catch(error => {
        alert(`Status ${error.response.data.status} - ${error.response.data.message}`)
      })
  };

  const { patientName, patientEmail, dateOfBirth } = patientInfo;

  return (
    <form className='form-container' onSubmit={formSubmitHandler}>
      <h2>Adding a new patient</h2>

      <div className='form-group'>
        <label>Patient Name</label>
        <input
          type='text'
          placeholder='Enter the patient name'
          value={patientName}
          onChange={patientNameHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Patient Email</label>
        <input
          type='text'
          className='form-control'
          placeholder='Enter the patient email'
          value={patientEmail}
          onChange={patientEmailHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Date Of Birth</label>
        <input
          type='date'
          value={dateOfBirth}
          onChange={dateOfBirthHandler}
          required
        />
      </div>

      <div>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
};

export default AddNewPatientComponent;
