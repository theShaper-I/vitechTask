/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';
import PatientService from '../../services/PatientService';

export const PatientContext = createContext();

const PatientContextProvider = (props) => {
    const [selectedPatient, setSelectedPatient] = useState([]);
    const [patients, setPatients] = useState([{ name: "Username", age: 22 }]);

    async function patientsHasChanged() {
        const patientService = new PatientService();
        
        const loadedPatients = await patientService.getPatients();
        setPatients(loadedPatients);
    }

    return (
        <PatientContext.Provider value={{selectedPatient, setSelectedPatient, patients, patientsHasChanged}}>
            {props.children}
        </PatientContext.Provider>
    );
}

export default PatientContextProvider;