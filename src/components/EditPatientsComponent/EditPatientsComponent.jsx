import React, { useState } from 'react';
import './EditPatientsComponent.css';
import axios from 'axios';

const EditPatientsComponent = () => {
  const [patientID, setPatientID] = useState('')
  const [patientInfo, setPatientInfo] = useState({
    patientName: '',
    patientEmail: '',
    dateOfBirth: '',
  });

  const patientNameHandler = (event) => {
    setPatientInfo({
      ...patientInfo,
      patientName: event.target.value
    });
  };

  const patientEmailHandler = (event) => {
    setPatientInfo({
      ...patientInfo,
      patientEmail: event.target.value
    });
  };

  const patientIDHandler = (event) => {
    setPatientID(event.target.value)
  };

  const dateOfBirthHandler = (event) => {
    setPatientInfo({
      ...patientInfo,
      dateOfBirth: event.target.value
    });
  };

  const patientIDValidator = (event) => {
    event.preventDefault()
    axios
      .get(`http://localhost:8082/api/v1/patient/${patientID}`)
      .then(response => setPatientInfo(response.data))
      .catch(error => {
        alert(`Status ${error.response.data.status} - ${error.response.data.message}`)
      })
    
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    axios
      .put(`http://localhost:8082/api/v1/patient/${patientID}`, patientInfo)
      .then(response => {
        if (response.status == 200)
        {
          alert(`Data of ${patientInfo.patientName} is updated successfully`)
          window.location.href="/"
        }
      })
      .catch(error => {
        alert(`Status ${error.response.data.status} - ${error.response.data.message}`)
      })
  };

  const { patientName, patientEmail, dateOfBirth } = patientInfo;

  return (
    <form className="form-container" onSubmit={formSubmitHandler}>
      <h2>Updating Patient</h2>

      <div className="form-group">
        <label>Patient ID</label>
        <input
          type="text"
          placeholder="Give the Patient ID"
          value={patientID}
          onChange={patientIDHandler}
          required
        />
      </div>
      <div>
        <button onClick={patientIDValidator}>Check</button>
      </div>

      <div className="form-group">
        <label>Patient Name</label>
        <input
          type="text"
          placeholder="Enter the patient name"
          value={patientName}
          onChange={patientNameHandler}
          required
        />
      </div>

      <div className="form-group">
        <label>Patient Email</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter the patient email"
          value={patientEmail}
          onChange={patientEmailHandler}
          required
        />
      </div>

      <div className="form-group">
        <label>Date of Birth</label>
        <input
          type="date"
          value={dateOfBirth}
          onChange={dateOfBirthHandler}
          required
        />
      </div>

      <div>
        <button type="submit">Update</button>
      </div>
    </form>
  );
};

export default EditPatientsComponent;
