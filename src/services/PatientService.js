import axios from 'axios';

export const url = 'https://vitechtask-default-rtdb.europe-west1.firebasedatabase.app';

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
            }).catch((error) => {
                console.error(error);
            }).then(() => {
                // always executed
            });
    }

    getPatients() {
        axios.get(`${url}/patientLoad.json`)
            .then((response) => {
                const patients = response.data;
            })
            .catch((error) => {
                console.error(error);
            })
            .then(() => {
                // always executed
            });
    }

    editPatient(editedPatientInfo) {
        axios.put(`${url}/patientLoad.json`, editedPatientInfo)
            .catch((error) => {
                console.error(error);
            })
            .then(() => {
                // always executed
            });
    }

    deletePatient(patientID) {
        axios.delete(`${url}/patientLoad/${patientID}`)
            .catch((error) => {
                console.error(error);
            })
            .then(() => {
                // always executed
            });
    }

    saveComment(commentForDatabase) {
        axios.post(`${url}/patientLoad/comment.json`, commentForDatabase)
            .catch((error) => {
                console.error(error);
            })
            .then(() => {
                // always executed
            });
    }
}