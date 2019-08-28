import React, { Fragment, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Auth
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/authActions';

//Redux
import { Provider } from 'react-redux';
import store from './store';

//Components
import NavBar from './components/layout/NavBar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import Jobs from './components/jobs/Jobs';
import JobForm from './components/jobs/JobForm';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/jobs' component={Jobs} />
              <Route exact path='/add-job' component={JobForm} />
              
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
