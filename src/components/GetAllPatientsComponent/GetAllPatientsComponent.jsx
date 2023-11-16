import React, { useState, useEffect } from 'react'
import BookComponent from './PatientComponent'
import './GetAllPatientsComponent.css'
import axios from 'axios'

const GetAllPatientsComponent = () => {

    const [Patients, setPatients] = useState([])

    

    useEffect(() => {
        axios
          .get(`http://localhost:8082/api/v1/patient/`)
          .then(response => setEmployees(response.data))
          .catch(error => {
            alert(`Status ${error.response.data.status} - ${error.response.data.message}`)
          })
    }, [])

  return (
    <div className='patients'>
        {Patients.map((patient, index)=>(
            <BookComponent key={index} patient={patient}/>
        ))}
    </div>
  )
}

export default GetAllPatientsComponent