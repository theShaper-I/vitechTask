import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PatientInfo from '../patientInfo/PatientInfo';
import NewPatient from '../newPatient/NewPatient';
import EditPatient from '../editPatient/EditPatient';
import NotFound from '../notFound/NotFound';

const Content = () => {
    return (
        <div className='content'>
            <Router>
                <Switch>
                    <Route exact path='/' component={PatientInfo} />
                    <Route exact path='/patient/new' component={NewPatient} />
                    <Route exact path='/patient/edit' component={EditPatient} />
                    <Route exact path='/patient/:id' component={PatientInfo}/>
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    )
}

export default Content;