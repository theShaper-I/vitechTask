import axios from 'axios';

const url = 'https://vitechtask-default-rtdb.europe-west1.firebasedatabase.app/';

export default class PatientService {

    savePatient(patient) {
        axios.post(`${url}/patientLoad`, {
            firstname: patient.firstname,
            lastname: patient.lastname,
            age: patient.age,
            birth: patient.birth,
            gender: patient.gender,
            country: patient.country,
            state: patient.state,
            city: patient.city,
            comments: patient.comments
        });
    }

    getPatients() {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:8090/patientLoad')
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
                    };

                    resolve(patients);
                });
        });
    };

    editPatient(editedPatientInfo) {
        axios.post(`${url}/patientLoad`, editedPatientInfo);
    }

    deletePatient(patientId) {
        axios.delete(`${url}/patientLoad/${patientId}`);
    }

    deleteComment(commentId) {
        axios.delete(`${url}/patientLoad/${commentId}`);
    }

    saveComment(commentForDB) {
        axios.post(`${url}/patientLoad`, commentForDB);
    }
}


