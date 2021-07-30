import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {PatientContext} from "../app/App";
import { url } from "../../services/PatientService";
const axios = require('axios');

const PatientSidebar = () => {
    const { sidebarPatients, setSidebarPatients, setSelectedPatient } = useContext(PatientContext);
    const history = useHistory();

    // TODO зробити так щоб паціенти відображались на сайдбарі без оновлення
    const getArrayOfPatients = async (patientsPromise) => {
        let arr = [];
        await patientsPromise.then((response) => {
            const patients = response.data;
            for (let patientID in patients) {
                arr.push({
                    id: patientID,
                    firstname: patients[patientID].firstname,
                    lastname: patients[patientID].lastname,
                    birth: patients[patientID].birth,
                    age: patients[patientID].age,
                    gender: patients[patientID].gender,
                    country: patients[patientID].country,
                    state: patients[patientID].state,
                    city: patients[patientID].city,
                    comments: patients[patientID].comments
                });
            }
        })
        return arr;
    }

    function getPromisePatients(url) {
        return axios.get(url);
    }

    const setSelectedPatientOnClick = (patient) => {
        setSelectedPatient(patient);

        history.push(`/patient/${patient.id}`)
    }

    useEffect(() => {
        getArrayOfPatients(getPromisePatients(`${url}/patientLoad.json`))
            .then((result) => {
                setSidebarPatients(result)
            })

    }, [])

    return sidebarPatients && (
        <div className='sidebar'>
            <div className='search'>
                <input type="text" placeholder='Search' className='search-form' />
                <a href="/patient/new"><button className='new-btn'>New patient</button></a>
            </div>

            <div className='list'>
                <ul>
                    {sidebarPatients.map((patient) => {
                        return (
                            <li key={patient.id} id={patient.id} onClick={() => setSelectedPatientOnClick(patient)}>
                                <div className='patient'>
                                    {patient.firstname}{' '}{patient.lastname}
                                </div>
                                <div className='age'>
                                    {patient.birth}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default PatientSidebar;