import React, { useContext } from 'react';
import { PatientContext } from '../app/App';

const Sidebar = () => {
    const { setSelectedPatient, setComments, sidebarPatients } = useContext(PatientContext);

    const setNewSelectedPatient = async (patient) => {     
        setSelectedPatient(patient);
        let newSelectedPatientComments = patient.comments;

        if (newSelectedPatientComments === undefined) {
            newSelectedPatientComments = [];
        }

        let selectedUserComment = [];   
        newSelectedPatientComments.forEach(c => {
            selectedUserComment = [...selectedUserComment, { id: c.id, comment: c.comment }];
        });

        setComments(selectedUserComment);
    };

    return (
        <div className='sidebar'>
            <div className='search'>
                <input type="text" placeholder='Search' className='search-form' />
                <a href="/patient/new"><button className='new-btn'>New patient</button></a>
            </div>

            <div className='list'>
                <ul>
                    {sidebarPatients.map(p =>
                        <li key={p.id} id={p.id} onClick={() => setNewSelectedPatient(p)}>
                            <div id={p.id} className='patient'>
                                {p.firstname}{' '}{p.lastname}
                            </div>
                            <div id={p.id} className='age'>
                                {p.birth}
                            </div>
                        </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;