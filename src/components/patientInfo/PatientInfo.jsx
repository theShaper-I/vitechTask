import React, { useContext } from 'react';
import {PatientContext} from "../app/App";
import PatientHeader from "../patientHeader/PatientHeader";
import PatientService from '../../services/PatientService';
const moment = require('moment');


const PatientInfo = () => {
    const { selectedPatient, comments, setComments } = useContext(PatientContext);
    const moment = require('moment');

    const commentInput = React.createRef();
    const patientService = new PatientService();

    return (
        <div className='content'>

            <PatientHeader />

            <div className='info'>
                <div className='short-info'>
                    <table>
                        <tbody>
                        <tr>
                            <td>Date of Birth:</td>
                            <td>{selectedPatient.birth}</td>
                        </tr>
                        <tr>
                            <td>Gender:</td>
                            <td>{selectedPatient.gender}</td>
                        </tr>
                        <tr>
                            <td>Country:</td>
                            <td>{selectedPatient.country}</td>
                        </tr>
                        <tr>
                            <td>State:</td>
                            <td>{selectedPatient.state}</td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td>{selectedPatient.city}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className='comments'>
                    <div>
                        <p>
                            <h3 className='comments-text'>Comments:</h3>
                        </p>
                        <ul>

                        </ul>
                    </div>

                    <div className='create-commentInput'>
                        <input  ref={commentInput} className='form-control' type="text"/>
                        <button onClick={addPatientComment} className='add-btn'>+</button>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default PatientInfo;
