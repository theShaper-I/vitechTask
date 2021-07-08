import './App.css';
import React, { createContext, useEffect, useState } from 'react';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import PatientService from './components/services/PatientDB';

export const PatientContext = createContext([{}]);

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

    newSelectedPatientComments.forEach(c => {
      selectedUserComment = [...selectedUserComment, { id: c.id, comment: c.comment, date: c.date }];
    });

    setPatients(loadedPatients);
    setSidebarPatients(loadedPatients);

    setComments(selectedUserComment);
  }

  useEffect(() => {
    patientsHasChanged();
  }, []);

  return (
    <div className='app'>
      <PatientContext.Provider value={{
        selectedPatient, setSelectedPatient, patients, setPatients, patientsHasChanged, comments, setComments, sidebarPatients, setSidebarPatients }}>
        <Sidebar />
        <Content />
      </PatientContext.Provider>
    </div>
  );
}

export default App;
