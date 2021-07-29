import React from 'react';
import { useHistory } from 'react-router-dom';
import PatientService, { url } from "../../services/PatientService";

const PatientSidebar = () => {
    const history = useHistory();

    const patientService = new PatientService();

    return (
        <div className='sidebar'>
            <div className='search'>
                <input type="text" placeholder='Search' className='search-form' />
                <a href="/patient/new"><button className='new-btn'>New patient</button></a>
            </div>

            <div className='list'>
                <ul>
                    {
                        patientService.showPatients(patientService.getPromisePatients(`${url}/patientLoad.json`))
                    }
                </ul>
            </div>
        </div>
    );
}

export default PatientSidebar;