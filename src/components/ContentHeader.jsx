import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PatientContext } from '../App';

const ContentHeader = () => {
    let { selectedPatient, setSidebarPatients, sidebarPatients } = useContext(PatientContext);
    const history = useHistory();

    const deletePatient = async () => {
        const newSidebarPatients = sidebarPatients.filter(el => el.id != selectedPatient.id);
        setSidebarPatients(newSidebarPatients);
        history.push('/');
    };

    const pushEditComponent = () => {
        history.push('/patient/edit');
    };

    return (
        <div className='header'>
            <p className='firstname'>{selectedPatient.firstname}</p>
            <p className='lastname'>{selectedPatient.lastname}</p>
            <p id='age'>{selectedPatient.age} years old</p>

            <div> 
                <button onClick={pushEditComponent} className='edit-btn'>Edit</button>
                <button onClick={deletePatient} className='delete-btn'>Delete</button>
            </div>
        </div>
    );
}

export default ContentHeader;