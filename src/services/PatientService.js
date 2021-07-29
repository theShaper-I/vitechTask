import axios from 'axios';

export const url = 'https://vitechtask-default-rtdb.europe-west1.firebasedatabase.app';

export default class PatientService {

    showPatients(patients) {
        patients.then((response) => {
            const patients = response.data;
            for (let patientID in patients) {
                console.log(patientID);
                console.log(patients[patientID]);
            }
        })
            .catch((error) => {
                console.error(error);
            })
            .then(() => {
                // always executed
            });
    }

    getPromisePatients(url) {
        return axios.get(url);
    }

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
        axios.post(`${url}/patientLoad.json`, editedPatientInfo)
            .catch((error) => {
                console.error(error);
            })
            .then(() => {
                // always executed
            });
    }
}