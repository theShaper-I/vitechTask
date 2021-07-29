import './app.css';
import React, { createContext, useState } from 'react';
import Content from '../content/Content';
import PatientSidebar from '../patientsSidebar/PatientSidebar'
import { url } from '../../services/PatientService'

export const PatientContext = createContext([{}]);

function App() {
    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState([]);

    return (
      <div className='app'>
        <PatientContext.Provider
        value={{patients, setPatients, selectedPatient, setSelectedPatient}}>
              <PatientSidebar />
              <Content />
        </PatientContext.Provider>
      </div>
    );

}

export default App;
