import './App.css';
import React, { createContext, useEffect, useState } from 'react';
import Content from '../content/Content';
import Sidebar from '../patinetSidebar/PatientsSidebar';
import PatientService from '../../services/PatientService';

export const PatientContext = createContext();

function App() {
  const [patients, setPatients] = useState([]);
  const [comments, setComments] = useState([]);
  const [sidebarPatients, setSidebarPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState([]);

  async function patientsHasChanged() {
    const patientService = new PatientService();
    const loadedPatients = await patientService.getPatients();
    let newSelectedPatientComments = [];
    let selectedUserComment = [];


    const newSelectedPatient = {
      id: loadedPatients[0].id,
      firstname: loadedPatients[0].firstname,
      lastname: loadedPatients[0].lastname,
      age: loadedPatients[0].age,
      birth: loadedPatients[0].birth,
      gender: loadedPatients[0].gender,
      country: loadedPatients[0].country,
      state: loadedPatients[0].state,
      city: loadedPatients[0].city,
      currentComments: loadedPatients[0].comments
  }

    newSelectedPatientComments = newSelectedPatient.currentComments;
    newSelectedPatientComments.forEach(c => {
      selectedUserComment = [
        ...selectedUserComment,
        { id: c.id, comment: c.comment, date: c.date }
      ];
    });

    setPatients(loadedPatients);
    setSidebarPatients(loadedPatients);
    setSelectedPatient(newSelectedPatient);
    setComments(selectedUserComment);
  }

  useEffect(() => {
    patientsHasChanged();
  }, []);

  return (
    <div className='app'>
      <PatientContext.Provider value={{selectedPatient, setSelectedPatient, patients, setPatients, patientsHasChanged,
                                       comments, setComments, sidebarPatients, setSidebarPatients }}>
        <Sidebar />
        <Content />
      </PatientContext.Provider>
    </div>
  );
}

export default App;
