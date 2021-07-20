/* eslint-disable no-unused-vars */
import axios from 'axios';

const url = 'https://vitechtask-default-rtdb.europe-west1.firebasedatabase.app';

export default class PatientService {

    savePatient(patient) {
        axios.post(`${url}/patientLoad.json`, {
            firstname: patient.firstname,
            lastname: patient.lastname,
            age: patient.age,
            birth: patient.birth,
            gender: patient.gender,
            country: patient.country,
            state: patient.state,
            city: patient.city
        })
    }

    getPatients() {
        return new Promise((resolve, reject) => {
            axios.get(`${url}/patientLoad.json`)
                .then((res) => {
                    let patientsDB = res.data;
                    let patients = [];

                    for (let i = 0; i < patientsDB.length; i++) {
                        patients = [...patients,
                        {
                            id: patientsDB[i].id,
                            firstname: patientsDB[i].firstname,
                            lastname: patientsDB[i].lastname,
                            age: patientsDB[i].age,
                            birth: patientsDB[i].birth,
                            gender: patientsDB[i].gender,
                            country: patientsDB[i].country,
                            state: patientsDB[i].state,
                            city: patientsDB[i].city,
                            comments: patientsDB[i].comments
                        }];
                    }

                    resolve(patients);
                });
        });
    }

    editPatient(editedPatientInfo) {
        axios.post(`${url}/patientLoad.json`, editedPatientInfo);
    }

    deletePatient(patientId) {
        axios.delete(`${url}/patientLoad/${patientId}.json`);
    }

    getComments() {
        return new Promise((resolve, reject) => {
            axios.get(`${url}/commentsLoad.json`)
                .then((res) => {
                    let comments = res.data;
                    resolve(comments);
                });
        });
    }

    deleteComment(commentId) {
        axios.delete(`${url}/commentsLoad/${commentId}.json`);
    }

    saveComment(commentForDB) {
        axios.post(`${url}/createComment.json`, commentForDB);
    }
}


