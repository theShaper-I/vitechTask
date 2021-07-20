import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import PatientService from '../../services/PatientService';
import { PatientContext } from '../app/App';
import PatientHeader from '../patientHeader/PatientHeader';

const NewPatient = () => {
    const { sidebarPatients, setSidebarPatients } = useContext(PatientContext);
    const [patient, setPatient] = useState({});
    const history = useHistory();

    const savePatient = async () => {
        const newPatientService = new PatientService();
        newPatientService.savePatient(patient);
        setSidebarPatients([...sidebarPatients, patient]);
        history.push(`/`);
    };

    const cancelInfo = () => {
        history.push(`/`);
    };

    return (
        <div>
            <PatientHeader />
            <div className='new-patient-wrapper'>
                <ul>
                    <li className='new-patient-list'>
                        <span>Firstname:</span>
                        <input required className='sidebar-patients form-control' 
                        type="text" value={patient.firstname} 
                        onChange={(e) => setPatient({ ...patient, firstname: e.target.value })} />
                    </li>

                    <li className='new-patient-list'>
                        <span>Lastname:</span>
                        <input required className='sidebar-patients form-control' 
                        type="text" value={patient.lastname} 
                        onChange={(e) => setPatient({ ...patient, lastname: e.target.value })} />
                    </li>

                    <li className='new-patient-list'>
                        <span>Birth:</span>
                        <input required className='sidebar-patients form-control' 
                        type="text" value={patient.birth} 
                        onChange={(e) => setPatient({ ...patient, birth: e.target.value })} />
                    </li>

                    <li className='new-patient-list'>
                        <span>Age:</span>
                        <input className='sidebar-patients form-control' 
                        type="text" value={patient.age} 
                        onChange={(e) => setPatient({ ...patient, age: e.target.value })} />
                    </li>

                    <li className='new-patient-list'>
                        <span>Gender:</span>
                        <input className='sidebar-patients form-control' 
                        type="text" value={patient.gender} 
                        onChange={(e) => setPatient({ ...patient, gender: e.target.value })} />
                    </li>

                    <li className='new-patient-list'>
                        <span>Country:</span>
                        <input className='sidebar-patients form-control' 
                        type="text" value={patient.country} 
                        onChange={(e) => setPatient({ ...patient, country: e.target.value })} />
                    </li>

                    <li className='new-patient-list'>
                        <span>State:</span>
                        <input className='sidebar-patients form-control' 
                        type="text" value={patient.state} 
                        onChange={(e) => setPatient({ ...patient, state: e.target.value })} />
                    </li>

                    <li className='new-patient-list'>
                        <span>City:</span>
                        <input className='sidebar-patients form-control' 
                        type="text" value={patient.city} 
                        onChange={(e) => setPatient({ ...patient, city: e.target.value })} />
                    </li>
                </ul>
                <button onClick={savePatient} className='save-btn'>Save</button>
                <button onClick={cancelInfo} className='cancel-btn'>Cancel</button>
            </div>
        </div>
    );
}

export default NewPatient;


