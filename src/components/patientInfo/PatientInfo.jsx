import React, { useContext, useState } from 'react';
import ContentHeader from '../patientHeader/PatientHeader';
import { PatientContext } from '../app/App';
const moment = require('moment');

const ContentInfo = () => {
    const { selectedPatient, comments, setComments } = useContext(PatientContext);
    const [comment, setComment] = useState('');

    const commentInput = React.createRef();

    const addPatientComment = (e: any) => {
        const date = moment();
        setComments([...comments, { comment: commentInput.current.value, date: date }]);
        e.preventDefault();
        setComment('');  
    };

    const handleChange = (e: any) => setComment(e.target.value);

    return (
        <div className='content'>

            <ContentHeader />

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
                            {comments.map(c =>                               
                                <li key={c.id}>
                                    <div className='new-comment'>
                                        <div>
                                            <strong>{moment(c.date).format('ll')}</strong>
                                        </div>
                                        <div>
                                            {c.comment}
                                        </div>
                                    </div>
                                </li>     
                            )}
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

export default ContentInfo;