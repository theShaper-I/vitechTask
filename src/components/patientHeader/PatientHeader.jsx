import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PatientContext } from '../app/App';
import PatientService from '../../services/PatientService';

const PatientHeader = () => {
    let { selectedPatient, setSidebarPatients, sidebarPatients } = useContext(PatientContext);
    const history = useHistory();

    const patientService = new PatientService;

    const editPatientButtonPush = () => {
        history.push('/patient/edit');
    };

    const deletePatientButtonPush = () => {
        const newSidebarPatients = sidebarPatients.filters(el => el.id != selectedPatient.id);
        setSidebarPatients(newSidebarPatients)
        patientService.deletePatient(selectedPatient.id);
        history.push('/patient')
    }


    return (
        <div className='header'>
            <p className='firstname'>{selectedPatient.firstname}</p>
            <p className='lastname'>{selectedPatient.lastname}</p>
            {selectedPatient.age ? <p className='age'>{selectedPatient.age} years old</p>: null}

            <div>
                <button onClick={editPatientButtonPush} className='edit-btn'>Edit</button>
                <button onClick={deletePatientButtonPush} className='delete-btn'>Delete</button>
            </div>
        </div>
    );
}

export default PatientHeader;