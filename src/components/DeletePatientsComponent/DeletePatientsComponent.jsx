import React, { useState } from 'react';
import './DeletePatientsComponent.css';
import axios from 'axios';

const DeletePatientsComponent = () => {
  const [patientID, setPatientID] = useState('')
  const [patientInfo, setPatientInfo] = useState({
    patientName: '',
    patientEmail: '',
    dateOfBirth: '',
  });

  const patientIDHandler = (event) => {
    setPatientID(event.target.value)
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
      .delete(`http://localhost:8082/api/v1/patient/${patientID}`)
      .then(response => {
        if (response.status == 200)
        {
          alert(`Data of ${patientInfo.patientName} is deleted successfully`)
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
      <h2>Deleting Patient</h2>

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
          readOnly
        />
      </div>

      <div className="form-group">
        <label>Patient Email</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter the patient email"
          value={patientEmail}
          readOnly
        />
      </div>

      <div className="form-group">
        <label>Date of Birth</label>
        <input
          type="date"
          value={dateOfBirth}
          readOnly
        />
      </div>

      <div>
        <button type="submit">Delete</button>
      </div>
    </form>
  );
};

export default DeletePatientsComponent;
