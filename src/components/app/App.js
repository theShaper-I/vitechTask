import './app.css';
import React, { createContext, useState } from 'react';
import Content from '../content/Content';
import PatientSidebar from '../patientsSidebar/PatientSidebar'

export const PatientContext = createContext([{}]);

function App() {
    const [patients, setPatients] = useState([]); // State for adding patients
    const [sidebarPatients, setSidebarPatients] = useState([]); // State for adding patients to sidebar
    const [selectedPatient, setSelectedPatient] = useState([]); // State for show patients info in PatientInfo.jsx

    return (
      <div className='app'>
        <PatientContext.Provider
        value={{patients, setPatients, sidebarPatients, setSidebarPatients, selectedPatient, setSelectedPatient}}>
              <PatientSidebar />
              <Content />
        </PatientContext.Provider>
      </div>
    );

}

export default App;
