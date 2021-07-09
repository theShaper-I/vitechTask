import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContentInfo from './ContentInfo';
import NewPatient from './NewPatient';
import EditPatient from './EditPatient';
import NotFound from './NotFound';

const Content = () => {
    return (
        <div className='content'>
            <Router>
                <Switch>
                    <Route exact path='/' component={ContentInfo} />
                    <Route exact path='/patient/new' component={NewPatient} />
                    <Route exact path='/patient/edit' component={EditPatient} />
                    <Route exact path='/patient/:id' component={ContentInfo}/>
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    )
}

export default Content;