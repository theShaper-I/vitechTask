import axios from 'axios';

const url = 'http://localhost:8003';

export default class PatientDB {

    savePatient(patient) {
        axios.post(`${url}/patientLoad`, {
            firstname: patient.firstname,
            lastname: patient.lastname,
            age: patient.age,
            birth: patient.birth,
            gender: patient.gender,
            country: patient.country,
            state: patient.state,
            city: patient.city
        });
    }

    getPatients() {
        return new Promise((resolve, reject) => {
            axios.get(`${url}/patientLoad`);      
        });
    }

    editPatient(editedPatientInfo) {
        axios.post(`${url}/patientLoad`, editedPatientInfo);
    }

    deletePatient(patientId) {
        axios.delete(`${url}/patientLoad/${patientId}`);
    }

    deleteComment(commentId) {
        axios.delete(`${url}/commentsLoad/${commentId}`);
    }

    saveComment(commentForDB) {
        axios.post(`${url}/createComment`, commentForDB);
    }
}


