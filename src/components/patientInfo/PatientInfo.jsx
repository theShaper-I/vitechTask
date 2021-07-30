import React, { useContext, useState } from 'react';
import {PatientContext} from "../app/App";
import PatientService from '../../services/PatientService';
import PatientHeader from "../patientHeader/PatientHeader";
const moment = require('moment');


const PatientInfo = () => {
    const { selectedPatient, comments, setComments } = useContext(PatientContext);
    const [comment, setComment] = useState('');
    const moment = require('moment');

    const commentInput = React.createRef();
    const patientService = new PatientService();

    const addPatientComment = (e) => {
        const date = moment();
        setComments([...comments, { comment: commentInput.current.value, date: date }]);
        const newCommentForDatabase = { comment: commentInput.current.value, patient_id: selectedPatient.id, date: date };
        patientService.saveComment(newCommentForDatabase);
        e.preventDefault();
        setComment('');
    };

    const handleChange = (e) => setComment(e.target.value);

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
                        <input value={comment} ref={commentInput} onChange={handleChange} className='form-control' type="text"/>
                        <button onClick={addPatientComment} className='add-btn'>+</button>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default PatientInfo;
