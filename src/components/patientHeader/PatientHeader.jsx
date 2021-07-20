import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PatientContext } from '../app/App';
import PatientService from '../../services/PatientService';

const ContentHeader = () => {
    let { selectedPatient, setSidebarPatients, sidebarPatients } = useContext(PatientContext);
    const history = useHistory();

    const deletePatient = async () => {
        const patientService = new PatientService;
        const newSidebarPatients = sidebarPatients.filter(e => e.id != selectedPatient.id);
        setSidebarPatients(newSidebarPatients);
        patientService.deletePatient(selectedPatient.id);
        history.push('/');
    };

    const editPatient = () => {
        history.push('/patient/edit');
    };

    return (
        <div className='header'>
            <p className='firstname'>{selectedPatient.firstname}</p>
            <p className='lastname'>{selectedPatient.lastname}</p>
            {selectedPatient.age ? <p className='age'>{selectedPatient.age} years old</p>: null}

            <div> 
                <button onClick={editPatient} className='edit-btn'>Edit</button>
                <button onClick={deletePatient} className='delete-btn'>Delete</button>
            </div>
        </div>
    );
}

export default ContentHeader;