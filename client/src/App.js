import React, { Fragment, useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

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
import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
    M.AutoInit();
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
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute exact path='/jobs' component={Jobs} />
              <PrivateRoute exact path='/add-job' component={JobForm} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
