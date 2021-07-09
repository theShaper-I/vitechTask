import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { PatientContext } from '../App';
import PatientDB from './services/PatientDB';
import ContentHeader from './ContentHeader';

const EditPatient = () => {
    const history = useHistory();
    const { selectedPatient, setSelectedPatient, sidebarPatients, setSidebarPatients } = useContext(PatientContext);

    const editPatient = async () => {
        const patientService = new PatientDB();
        patientService.editPatient(selectedPatient);
        const patients = sidebarPatients.map(e => {
            if (e.id === selectedPatient.id) {
                return selectedPatient;
            } return e;
        });
        setSidebarPatients(patients);
        history.push(`/`);
    };

    const cancelChanges = () => {
        history.push(`/`);
    };

    return (
        <div>
            <ContentHeader />
            <div className='new-patient-wrapper'>
                <ul>
                    <li className='new-patient-list'>
                        <span>Firstname:</span>
                        <input className='sidebar-patients form-control new-patient-form'
                         type="text" defaultValue={selectedPatient.firstname}
                         onChange={(e) => setSelectedPatient({ ...selectedPatient, firstname: e.target.value })} />
                    </li>
          
                    <li className='new-patient-list'>
                        <span>Lastname:</span>
                        <input className='sidebar-patients form-control new-patient-form'
                         type="text" defaultValue={selectedPatient.lastname}
                         onChange={(e) => setSelectedPatient({ ...selectedPatient, lastname: e.target.value })} />
                    </li>

                    <li className='new-patient-list'>
                        <span>Age:</span>
                        <input className='sidebar-patients form-control new-patient-form' 
                        type="text" defaultValue={selectedPatient.age} 
                        onChange={(e) => setSelectedPatient({ ...selectedPatient, age: e.target.value })} />
                    </li>

                    <li className='new-patient-list'>
                        <span>Birth:</span>
                        <input className='sidebar-patients form-control new-patient-form' 
                        type="text" defaultValue={selectedPatient.birth} 
                        onChange={(e) => setSelectedPatient({ ...selectedPatient, birth: e.target.value })} />
                    </li>

                    <li className='new-patient-list'>
                        <span>Gender:</span>
                        <input className='sidebar-patients form-control new-patient-form' 
                        type="text" defaultValue={selectedPatient.gender} 
                        onChange={(e) => setSelectedPatient({ ...selectedPatient, gender: e.target.value })} />
                    </li>

                    <li className='new-patient-list'>
                        <span>Country:</span>
                        <input className='sidebar-patients form-control new-patient-form' 
                        type="text" defaultValue={selectedPatient.country} 
                        onChange={(e) => setSelectedPatient({ ...selectedPatient, country: e.target.value })} />
                    </li>

                    <li className='new-patient-list'>
                        <span>State</span>
                        <input className='sidebar-patients form-control new-patient-form' 
                        type="text" defaultValue={selectedPatient.state} 
                        onChange={(e) => setSelectedPatient({ ...selectedPatient, state: e.target.value })} />
                    </li>

                    <li className='new-patient-list'>
                        <span>Address:</span>
                        <input className='sidebar-patients form-control new-patient-form' 
                        type="text" defaultValue={selectedPatient.city} 
                        onChange={(e) => setSelectedPatient({ ...selectedPatient, city: e.target.value })} />
                    </li>
                </ul>
                <button onClick={editPatient} className='save-btn'>Save</button>
                <button onClick={cancelChanges} className='cancel-btn' >Cancel</button>
            </div>
        </div>

    );
}

export default EditPatient;