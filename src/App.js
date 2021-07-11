import './App.css';
import React, { createContext, useEffect, useState } from 'react';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

export const PatientContext = createContext();

function App() {
  const [patients, setPatients] = useState([]);
  const [comments, setComments] = useState([]);
  const [sidebarPatients, setSidebarPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState([]);

  async function patientsHasChanged() {

    let newSelectedPatientComments = [];
    let selectedUserComment = [];

    newSelectedPatientComments.forEach(c => {
      selectedUserComment = [...selectedUserComment, { id: c.id, comment: c.comment, date: c.date }];
    });

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
